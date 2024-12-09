import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { InjectiveDirectEthSecp256k1Wallet } from "@injectivelabs/sdk-ts";
/**
 * Used to generate a client wallet by Mnemonic
 */
export default class Wallet {
    name: string;
    key: string;
    prefix?: string | undefined;
    constructor(name: string, key: string, prefix?: string | undefined);
    /**
     * Generates a new wallet from a given mnemonic
     * @param name
     * @param mnemonic
     * @param passphrase
     * @param prefix
     * @returns
     */
    static fromMnemonic(name: string, mnemonic: string, passphrase: string, prefix: string): Promise<Wallet>;
    /**
     * Get wallet associated with the provided mnemonic
     */
    getWallet(passphrase: string): Promise<DirectSecp256k1HdWallet | InjectiveDirectEthSecp256k1Wallet>;
    /**
     * Get all accounts associated with the wallet
     */
    getAccounts(passphrase: string): Promise<readonly import("@cosmjs/proto-signing").AccountData[] | readonly import("@injectivelabs/sdk-ts/dist/cjs/core/accounts/signers/types/proto-signer").AccountData[]>;
    /**
     * Provides the first OfflineSigner object associated with the wallet. Can be used for signing messages.
     */
    getAddress(passphrase: string): Promise<string>;
}
