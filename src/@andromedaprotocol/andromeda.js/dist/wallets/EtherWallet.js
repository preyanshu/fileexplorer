"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Wallet_1 = __importDefault(require("./Wallet"));
const ethers_1 = require("ethers");
const crypto_js_1 = __importDefault(require("crypto-js"));
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
/**
 * Used to generate an Ethereum wallet for use with Injective chain
 */
class EtherWallet extends Wallet_1.default {
    static async fromMnemonic(name, mnemonic, passphrase) {
        // Injective wallets use Ethers wallet for generation
        const wallet = ethers_1.HDNodeWallet.fromPhrase(mnemonic, undefined, sdk_ts_1.DEFAULT_DERIVATION_PATH);
        const key = crypto_js_1.default.AES.encrypt(wallet.privateKey, passphrase).toString();
        return new EtherWallet(name, key, "inj");
    }
    async getWallet(passphrase) {
        const storedKey = crypto_js_1.default.AES.decrypt(this.key, passphrase).toString(crypto_js_1.default.enc.Utf8);
        const privKeyArray = Uint8Array.from(Buffer.from(storedKey.replace("0x", ""), "hex"));
        return await sdk_ts_1.InjectiveDirectEthSecp256k1Wallet.fromKey(privKeyArray);
    }
}
exports.default = EtherWallet;
