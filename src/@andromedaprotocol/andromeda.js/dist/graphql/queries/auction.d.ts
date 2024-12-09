import { ICodegenGeneratedAdoAuctionBidsQueryVariables } from "@andromedaprotocol/gql/__generated/node";
/**
 * Queries all token IDs from an auction contract for a given token ID/token contract address tuple
 * @param contractAddress
 * @param tokenId
 * @param tokenAddress
 * @returns
 */
export declare function queryAuctionIds(contractAddress: string, tokenId: string, tokenAddress: string): Promise<number[]>;
/**
 * Queries auction information from an auction contract about a particular token contract by address
 * @param contractAddress
 * @param tokenAddress
 * @returns
 */
export declare function queryAuctionInfo(contractAddress: string, tokenAddress: string): Promise<{
    __typename?: "AuctionInfosForAddressResponse" | undefined;
    auction_ids: number[];
    token_address: string;
    token_id: string;
}>;
/**
 * Queries auction state from an auction contract given an auction ID
 * @param contractAddress
 * @param auctionId
 * @returns
 */
export declare function queryAuctionState(contractAddress: string, auctionId: number): Promise<{
    __typename?: "AuctionStateResponse" | undefined;
    auction_id: number;
    coin_denom: string;
    end_time: any;
    high_bidder_addr: string;
    high_bidder_amount: number;
    is_cancelled: boolean;
    min_bid: number;
    start_time: any;
    whitelist: string[];
}>;
/**
 * Queries all bids from an auction contract for a given auction ID
 * @param contractAddress
 * @param auctionId
 * @returns
 */
export declare function queryBids(contractAddress: string, auctionId: number, filters: ICodegenGeneratedAdoAuctionBidsQueryVariables['ADO_auction_auction_bids_options']): Promise<{
    __typename?: "Bid" | undefined;
    amount: number;
    bidder: string;
    timestamp: string;
}[]>;
/**
 * Queries an auction contract for the latest auction state for a given token address/id tuple
 * @param contractAddress
 * @param tokenAddress
 * @param tokenId
 * @returns
 */
export declare function queryAuctionLatestState(contractAddress: string, tokenAddress: string, tokenId: string): Promise<{
    __typename?: "AuctionStateResponse" | undefined;
    auction_id: number;
    coin_denom: string;
    end_time: any;
    high_bidder_addr: string;
    high_bidder_amount: number;
    is_cancelled: boolean;
    min_bid: number;
    start_time: any;
    whitelist: string[];
}>;
