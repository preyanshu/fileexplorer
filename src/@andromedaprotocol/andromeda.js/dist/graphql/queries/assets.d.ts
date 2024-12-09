import { IAndrOrderBy } from "@andromedaprotocol/gql/dist/__generated/node";
import { IAdoType } from "@andromedaprotocol/gql";
/**
 * Queries all assets owned by a wallet address
 * @param walletAddress
 * @param limit
 * @param offset
 * @returns
 */
export declare function queryAssets(walletAddress: string, limit: number, offset: number, orderBy?: IAndrOrderBy, search?: string, adoType?: IAdoType): Promise<{
    __typename?: "AssetResult" | undefined;
    address: string;
    adoType: string;
    appContract: string;
    chainId: string;
    disowned: boolean;
    instantiateHash: string;
    instantiateHeight: number;
    instantiateOwner: string;
    kernel: string;
    lastUpdatedHash: string;
    lastUpdatedHeight: number;
    memo: string;
    minter: string;
    name: string;
    owner: string;
    ownershipRequest: string;
}[]>;
