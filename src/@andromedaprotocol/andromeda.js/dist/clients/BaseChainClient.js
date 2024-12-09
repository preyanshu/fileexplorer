"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
/**
 * Helper function to convert JSON to Uint8Array
 * @param json JSON object to convert to Uint8Array
 * @returns
 */
const JsonToArray = function (json) {
    var str = JSON.stringify(json, null, 0);
    var ret = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        ret[i] = str.charCodeAt(i);
    }
    return ret;
};
class BaseChainClient {
    constructor() {
        this.signer = "";
    }
    preMessage(signed = true) {
        if (!this.isConnected)
            throw new Error("Client not connected");
        if (signed &&
            (!this.signer ||
                (typeof this.signer === "string" && this.signer.length === 0)))
            throw new Error("No signing wallet assigned");
    }
    get isConnected() {
        return !(0, lodash_1.isUndefined)(this.queryClient) || !(0, lodash_1.isUndefined)(this.signingClient);
    }
    encodeExecuteMsg(address, msg, funds) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
            value: {
                sender: this.signer,
                contract: address,
                msg: JsonToArray(msg),
                funds,
            },
        };
    }
    encodeInstantiateMsg(codeId, msg, label, options) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
            value: {
                sender: this.signer,
                codeId: BigInt(codeId),
                msg: JsonToArray(msg),
                label,
                'admin': options?.admin,
                'funds': options?.funds
            },
        };
    }
    encodeUploadMessage(wasmByteCode) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
            value: {
                sender: this.signer,
                wasmByteCode,
            },
        };
    }
    encodeMigrateMessage(address, codeId, msg) {
        return {
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
            value: {
                sender: this.signer,
                codeId: BigInt(codeId),
                contract: address,
                msg: JsonToArray(msg),
            },
        };
    }
    encodeSendMessage(receivingAddress, amount) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: {
                fromAddress: this.signer,
                toAddress: receivingAddress,
                amount,
            },
        };
    }
}
exports.default = BaseChainClient;
