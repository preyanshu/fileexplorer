"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const crypto_1 = require("@cosmjs/crypto");
const encoding_1 = require("@cosmjs/encoding");
const logs_1 = require("@cosmjs/stargate/build/logs");
const terra_js_1 = require("@terra-money/terra.js");
const lodash_1 = __importDefault(require("lodash"));
const pako_1 = require("pako");
const BaseChainClient_1 = __importDefault(require("./BaseChainClient"));
function arrayToJson(array) {
    const jsonString = Buffer.from(array).toString("utf8");
    const parsedData = JSON.parse(jsonString);
    return parsedData;
}
function mapObjToEnjClass(type, value) {
    switch (type) {
        case "MsgInstantiateContract":
            return new terra_js_1.MsgInstantiateContract(value.sender, value.sender, value.codeId, arrayToJson(value.msg), value.amount, value.label);
        case "MsgExecuteContract":
            return new terra_js_1.MsgExecuteContract(value.sender, value.contract, arrayToJson(value.msg), value.funds);
        case "MsgMigrateContract":
            return new terra_js_1.MsgMigrateContract(value.sender, value.contract, value.codeId, arrayToJson(value.msg));
        case "MsgSend":
            return new terra_js_1.MsgSend(value.fromAddress, value.toAddress, value.amount);
        case "MsgStoreCode":
        default:
            return new terra_js_1.MsgStoreCode(value.sender, value.wasmByteCode);
    }
}
function encodeObjectToMsgArgs(msgs) {
    return msgs.map((msg) => {
        const type = lodash_1.default.last(msg.typeUrl.split("."));
        return mapObjToEnjClass(type, msg.value);
    });
}
class TerraClient extends BaseChainClient_1.default {
    async connect(endpoint, signer) {
        delete this.signingClient;
        delete this.queryClient;
        this.queryClient = await cosmwasm_stargate_1.CosmWasmClient.connect(endpoint);
        this.signingClient = new terra_js_1.LCDClient({
            URL: "https://pisco-lcd.terra.dev/",
            chainID: "pisco-1",
        }); //TODO: FIX THIS WHEN MOVE TO MAINNET
        if (signer) {
            this.directSigner = signer;
            const [account] = await signer.getAccounts();
            this.signer = account.address;
        }
    }
    async disconnect() {
        delete this.directSigner;
        delete this.signingClient;
        delete this.queryClient;
        this.signer = "";
    }
    async broadcast(tx) {
        const resp = await this.signingClient?.tx.broadcast(tx);
        if (!resp)
            throw new Error("No response when broadcasting Tx");
        const codeIdAttr = (0, logs_1.findAttribute)(resp.logs, "store_code", "code_id");
        return {
            ...resp,
            code: codeIdAttr ? parseInt(codeIdAttr.value, 10) : -1,
            transactionHash: resp.txhash,
            events: lodash_1.default.flatten(resp.logs.map((log) => log.events)),
            gasUsed: BigInt(resp.gas_used),
            gasWanted: BigInt(resp.gas_wanted),
            rawLog: resp.raw_log,
            // This is required but we don't have this
            txIndex: null,
            msgResponses: []
        };
    }
    async createTx(messages, _fee, memo) {
        const details = await this.signingClient?.auth.accountInfo(this.signer);
        if (!details)
            throw new Error(`Could not fetch account info for address ${this.signer}`);
        const tx = await this.signingClient?.tx.create([
            {
                address: this.signer,
                sequenceNumber: details.getSequenceNumber(),
                publicKey: details.getPublicKey(),
            },
        ], {
            msgs: encodeObjectToMsgArgs(messages),
            memo,
        });
        if (!tx)
            throw new Error("Failed to create Tx data");
        return tx;
    }
    async signAndBroadcast(messages, fee, memo) {
        const tx = await this.createTx(messages, fee, memo);
        return this.broadcast(tx);
    }
    async sign(messages, fee, memo) {
        const tx = await this.createTx(messages, fee, memo);
        return {
            bodyBytes: tx.body.toBytes(),
            authInfoBytes: tx.auth_info.toBytes(),
            signatures: tx.signatures.map((str) => Uint8Array.from(Buffer.from(str))), //TODO: THIS MAY NOT WORK?
        };
    }
    async simulate(message, fee, memo) {
        const tx = await this.createTx([message], fee, memo);
        const resp = await this.signingClient?.tx.estimateGas(tx);
        return resp ?? -1;
    }
    async simulateMulti(messages, fee, memo) {
        const tx = await this.createTx([...messages], fee, memo);
        const resp = await this.signingClient?.tx.estimateGas(tx);
        return resp ?? -1;
    }
    async execute(contractAddress, msg, fee, memo, funds) {
        const message = this.encodeExecuteMsg(contractAddress, msg, [
            ...(funds ?? []),
        ]);
        return this.signAndBroadcast([message], fee, memo);
    }
    async simulateExecute(address, msg, funds, fee, memo) {
        const message = this.encodeExecuteMsg(address, msg, funds);
        return this.simulate(message, fee, memo);
    }
    async upload(code, fee, memo) {
        const compressed = (0, pako_1.gzip)(code, { level: 9 });
        const message = this.encodeUploadMessage(compressed);
        const resp = await this.signAndBroadcast([message], fee, memo);
        // const originalChecksum = toHex(sha256(code));
        const compressedChecksum = (0, encoding_1.toHex)((0, crypto_1.sha256)(compressed));
        return {
            ...resp,
            codeId: resp.code,
            originalSize: code.length,
            compressedSize: compressed.length,
            checksum: compressedChecksum
        };
    }
    async simulateUpload(code, fee, memo) {
        const compressed = (0, pako_1.gzip)(code, { level: 9 });
        const message = this.encodeUploadMessage(compressed);
        return this.simulate(message, fee, memo);
    }
    async instantiate(codeId, msg, label, fee, options) {
        const message = this.encodeInstantiateMsg(codeId, msg, label);
        const resp = await this.signAndBroadcast([message], fee, options ? options.memo : "");
        const contractAddressAttr = (0, logs_1.findAttribute)(resp.logs, "wasm", "_contract_address");
        return {
            ...resp,
            contractAddress: contractAddressAttr.value,
        };
    }
    async simulateInstantiate(codeId, msg, label, fee, options) {
        const message = this.encodeInstantiateMsg(codeId, msg, label);
        return this.simulate(message, fee, options?.memo);
    }
    async migrate(contractAddress, codeId, msg, fee, memo) {
        const message = this.encodeMigrateMessage(contractAddress, codeId, msg);
        const resp = await this.signAndBroadcast([message], fee, memo);
        return resp;
    }
    async simulateMigrate(contractAddress, codeId, msg, fee, memo) {
        const message = this.encodeMigrateMessage(contractAddress, codeId, msg);
        return this.simulate(message, fee, memo);
    }
    async sendTokens(receivingAddress, amount, fee, memo) {
        const message = this.encodeSendMessage(receivingAddress, [...amount]);
        return this.signAndBroadcast([message], fee, memo);
    }
}
exports.default = TerraClient;
