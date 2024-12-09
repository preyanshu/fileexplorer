"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const utils_1 = require("@injectivelabs/utils");
const BaseChainClient_1 = __importDefault(require("./BaseChainClient"));
const SigningStargateClient_1 = require("@injectivelabs/sdk-ts/dist/cjs/core/stargate/SigningStargateClient");
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const pako_1 = require("pako");
const crypto_1 = require("@cosmjs/crypto");
const encoding_1 = require("@cosmjs/encoding");
const logs_1 = require("@cosmjs/stargate/build/logs");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
class InjectiveClient extends BaseChainClient_1.default {
    preMessage(signed = true) {
        super.preMessage(signed);
        if (signed && !this.directSigner) {
            throw new Error("No signer assigned");
        }
    }
    async connect(endpoint, signer, options) {
        delete this.signingClient;
        delete this.queryClient;
        this.queryClient = await cosmwasm_stargate_1.CosmWasmClient.connect(endpoint);
        this.gasPrice = options?.gasPrice || stargate_1.GasPrice.fromString(utils_1.DEFAULT_GAS_PRICE + utils_1.DEFAULT_FEE_DENOM);
        if (signer) {
            const tmClient = await tendermint_rpc_1.Tendermint37Client.connect(endpoint);
            this.signingClient = await sdk_ts_1.InjectiveStargate.InjectiveSigningStargateClient.createWithSigner(tmClient, signer, {
                registry: options?.registry || new proto_signing_1.Registry([...stargate_1.defaultRegistryTypes, ...cosmwasm_stargate_1.wasmTypes]),
                aminoTypes: options?.aminoTypes || new stargate_1.AminoTypes({ ...(0, SigningStargateClient_1.createDefaultAminoConverters)() }),
                gasPrice: this.gasPrice
            });
            this.directSigner = signer;
            const [account] = await signer.getAccounts();
            this.signer = account.address;
        }
    }
    async disconnect() {
        delete this.signingClient;
        this.queryClient?.disconnect();
        delete this.queryClient;
        this.signer = "";
        delete this.directSigner;
        delete this.gasPrice;
    }
    async sign(messages, fee, memo) {
        this.preMessage(true);
        return await this.signingClient.sign(this.signer, messages, fee || utils_1.DEFAULT_STD_FEE, memo || "");
    }
    async broadcast(tx) {
        this.preMessage(true);
        const txBytes = tx_1.TxRaw.encode(tx).finish();
        return await this.signingClient.broadcastTx(txBytes);
    }
    async signAndBroadcast(messages, fee, memo) {
        this.preMessage(true);
        const res = await this.signingClient.signAndBroadcast(this.signer, messages, fee || utils_1.DEFAULT_STD_FEE, memo);
        return {
            ...res,
            logs: JSON.parse(res.rawLog ?? '[]')
        };
    }
    async simulateMulti(messages, _fee = "auto", memo) {
        this.preMessage();
        return this.signingClient.simulate(this.signer, messages, memo);
    }
    async simulate(message, _fee, memo) {
        this.preMessage();
        return this.signingClient.simulate(this.signer, [message], memo);
    }
    async execute(contractAddress, msg, fee, memo, funds) {
        this.preMessage(true);
        const encoded = this.encodeExecuteMsg(contractAddress, msg, [...funds || []]);
        const res = await this.signAndBroadcast([encoded], fee, memo);
        return {
            ...res,
            logs: []
        };
    }
    async simulateExecute(address, msg, funds, _fee, memo) {
        const message = this.encodeExecuteMsg(address, msg, funds);
        return this.simulate(message, undefined, memo);
    }
    async upload(code, fee = "auto", memo) {
        this.preMessage();
        const compressed = (0, pako_1.gzip)(code, { level: 9 });
        const encoded = this.encodeUploadMessage(compressed);
        const res = await this.signAndBroadcast([encoded], fee, memo);
        const compressedChecksum = (0, encoding_1.toHex)((0, crypto_1.sha256)(compressed));
        const codeIdAttr = (0, logs_1.findAttribute)([{ msg_index: 0, 'log': '', events: res.events }], "cosmwasm.wasm.v1.EventCodeStored", "code_id");
        let codeId = -1;
        try {
            codeId = parseInt(JSON.parse(codeIdAttr.value));
        }
        catch (err) { }
        return {
            ...res,
            originalSize: code.length,
            compressedSize: compressed.length,
            checksum: compressedChecksum,
            codeId: codeId,
            logs: []
        };
    }
    async simulateUpload(code, _fee, memo) {
        const message = this.encodeUploadMessage(code);
        return this.simulate(message, undefined, memo);
    }
    async instantiate(codeId, msg, label, fee = "auto", options) {
        this.preMessage(true);
        const encoded = this.encodeInstantiateMsg(codeId, msg, label, options);
        const res = await this.signAndBroadcast([encoded], fee, "Instantiate");
        const contractAddressAttr = (0, logs_1.findAttribute)(res.logs, "wasm", "_contract_address");
        return {
            ...res,
            contractAddress: contractAddressAttr.value,
        };
    }
    async simulateInstantiate(codeId, msg, label, fee, options) {
        const message = this.encodeInstantiateMsg(codeId, msg, label);
        return this.simulate(message, fee, options?.memo);
    }
    async migrate(contractAddress, codeId, msg, fee = "auto", memo) {
        this.preMessage(true);
        const encoded = this.encodeMigrateMessage(contractAddress, codeId, msg);
        return this.signAndBroadcast([encoded], fee, memo);
    }
    async simulateMigrate(contractAddress, codeId, msg, fee, memo) {
        const message = this.encodeMigrateMessage(contractAddress, codeId, msg);
        return this.simulate(message, fee, memo);
    }
    async sendTokens(receivingAddress, amount, fee = "auto", memo) {
        return this.signingClient?.sendTokens(this.signer, receivingAddress, amount, fee, memo);
    }
}
exports.default = InjectiveClient;
