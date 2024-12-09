import { DecodedTxRaw } from "@cosmjs/proto-signing";
import { IndexedTx } from "@cosmjs/stargate";
import { Log } from "@cosmjs/stargate/build/logs";
import { ITxEventAttribute } from "@andromedaprotocol/gql";
import { ITxInfoFragment } from "@andromedaprotocol/gql/dist/__generated/node";
export declare const andrEventKeys: string[];
export interface CleanedTx extends Omit<ITxInfoFragment, "rawLog" | "tx" | "txLog" | "gasUsed" | "gasWanted"> {
    rawLog: readonly Log[];
    tx: DecodedTxRaw;
    adoType?: string;
    gasUsed: bigint | number;
    gasWanted: bigint | number;
}
export declare function cleanTx(tx: ITxInfoFragment | IndexedTx): CleanedTx;
export declare function getAdoType(logs: readonly Log[]): string | undefined;
export declare function getAttribute(field: string, logs: readonly Log[]): ITxEventAttribute[];
/**
 * Queries all transactions for a given account
 * @param chainId
 * @param address
 * @param minHeight
 * @param maxHeight
 * @returns
 */
export declare function queryTxByAccount(chainId: string, address: string, minHeight?: number, maxHeight?: number): Promise<{
    __typename?: "TxInfo" | undefined;
    code: number;
    gasUsed: number;
    gasWanted: number;
    hash: string;
    height: number;
    rawLog: string;
    tx: any;
}[]>;
/**
 * Queries all transactions for a given contract address
 * @param chainId
 * @param contractAddress
 * @param minHeight
 * @param maxHeight
 * @returns
 */
export declare function queryTxByContract(chainId: string, contractAddress: string, minHeight?: number, maxHeight?: number): Promise<{
    __typename?: "TxInfo" | undefined;
    code: number;
    gasUsed: number;
    gasWanted: number;
    hash: string;
    height: number;
    rawLog: string;
    tx: any;
}[]>;
/**
 * Queries all transactions for a given height
 * @param height
 * @returns
 */
export declare function queryTxByHeight(chainId: string, height: number): Promise<{
    __typename?: "TxInfo" | undefined;
    code: number;
    gasUsed: number;
    gasWanted: number;
    hash: string;
    height: number;
    rawLog: string;
    tx: any;
}[]>;
/**
 * Queries a transaction by tx hash
 * @param chainId
 * @param hash
 * @returns
 */
export declare function queryTxByHash(chainId: string, hash: string): Promise<{
    __typename?: "TxInfo" | undefined;
    code: number;
    gasUsed: number;
    gasWanted: number;
    hash: string;
    height: number;
    rawLog: string;
    tx: any;
}>;
export interface QueryAssets {
    walletAddress: string;
    limit: number;
    offset: number;
}
export interface QueryAssetsResponse {
    assets: {
        address: string;
        adoType: string;
        name?: string;
        appContract?: string;
        chainId: string;
        instantiateHash: string;
        instantiateHeight: number;
        lastUpdatedHash: string;
        lastUpdatedHeight: number;
        owner: string;
    }[];
}
