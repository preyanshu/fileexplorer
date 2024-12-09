import { IAndrSearchOptions } from "@andromedaprotocol/gql/dist/__generated/node";
/**
 * Queries a CW721 contract for all info for a given token ID
 * @param contractAddress
 * @param tokenId
 * @param includeExpired
 * @returns
 */
export declare function queryAllNFTInfo(contractAddress: string, tokenId: string, includeExpired?: boolean): Promise<{
    __typename?: "AllNftInfo" | undefined;
    access: {
        __typename?: "NftOwnerInfo" | undefined;
        owner: string;
        approvals: {
            __typename?: "NftApproval" | undefined;
            expires: any;
            spender: string;
        }[];
    };
    info: {
        __typename?: "NftInfo" | undefined;
        tokenId: string;
        token_uri: string;
        extension: {
            __typename?: "TokenExtension" | undefined;
            publisher: string;
        };
        metadata: {
            __typename?: "NFTMetadata" | undefined;
            animation_url: string;
            background_color: string;
            description: string;
            external_url: string;
            image: string;
            image_data: string;
            name: string;
            youtube_url: string;
            attributes: {
                __typename?: "MetadataAttribute" | undefined;
                display_type: string;
                trait_type: string;
                value: string;
            }[];
        };
    };
}>;
/**
 * Queries a CW721 contract for all approved operators for a given token owner
 * @param contractAddress
 * @param owner
 * @param includeExpired
 * @param options
 * @returns
 */
export declare function queryAllOperators(contractAddress: string, owner: string, includeExpired?: boolean, options?: IAndrSearchOptions): Promise<{
    __typename?: "NftApproval" | undefined;
    expires: any;
    spender: string;
}[]>;
/**
 * Queries a CW721 contract for all tokens
 * @param contractAddress
 * @param options
 * @returns
 */
export declare function queryAllTokens(contractAddress: string, options?: IAndrSearchOptions): Promise<string[]>;
/**
 * Queries a CW721 contract for whether a given address is an assigned operator for a given token
 * @param contractAddress
 * @param spender
 * @param tokenId
 * @param includeExpired
 * @returns
 */
export declare function queryApproval(contractAddress: string, spender: string, tokenId: string, includeExpired?: boolean): Promise<{
    __typename?: "NftApproval" | undefined;
    expires: any;
    spender: string;
}>;
/**
 * Queries a CW721 contract for all approvals for a given token ID
 * @param contractAddress
 * @param tokenId
 * @param includeExpired
 * @returns
 */
export declare function queryApprovals(contractAddress: string, tokenId: string, includeExpired?: boolean): Promise<{
    __typename?: "NftApproval" | undefined;
    expires: any;
    spender: string;
}[]>;
/**
 * Queries a CW721 contract for its contract info
 * @param contractAddress
 * @returns
 */
export declare function queryContractInfo(contractAddress: string): Promise<{
    __typename?: "NftContractInfo" | undefined;
    name: string;
    symbol: string;
}>;
/**
 * Queries a CW721 contract whether a given token ID is archived
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export declare function queryIsArchived(contractAddress: string, tokenId: string): Promise<boolean>;
/**
 * Queries a CW721 contract for a given token IDs NFT info
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export declare function queryNFTInfo(contractAddress: string, tokenId: string): Promise<{
    __typename?: "NftInfo" | undefined;
    tokenId: string;
    token_uri: string;
    extension: {
        __typename?: "TokenExtension" | undefined;
        publisher: string;
    };
    metadata: {
        __typename?: "NFTMetadata" | undefined;
        animation_url: string;
        background_color: string;
        description: string;
        external_url: string;
        image: string;
        image_data: string;
        name: string;
        youtube_url: string;
        attributes: {
            __typename?: "MetadataAttribute" | undefined;
            display_type: string;
            trait_type: string;
            value: string;
        }[];
    };
}>;
/**
 * Queries a CW721 contract for the owner of a given token ID
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export declare function queryOwnerOf(contractAddress: string, tokenId: string, includeExpired?: boolean): Promise<string>;
/**
 * Queries a CW721 contract for all tokens owned by a given address
 * @param contractAddress
 * @param owner
 * @param options
 * @returns
 */
export declare function queryTokens(contractAddress: string, owner: string, options?: IAndrSearchOptions): Promise<string[]>;
/**
 * Queries a CW721 contract for the transfer agreement for a given token ID
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export declare function queryTransferAgreement(contractAddress: string, tokenId: string): Promise<{
    __typename?: "TransferAgreement" | undefined;
    tokenId: string;
    agreement: {
        __typename?: "Agreement" | undefined;
        purchaser: string;
        amount: {
            __typename?: "AgreementAmount" | undefined;
            raw: {
                __typename?: "Coin" | undefined;
                amount: string;
                denom: string;
            };
        };
    };
}>;
