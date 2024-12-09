import Wallet from "./Wallet";
import { InjectiveDirectEthSecp256k1Wallet } from "@injectivelabs/sdk-ts";
/**
 * Used to generate an Ethereum wallet for use with Injective chain
 */
export default class EtherWallet extends Wallet {
    static fromMnemonic(name: string, mnemonic: string, passphrase: string): Promise<Wallet>;
    getWallet(passphrase: string): Promise<InjectiveDirectEthSecp256k1Wallet>;
}
