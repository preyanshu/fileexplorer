/**
 * Queries all available token IDs from a crowdfund contract
 * @param contractAddress
 * @returns
 */
export declare function queryCrowdfundAvailableTokens(contractAddress: string): Promise<string[]>;
/**
 * Queries the config for a given crowdfund contract
 * @param contractAddress
 * @returns
 */
export declare function queryCrowdfundConfig(contractAddress: string): Promise<{
    __typename?: "CrowdfundConfig" | undefined;
    can_mint_after_sale: boolean;
    token_address: string;
}>;
export declare function queryCrowdfundTokenAvailable(contractAddress: string, tokenId: string): Promise<boolean>;
/**
 * Queries the current crowdfund state
 * @param contractAddress
 * @returns
 */
export declare function queryCrowdfundState(contractAddress: string): Promise<{
    __typename?: "CrowdfundState" | undefined;
    amount_sold: number;
    amount_to_send: number;
    amount_transferred: number;
    end_time: any;
    max_amount_per_wallet: number;
    min_tokens_sold: number;
    price: {
        __typename?: "Coin" | undefined;
        amount: string;
        denom: string;
    };
    recipient: {
        __typename?: "CrowdfundRecipient" | undefined;
        address: string;
        ibc_recovery_address: string;
        msg: any;
    };
}>;
