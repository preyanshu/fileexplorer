import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: {
        input: any;
        output: any;
    };
};
export type IAdoAddedSubscriptionInput = {
    owner: Scalars['String']['input'];
};
export type IAdoInput = {
    address: Scalars['String']['input'];
    adoType: Scalars['String']['input'];
    appContract?: InputMaybe<Scalars['String']['input']>;
    chainId: Scalars['String']['input'];
    instantiateHash: Scalars['String']['input'];
    instantiateHeight: Scalars['Int']['input'];
    lastUpdatedHash: Scalars['String']['input'];
    lastUpdatedHeight: Scalars['Int']['input'];
    minter?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    owner: Scalars['String']['input'];
};
export type IAdoOwnerUpdatedSubscriptionInput = {
    owner: Scalars['String']['input'];
};
export declare enum IAdoType {
    ADDRESSLIST = "AddressList",
    ADO = "Ado",
    APP = "App",
    AUCTION = "Auction",
    CW20 = "CW20",
    CW20EXCHANGE = "CW20Exchange",
    CW20STAKING = "CW20Staking",
    CW721 = "CW721",
    CW721BIDS = "CW721Bids",
    CW721TIMELOCK = "CW721Timelock",
    CROWDFUND = "Crowdfund",
    FACTORY = "Factory",
    GUMBALL = "Gumball",
    LOCKDROP = "Lockdrop",
    MARKETPLACE = "Marketplace",
    MERKLEAIRDROP = "MerkleAirdrop",
    NFTSTAKING = "NftStaking",
    PRIMITIVE = "Primitive",
    RATELIMITINGWITHDRAWALS = "RateLimitingWithdrawals",
    RATES = "Rates",
    RECEIPT = "Receipt",
    SPLITTER = "Splitter",
    TIMELOCK = "Timelock",
    UNKNOWN = "Unknown",
    VAULT = "Vault",
    VESTING = "Vesting",
    WEIGHTEDDISTRIBUTIONSPLITTER = "WeightedDistributionSplitter",
    WEIGHTEDSPLITTER = "WeightedSplitter",
    WRAPPEDCW721 = "WrappedCW721"
}
export declare enum IAndrOrderBy {
    ASC = "Asc",
    DESC = "Desc"
}
export type IAndrSearchOptions = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<IAndrOrderBy>;
    startAfter?: InputMaybe<Scalars['String']['input']>;
};
export declare enum IAndrStrategyType {
    ANCHOR = "Anchor"
}
export type ISearchAttribute = {
    trait_type?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};
export type IUpdateAdoOwnerInput = {
    address: Scalars['String']['input'];
    newOwner: Scalars['String']['input'];
    txHeight: Scalars['Int']['input'];
};
export type IAddressListContainsAddressQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
    address: Scalars['String']['input'];
}>;
export type IAddressListContainsAddressQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        address_list: {
            __typename?: 'AddressListAdo';
            includesAddress: {
                __typename?: 'AddressListResponse';
                included: boolean;
            };
        };
    };
};
export type IAppConfigQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type IAppConfigQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        app: {
            __typename?: 'AppAdo';
            address: string;
            config: {
                __typename?: 'AppConfig';
                name: string;
                owner: string;
            };
        };
    };
};
export type IAppComponentsQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type IAppComponentsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        app: {
            __typename?: 'AppAdo';
            address: string;
            components: Array<{
                __typename?: 'AppComponent';
                address: string;
                ado_type: string;
                instantiate_msg: any;
                name: string;
                type: string;
            }>;
        };
    };
};
export type IAppConfigAndComponentsQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type IAppConfigAndComponentsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        app: {
            __typename?: 'AppAdo';
            address: string;
            config: {
                __typename?: 'AppConfig';
                name: string;
                owner: string;
            };
            components: Array<{
                __typename?: 'AppComponent';
                address: string;
                ado_type: string;
                instantiate_msg: any;
                name: string;
                type: string;
            }>;
        };
    };
};
export type IAssetsQueryVariables = Exact<{
    walletAddress: Scalars['String']['input'];
    adoType?: InputMaybe<Scalars['String']['input']>;
    appContract?: InputMaybe<Scalars['String']['input']>;
    instantiateOwner?: InputMaybe<Scalars['String']['input']>;
    kernel?: InputMaybe<Scalars['String']['input']>;
    limit: Scalars['Int']['input'];
    memo?: InputMaybe<Scalars['String']['input']>;
    offset: Scalars['Int']['input'];
    orderBy?: InputMaybe<IAndrOrderBy>;
    owner?: InputMaybe<Scalars['String']['input']>;
    ownershipRequest?: InputMaybe<Scalars['String']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
}>;
export type IAssetsQuery = {
    __typename?: 'Query';
    accounts: {
        __typename?: 'AccountsQuery';
        assets: Array<{
            __typename?: 'AssetResult';
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
        }>;
    };
};
export type IBaseAdoQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type IBaseAdoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        ado: {
            __typename?: 'BaseAdo';
            address: string;
            chainId: string;
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type IMiniBaseAdoQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type IMiniBaseAdoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        ado: {
            __typename?: 'BaseAdo';
            address: string;
            chainId: string;
            andr: {
                __typename?: 'AndrQuery';
                type: string;
                version: string;
            };
        };
    };
};
export type ICrowdfundAvailableTokensQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type ICrowdfundAvailableTokensQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            availableTokens: Array<string>;
        };
    };
};
export type ICrowdfundIsTokenAvailableQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
    tokenId: Scalars['String']['input'];
}>;
export type ICrowdfundIsTokenAvailableQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            isTokenAvailable: boolean;
        };
    };
};
export type ICrowdfundConfigQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type ICrowdfundConfigQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            address: string;
            config: {
                __typename?: 'CrowdfundConfig';
                can_mint_after_sale: boolean;
                token_address: string;
            };
        };
    };
};
export type ICrowdfundStateQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type ICrowdfundStateQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            state: {
                __typename?: 'CrowdfundState';
                amount_sold: number;
                amount_to_send: number;
                amount_transferred: number;
                end_time: any;
                max_amount_per_wallet: number;
                min_tokens_sold: number;
                price: {
                    __typename?: 'Coin';
                    amount: string;
                    denom: string;
                };
                recipient: {
                    __typename?: 'CrowdfundRecipient';
                    address: string;
                    ibc_recovery_address: string;
                    msg: any;
                };
            };
        };
    };
};
export type ICw20TokenInfoQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type ICw20TokenInfoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            address: string;
            tokenInfo: {
                __typename?: 'TokenInfo';
                decimals: number;
                name: string;
                symbol: string;
                total_supply: number;
            };
        };
    };
};
export type ICw20QueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type ICw20Query = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            address: string;
            marketingInfo: {
                __typename?: 'MarketingInfo';
                description: string;
                logo: any;
                marketing: string;
                project: string;
            };
            minter: {
                __typename?: 'Minter';
                cap: number;
                minter: string;
            };
        };
    };
};
export type ICw721InfoQueryVariables = Exact<{
    contractAddress: Scalars['String']['input'];
}>;
export type ICw721InfoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            address: string;
            minter: string;
            numTokens: number;
            contractInfo: {
                __typename?: 'NftContractInfo';
                name: string;
                symbol: string;
            };
        };
    };
};
export type IAndrFragmentFragment = {
    __typename?: 'AndrQuery';
    address: string;
    admin: string;
    appContract: string;
    blockHeightUponCreation: number;
    codeId: number;
    creator: string;
    ibcPortId: string;
    kernelAddress: string;
    label: string;
    originalPublisher: string;
    owner: string;
    ownershipRequest: any;
    permissionedActions: Array<string>;
    type: string;
    version: string;
};
export type IAndrFragmentFragmentVariables = Exact<{
    [key: string]: never;
}>;
export type IComponentFragment = {
    __typename?: 'Component';
    address: string;
    ado_type: string;
    instantiate_msg: string;
    name: string;
};
export type IComponentFragmentVariables = Exact<{
    [key: string]: never;
}>;
export type IAppComponentFragment = {
    __typename?: 'AppComponent';
    address: string;
    ado_type: string;
    instantiate_msg: any;
    name: string;
    type: string;
};
export type IAppComponentFragmentVariables = Exact<{
    [key: string]: never;
}>;
export type IChainConfigQueryVariables = Exact<{
    identifier: Scalars['String']['input'];
}>;
export type IChainConfigQuery = {
    __typename?: 'Query';
    chainConfigs: {
        __typename?: 'ChainConfigQuery';
        config: {
            __typename?: 'ChainConfig';
            addressPrefix: string;
            blockExplorerTxPages: Array<string>;
            blockExplorerAddressPages: Array<string>;
            chainId: string;
            chainUrl: string;
            chainName: string;
            chainType: string;
            defaultFee: string;
            kernelAddress: string;
            name: string;
            registryAddress: string;
            enabled: boolean;
            iconUrls: {
                __typename?: 'IconUrl';
                sm: string;
                lg: string;
            };
        };
    };
};
export type IAllChainConfigQueryVariables = Exact<{
    [key: string]: never;
}>;
export type IAllChainConfigQuery = {
    __typename?: 'Query';
    chainConfigs: {
        __typename?: 'ChainConfigQuery';
        allConfigs: Array<{
            __typename?: 'ChainConfig';
            addressPrefix: string;
            blockExplorerTxPages: Array<string>;
            blockExplorerAddressPages: Array<string>;
            chainId: string;
            chainUrl: string;
            chainName: string;
            chainType: string;
            defaultFee: string;
            kernelAddress: string;
            name: string;
            registryAddress: string;
            enabled: boolean;
            iconUrls: {
                __typename?: 'IconUrl';
                sm: string;
                lg: string;
            };
        }>;
    };
};
export type IAllStoredChainConfigQueryVariables = Exact<{
    [key: string]: never;
}>;
export type IAllStoredChainConfigQuery = {
    __typename?: 'Query';
    chainConfigs: {
        __typename?: 'ChainConfigQuery';
        allStoredConfigs: Array<{
            __typename?: 'ChainConfig';
            addressPrefix: string;
            blockExplorerTxPages: Array<string>;
            blockExplorerAddressPages: Array<string>;
            chainId: string;
            chainUrl: string;
            chainName: string;
            chainType: string;
            defaultFee: string;
            kernelAddress: string;
            name: string;
            registryAddress: string;
            enabled: boolean;
            iconUrls: {
                __typename?: 'IconUrl';
                sm: string;
                lg: string;
            };
        }>;
    };
};
export type IKeplrConfigFragment = {
    __typename?: 'KeplrConfig';
    chainId: string;
    coinType: number;
    chainName: string;
    rpc: string;
    rest: string;
    bip44: {
        __typename?: 'Bip44';
        coinType: number;
    };
    bech32Config: {
        __typename?: 'Bech32Config';
        bech32PrefixAccPub: string;
        bech32PrefixValPub: string;
        bech32PrefixAccAddr: string;
        bech32PrefixConsPub: string;
        bech32PrefixValAddr: string;
        bech32PrefixConsAddr: string;
    };
    currencies: Array<{
        __typename?: 'Currency';
        coinDenom: string;
        coinGeckoId: string;
        coinDecimals: number;
        coinMinimalDenom: string;
    }>;
    feeCurrencies: Array<{
        __typename?: 'Currency';
        coinDenom: string;
        coinGeckoId: string;
        coinDecimals: number;
        coinMinimalDenom: string;
    }>;
    gasPriceStep: {
        __typename?: 'GasPriceStep';
        average: number;
        low: number;
        high: number;
    };
    stakeCurrency: {
        __typename?: 'Currency';
        coinDenom: string;
        coinGeckoId: string;
        coinDecimals: number;
        coinMinimalDenom: string;
    };
};
export type IKeplrConfigFragmentVariables = Exact<{
    [key: string]: never;
}>;
export type ICurrencyFragment = {
    __typename?: 'Currency';
    coinDenom: string;
    coinGeckoId: string;
    coinDecimals: number;
    coinMinimalDenom: string;
};
export type ICurrencyFragmentVariables = Exact<{
    [key: string]: never;
}>;
export type IBech32configFragment = {
    __typename?: 'Bech32Config';
    bech32PrefixAccPub: string;
    bech32PrefixValPub: string;
    bech32PrefixAccAddr: string;
    bech32PrefixConsPub: string;
    bech32PrefixValAddr: string;
    bech32PrefixConsAddr: string;
};
export type IBech32configFragmentVariables = Exact<{
    [key: string]: never;
}>;
export type IChainConfigFragment = {
    __typename?: 'ChainConfig';
    addressPrefix: string;
    blockExplorerTxPages: Array<string>;
    blockExplorerAddressPages: Array<string>;
    chainId: string;
    chainUrl: string;
    chainName: string;
    chainType: string;
    defaultFee: string;
    kernelAddress: string;
    name: string;
    registryAddress: string;
    enabled: boolean;
    iconUrls: {
        __typename?: 'IconUrl';
        sm: string;
        lg: string;
    };
};
export type IChainConfigFragmentVariables = Exact<{
    [key: string]: never;
}>;
export type IKeplrConfigQueryVariables = Exact<{
    identifier: Scalars['String']['input'];
}>;
export type IKeplrConfigQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        config: {
            __typename?: 'KeplrConfig';
            chainId: string;
            coinType: number;
            chainName: string;
            rpc: string;
            rest: string;
            bip44: {
                __typename?: 'Bip44';
                coinType: number;
            };
            bech32Config: {
                __typename?: 'Bech32Config';
                bech32PrefixAccPub: string;
                bech32PrefixValPub: string;
                bech32PrefixAccAddr: string;
                bech32PrefixConsPub: string;
                bech32PrefixValAddr: string;
                bech32PrefixConsAddr: string;
            };
            currencies: Array<{
                __typename?: 'Currency';
                coinDenom: string;
                coinGeckoId: string;
                coinDecimals: number;
                coinMinimalDenom: string;
            }>;
            feeCurrencies: Array<{
                __typename?: 'Currency';
                coinDenom: string;
                coinGeckoId: string;
                coinDecimals: number;
                coinMinimalDenom: string;
            }>;
            gasPriceStep: {
                __typename?: 'GasPriceStep';
                average: number;
                low: number;
                high: number;
            };
            stakeCurrency: {
                __typename?: 'Currency';
                coinDenom: string;
                coinGeckoId: string;
                coinDecimals: number;
                coinMinimalDenom: string;
            };
        };
    };
};
export type IAllKeplrConfigQueryVariables = Exact<{
    [key: string]: never;
}>;
export type IAllKeplrConfigQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        allConfigs: Array<{
            __typename?: 'KeplrConfig';
            chainId: string;
            coinType: number;
            chainName: string;
            rpc: string;
            rest: string;
            bip44: {
                __typename?: 'Bip44';
                coinType: number;
            };
            bech32Config: {
                __typename?: 'Bech32Config';
                bech32PrefixAccPub: string;
                bech32PrefixValPub: string;
                bech32PrefixAccAddr: string;
                bech32PrefixConsPub: string;
                bech32PrefixValAddr: string;
                bech32PrefixConsAddr: string;
            };
            currencies: Array<{
                __typename?: 'Currency';
                coinDenom: string;
                coinGeckoId: string;
                coinDecimals: number;
                coinMinimalDenom: string;
            }>;
            feeCurrencies: Array<{
                __typename?: 'Currency';
                coinDenom: string;
                coinGeckoId: string;
                coinDecimals: number;
                coinMinimalDenom: string;
            }>;
            gasPriceStep: {
                __typename?: 'GasPriceStep';
                average: number;
                low: number;
                high: number;
            };
            stakeCurrency: {
                __typename?: 'Currency';
                coinDenom: string;
                coinGeckoId: string;
                coinDecimals: number;
                coinMinimalDenom: string;
            };
        }>;
    };
};
export type ICodegenGeneratedAdoAddressListAndrQueryVariables = Exact<{
    ADO_address_list_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAddressListAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        address_list: {
            __typename?: 'AddressListAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables = Exact<{
    ADO_address_list_address: Scalars['String']['input'];
    ADO_address_list_address_list_includesAddress_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAddressListIncludesaddressQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        address_list: {
            __typename?: 'AddressListAdo';
            includesAddress: {
                __typename?: 'AddressListResponse';
                included: boolean;
            };
        };
    };
};
export type ICodegenGeneratedAdoAddressListQueryVariables = Exact<{
    ADO_address_list_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAddressListQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        address_list: {
            __typename?: 'AddressListAdo';
            address: string;
            chainId: string;
        };
    };
};
export type ICodegenGeneratedAdoAdoAndrQueryVariables = Exact<{
    ADO_ado_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAdoAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        ado: {
            __typename?: 'BaseAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoAdoQueryVariables = Exact<{
    ADO_ado_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAdoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        ado: {
            __typename?: 'BaseAdo';
            address: string;
            chainId: string;
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoAdosmartQueryVariables = Exact<{
    ADO_adoSmart_address: Scalars['String']['input'];
    ADO_adoSmart_query: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAdosmartQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        adoSmart: {
            __typename?: 'AdoSmartResponse';
            address: string;
            adoType: string;
            query: string;
            queryResult: any;
        };
    };
};
export type ICodegenGeneratedAdoAppAddressesQueryVariables = Exact<{
    ADO_app_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAppAddressesQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        app: {
            __typename?: 'AppAdo';
            addresses: Array<{
                __typename?: 'AppComponentAddress';
                address: string;
                name: string;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoAppAndrQueryVariables = Exact<{
    ADO_app_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAppAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        app: {
            __typename?: 'AppAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoAppComponentexistsQueryVariables = Exact<{
    ADO_app_address: Scalars['String']['input'];
    ADO_app_app_componentExists_name: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAppComponentexistsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        app: {
            __typename?: 'AppAdo';
            componentExists: boolean;
        };
    };
};
export type ICodegenGeneratedAdoAppComponentsQueryVariables = Exact<{
    ADO_app_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAppComponentsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        app: {
            __typename?: 'AppAdo';
            components: Array<{
                __typename?: 'AppComponent';
                address: string;
                ado_type: string;
                instantiate_msg: any;
                name: string;
                type: string;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoAppConfigQueryVariables = Exact<{
    ADO_app_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAppConfigQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        app: {
            __typename?: 'AppAdo';
            config: {
                __typename?: 'AppConfig';
                name: string;
                owner: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoAppGetaddressQueryVariables = Exact<{
    ADO_app_address: Scalars['String']['input'];
    ADO_app_app_getAddress_name: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAppGetaddressQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        app: {
            __typename?: 'AppAdo';
            getAddress: string;
        };
    };
};
export type ICodegenGeneratedAdoAppQueryVariables = Exact<{
    ADO_app_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAppQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        app: {
            __typename?: 'AppAdo';
            address: string;
            chainId: string;
            addresses: Array<{
                __typename?: 'AppComponentAddress';
                address: string;
                name: string;
            }>;
            components: Array<{
                __typename?: 'AppComponent';
                address: string;
                ado_type: string;
                instantiate_msg: any;
                name: string;
                type: string;
            }>;
            config: {
                __typename?: 'AppConfig';
                name: string;
                owner: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoAuctionAndrQueryVariables = Exact<{
    ADO_auction_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAuctionAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        auction: {
            __typename?: 'AuctionAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoAuctionAuctionidsQueryVariables = Exact<{
    ADO_auction_address: Scalars['String']['input'];
    ADO_auction_auction_auctionIDs_tokenAddress: Scalars['String']['input'];
    ADO_auction_auction_auctionIDs_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAuctionAuctionidsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        auction: {
            __typename?: 'AuctionAdo';
            auctionIDs: {
                __typename?: 'AuctionIDsResponse';
                auction_ids: Array<number>;
            };
        };
    };
};
export type ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables = Exact<{
    ADO_auction_address: Scalars['String']['input'];
    ADO_auction_auction_auctionInfosForAddress_tokenAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        auction: {
            __typename?: 'AuctionAdo';
            auctionInfosForAddress: {
                __typename?: 'AuctionInfosForAddressResponse';
                auction_ids: Array<number>;
                token_address: string;
                token_id: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoAuctionAuctionstateQueryVariables = Exact<{
    ADO_auction_address: Scalars['String']['input'];
    ADO_auction_auction_auctionState_auctionId: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedAdoAuctionAuctionstateQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        auction: {
            __typename?: 'AuctionAdo';
            auctionState: {
                __typename?: 'AuctionStateResponse';
                auction_id: number;
                coin_denom: string;
                end_time: any;
                high_bidder_addr: string;
                high_bidder_amount: number;
                is_cancelled: boolean;
                min_bid: number;
                start_time: any;
                whitelist: Array<string>;
            };
        };
    };
};
export type ICodegenGeneratedAdoAuctionBidsBidsQueryVariables = Exact<{
    ADO_auction_address: Scalars['String']['input'];
    ADO_auction_auction_bids_auctionId: Scalars['Float']['input'];
    ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
}>;
export type ICodegenGeneratedAdoAuctionBidsBidsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        auction: {
            __typename?: 'AuctionAdo';
            bids: {
                __typename?: 'BidsResponse';
                bids: Array<{
                    __typename?: 'Bid';
                    amount: number;
                    bidder: string;
                    timestamp: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoAuctionBidsQueryVariables = Exact<{
    ADO_auction_address: Scalars['String']['input'];
    ADO_auction_auction_bids_auctionId: Scalars['Float']['input'];
    ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
}>;
export type ICodegenGeneratedAdoAuctionBidsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        auction: {
            __typename?: 'AuctionAdo';
            bids: {
                __typename?: 'BidsResponse';
                bids: Array<{
                    __typename?: 'Bid';
                    amount: number;
                    bidder: string;
                    timestamp: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables = Exact<{
    ADO_auction_address: Scalars['String']['input'];
    ADO_auction_auction_latestAuctionState_tokenAddress: Scalars['String']['input'];
    ADO_auction_auction_latestAuctionState_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAuctionLatestauctionstateQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        auction: {
            __typename?: 'AuctionAdo';
            latestAuctionState: {
                __typename?: 'AuctionStateResponse';
                auction_id: number;
                coin_denom: string;
                end_time: any;
                high_bidder_addr: string;
                high_bidder_amount: number;
                is_cancelled: boolean;
                min_bid: number;
                start_time: any;
                whitelist: Array<string>;
            };
        };
    };
};
export type ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables = Exact<{
    ADO_auction_address: Scalars['String']['input'];
    ADO_auction_auction_summaryFields_tokenAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAuctionSummaryfieldsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        auction: {
            __typename?: 'AuctionAdo';
            summaryFields: {
                __typename?: 'SummaryFields';
                coin_denom: string;
                high_bidder_amount: number;
                min_bid: number;
            };
        };
    };
};
export type ICodegenGeneratedAdoAuctionQueryVariables = Exact<{
    ADO_auction_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoAuctionQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        auction: {
            __typename?: 'AuctionAdo';
            address: string;
            chainId: string;
        };
    };
};
export type ICodegenGeneratedAdoChainidQueryVariables = Exact<{
    ADO_chainId_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoChainidQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        chainId: string;
    };
};
export type ICodegenGeneratedAdoCrowdfundAndrQueryVariables = Exact<{
    ADO_crowdfund_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCrowdfundAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCrowdfundConfigQueryVariables = Exact<{
    ADO_crowdfund_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCrowdfundConfigQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            config: {
                __typename?: 'CrowdfundConfig';
                can_mint_after_sale: boolean;
                token_address: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables = Exact<{
    ADO_crowdfund_address: Scalars['String']['input'];
    ADO_crowdfund_crowdfund_isTokenAvailable_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCrowdfundIstokenavailableQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            isTokenAvailable: boolean;
        };
    };
};
export type ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables = Exact<{
    ADO_crowdfund_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCrowdfundStatePriceQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            state: {
                __typename?: 'CrowdfundState';
                price: {
                    __typename?: 'Coin';
                    amount: string;
                    denom: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCrowdfundStateRecipientQueryVariables = Exact<{
    ADO_crowdfund_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCrowdfundStateRecipientQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            state: {
                __typename?: 'CrowdfundState';
                recipient: {
                    __typename?: 'CrowdfundRecipient';
                    address: string;
                    ibc_recovery_address: string;
                    msg: any;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCrowdfundStateQueryVariables = Exact<{
    ADO_crowdfund_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCrowdfundStateQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            state: {
                __typename?: 'CrowdfundState';
                amount_sold: number;
                amount_to_send: number;
                amount_transferred: number;
                end_time: any;
                max_amount_per_wallet: number;
                min_tokens_sold: number;
                price: {
                    __typename?: 'Coin';
                    amount: string;
                    denom: string;
                };
                recipient: {
                    __typename?: 'CrowdfundRecipient';
                    address: string;
                    ibc_recovery_address: string;
                    msg: any;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCrowdfundQueryVariables = Exact<{
    ADO_crowdfund_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCrowdfundQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        crowdfund: {
            __typename?: 'CrowdfundAdo';
            address: string;
            availableTokens: Array<string>;
            chainId: string;
            config: {
                __typename?: 'CrowdfundConfig';
                can_mint_after_sale: boolean;
                token_address: string;
            };
            state: {
                __typename?: 'CrowdfundState';
                amount_sold: number;
                amount_to_send: number;
                amount_transferred: number;
                end_time: any;
                max_amount_per_wallet: number;
                min_tokens_sold: number;
                price: {
                    __typename?: 'Coin';
                    amount: string;
                    denom: string;
                };
                recipient: {
                    __typename?: 'CrowdfundRecipient';
                    address: string;
                    ibc_recovery_address: string;
                    msg: any;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20AllaccountsQueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
    ADO_cw20_cw20_allAccounts_options?: InputMaybe<IAndrSearchOptions>;
}>;
export type ICodegenGeneratedAdoCw20AllaccountsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            allAccounts: Array<string>;
        };
    };
};
export type ICodegenGeneratedAdoCw20AllallowancesQueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
    ADO_cw20_cw20_allAllowances_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw20_cw20_allAllowances_owner: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20AllallowancesQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            allAllowances: Array<{
                __typename?: 'Allowance';
                allowance: number;
                expires: any;
                owner: string;
                spender: string;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
    ADO_cw20_cw20_allSpenderAllowances_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw20_cw20_allSpenderAllowances_spender: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20AllspenderallowancesQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            allSpenderAllowances: Array<{
                __typename?: 'Allowance';
                allowance: number;
                expires: any;
                owner: string;
                spender: string;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoCw20AllowanceQueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
    ADO_cw20_cw20_allowance_owner: Scalars['String']['input'];
    ADO_cw20_cw20_allowance_spender: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20AllowanceQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            allowance: {
                __typename?: 'Allowance';
                allowance: number;
                expires: any;
                owner: string;
                spender: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20AndrQueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20AndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20BalanceQueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
    ADO_cw20_cw20_balance_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20BalanceQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            balance: number;
        };
    };
};
export type ICodegenGeneratedAdoCw20DownloadlogoQueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20DownloadlogoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            downloadLogo: {
                __typename?: 'DownloadLogo';
                data: any;
                mime_type: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20MarketinginfoQueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20MarketinginfoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            marketingInfo: {
                __typename?: 'MarketingInfo';
                description: string;
                logo: any;
                marketing: string;
                project: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20MinterQueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20MinterQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            minter: {
                __typename?: 'Minter';
                cap: number;
                minter: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20TokeninfoQueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20TokeninfoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            tokenInfo: {
                __typename?: 'TokenInfo';
                decimals: number;
                name: string;
                symbol: string;
                total_supply: number;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20QueryVariables = Exact<{
    ADO_cw20_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20Query = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20: {
            __typename?: 'CW20Ado';
            address: string;
            chainId: string;
            downloadLogo: {
                __typename?: 'DownloadLogo';
                data: any;
                mime_type: string;
            };
            marketingInfo: {
                __typename?: 'MarketingInfo';
                description: string;
                logo: any;
                marketing: string;
                project: string;
            };
            minter: {
                __typename?: 'Minter';
                cap: number;
                minter: string;
            };
            tokenInfo: {
                __typename?: 'TokenInfo';
                decimals: number;
                name: string;
                symbol: string;
                total_supply: number;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables = Exact<{
    ADO_cw20_exchange_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20ExchangeAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_exchange: {
            __typename?: 'CW20ExchangeAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables = Exact<{
    ADO_cw20_exchange_address: Scalars['String']['input'];
    ADO_cw20_exchange_cw20_exchange_sale_cw20?: InputMaybe<Scalars['String']['input']>;
    ADO_cw20_exchange_cw20_exchange_sale_native?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedAdoCw20ExchangeSaleQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_exchange: {
            __typename?: 'CW20ExchangeAdo';
            sale: {
                __typename?: 'SaleResponse';
                amount: number;
                end_time: any;
                exchange_rate: number;
                recipient: string;
                start_amount: number;
                start_time: any;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables = Exact<{
    ADO_cw20_exchange_address: Scalars['String']['input'];
    ADO_cw20_exchange_cw20_exchange_saleAssets_options?: InputMaybe<IAndrSearchOptions>;
}>;
export type ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_exchange: {
            __typename?: 'CW20ExchangeAdo';
            saleAssets: Array<string>;
        };
    };
};
export type ICodegenGeneratedAdoCw20ExchangeQueryVariables = Exact<{
    ADO_cw20_exchange_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20ExchangeQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_exchange: {
            __typename?: 'CW20ExchangeAdo';
            address: string;
            chainId: string;
            tokenAddress: string;
        };
    };
};
export type ICodegenGeneratedAdoCw20StakingAndrQueryVariables = Exact<{
    ADO_cw20_staking_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20StakingAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_staking: {
            __typename?: 'CW20StakingAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables = Exact<{
    ADO_cw20_staking_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_staking: {
            __typename?: 'CW20StakingAdo';
            config: {
                __typename?: 'ConfigStructure';
                staking_token: {
                    __typename?: 'AndrAddress';
                    identifier: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20StakingConfigQueryVariables = Exact<{
    ADO_cw20_staking_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20StakingConfigQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_staking: {
            __typename?: 'CW20StakingAdo';
            config: {
                __typename?: 'ConfigStructure';
                number_of_reward_tokens: number;
                staking_token: {
                    __typename?: 'AndrAddress';
                    identifier: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20StakingStakerQueryVariables = Exact<{
    ADO_cw20_staking_address: Scalars['String']['input'];
    ADO_cw20_staking_cw20_staking_staker_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20StakingStakerQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_staking: {
            __typename?: 'CW20StakingAdo';
            staker: {
                __typename?: 'StakerResponse';
                address: string;
                pending_rewards: Array<Array<string>>;
                share: number;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20StakingStakersQueryVariables = Exact<{
    ADO_cw20_staking_address: Scalars['String']['input'];
    ADO_cw20_staking_cw20_staking_stakers_options?: InputMaybe<IAndrSearchOptions>;
}>;
export type ICodegenGeneratedAdoCw20StakingStakersQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_staking: {
            __typename?: 'CW20StakingAdo';
            stakers: Array<{
                __typename?: 'StakerResponse';
                address: string;
                pending_rewards: Array<Array<string>>;
                share: number;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoCw20StakingStateQueryVariables = Exact<{
    ADO_cw20_staking_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20StakingStateQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_staking: {
            __typename?: 'CW20StakingAdo';
            state: {
                __typename?: 'StateStructure';
                total_share: number;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw20StakingQueryVariables = Exact<{
    ADO_cw20_staking_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw20StakingQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw20_staking: {
            __typename?: 'CW20StakingAdo';
            address: string;
            chainId: string;
            timestamp: any;
            config: {
                __typename?: 'ConfigStructure';
                number_of_reward_tokens: number;
                staking_token: {
                    __typename?: 'AndrAddress';
                    identifier: string;
                };
            };
            state: {
                __typename?: 'StateStructure';
                total_share: number;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            allNftInfo: {
                __typename?: 'AllNftInfo';
                access: {
                    __typename?: 'NftOwnerInfo';
                    approvals: Array<{
                        __typename?: 'NftApproval';
                        expires: any;
                        spender: string;
                    }>;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721AllnftinfoAccessQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            allNftInfo: {
                __typename?: 'AllNftInfo';
                access: {
                    __typename?: 'NftOwnerInfo';
                    owner: string;
                    approvals: Array<{
                        __typename?: 'NftApproval';
                        expires: any;
                        spender: string;
                    }>;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            allNftInfo: {
                __typename?: 'AllNftInfo';
                info: {
                    __typename?: 'NftInfo';
                    extension: {
                        __typename?: 'TokenExtension';
                        publisher: string;
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            allNftInfo: {
                __typename?: 'AllNftInfo';
                info: {
                    __typename?: 'NftInfo';
                    metadata: {
                        __typename?: 'NFTMetadata';
                        attributes: Array<{
                            __typename?: 'MetadataAttribute';
                            display_type: string;
                            trait_type: string;
                            value: string;
                        }>;
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            allNftInfo: {
                __typename?: 'AllNftInfo';
                info: {
                    __typename?: 'NftInfo';
                    metadata: {
                        __typename?: 'NFTMetadata';
                        animation_url: string;
                        background_color: string;
                        description: string;
                        external_url: string;
                        image: string;
                        image_data: string;
                        name: string;
                        youtube_url: string;
                        attributes: Array<{
                            __typename?: 'MetadataAttribute';
                            display_type: string;
                            trait_type: string;
                            value: string;
                        }>;
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721AllnftinfoInfoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            allNftInfo: {
                __typename?: 'AllNftInfo';
                info: {
                    __typename?: 'NftInfo';
                    tokenId: string;
                    token_uri: string;
                    extension: {
                        __typename?: 'TokenExtension';
                        publisher: string;
                    };
                    metadata: {
                        __typename?: 'NFTMetadata';
                        animation_url: string;
                        background_color: string;
                        description: string;
                        external_url: string;
                        image: string;
                        image_data: string;
                        name: string;
                        youtube_url: string;
                        attributes: Array<{
                            __typename?: 'MetadataAttribute';
                            display_type: string;
                            trait_type: string;
                            value: string;
                        }>;
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721AllnftinfoQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721AllnftinfoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            allNftInfo: {
                __typename?: 'AllNftInfo';
                access: {
                    __typename?: 'NftOwnerInfo';
                    owner: string;
                    approvals: Array<{
                        __typename?: 'NftApproval';
                        expires: any;
                        spender: string;
                    }>;
                };
                info: {
                    __typename?: 'NftInfo';
                    tokenId: string;
                    token_uri: string;
                    extension: {
                        __typename?: 'TokenExtension';
                        publisher: string;
                    };
                    metadata: {
                        __typename?: 'NFTMetadata';
                        animation_url: string;
                        background_color: string;
                        description: string;
                        external_url: string;
                        image: string;
                        image_data: string;
                        name: string;
                        youtube_url: string;
                        attributes: Array<{
                            __typename?: 'MetadataAttribute';
                            display_type: string;
                            trait_type: string;
                            value: string;
                        }>;
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721AlloperatorsQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_allOperators_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_allOperators_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw721_cw721_allOperators_owner: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721AlloperatorsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            allOperators: Array<{
                __typename?: 'NftApproval';
                expires: any;
                spender: string;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoCw721AlltokensQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_allTokens_options?: InputMaybe<IAndrSearchOptions>;
}>;
export type ICodegenGeneratedAdoCw721AlltokensQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            allTokens: Array<string>;
        };
    };
};
export type ICodegenGeneratedAdoCw721AndrQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721AndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721ApprovalQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_approval_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_approval_spender: Scalars['String']['input'];
    ADO_cw721_cw721_approval_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721ApprovalQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            approval: {
                __typename?: 'NftApproval';
                expires: any;
                spender: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721ApprovalsQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_approvals_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_approvals_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721ApprovalsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            approvals: Array<{
                __typename?: 'NftApproval';
                expires: any;
                spender: string;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoCw721ContractinfoQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721ContractinfoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            contractInfo: {
                __typename?: 'NftContractInfo';
                name: string;
                symbol: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721IsarchivedQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_isArchived_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721IsarchivedQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            isArchived: boolean;
        };
    };
};
export type ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_nftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721NftinfoExtensionQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            nftInfo: {
                __typename?: 'NftInfo';
                extension: {
                    __typename?: 'TokenExtension';
                    publisher: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_nftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            nftInfo: {
                __typename?: 'NftInfo';
                metadata: {
                    __typename?: 'NFTMetadata';
                    attributes: Array<{
                        __typename?: 'MetadataAttribute';
                        display_type: string;
                        trait_type: string;
                        value: string;
                    }>;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721NftinfoMetadataQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_nftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721NftinfoMetadataQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            nftInfo: {
                __typename?: 'NftInfo';
                metadata: {
                    __typename?: 'NFTMetadata';
                    animation_url: string;
                    background_color: string;
                    description: string;
                    external_url: string;
                    image: string;
                    image_data: string;
                    name: string;
                    youtube_url: string;
                    attributes: Array<{
                        __typename?: 'MetadataAttribute';
                        display_type: string;
                        trait_type: string;
                        value: string;
                    }>;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721NftinfoQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_nftInfo_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721NftinfoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            nftInfo: {
                __typename?: 'NftInfo';
                tokenId: string;
                token_uri: string;
                extension: {
                    __typename?: 'TokenExtension';
                    publisher: string;
                };
                metadata: {
                    __typename?: 'NFTMetadata';
                    animation_url: string;
                    background_color: string;
                    description: string;
                    external_url: string;
                    image: string;
                    image_data: string;
                    name: string;
                    youtube_url: string;
                    attributes: Array<{
                        __typename?: 'MetadataAttribute';
                        display_type: string;
                        trait_type: string;
                        value: string;
                    }>;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721NumownersQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_numOwners_includeExpired: Scalars['Boolean']['input'];
}>;
export type ICodegenGeneratedAdoCw721NumownersQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            numOwners: number;
        };
    };
};
export type ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_ownerOf_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_ownerOf_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721OwnerofApprovalsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            ownerOf: {
                __typename?: 'NftOwnerInfo';
                approvals: Array<{
                    __typename?: 'NftApproval';
                    expires: any;
                    spender: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721OwnerofQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_ownerOf_includeExpired: Scalars['Boolean']['input'];
    ADO_cw721_cw721_ownerOf_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721OwnerofQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            ownerOf: {
                __typename?: 'NftOwnerInfo';
                owner: string;
                approvals: Array<{
                    __typename?: 'NftApproval';
                    expires: any;
                    spender: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<Array<ISearchAttribute> | ISearchAttribute>;
}>;
export type ICodegenGeneratedAdoCw721SearchtokensExtensionQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            searchTokens: Array<{
                __typename?: 'NftInfo';
                extension: {
                    __typename?: 'TokenExtension';
                    publisher: string;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<Array<ISearchAttribute> | ISearchAttribute>;
}>;
export type ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            searchTokens: Array<{
                __typename?: 'NftInfo';
                metadata: {
                    __typename?: 'NFTMetadata';
                    attributes: Array<{
                        __typename?: 'MetadataAttribute';
                        display_type: string;
                        trait_type: string;
                        value: string;
                    }>;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoCw721SearchtokensMetadataQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<Array<ISearchAttribute> | ISearchAttribute>;
}>;
export type ICodegenGeneratedAdoCw721SearchtokensMetadataQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            searchTokens: Array<{
                __typename?: 'NftInfo';
                metadata: {
                    __typename?: 'NFTMetadata';
                    animation_url: string;
                    background_color: string;
                    description: string;
                    external_url: string;
                    image: string;
                    image_data: string;
                    name: string;
                    youtube_url: string;
                    attributes: Array<{
                        __typename?: 'MetadataAttribute';
                        display_type: string;
                        trait_type: string;
                        value: string;
                    }>;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoCw721SearchtokensQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<Array<ISearchAttribute> | ISearchAttribute>;
}>;
export type ICodegenGeneratedAdoCw721SearchtokensQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            searchTokens: Array<{
                __typename?: 'NftInfo';
                tokenId: string;
                token_uri: string;
                extension: {
                    __typename?: 'TokenExtension';
                    publisher: string;
                };
                metadata: {
                    __typename?: 'NFTMetadata';
                    animation_url: string;
                    background_color: string;
                    description: string;
                    external_url: string;
                    image: string;
                    image_data: string;
                    name: string;
                    youtube_url: string;
                    attributes: Array<{
                        __typename?: 'MetadataAttribute';
                        display_type: string;
                        trait_type: string;
                        value: string;
                    }>;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoCw721TokensQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_tokens_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw721_cw721_tokens_owner: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721TokensQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            tokens: Array<string>;
        };
    };
};
export type ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_transferAgreement_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            transferAgreement: {
                __typename?: 'TransferAgreement';
                agreement: {
                    __typename?: 'Agreement';
                    amount: {
                        __typename?: 'AgreementAmount';
                        raw: {
                            __typename?: 'Coin';
                            amount: string;
                            denom: string;
                        };
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_transferAgreement_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            transferAgreement: {
                __typename?: 'TransferAgreement';
                agreement: {
                    __typename?: 'Agreement';
                    amount: {
                        __typename?: 'AgreementAmount';
                        raw: {
                            __typename?: 'Coin';
                            amount: string;
                            denom: string;
                        };
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_transferAgreement_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721TransferagreementAgreementQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            transferAgreement: {
                __typename?: 'TransferAgreement';
                agreement: {
                    __typename?: 'Agreement';
                    purchaser: string;
                    amount: {
                        __typename?: 'AgreementAmount';
                        raw: {
                            __typename?: 'Coin';
                            amount: string;
                            denom: string;
                        };
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721TransferagreementQueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
    ADO_cw721_cw721_transferAgreement_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721TransferagreementQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            transferAgreement: {
                __typename?: 'TransferAgreement';
                tokenId: string;
                agreement: {
                    __typename?: 'Agreement';
                    purchaser: string;
                    amount: {
                        __typename?: 'AgreementAmount';
                        raw: {
                            __typename?: 'Coin';
                            amount: string;
                            denom: string;
                        };
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoCw721QueryVariables = Exact<{
    ADO_cw721_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoCw721Query = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        cw721: {
            __typename?: 'CW721Ado';
            address: string;
            chainId: string;
            minter: string;
            numTokens: number;
            contractInfo: {
                __typename?: 'NftContractInfo';
                name: string;
                symbol: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoFactoryAndrQueryVariables = Exact<{
    ADO_factory_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoFactoryAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        factory: {
            __typename?: 'FactoryAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoFactoryCodeIdQueryVariables = Exact<{
    ADO_factory_address: Scalars['String']['input'];
    ADO_factory_factory_code_id_key: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoFactoryCodeIdQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        factory: {
            __typename?: 'FactoryAdo';
            code_id: number;
        };
    };
};
export type ICodegenGeneratedAdoFactoryQueryVariables = Exact<{
    ADO_factory_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoFactoryQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        factory: {
            __typename?: 'FactoryAdo';
            address: string;
            chainId: string;
        };
    };
};
export type ICodegenGeneratedAdoLockdropAndrQueryVariables = Exact<{
    ADO_lockdrop_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoLockdropAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        lockdrop: {
            __typename?: 'LockdropAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoLockdropConfigQueryVariables = Exact<{
    ADO_lockdrop_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoLockdropConfigQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        lockdrop: {
            __typename?: 'LockdropAdo';
            config: {
                __typename?: 'LockdropConfig';
                deposit_window: number;
                incentive_token: string;
                init_timestamp: number;
                lockdrop_incentives: number;
                native_denom: string;
                withdrawal_window: number;
            };
        };
    };
};
export type ICodegenGeneratedAdoLockdropStateQueryVariables = Exact<{
    ADO_lockdrop_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoLockdropStateQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        lockdrop: {
            __typename?: 'LockdropAdo';
            state: {
                __typename?: 'LockdropState';
                are_claims_allowed: boolean;
                total_native_locked: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoLockdropUserinfoQueryVariables = Exact<{
    ADO_lockdrop_address: Scalars['String']['input'];
    ADO_lockdrop_lockdrop_userInfo_user: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoLockdropUserinfoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        lockdrop: {
            __typename?: 'LockdropAdo';
            userInfo: Array<{
                __typename?: 'LockdropUserInfo';
                is_lockdrop_claimed: boolean;
                total_incentives: string;
                total_native_locked: string;
                withrawal_flag: boolean;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables = Exact<{
    ADO_lockdrop_address: Scalars['String']['input'];
    ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        lockdrop: {
            __typename?: 'LockdropAdo';
            withdrawalPercentAllowed: number;
        };
    };
};
export type ICodegenGeneratedAdoLockdropQueryVariables = Exact<{
    ADO_lockdrop_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoLockdropQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        lockdrop: {
            __typename?: 'LockdropAdo';
            address: string;
            chainId: string;
            config: {
                __typename?: 'LockdropConfig';
                deposit_window: number;
                incentive_token: string;
                init_timestamp: number;
                lockdrop_incentives: number;
                native_denom: string;
                withdrawal_window: number;
            };
            state: {
                __typename?: 'LockdropState';
                are_claims_allowed: boolean;
                total_native_locked: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoMarketplaceAndrQueryVariables = Exact<{
    ADO_marketplace_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoMarketplaceAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        marketplace: {
            __typename?: 'MarketplaceAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables = Exact<{
    ADO_marketplace_address: Scalars['String']['input'];
    ADO_marketplace_marketplace_latestSaleState_tokenAddress: Scalars['String']['input'];
    ADO_marketplace_marketplace_latestSaleState_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoMarketplaceLatestsalestateQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        marketplace: {
            __typename?: 'MarketplaceAdo';
            latestSaleState: {
                __typename?: 'SaleStateResponse';
                coin_denom: string;
                price: string;
                sale_id: string;
                status: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables = Exact<{
    ADO_marketplace_address: Scalars['String']['input'];
    ADO_marketplace_marketplace_saleIds_tokenAddress: Scalars['String']['input'];
    ADO_marketplace_marketplace_saleIds_tokenId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoMarketplaceSaleidsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        marketplace: {
            __typename?: 'MarketplaceAdo';
            saleIds: {
                __typename?: 'SaleIds';
                sale_ids: Array<string>;
            };
        };
    };
};
export type ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables = Exact<{
    ADO_marketplace_address: Scalars['String']['input'];
    ADO_marketplace_marketplace_saleInfosForAddress_options?: InputMaybe<IAndrSearchOptions>;
    ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        marketplace: {
            __typename?: 'MarketplaceAdo';
            saleInfosForAddress: Array<{
                __typename?: 'SaleInfo';
                sale_ids: Array<string>;
                token_address: string;
                token_id: string;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoMarketplaceSalestateQueryVariables = Exact<{
    ADO_marketplace_address: Scalars['String']['input'];
    ADO_marketplace_marketplace_saleState_saleId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoMarketplaceSalestateQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        marketplace: {
            __typename?: 'MarketplaceAdo';
            saleState: {
                __typename?: 'SaleStateResponse';
                coin_denom: string;
                price: string;
                sale_id: string;
                status: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoMarketplaceQueryVariables = Exact<{
    ADO_marketplace_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoMarketplaceQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        marketplace: {
            __typename?: 'MarketplaceAdo';
            address: string;
            chainId: string;
        };
    };
};
export type ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables = Exact<{
    ADO_merkle_airdrop_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoMerkleAirdropAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        merkle_airdrop: {
            __typename?: 'MerkleAirdropAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables = Exact<{
    ADO_merkle_airdrop_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoMerkleAirdropConfigQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        merkle_airdrop: {
            __typename?: 'MerkleAirdropAdo';
            config: {
                __typename?: 'MerkleAirdropConfig';
                asset_info: any;
            };
        };
    };
};
export type ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables = Exact<{
    ADO_merkle_airdrop_address: Scalars['String']['input'];
    ADO_merkle_airdrop_merkle_airdrop_isClaimed_address: Scalars['String']['input'];
    ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        merkle_airdrop: {
            __typename?: 'MerkleAirdropAdo';
            isClaimed: boolean;
        };
    };
};
export type ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables = Exact<{
    ADO_merkle_airdrop_address: Scalars['String']['input'];
    ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedAdoMerkleAirdropMerklerootQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        merkle_airdrop: {
            __typename?: 'MerkleAirdropAdo';
            merkleRoot: {
                __typename?: 'MerkleRootResponse';
                expiration: any;
                merkle_root: string;
                stage: number;
                total_amount: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables = Exact<{
    ADO_merkle_airdrop_address: Scalars['String']['input'];
    ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        merkle_airdrop: {
            __typename?: 'MerkleAirdropAdo';
            totalClaimed: string;
        };
    };
};
export type ICodegenGeneratedAdoMerkleAirdropQueryVariables = Exact<{
    ADO_merkle_airdrop_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoMerkleAirdropQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        merkle_airdrop: {
            __typename?: 'MerkleAirdropAdo';
            address: string;
            chainId: string;
            latestStage: number;
            config: {
                __typename?: 'MerkleAirdropConfig';
                asset_info: any;
            };
        };
    };
};
export type ICodegenGeneratedAdoPrimitiveAndrQueryVariables = Exact<{
    ADO_primitive_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoPrimitiveAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        primitive: {
            __typename?: 'PrimitiveAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables = Exact<{
    ADO_primitive_address: Scalars['String']['input'];
    ADO_primitive_primitive_getValue_key: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoPrimitiveGetvalueQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        primitive: {
            __typename?: 'PrimitiveAdo';
            getValue: {
                __typename?: 'PrimitiveResponse';
                key: string;
                value: any;
            };
        };
    };
};
export type ICodegenGeneratedAdoPrimitiveQueryVariables = Exact<{
    ADO_primitive_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoPrimitiveQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        primitive: {
            __typename?: 'PrimitiveAdo';
            address: string;
            chainId: string;
        };
    };
};
export type ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables = Exact<{
    ADO_rate_limiting_withdrawals_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rate_limiting_withdrawals: {
            __typename?: 'RateLimitingWithdrawalsAdo';
            accountDetails: {
                __typename?: 'AccountDetails';
                balance: string;
                latest_withdrawal: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables = Exact<{
    ADO_rate_limiting_withdrawals_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rate_limiting_withdrawals: {
            __typename?: 'RateLimitingWithdrawalsAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables = Exact<{
    ADO_rate_limiting_withdrawals_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rate_limiting_withdrawals: {
            __typename?: 'RateLimitingWithdrawalsAdo';
            coinAllowanceDetails: {
                __typename?: 'CoinAllowance';
                coin: string;
                limit: string;
                minimal_withdrawal_frequency: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables = Exact<{
    ADO_rate_limiting_withdrawals_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRateLimitingWithdrawalsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rate_limiting_withdrawals: {
            __typename?: 'RateLimitingWithdrawalsAdo';
            address: string;
            chainId: string;
            accountDetails: {
                __typename?: 'AccountDetails';
                balance: string;
                latest_withdrawal: string;
            };
            coinAllowanceDetails: {
                __typename?: 'CoinAllowance';
                coin: string;
                limit: string;
                minimal_withdrawal_frequency: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoRatesAndrQueryVariables = Exact<{
    ADO_rates_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRatesAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rates: {
            __typename?: 'RatesAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables = Exact<{
    ADO_rates_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRatesPaymentsRateExternalQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rates: {
            __typename?: 'RatesAdo';
            payments: Array<{
                __typename?: 'RateInfo';
                rate: {
                    __typename?: 'Rate';
                    external: {
                        __typename?: 'ADORate';
                        address: string;
                        key: string;
                    };
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables = Exact<{
    ADO_rates_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRatesPaymentsRateFlatQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rates: {
            __typename?: 'RatesAdo';
            payments: Array<{
                __typename?: 'RateInfo';
                rate: {
                    __typename?: 'Rate';
                    flat: {
                        __typename?: 'Coin';
                        amount: string;
                        denom: string;
                    };
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables = Exact<{
    ADO_rates_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRatesPaymentsRatePercentQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rates: {
            __typename?: 'RatesAdo';
            payments: Array<{
                __typename?: 'RateInfo';
                rate: {
                    __typename?: 'Rate';
                    percent: {
                        __typename?: 'PercentRate';
                        decimal: number;
                    };
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoRatesPaymentsRateQueryVariables = Exact<{
    ADO_rates_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRatesPaymentsRateQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rates: {
            __typename?: 'RatesAdo';
            payments: Array<{
                __typename?: 'RateInfo';
                rate: {
                    __typename?: 'Rate';
                    external: {
                        __typename?: 'ADORate';
                        address: string;
                        key: string;
                    };
                    flat: {
                        __typename?: 'Coin';
                        amount: string;
                        denom: string;
                    };
                    percent: {
                        __typename?: 'PercentRate';
                        decimal: number;
                    };
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoRatesPaymentsQueryVariables = Exact<{
    ADO_rates_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRatesPaymentsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rates: {
            __typename?: 'RatesAdo';
            payments: Array<{
                __typename?: 'RateInfo';
                description: string;
                is_additive: boolean;
                receivers: Array<any>;
                rate: {
                    __typename?: 'Rate';
                    external: {
                        __typename?: 'ADORate';
                        address: string;
                        key: string;
                    };
                    flat: {
                        __typename?: 'Coin';
                        amount: string;
                        denom: string;
                    };
                    percent: {
                        __typename?: 'PercentRate';
                        decimal: number;
                    };
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoRatesQueryVariables = Exact<{
    ADO_rates_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoRatesQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        rates: {
            __typename?: 'RatesAdo';
            address: string;
            chainId: string;
            payments: Array<{
                __typename?: 'RateInfo';
                description: string;
                is_additive: boolean;
                receivers: Array<any>;
                rate: {
                    __typename?: 'Rate';
                    external: {
                        __typename?: 'ADORate';
                        address: string;
                        key: string;
                    };
                    flat: {
                        __typename?: 'Coin';
                        amount: string;
                        denom: string;
                    };
                    percent: {
                        __typename?: 'PercentRate';
                        decimal: number;
                    };
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoSplitterAndrQueryVariables = Exact<{
    ADO_splitter_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoSplitterAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        splitter: {
            __typename?: 'SplitterAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables = Exact<{
    ADO_splitter_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoSplitterConfigRecipientsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        splitter: {
            __typename?: 'SplitterAdo';
            config: {
                __typename?: 'Splitter';
                recipients: Array<{
                    __typename?: 'AddressPercent';
                    percent: string;
                    recipient: any;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoSplitterConfigQueryVariables = Exact<{
    ADO_splitter_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoSplitterConfigQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        splitter: {
            __typename?: 'SplitterAdo';
            config: {
                __typename?: 'Splitter';
                lock: any;
                recipients: Array<{
                    __typename?: 'AddressPercent';
                    percent: string;
                    recipient: any;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoSplitterQueryVariables = Exact<{
    ADO_splitter_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoSplitterQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        splitter: {
            __typename?: 'SplitterAdo';
            address: string;
            chainId: string;
            config: {
                __typename?: 'Splitter';
                lock: any;
                recipients: Array<{
                    __typename?: 'AddressPercent';
                    percent: string;
                    recipient: any;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoTimelockAndrQueryVariables = Exact<{
    ADO_timelock_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoTimelockAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        timelock: {
            __typename?: 'TimelockAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables = Exact<{
    ADO_timelock_address: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFunds_owner: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFunds_recipient: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        timelock: {
            __typename?: 'TimelockAdo';
            getLockedFunds: {
                __typename?: 'Escrow';
                coins: Array<{
                    __typename?: 'Coin';
                    amount: string;
                    denom: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables = Exact<{
    ADO_timelock_address: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFunds_owner: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFunds_recipient: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        timelock: {
            __typename?: 'TimelockAdo';
            getLockedFunds: {
                __typename?: 'Escrow';
                condition: {
                    __typename?: 'EscrowCondition';
                    miniumFunds: Array<{
                        __typename?: 'Coin';
                        amount: string;
                        denom: string;
                    }>;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables = Exact<{
    ADO_timelock_address: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFunds_owner: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFunds_recipient: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        timelock: {
            __typename?: 'TimelockAdo';
            getLockedFunds: {
                __typename?: 'Escrow';
                condition: {
                    __typename?: 'EscrowCondition';
                    expiration: any;
                    miniumFunds: Array<{
                        __typename?: 'Coin';
                        amount: string;
                        denom: string;
                    }>;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables = Exact<{
    ADO_timelock_address: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFunds_owner: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFunds_recipient: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoTimelockGetlockedfundsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        timelock: {
            __typename?: 'TimelockAdo';
            getLockedFunds: {
                __typename?: 'Escrow';
                recipient: any;
                coins: Array<{
                    __typename?: 'Coin';
                    amount: string;
                    denom: string;
                }>;
                condition: {
                    __typename?: 'EscrowCondition';
                    expiration: any;
                    miniumFunds: Array<{
                        __typename?: 'Coin';
                        amount: string;
                        denom: string;
                    }>;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables = Exact<{
    ADO_timelock_address: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        timelock: {
            __typename?: 'TimelockAdo';
            getLockedFundsForRecipient: Array<{
                __typename?: 'Escrow';
                coins: Array<{
                    __typename?: 'Coin';
                    amount: string;
                    denom: string;
                }>;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables = Exact<{
    ADO_timelock_address: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        timelock: {
            __typename?: 'TimelockAdo';
            getLockedFundsForRecipient: Array<{
                __typename?: 'Escrow';
                condition: {
                    __typename?: 'EscrowCondition';
                    miniumFunds: Array<{
                        __typename?: 'Coin';
                        amount: string;
                        denom: string;
                    }>;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables = Exact<{
    ADO_timelock_address: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        timelock: {
            __typename?: 'TimelockAdo';
            getLockedFundsForRecipient: Array<{
                __typename?: 'Escrow';
                condition: {
                    __typename?: 'EscrowCondition';
                    expiration: any;
                    miniumFunds: Array<{
                        __typename?: 'Coin';
                        amount: string;
                        denom: string;
                    }>;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables = Exact<{
    ADO_timelock_address: Scalars['String']['input'];
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        timelock: {
            __typename?: 'TimelockAdo';
            getLockedFundsForRecipient: Array<{
                __typename?: 'Escrow';
                recipient: any;
                coins: Array<{
                    __typename?: 'Coin';
                    amount: string;
                    denom: string;
                }>;
                condition: {
                    __typename?: 'EscrowCondition';
                    expiration: any;
                    miniumFunds: Array<{
                        __typename?: 'Coin';
                        amount: string;
                        denom: string;
                    }>;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedAdoTimelockQueryVariables = Exact<{
    ADO_timelock_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoTimelockQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        timelock: {
            __typename?: 'TimelockAdo';
            address: string;
            chainId: string;
        };
    };
};
export type ICodegenGeneratedAdoVaultAndrQueryVariables = Exact<{
    ADO_vault_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoVaultAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        vault: {
            __typename?: 'VaultAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoVaultBalanceQueryVariables = Exact<{
    ADO_vault_address: Scalars['String']['input'];
    ADO_vault_vault_balance_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoVaultBalanceQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        vault: {
            __typename?: 'VaultAdo';
            balance: Array<{
                __typename?: 'Coin';
                amount: string;
                denom: string;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoVaultStrategyaddressQueryVariables = Exact<{
    ADO_vault_address: Scalars['String']['input'];
    ADO_vault_vault_strategyAddress_strategy: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoVaultStrategyaddressQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        vault: {
            __typename?: 'VaultAdo';
            strategyAddress: {
                __typename?: 'AndrStrategy';
                address: string;
                strategyType: IAndrStrategyType;
            };
        };
    };
};
export type ICodegenGeneratedAdoVaultQueryVariables = Exact<{
    ADO_vault_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoVaultQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        vault: {
            __typename?: 'VaultAdo';
            address: string;
            chainId: string;
        };
    };
};
export type ICodegenGeneratedAdoVestingAndrQueryVariables = Exact<{
    ADO_vesting_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoVestingAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        vesting: {
            __typename?: 'VestingAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoVestingBatchQueryVariables = Exact<{
    ADO_vesting_address: Scalars['String']['input'];
    ADO_vesting_vesting_batch_id: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedAdoVestingBatchQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        vesting: {
            __typename?: 'VestingAdo';
            batch: {
                __typename?: 'VestingBatchInfo';
                amount: string;
                amount_available_to_claim: string;
                amount_claimed: string;
                id: number;
                last_claimed_release_time: number;
                lockup_end: number;
                number_of_available_claims: string;
                release_amount: any;
                release_unit: number;
            };
        };
    };
};
export type ICodegenGeneratedAdoVestingBatchesQueryVariables = Exact<{
    ADO_vesting_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoVestingBatchesQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        vesting: {
            __typename?: 'VestingAdo';
            batches: Array<{
                __typename?: 'VestingBatchInfo';
                amount: string;
                amount_available_to_claim: string;
                amount_claimed: string;
                id: number;
                last_claimed_release_time: number;
                lockup_end: number;
                number_of_available_claims: string;
                release_amount: any;
                release_unit: number;
            }>;
        };
    };
};
export type ICodegenGeneratedAdoVestingConfigQueryVariables = Exact<{
    ADO_vesting_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoVestingConfigQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        vesting: {
            __typename?: 'VestingAdo';
            config: {
                __typename?: 'VestingConfig';
                denom: string;
                is_multi_batch_enabled: boolean;
                recipient: any;
                unbonding_duration: any;
            };
        };
    };
};
export type ICodegenGeneratedAdoVestingQueryVariables = Exact<{
    ADO_vesting_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoVestingQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        vesting: {
            __typename?: 'VestingAdo';
            address: string;
            chainId: string;
            batches: Array<{
                __typename?: 'VestingBatchInfo';
                amount: string;
                amount_available_to_claim: string;
                amount_claimed: string;
                id: number;
                last_claimed_release_time: number;
                lockup_end: number;
                number_of_available_claims: string;
                release_amount: any;
                release_unit: number;
            }>;
            config: {
                __typename?: 'VestingConfig';
                denom: string;
                is_multi_batch_enabled: boolean;
                recipient: any;
                unbonding_duration: any;
            };
        };
    };
};
export type ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables = Exact<{
    ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        weighted_distribution_splitter: {
            __typename?: 'WeightedDistributionSplitterAdo';
            andr: {
                __typename?: 'AndrQuery';
                address: string;
                admin: string;
                appContract: string;
                blockHeightUponCreation: number;
                codeId: number;
                creator: string;
                ibcPortId: string;
                kernelAddress: string;
                label: string;
                originalPublisher: string;
                owner: string;
                ownershipRequest: any;
                permissionedActions: Array<string>;
                type: string;
                version: string;
            };
        };
    };
};
export type ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables = Exact<{
    ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        weighted_distribution_splitter: {
            __typename?: 'WeightedDistributionSplitterAdo';
            config: {
                __typename?: 'Splitter';
                recipients: Array<{
                    __typename?: 'AddressPercent';
                    percent: string;
                    recipient: any;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables = Exact<{
    ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        weighted_distribution_splitter: {
            __typename?: 'WeightedDistributionSplitterAdo';
            config: {
                __typename?: 'Splitter';
                lock: any;
                recipients: Array<{
                    __typename?: 'AddressPercent';
                    percent: string;
                    recipient: any;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables = Exact<{
    ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
    ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        weighted_distribution_splitter: {
            __typename?: 'WeightedDistributionSplitterAdo';
            getUserWeight: {
                __typename?: 'UserWeightResponse';
                total_weight: number;
                weight: number;
            };
        };
    };
};
export type ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables = Exact<{
    ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdoWeightedDistributionSplitterQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        weighted_distribution_splitter: {
            __typename?: 'WeightedDistributionSplitterAdo';
            address: string;
            chainId: string;
            config: {
                __typename?: 'Splitter';
                lock: any;
                recipients: Array<{
                    __typename?: 'AddressPercent';
                    percent: string;
                    recipient: any;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedAdoQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedAdoQuery = {
    __typename?: 'Query';
    ADO: {
        __typename?: 'AdoQuery';
        receipt: string;
    };
};
export type ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables = Exact<{
    ADOP_package_adoType: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdopPackageSchemasReceiveQuery = {
    __typename?: 'Query';
    ADOP: {
        __typename?: 'ADOPQuery';
        package: {
            __typename?: 'AdoPackage';
            schemas: {
                __typename?: 'ADOPSchema';
                receive: {
                    __typename?: 'ADOPSchemaReceive';
                    cw20: string;
                    cw721: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdopPackageSchemasQueryVariables = Exact<{
    ADOP_package_adoType: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdopPackageSchemasQuery = {
    __typename?: 'Query';
    ADOP: {
        __typename?: 'ADOPQuery';
        package: {
            __typename?: 'AdoPackage';
            schemas: {
                __typename?: 'ADOPSchema';
                contract_schema: string;
                execute: string;
                instantiate: string;
                query: string;
                receive: {
                    __typename?: 'ADOPSchemaReceive';
                    cw20: string;
                    cw721: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdopPackageQueryVariables = Exact<{
    ADOP_package_adoType: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAdopPackageQuery = {
    __typename?: 'Query';
    ADOP: {
        __typename?: 'ADOPQuery';
        package: {
            __typename?: 'AdoPackage';
            name: string;
            schemas: {
                __typename?: 'ADOPSchema';
                contract_schema: string;
                execute: string;
                instantiate: string;
                query: string;
                receive: {
                    __typename?: 'ADOPSchemaReceive';
                    cw20: string;
                    cw721: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedAdopQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedAdopQuery = {
    __typename?: 'Query';
    ADOP: {
        __typename?: 'ADOPQuery';
        adoTypes: Array<string>;
    };
};
export type ICodegenGeneratedAccountsAssetsComponentsQueryVariables = Exact<{
    accounts_assets_adoType?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_appContract?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_instantiateOwner?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_kernel?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_limit: Scalars['Int']['input'];
    accounts_assets_memo?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_offset: Scalars['Int']['input'];
    accounts_assets_orderBy?: InputMaybe<IAndrOrderBy>;
    accounts_assets_owner?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_ownershipRequest?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_search?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_walletAddress: Scalars['String']['input'];
    accounts_assets_assets_components_componentType?: InputMaybe<IAdoType>;
    accounts_assets_assets_components_limit: Scalars['Int']['input'];
    accounts_assets_assets_components_offset: Scalars['Int']['input'];
}>;
export type ICodegenGeneratedAccountsAssetsComponentsQuery = {
    __typename?: 'Query';
    accounts: {
        __typename?: 'AccountsQuery';
        assets: Array<{
            __typename?: 'AssetResult';
            components: Array<{
                __typename?: 'Component';
                address: string;
                ado_type: string;
                instantiate_msg: string;
                name: string;
            }>;
        }>;
    };
};
export type ICodegenGeneratedAccountsAssetsQueryVariables = Exact<{
    accounts_assets_adoType?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_appContract?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_instantiateOwner?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_kernel?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_limit: Scalars['Int']['input'];
    accounts_assets_memo?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_offset: Scalars['Int']['input'];
    accounts_assets_orderBy?: InputMaybe<IAndrOrderBy>;
    accounts_assets_owner?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_ownershipRequest?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_search?: InputMaybe<Scalars['String']['input']>;
    accounts_assets_walletAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedAccountsAssetsQuery = {
    __typename?: 'Query';
    accounts: {
        __typename?: 'AccountsQuery';
        assets: Array<{
            __typename?: 'AssetResult';
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
        }>;
    };
};
export type ICodegenGeneratedAccountsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedAccountsQuery = {
    __typename?: 'Query';
    accounts: {
        __typename?: 'AccountsQuery';
        wallets: string;
    };
};
export type ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery = {
    __typename?: 'Query';
    chainConfigs: {
        __typename?: 'ChainConfigQuery';
        allConfigs: Array<{
            __typename?: 'ChainConfig';
            iconUrls: {
                __typename?: 'IconUrl';
                lg: string;
                sm: string;
            };
        }>;
    };
};
export type ICodegenGeneratedChainconfigsAllconfigsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainconfigsAllconfigsQuery = {
    __typename?: 'Query';
    chainConfigs: {
        __typename?: 'ChainConfigQuery';
        allConfigs: Array<{
            __typename?: 'ChainConfig';
            addressPrefix: string;
            blockExplorerAddressPages: Array<string>;
            blockExplorerTxPages: Array<string>;
            chainId: string;
            chainName: string;
            chainType: string;
            chainUrl: string;
            defaultFee: string;
            enabled: boolean;
            kernelAddress: string;
            name: string;
            registryAddress: string;
            iconUrls: {
                __typename?: 'IconUrl';
                lg: string;
                sm: string;
            };
        }>;
    };
};
export type ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery = {
    __typename?: 'Query';
    chainConfigs: {
        __typename?: 'ChainConfigQuery';
        allStoredConfigs: Array<{
            __typename?: 'ChainConfig';
            iconUrls: {
                __typename?: 'IconUrl';
                lg: string;
                sm: string;
            };
        }>;
    };
};
export type ICodegenGeneratedChainconfigsAllstoredconfigsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainconfigsAllstoredconfigsQuery = {
    __typename?: 'Query';
    chainConfigs: {
        __typename?: 'ChainConfigQuery';
        allStoredConfigs: Array<{
            __typename?: 'ChainConfig';
            addressPrefix: string;
            blockExplorerAddressPages: Array<string>;
            blockExplorerTxPages: Array<string>;
            chainId: string;
            chainName: string;
            chainType: string;
            chainUrl: string;
            defaultFee: string;
            enabled: boolean;
            kernelAddress: string;
            name: string;
            registryAddress: string;
            iconUrls: {
                __typename?: 'IconUrl';
                lg: string;
                sm: string;
            };
        }>;
    };
};
export type ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables = Exact<{
    chainConfigs_config_identifier: Scalars['String']['input'];
}>;
export type ICodegenGeneratedChainconfigsConfigIconurlsQuery = {
    __typename?: 'Query';
    chainConfigs: {
        __typename?: 'ChainConfigQuery';
        config: {
            __typename?: 'ChainConfig';
            iconUrls: {
                __typename?: 'IconUrl';
                lg: string;
                sm: string;
            };
        };
    };
};
export type ICodegenGeneratedChainconfigsConfigQueryVariables = Exact<{
    chainConfigs_config_identifier: Scalars['String']['input'];
}>;
export type ICodegenGeneratedChainconfigsConfigQuery = {
    __typename?: 'Query';
    chainConfigs: {
        __typename?: 'ChainConfigQuery';
        config: {
            __typename?: 'ChainConfig';
            addressPrefix: string;
            blockExplorerAddressPages: Array<string>;
            blockExplorerTxPages: Array<string>;
            chainId: string;
            chainName: string;
            chainType: string;
            chainUrl: string;
            defaultFee: string;
            enabled: boolean;
            kernelAddress: string;
            name: string;
            registryAddress: string;
            iconUrls: {
                __typename?: 'IconUrl';
                lg: string;
                sm: string;
            };
        };
    };
};
export type ICodegenGeneratedChainconfigsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainconfigsQuery = {
    __typename?: 'Query';
    chainConfigs: {
        __typename?: 'ChainConfigQuery';
        allConfigs: Array<{
            __typename?: 'ChainConfig';
            addressPrefix: string;
            blockExplorerAddressPages: Array<string>;
            blockExplorerTxPages: Array<string>;
            chainId: string;
            chainName: string;
            chainType: string;
            chainUrl: string;
            defaultFee: string;
            enabled: boolean;
            kernelAddress: string;
            name: string;
            registryAddress: string;
            iconUrls: {
                __typename?: 'IconUrl';
                lg: string;
                sm: string;
            };
        }>;
        allStoredConfigs: Array<{
            __typename?: 'ChainConfig';
            addressPrefix: string;
            blockExplorerAddressPages: Array<string>;
            blockExplorerTxPages: Array<string>;
            chainId: string;
            chainName: string;
            chainType: string;
            chainUrl: string;
            defaultFee: string;
            enabled: boolean;
            kernelAddress: string;
            name: string;
            registryAddress: string;
            iconUrls: {
                __typename?: 'IconUrl';
                lg: string;
                sm: string;
            };
        }>;
    };
};
export type ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        allConfigs: Array<{
            __typename?: 'KeplrConfig';
            bech32Config: {
                __typename?: 'Bech32Config';
                bech32PrefixAccAddr: string;
                bech32PrefixAccPub: string;
                bech32PrefixConsAddr: string;
                bech32PrefixConsPub: string;
                bech32PrefixValAddr: string;
                bech32PrefixValPub: string;
            };
        }>;
    };
};
export type ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedKeplrconfigsAllconfigsBip44Query = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        allConfigs: Array<{
            __typename?: 'KeplrConfig';
            bip44: {
                __typename?: 'Bip44';
                coinType: number;
            };
        }>;
    };
};
export type ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        allConfigs: Array<{
            __typename?: 'KeplrConfig';
            currencies: Array<{
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            }>;
        }>;
    };
};
export type ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        allConfigs: Array<{
            __typename?: 'KeplrConfig';
            feeCurrencies: Array<{
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            }>;
        }>;
    };
};
export type ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        allConfigs: Array<{
            __typename?: 'KeplrConfig';
            gasPriceStep: {
                __typename?: 'GasPriceStep';
                average: number;
                high: number;
                low: number;
            };
        }>;
    };
};
export type ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        allConfigs: Array<{
            __typename?: 'KeplrConfig';
            stakeCurrency: {
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            };
        }>;
    };
};
export type ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedKeplrconfigsAllconfigsQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        allConfigs: Array<{
            __typename?: 'KeplrConfig';
            chainId: string;
            chainName: string;
            coinType: number;
            rest: string;
            rpc: string;
            bech32Config: {
                __typename?: 'Bech32Config';
                bech32PrefixAccAddr: string;
                bech32PrefixAccPub: string;
                bech32PrefixConsAddr: string;
                bech32PrefixConsPub: string;
                bech32PrefixValAddr: string;
                bech32PrefixValPub: string;
            };
            bip44: {
                __typename?: 'Bip44';
                coinType: number;
            };
            currencies: Array<{
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            }>;
            feeCurrencies: Array<{
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            }>;
            gasPriceStep: {
                __typename?: 'GasPriceStep';
                average: number;
                high: number;
                low: number;
            };
            stakeCurrency: {
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            };
        }>;
    };
};
export type ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables = Exact<{
    keplrConfigs_config_identifier: Scalars['String']['input'];
}>;
export type ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        config: {
            __typename?: 'KeplrConfig';
            bech32Config: {
                __typename?: 'Bech32Config';
                bech32PrefixAccAddr: string;
                bech32PrefixAccPub: string;
                bech32PrefixConsAddr: string;
                bech32PrefixConsPub: string;
                bech32PrefixValAddr: string;
                bech32PrefixValPub: string;
            };
        };
    };
};
export type ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables = Exact<{
    keplrConfigs_config_identifier: Scalars['String']['input'];
}>;
export type ICodegenGeneratedKeplrconfigsConfigBip44Query = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        config: {
            __typename?: 'KeplrConfig';
            bip44: {
                __typename?: 'Bip44';
                coinType: number;
            };
        };
    };
};
export type ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables = Exact<{
    keplrConfigs_config_identifier: Scalars['String']['input'];
}>;
export type ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        config: {
            __typename?: 'KeplrConfig';
            currencies: Array<{
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            }>;
        };
    };
};
export type ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables = Exact<{
    keplrConfigs_config_identifier: Scalars['String']['input'];
}>;
export type ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        config: {
            __typename?: 'KeplrConfig';
            feeCurrencies: Array<{
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            }>;
        };
    };
};
export type ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables = Exact<{
    keplrConfigs_config_identifier: Scalars['String']['input'];
}>;
export type ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        config: {
            __typename?: 'KeplrConfig';
            gasPriceStep: {
                __typename?: 'GasPriceStep';
                average: number;
                high: number;
                low: number;
            };
        };
    };
};
export type ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables = Exact<{
    keplrConfigs_config_identifier: Scalars['String']['input'];
}>;
export type ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        config: {
            __typename?: 'KeplrConfig';
            stakeCurrency: {
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            };
        };
    };
};
export type ICodegenGeneratedKeplrconfigsConfigQueryVariables = Exact<{
    keplrConfigs_config_identifier: Scalars['String']['input'];
}>;
export type ICodegenGeneratedKeplrconfigsConfigQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        config: {
            __typename?: 'KeplrConfig';
            chainId: string;
            chainName: string;
            coinType: number;
            rest: string;
            rpc: string;
            bech32Config: {
                __typename?: 'Bech32Config';
                bech32PrefixAccAddr: string;
                bech32PrefixAccPub: string;
                bech32PrefixConsAddr: string;
                bech32PrefixConsPub: string;
                bech32PrefixValAddr: string;
                bech32PrefixValPub: string;
            };
            bip44: {
                __typename?: 'Bip44';
                coinType: number;
            };
            currencies: Array<{
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            }>;
            feeCurrencies: Array<{
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            }>;
            gasPriceStep: {
                __typename?: 'GasPriceStep';
                average: number;
                high: number;
                low: number;
            };
            stakeCurrency: {
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            };
        };
    };
};
export type ICodegenGeneratedKeplrconfigsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedKeplrconfigsQuery = {
    __typename?: 'Query';
    keplrConfigs: {
        __typename?: 'KeplrConfigQuery';
        allConfigs: Array<{
            __typename?: 'KeplrConfig';
            chainId: string;
            chainName: string;
            coinType: number;
            rest: string;
            rpc: string;
            bech32Config: {
                __typename?: 'Bech32Config';
                bech32PrefixAccAddr: string;
                bech32PrefixAccPub: string;
                bech32PrefixConsAddr: string;
                bech32PrefixConsPub: string;
                bech32PrefixValAddr: string;
                bech32PrefixValPub: string;
            };
            bip44: {
                __typename?: 'Bip44';
                coinType: number;
            };
            currencies: Array<{
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            }>;
            feeCurrencies: Array<{
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            }>;
            gasPriceStep: {
                __typename?: 'GasPriceStep';
                average: number;
                high: number;
                low: number;
            };
            stakeCurrency: {
                __typename?: 'Currency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoId: string;
                coinMinimalDenom: string;
            };
        }>;
    };
};
export type ICodegenGeneratedTxByaccountEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByaccountEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byAccount: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByaccountEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByaccountEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byAccount: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByaccountMsgresponsesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByaccountMsgresponsesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byAccount: Array<{
            __typename?: 'TxInfo';
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byAccount: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByaccountTxlogEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByaccountTxlogEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byAccount: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByaccountTxlogQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByaccountTxlogQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byAccount: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByaccountQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByaccountQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byAccount: Array<{
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
            txIndex: number;
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBycontractEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byContract_address: Scalars['String']['input'];
    tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedTxBycontractEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byContract: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBycontractEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byContract_address: Scalars['String']['input'];
    tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedTxBycontractEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byContract: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBycontractMsgresponsesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byContract_address: Scalars['String']['input'];
    tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedTxBycontractMsgresponsesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byContract: Array<{
            __typename?: 'TxInfo';
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byContract_address: Scalars['String']['input'];
    tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byContract: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBycontractTxlogEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byContract_address: Scalars['String']['input'];
    tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedTxBycontractTxlogEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byContract: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBycontractTxlogQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byContract_address: Scalars['String']['input'];
    tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedTxBycontractTxlogQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byContract: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBycontractQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byContract_address: Scalars['String']['input'];
    tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedTxBycontractQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byContract: Array<{
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
            txIndex: number;
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByhashEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHash_hash: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByhashEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHash: {
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        };
    };
};
export type ICodegenGeneratedTxByhashEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHash_hash: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByhashEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHash: {
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        };
    };
};
export type ICodegenGeneratedTxByhashMsgresponsesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHash_hash: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByhashMsgresponsesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHash: {
            __typename?: 'TxInfo';
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
        };
    };
};
export type ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHash_hash: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByhashTxlogEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHash: {
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        };
    };
};
export type ICodegenGeneratedTxByhashTxlogEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHash_hash: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByhashTxlogEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHash: {
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        };
    };
};
export type ICodegenGeneratedTxByhashTxlogQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHash_hash: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByhashTxlogQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHash: {
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        };
    };
};
export type ICodegenGeneratedTxByhashQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHash_hash: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByhashQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHash: {
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
            txIndex: number;
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        };
    };
};
export type ICodegenGeneratedTxByheightEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHeight_height: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedTxByheightEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHeight: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByheightEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHeight_height: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedTxByheightEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHeight: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByheightMsgresponsesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHeight_height: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedTxByheightMsgresponsesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHeight: Array<{
            __typename?: 'TxInfo';
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHeight_height: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedTxByheightTxlogEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHeight: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByheightTxlogEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHeight_height: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedTxByheightTxlogEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHeight: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByheightTxlogQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHeight_height: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedTxByheightTxlogQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHeight: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByheightQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byHeight_height: Scalars['Float']['input'];
}>;
export type ICodegenGeneratedTxByheightQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHeight: Array<{
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
            txIndex: number;
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByownerEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_walletAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByownerEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byOwner: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByownerEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_walletAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByownerEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byOwner: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByownerMsgresponsesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_walletAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByownerMsgresponsesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byOwner: Array<{
            __typename?: 'TxInfo';
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_walletAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByownerTxlogEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byOwner: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByownerTxlogEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_walletAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByownerTxlogEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byOwner: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByownerTxlogQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_walletAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByownerTxlogQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byOwner: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByownerQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byOwner_walletAddress: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByownerQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byOwner: Array<{
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
            txIndex: number;
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByrawstringEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byRawString_query: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByrawstringEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byRawString: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByrawstringEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byRawString_query: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByrawstringEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byRawString: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByrawstringMsgresponsesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byRawString_query: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByrawstringMsgresponsesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byRawString: Array<{
            __typename?: 'TxInfo';
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByrawstringTxlogEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byRawString_query: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByrawstringTxlogEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byRawString: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByrawstringTxlogEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byRawString_query: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByrawstringTxlogEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byRawString: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByrawstringTxlogQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byRawString_query: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByrawstringTxlogQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byRawString: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxByrawstringQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byRawString_query: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxByrawstringQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byRawString: Array<{
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
            txIndex: number;
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBytagEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_tags: Scalars['JSON']['input'];
}>;
export type ICodegenGeneratedTxBytagEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byTag: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBytagEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_tags: Scalars['JSON']['input'];
}>;
export type ICodegenGeneratedTxBytagEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byTag: Array<{
            __typename?: 'TxInfo';
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBytagMsgresponsesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_tags: Scalars['JSON']['input'];
}>;
export type ICodegenGeneratedTxBytagMsgresponsesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byTag: Array<{
            __typename?: 'TxInfo';
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_tags: Scalars['JSON']['input'];
}>;
export type ICodegenGeneratedTxBytagTxlogEventsAttributesQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byTag: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBytagTxlogEventsQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_tags: Scalars['JSON']['input'];
}>;
export type ICodegenGeneratedTxBytagTxlogEventsQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byTag: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBytagTxlogQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_tags: Scalars['JSON']['input'];
}>;
export type ICodegenGeneratedTxBytagTxlogQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byTag: Array<{
            __typename?: 'TxInfo';
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxBytagQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
    tx_byTag_tags: Scalars['JSON']['input'];
}>;
export type ICodegenGeneratedTxBytagQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byTag: Array<{
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
            txIndex: number;
            events: Array<{
                __typename?: 'TxEvent';
                type: string;
                attributes: Array<{
                    __typename?: 'TxEventAttribute';
                    key: string;
                    value: string;
                }>;
            }>;
            msgResponses: Array<{
                __typename?: 'TxMsgResponses';
                typeUrl: string;
                value: any;
            }>;
            txLog: Array<{
                __typename?: 'TxLog';
                events: Array<{
                    __typename?: 'TxEvent';
                    type: string;
                    attributes: Array<{
                        __typename?: 'TxEventAttribute';
                        key: string;
                        value: string;
                    }>;
                }>;
            }>;
        }>;
    };
};
export type ICodegenGeneratedTxQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTxQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        chainId: string;
    };
};
export type ICodegenGeneratedAdoaddedSubscriptionVariables = Exact<{
    filter: IAdoAddedSubscriptionInput;
}>;
export type ICodegenGeneratedAdoaddedSubscription = {
    __typename?: 'Subscription';
    adoAdded: {
        __typename?: 'Ado';
        address: string;
        adoType: string;
        appContract: string;
        chainId: string;
        instantiateHash: string;
        instantiateHeight: number;
        lastUpdatedHash: string;
        lastUpdatedHeight: number;
        minter: string;
        name: string;
        owner: string;
    };
};
export type ICodegenGeneratedAdoownerupdatedSubscriptionVariables = Exact<{
    filter: IAdoOwnerUpdatedSubscriptionInput;
}>;
export type ICodegenGeneratedAdoownerupdatedSubscription = {
    __typename?: 'Subscription';
    adoOwnerUpdated: {
        __typename?: 'Ado';
        address: string;
        adoType: string;
        appContract: string;
        chainId: string;
        instantiateHash: string;
        instantiateHeight: number;
        lastUpdatedHash: string;
        lastUpdatedHeight: number;
        minter: string;
        name: string;
        owner: string;
    };
};
export type ITxInfoFragment = {
    __typename?: 'TxInfo';
    code: number;
    gasUsed: number;
    gasWanted: number;
    hash: string;
    height: number;
    rawLog: string;
    tx: any;
};
export type ITxInfoFragmentVariables = Exact<{
    [key: string]: never;
}>;
export type ITxByAccountQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    sentFromOrTo: Scalars['String']['input'];
    minHeight?: InputMaybe<Scalars['Int']['input']>;
    maxHeight?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ITxByAccountQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byAccount: Array<{
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
        }>;
    };
};
export type ITxByContractQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    contractAddress: Scalars['String']['input'];
    minHeight?: InputMaybe<Scalars['Int']['input']>;
    maxHeight?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ITxByContractQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byContract: Array<{
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
        }>;
    };
};
export type ITxByHeightQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    height: Scalars['Float']['input'];
}>;
export type ITxByHeightQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHeight: Array<{
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
        }>;
    };
};
export type ITxByHashQueryVariables = Exact<{
    chainId: Scalars['String']['input'];
    hash: Scalars['String']['input'];
}>;
export type ITxByHashQuery = {
    __typename?: 'Query';
    tx: {
        __typename?: 'TxSearchResult';
        byHash: {
            __typename?: 'TxInfo';
            code: number;
            gasUsed: number;
            gasWanted: number;
            hash: string;
            height: number;
            rawLog: string;
            tx: any;
        };
    };
};
export declare const AndrFragmentFragmentDoc: Apollo.DocumentNode;
export declare const ComponentFragmentDoc: Apollo.DocumentNode;
export declare const AppComponentFragmentDoc: Apollo.DocumentNode;
export declare const Bech32configFragmentDoc: Apollo.DocumentNode;
export declare const CurrencyFragmentDoc: Apollo.DocumentNode;
export declare const KeplrConfigFragmentDoc: Apollo.DocumentNode;
export declare const ChainConfigFragmentDoc: Apollo.DocumentNode;
export declare const TxInfoFragmentDoc: Apollo.DocumentNode;
export declare const AddressListContainsAddressDocument: Apollo.DocumentNode;
/**
 * __useAddressListContainsAddressQuery__
 *
 * To run a query within a React component, call `useAddressListContainsAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddressListContainsAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddressListContainsAddressQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *      address: // value for 'address'
 *   },
 * });
 */
export declare function useAddressListContainsAddressQuery(baseOptions: Apollo.QueryHookOptions<IAddressListContainsAddressQuery, IAddressListContainsAddressQueryVariables>): Apollo.QueryResult<IAddressListContainsAddressQuery, Exact<{
    contractAddress: string;
    address: string;
}>>;
export declare function useAddressListContainsAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAddressListContainsAddressQuery, IAddressListContainsAddressQueryVariables>): Apollo.LazyQueryResultTuple<IAddressListContainsAddressQuery, Exact<{
    contractAddress: string;
    address: string;
}>>;
export type AddressListContainsAddressQueryHookResult = ReturnType<typeof useAddressListContainsAddressQuery>;
export type AddressListContainsAddressLazyQueryHookResult = ReturnType<typeof useAddressListContainsAddressLazyQuery>;
export type AddressListContainsAddressQueryResult = Apollo.QueryResult<IAddressListContainsAddressQuery, IAddressListContainsAddressQueryVariables>;
export declare function refetchAddressListContainsAddressQuery(variables: IAddressListContainsAddressQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
        address: string;
    }>;
};
export declare const AppConfigDocument: Apollo.DocumentNode;
/**
 * __useAppConfigQuery__
 *
 * To run a query within a React component, call `useAppConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppConfigQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useAppConfigQuery(baseOptions: Apollo.QueryHookOptions<IAppConfigQuery, IAppConfigQueryVariables>): Apollo.QueryResult<IAppConfigQuery, Exact<{
    contractAddress: string;
}>>;
export declare function useAppConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAppConfigQuery, IAppConfigQueryVariables>): Apollo.LazyQueryResultTuple<IAppConfigQuery, Exact<{
    contractAddress: string;
}>>;
export type AppConfigQueryHookResult = ReturnType<typeof useAppConfigQuery>;
export type AppConfigLazyQueryHookResult = ReturnType<typeof useAppConfigLazyQuery>;
export type AppConfigQueryResult = Apollo.QueryResult<IAppConfigQuery, IAppConfigQueryVariables>;
export declare function refetchAppConfigQuery(variables: IAppConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const AppComponentsDocument: Apollo.DocumentNode;
/**
 * __useAppComponentsQuery__
 *
 * To run a query within a React component, call `useAppComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppComponentsQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useAppComponentsQuery(baseOptions: Apollo.QueryHookOptions<IAppComponentsQuery, IAppComponentsQueryVariables>): Apollo.QueryResult<IAppComponentsQuery, Exact<{
    contractAddress: string;
}>>;
export declare function useAppComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAppComponentsQuery, IAppComponentsQueryVariables>): Apollo.LazyQueryResultTuple<IAppComponentsQuery, Exact<{
    contractAddress: string;
}>>;
export type AppComponentsQueryHookResult = ReturnType<typeof useAppComponentsQuery>;
export type AppComponentsLazyQueryHookResult = ReturnType<typeof useAppComponentsLazyQuery>;
export type AppComponentsQueryResult = Apollo.QueryResult<IAppComponentsQuery, IAppComponentsQueryVariables>;
export declare function refetchAppComponentsQuery(variables: IAppComponentsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const AppConfigAndComponentsDocument: Apollo.DocumentNode;
/**
 * __useAppConfigAndComponentsQuery__
 *
 * To run a query within a React component, call `useAppConfigAndComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppConfigAndComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppConfigAndComponentsQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useAppConfigAndComponentsQuery(baseOptions: Apollo.QueryHookOptions<IAppConfigAndComponentsQuery, IAppConfigAndComponentsQueryVariables>): Apollo.QueryResult<IAppConfigAndComponentsQuery, Exact<{
    contractAddress: string;
}>>;
export declare function useAppConfigAndComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAppConfigAndComponentsQuery, IAppConfigAndComponentsQueryVariables>): Apollo.LazyQueryResultTuple<IAppConfigAndComponentsQuery, Exact<{
    contractAddress: string;
}>>;
export type AppConfigAndComponentsQueryHookResult = ReturnType<typeof useAppConfigAndComponentsQuery>;
export type AppConfigAndComponentsLazyQueryHookResult = ReturnType<typeof useAppConfigAndComponentsLazyQuery>;
export type AppConfigAndComponentsQueryResult = Apollo.QueryResult<IAppConfigAndComponentsQuery, IAppConfigAndComponentsQueryVariables>;
export declare function refetchAppConfigAndComponentsQuery(variables: IAppConfigAndComponentsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const AssetsDocument: Apollo.DocumentNode;
/**
 * __useAssetsQuery__
 *
 * To run a query within a React component, call `useAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssetsQuery({
 *   variables: {
 *      walletAddress: // value for 'walletAddress'
 *      adoType: // value for 'adoType'
 *      appContract: // value for 'appContract'
 *      instantiateOwner: // value for 'instantiateOwner'
 *      kernel: // value for 'kernel'
 *      limit: // value for 'limit'
 *      memo: // value for 'memo'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      owner: // value for 'owner'
 *      ownershipRequest: // value for 'ownershipRequest'
 *      search: // value for 'search'
 *   },
 * });
 */
export declare function useAssetsQuery(baseOptions: Apollo.QueryHookOptions<IAssetsQuery, IAssetsQueryVariables>): Apollo.QueryResult<IAssetsQuery, Exact<{
    walletAddress: string;
    adoType?: InputMaybe<string>;
    appContract?: InputMaybe<string>;
    instantiateOwner?: InputMaybe<string>;
    kernel?: InputMaybe<string>;
    limit: number;
    memo?: InputMaybe<string>;
    offset: number;
    orderBy?: InputMaybe<IAndrOrderBy>;
    owner?: InputMaybe<string>;
    ownershipRequest?: InputMaybe<string>;
    search?: InputMaybe<string>;
}>>;
export declare function useAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAssetsQuery, IAssetsQueryVariables>): Apollo.LazyQueryResultTuple<IAssetsQuery, Exact<{
    walletAddress: string;
    adoType?: InputMaybe<string>;
    appContract?: InputMaybe<string>;
    instantiateOwner?: InputMaybe<string>;
    kernel?: InputMaybe<string>;
    limit: number;
    memo?: InputMaybe<string>;
    offset: number;
    orderBy?: InputMaybe<IAndrOrderBy>;
    owner?: InputMaybe<string>;
    ownershipRequest?: InputMaybe<string>;
    search?: InputMaybe<string>;
}>>;
export type AssetsQueryHookResult = ReturnType<typeof useAssetsQuery>;
export type AssetsLazyQueryHookResult = ReturnType<typeof useAssetsLazyQuery>;
export type AssetsQueryResult = Apollo.QueryResult<IAssetsQuery, IAssetsQueryVariables>;
export declare function refetchAssetsQuery(variables: IAssetsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        walletAddress: string;
        adoType?: InputMaybe<string>;
        appContract?: InputMaybe<string>;
        instantiateOwner?: InputMaybe<string>;
        kernel?: InputMaybe<string>;
        limit: number;
        memo?: InputMaybe<string>;
        offset: number;
        orderBy?: InputMaybe<IAndrOrderBy>;
        owner?: InputMaybe<string>;
        ownershipRequest?: InputMaybe<string>;
        search?: InputMaybe<string>;
    }>;
};
export declare const BaseAdoDocument: Apollo.DocumentNode;
/**
 * __useBaseAdoQuery__
 *
 * To run a query within a React component, call `useBaseAdoQuery` and pass it any options that fit your needs.
 * When your component renders, `useBaseAdoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBaseAdoQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useBaseAdoQuery(baseOptions: Apollo.QueryHookOptions<IBaseAdoQuery, IBaseAdoQueryVariables>): Apollo.QueryResult<IBaseAdoQuery, Exact<{
    contractAddress: string;
}>>;
export declare function useBaseAdoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IBaseAdoQuery, IBaseAdoQueryVariables>): Apollo.LazyQueryResultTuple<IBaseAdoQuery, Exact<{
    contractAddress: string;
}>>;
export type BaseAdoQueryHookResult = ReturnType<typeof useBaseAdoQuery>;
export type BaseAdoLazyQueryHookResult = ReturnType<typeof useBaseAdoLazyQuery>;
export type BaseAdoQueryResult = Apollo.QueryResult<IBaseAdoQuery, IBaseAdoQueryVariables>;
export declare function refetchBaseAdoQuery(variables: IBaseAdoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const MiniBaseAdoDocument: Apollo.DocumentNode;
/**
 * __useMiniBaseAdoQuery__
 *
 * To run a query within a React component, call `useMiniBaseAdoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMiniBaseAdoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMiniBaseAdoQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useMiniBaseAdoQuery(baseOptions: Apollo.QueryHookOptions<IMiniBaseAdoQuery, IMiniBaseAdoQueryVariables>): Apollo.QueryResult<IMiniBaseAdoQuery, Exact<{
    contractAddress: string;
}>>;
export declare function useMiniBaseAdoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMiniBaseAdoQuery, IMiniBaseAdoQueryVariables>): Apollo.LazyQueryResultTuple<IMiniBaseAdoQuery, Exact<{
    contractAddress: string;
}>>;
export type MiniBaseAdoQueryHookResult = ReturnType<typeof useMiniBaseAdoQuery>;
export type MiniBaseAdoLazyQueryHookResult = ReturnType<typeof useMiniBaseAdoLazyQuery>;
export type MiniBaseAdoQueryResult = Apollo.QueryResult<IMiniBaseAdoQuery, IMiniBaseAdoQueryVariables>;
export declare function refetchMiniBaseAdoQuery(variables: IMiniBaseAdoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const CrowdfundAvailableTokensDocument: Apollo.DocumentNode;
/**
 * __useCrowdfundAvailableTokensQuery__
 *
 * To run a query within a React component, call `useCrowdfundAvailableTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCrowdfundAvailableTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCrowdfundAvailableTokensQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useCrowdfundAvailableTokensQuery(baseOptions: Apollo.QueryHookOptions<ICrowdfundAvailableTokensQuery, ICrowdfundAvailableTokensQueryVariables>): Apollo.QueryResult<ICrowdfundAvailableTokensQuery, Exact<{
    contractAddress: string;
}>>;
export declare function useCrowdfundAvailableTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICrowdfundAvailableTokensQuery, ICrowdfundAvailableTokensQueryVariables>): Apollo.LazyQueryResultTuple<ICrowdfundAvailableTokensQuery, Exact<{
    contractAddress: string;
}>>;
export type CrowdfundAvailableTokensQueryHookResult = ReturnType<typeof useCrowdfundAvailableTokensQuery>;
export type CrowdfundAvailableTokensLazyQueryHookResult = ReturnType<typeof useCrowdfundAvailableTokensLazyQuery>;
export type CrowdfundAvailableTokensQueryResult = Apollo.QueryResult<ICrowdfundAvailableTokensQuery, ICrowdfundAvailableTokensQueryVariables>;
export declare function refetchCrowdfundAvailableTokensQuery(variables: ICrowdfundAvailableTokensQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const CrowdfundIsTokenAvailableDocument: Apollo.DocumentNode;
/**
 * __useCrowdfundIsTokenAvailableQuery__
 *
 * To run a query within a React component, call `useCrowdfundIsTokenAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useCrowdfundIsTokenAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCrowdfundIsTokenAvailableQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *      tokenId: // value for 'tokenId'
 *   },
 * });
 */
export declare function useCrowdfundIsTokenAvailableQuery(baseOptions: Apollo.QueryHookOptions<ICrowdfundIsTokenAvailableQuery, ICrowdfundIsTokenAvailableQueryVariables>): Apollo.QueryResult<ICrowdfundIsTokenAvailableQuery, Exact<{
    contractAddress: string;
    tokenId: string;
}>>;
export declare function useCrowdfundIsTokenAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICrowdfundIsTokenAvailableQuery, ICrowdfundIsTokenAvailableQueryVariables>): Apollo.LazyQueryResultTuple<ICrowdfundIsTokenAvailableQuery, Exact<{
    contractAddress: string;
    tokenId: string;
}>>;
export type CrowdfundIsTokenAvailableQueryHookResult = ReturnType<typeof useCrowdfundIsTokenAvailableQuery>;
export type CrowdfundIsTokenAvailableLazyQueryHookResult = ReturnType<typeof useCrowdfundIsTokenAvailableLazyQuery>;
export type CrowdfundIsTokenAvailableQueryResult = Apollo.QueryResult<ICrowdfundIsTokenAvailableQuery, ICrowdfundIsTokenAvailableQueryVariables>;
export declare function refetchCrowdfundIsTokenAvailableQuery(variables: ICrowdfundIsTokenAvailableQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
        tokenId: string;
    }>;
};
export declare const CrowdfundConfigDocument: Apollo.DocumentNode;
/**
 * __useCrowdfundConfigQuery__
 *
 * To run a query within a React component, call `useCrowdfundConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCrowdfundConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCrowdfundConfigQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useCrowdfundConfigQuery(baseOptions: Apollo.QueryHookOptions<ICrowdfundConfigQuery, ICrowdfundConfigQueryVariables>): Apollo.QueryResult<ICrowdfundConfigQuery, Exact<{
    contractAddress: string;
}>>;
export declare function useCrowdfundConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICrowdfundConfigQuery, ICrowdfundConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICrowdfundConfigQuery, Exact<{
    contractAddress: string;
}>>;
export type CrowdfundConfigQueryHookResult = ReturnType<typeof useCrowdfundConfigQuery>;
export type CrowdfundConfigLazyQueryHookResult = ReturnType<typeof useCrowdfundConfigLazyQuery>;
export type CrowdfundConfigQueryResult = Apollo.QueryResult<ICrowdfundConfigQuery, ICrowdfundConfigQueryVariables>;
export declare function refetchCrowdfundConfigQuery(variables: ICrowdfundConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const CrowdfundStateDocument: Apollo.DocumentNode;
/**
 * __useCrowdfundStateQuery__
 *
 * To run a query within a React component, call `useCrowdfundStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCrowdfundStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCrowdfundStateQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useCrowdfundStateQuery(baseOptions: Apollo.QueryHookOptions<ICrowdfundStateQuery, ICrowdfundStateQueryVariables>): Apollo.QueryResult<ICrowdfundStateQuery, Exact<{
    contractAddress: string;
}>>;
export declare function useCrowdfundStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICrowdfundStateQuery, ICrowdfundStateQueryVariables>): Apollo.LazyQueryResultTuple<ICrowdfundStateQuery, Exact<{
    contractAddress: string;
}>>;
export type CrowdfundStateQueryHookResult = ReturnType<typeof useCrowdfundStateQuery>;
export type CrowdfundStateLazyQueryHookResult = ReturnType<typeof useCrowdfundStateLazyQuery>;
export type CrowdfundStateQueryResult = Apollo.QueryResult<ICrowdfundStateQuery, ICrowdfundStateQueryVariables>;
export declare function refetchCrowdfundStateQuery(variables: ICrowdfundStateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const Cw20TokenInfoDocument: Apollo.DocumentNode;
/**
 * __useCw20TokenInfoQuery__
 *
 * To run a query within a React component, call `useCw20TokenInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCw20TokenInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCw20TokenInfoQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useCw20TokenInfoQuery(baseOptions: Apollo.QueryHookOptions<ICw20TokenInfoQuery, ICw20TokenInfoQueryVariables>): Apollo.QueryResult<ICw20TokenInfoQuery, Exact<{
    contractAddress: string;
}>>;
export declare function useCw20TokenInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICw20TokenInfoQuery, ICw20TokenInfoQueryVariables>): Apollo.LazyQueryResultTuple<ICw20TokenInfoQuery, Exact<{
    contractAddress: string;
}>>;
export type Cw20TokenInfoQueryHookResult = ReturnType<typeof useCw20TokenInfoQuery>;
export type Cw20TokenInfoLazyQueryHookResult = ReturnType<typeof useCw20TokenInfoLazyQuery>;
export type Cw20TokenInfoQueryResult = Apollo.QueryResult<ICw20TokenInfoQuery, ICw20TokenInfoQueryVariables>;
export declare function refetchCw20TokenInfoQuery(variables: ICw20TokenInfoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const Cw20Document: Apollo.DocumentNode;
/**
 * __useCw20Query__
 *
 * To run a query within a React component, call `useCw20Query` and pass it any options that fit your needs.
 * When your component renders, `useCw20Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCw20Query({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useCw20Query(baseOptions: Apollo.QueryHookOptions<ICw20Query, ICw20QueryVariables>): Apollo.QueryResult<ICw20Query, Exact<{
    contractAddress: string;
}>>;
export declare function useCw20LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICw20Query, ICw20QueryVariables>): Apollo.LazyQueryResultTuple<ICw20Query, Exact<{
    contractAddress: string;
}>>;
export type Cw20QueryHookResult = ReturnType<typeof useCw20Query>;
export type Cw20LazyQueryHookResult = ReturnType<typeof useCw20LazyQuery>;
export type Cw20QueryResult = Apollo.QueryResult<ICw20Query, ICw20QueryVariables>;
export declare function refetchCw20Query(variables: ICw20QueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const Cw721InfoDocument: Apollo.DocumentNode;
/**
 * __useCw721InfoQuery__
 *
 * To run a query within a React component, call `useCw721InfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCw721InfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCw721InfoQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export declare function useCw721InfoQuery(baseOptions: Apollo.QueryHookOptions<ICw721InfoQuery, ICw721InfoQueryVariables>): Apollo.QueryResult<ICw721InfoQuery, Exact<{
    contractAddress: string;
}>>;
export declare function useCw721InfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICw721InfoQuery, ICw721InfoQueryVariables>): Apollo.LazyQueryResultTuple<ICw721InfoQuery, Exact<{
    contractAddress: string;
}>>;
export type Cw721InfoQueryHookResult = ReturnType<typeof useCw721InfoQuery>;
export type Cw721InfoLazyQueryHookResult = ReturnType<typeof useCw721InfoLazyQuery>;
export type Cw721InfoQueryResult = Apollo.QueryResult<ICw721InfoQuery, ICw721InfoQueryVariables>;
export declare function refetchCw721InfoQuery(variables: ICw721InfoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contractAddress: string;
    }>;
};
export declare const ChainConfigDocument: Apollo.DocumentNode;
/**
 * __useChainConfigQuery__
 *
 * To run a query within a React component, call `useChainConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useChainConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChainConfigQuery({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export declare function useChainConfigQuery(baseOptions: Apollo.QueryHookOptions<IChainConfigQuery, IChainConfigQueryVariables>): Apollo.QueryResult<IChainConfigQuery, Exact<{
    identifier: string;
}>>;
export declare function useChainConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IChainConfigQuery, IChainConfigQueryVariables>): Apollo.LazyQueryResultTuple<IChainConfigQuery, Exact<{
    identifier: string;
}>>;
export type ChainConfigQueryHookResult = ReturnType<typeof useChainConfigQuery>;
export type ChainConfigLazyQueryHookResult = ReturnType<typeof useChainConfigLazyQuery>;
export type ChainConfigQueryResult = Apollo.QueryResult<IChainConfigQuery, IChainConfigQueryVariables>;
export declare function refetchChainConfigQuery(variables: IChainConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        identifier: string;
    }>;
};
export declare const AllChainConfigDocument: Apollo.DocumentNode;
/**
 * __useAllChainConfigQuery__
 *
 * To run a query within a React component, call `useAllChainConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllChainConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllChainConfigQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAllChainConfigQuery(baseOptions?: Apollo.QueryHookOptions<IAllChainConfigQuery, IAllChainConfigQueryVariables>): Apollo.QueryResult<IAllChainConfigQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllChainConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAllChainConfigQuery, IAllChainConfigQueryVariables>): Apollo.LazyQueryResultTuple<IAllChainConfigQuery, Exact<{
    [key: string]: never;
}>>;
export type AllChainConfigQueryHookResult = ReturnType<typeof useAllChainConfigQuery>;
export type AllChainConfigLazyQueryHookResult = ReturnType<typeof useAllChainConfigLazyQuery>;
export type AllChainConfigQueryResult = Apollo.QueryResult<IAllChainConfigQuery, IAllChainConfigQueryVariables>;
export declare function refetchAllChainConfigQuery(variables?: IAllChainConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const AllStoredChainConfigDocument: Apollo.DocumentNode;
/**
 * __useAllStoredChainConfigQuery__
 *
 * To run a query within a React component, call `useAllStoredChainConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStoredChainConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStoredChainConfigQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAllStoredChainConfigQuery(baseOptions?: Apollo.QueryHookOptions<IAllStoredChainConfigQuery, IAllStoredChainConfigQueryVariables>): Apollo.QueryResult<IAllStoredChainConfigQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllStoredChainConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAllStoredChainConfigQuery, IAllStoredChainConfigQueryVariables>): Apollo.LazyQueryResultTuple<IAllStoredChainConfigQuery, Exact<{
    [key: string]: never;
}>>;
export type AllStoredChainConfigQueryHookResult = ReturnType<typeof useAllStoredChainConfigQuery>;
export type AllStoredChainConfigLazyQueryHookResult = ReturnType<typeof useAllStoredChainConfigLazyQuery>;
export type AllStoredChainConfigQueryResult = Apollo.QueryResult<IAllStoredChainConfigQuery, IAllStoredChainConfigQueryVariables>;
export declare function refetchAllStoredChainConfigQuery(variables?: IAllStoredChainConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const KeplrConfigDocument: Apollo.DocumentNode;
/**
 * __useKeplrConfigQuery__
 *
 * To run a query within a React component, call `useKeplrConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeplrConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeplrConfigQuery({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export declare function useKeplrConfigQuery(baseOptions: Apollo.QueryHookOptions<IKeplrConfigQuery, IKeplrConfigQueryVariables>): Apollo.QueryResult<IKeplrConfigQuery, Exact<{
    identifier: string;
}>>;
export declare function useKeplrConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IKeplrConfigQuery, IKeplrConfigQueryVariables>): Apollo.LazyQueryResultTuple<IKeplrConfigQuery, Exact<{
    identifier: string;
}>>;
export type KeplrConfigQueryHookResult = ReturnType<typeof useKeplrConfigQuery>;
export type KeplrConfigLazyQueryHookResult = ReturnType<typeof useKeplrConfigLazyQuery>;
export type KeplrConfigQueryResult = Apollo.QueryResult<IKeplrConfigQuery, IKeplrConfigQueryVariables>;
export declare function refetchKeplrConfigQuery(variables: IKeplrConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        identifier: string;
    }>;
};
export declare const AllKeplrConfigDocument: Apollo.DocumentNode;
/**
 * __useAllKeplrConfigQuery__
 *
 * To run a query within a React component, call `useAllKeplrConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllKeplrConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllKeplrConfigQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAllKeplrConfigQuery(baseOptions?: Apollo.QueryHookOptions<IAllKeplrConfigQuery, IAllKeplrConfigQueryVariables>): Apollo.QueryResult<IAllKeplrConfigQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllKeplrConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAllKeplrConfigQuery, IAllKeplrConfigQueryVariables>): Apollo.LazyQueryResultTuple<IAllKeplrConfigQuery, Exact<{
    [key: string]: never;
}>>;
export type AllKeplrConfigQueryHookResult = ReturnType<typeof useAllKeplrConfigQuery>;
export type AllKeplrConfigLazyQueryHookResult = ReturnType<typeof useAllKeplrConfigLazyQuery>;
export type AllKeplrConfigQueryResult = Apollo.QueryResult<IAllKeplrConfigQuery, IAllKeplrConfigQueryVariables>;
export declare function refetchAllKeplrConfigQuery(variables?: IAllKeplrConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedAdoAddressListAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAddressListAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAddressListAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAddressListAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAddressListAndrQuery({
 *   variables: {
 *      ADO_address_list_address: // value for 'ADO_address_list_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAddressListAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAddressListAndrQuery, ICodegenGeneratedAdoAddressListAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAddressListAndrQuery, Exact<{
    ADO_address_list_address: string;
}>>;
export declare function useCodegenGeneratedAdoAddressListAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAddressListAndrQuery, ICodegenGeneratedAdoAddressListAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAddressListAndrQuery, Exact<{
    ADO_address_list_address: string;
}>>;
export type CodegenGeneratedAdoAddressListAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListAndrQuery>;
export type CodegenGeneratedAdoAddressListAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListAndrLazyQuery>;
export type CodegenGeneratedAdoAddressListAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAddressListAndrQuery, ICodegenGeneratedAdoAddressListAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoAddressListAndrQuery(variables: ICodegenGeneratedAdoAddressListAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_address_list_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAddressListIncludesaddressDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAddressListIncludesaddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAddressListIncludesaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAddressListIncludesaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAddressListIncludesaddressQuery({
 *   variables: {
 *      ADO_address_list_address: // value for 'ADO_address_list_address'
 *      ADO_address_list_address_list_includesAddress_address: // value for 'ADO_address_list_address_list_includesAddress_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAddressListIncludesaddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAddressListIncludesaddressQuery, ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAddressListIncludesaddressQuery, Exact<{
    ADO_address_list_address: string;
    ADO_address_list_address_list_includesAddress_address: string;
}>>;
export declare function useCodegenGeneratedAdoAddressListIncludesaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAddressListIncludesaddressQuery, ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAddressListIncludesaddressQuery, Exact<{
    ADO_address_list_address: string;
    ADO_address_list_address_list_includesAddress_address: string;
}>>;
export type CodegenGeneratedAdoAddressListIncludesaddressQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListIncludesaddressQuery>;
export type CodegenGeneratedAdoAddressListIncludesaddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListIncludesaddressLazyQuery>;
export type CodegenGeneratedAdoAddressListIncludesaddressQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAddressListIncludesaddressQuery, ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables>;
export declare function refetchCodegenGeneratedAdoAddressListIncludesaddressQuery(variables: ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_address_list_address: string;
        ADO_address_list_address_list_includesAddress_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAddressListDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAddressListQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAddressListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAddressListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAddressListQuery({
 *   variables: {
 *      ADO_address_list_address: // value for 'ADO_address_list_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAddressListQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAddressListQuery, ICodegenGeneratedAdoAddressListQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAddressListQuery, Exact<{
    ADO_address_list_address: string;
}>>;
export declare function useCodegenGeneratedAdoAddressListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAddressListQuery, ICodegenGeneratedAdoAddressListQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAddressListQuery, Exact<{
    ADO_address_list_address: string;
}>>;
export type CodegenGeneratedAdoAddressListQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListQuery>;
export type CodegenGeneratedAdoAddressListLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListLazyQuery>;
export type CodegenGeneratedAdoAddressListQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAddressListQuery, ICodegenGeneratedAdoAddressListQueryVariables>;
export declare function refetchCodegenGeneratedAdoAddressListQuery(variables: ICodegenGeneratedAdoAddressListQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_address_list_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAdoAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAdoAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAdoAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAdoAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAdoAndrQuery({
 *   variables: {
 *      ADO_ado_address: // value for 'ADO_ado_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAdoAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAdoAndrQuery, ICodegenGeneratedAdoAdoAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAdoAndrQuery, Exact<{
    ADO_ado_address: string;
}>>;
export declare function useCodegenGeneratedAdoAdoAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAdoAndrQuery, ICodegenGeneratedAdoAdoAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAdoAndrQuery, Exact<{
    ADO_ado_address: string;
}>>;
export type CodegenGeneratedAdoAdoAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdoAndrQuery>;
export type CodegenGeneratedAdoAdoAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdoAndrLazyQuery>;
export type CodegenGeneratedAdoAdoAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAdoAndrQuery, ICodegenGeneratedAdoAdoAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoAdoAndrQuery(variables: ICodegenGeneratedAdoAdoAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_ado_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAdoDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAdoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAdoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAdoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAdoQuery({
 *   variables: {
 *      ADO_ado_address: // value for 'ADO_ado_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAdoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAdoQuery, ICodegenGeneratedAdoAdoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAdoQuery, Exact<{
    ADO_ado_address: string;
}>>;
export declare function useCodegenGeneratedAdoAdoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAdoQuery, ICodegenGeneratedAdoAdoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAdoQuery, Exact<{
    ADO_ado_address: string;
}>>;
export type CodegenGeneratedAdoAdoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdoQuery>;
export type CodegenGeneratedAdoAdoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdoLazyQuery>;
export type CodegenGeneratedAdoAdoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAdoQuery, ICodegenGeneratedAdoAdoQueryVariables>;
export declare function refetchCodegenGeneratedAdoAdoQuery(variables: ICodegenGeneratedAdoAdoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_ado_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAdosmartDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAdosmartQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAdosmartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAdosmartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAdosmartQuery({
 *   variables: {
 *      ADO_adoSmart_address: // value for 'ADO_adoSmart_address'
 *      ADO_adoSmart_query: // value for 'ADO_adoSmart_query'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAdosmartQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAdosmartQuery, ICodegenGeneratedAdoAdosmartQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAdosmartQuery, Exact<{
    ADO_adoSmart_address: string;
    ADO_adoSmart_query: string;
}>>;
export declare function useCodegenGeneratedAdoAdosmartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAdosmartQuery, ICodegenGeneratedAdoAdosmartQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAdosmartQuery, Exact<{
    ADO_adoSmart_address: string;
    ADO_adoSmart_query: string;
}>>;
export type CodegenGeneratedAdoAdosmartQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdosmartQuery>;
export type CodegenGeneratedAdoAdosmartLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdosmartLazyQuery>;
export type CodegenGeneratedAdoAdosmartQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAdosmartQuery, ICodegenGeneratedAdoAdosmartQueryVariables>;
export declare function refetchCodegenGeneratedAdoAdosmartQuery(variables: ICodegenGeneratedAdoAdosmartQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_adoSmart_address: string;
        ADO_adoSmart_query: string;
    }>;
};
export declare const CodegenGeneratedAdoAppAddressesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAppAddressesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppAddressesQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAppAddressesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppAddressesQuery, ICodegenGeneratedAdoAppAddressesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAppAddressesQuery, Exact<{
    ADO_app_address: string;
}>>;
export declare function useCodegenGeneratedAdoAppAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppAddressesQuery, ICodegenGeneratedAdoAppAddressesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAppAddressesQuery, Exact<{
    ADO_app_address: string;
}>>;
export type CodegenGeneratedAdoAppAddressesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppAddressesQuery>;
export type CodegenGeneratedAdoAppAddressesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppAddressesLazyQuery>;
export type CodegenGeneratedAdoAppAddressesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppAddressesQuery, ICodegenGeneratedAdoAppAddressesQueryVariables>;
export declare function refetchCodegenGeneratedAdoAppAddressesQuery(variables: ICodegenGeneratedAdoAppAddressesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_app_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAppAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAppAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppAndrQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAppAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppAndrQuery, ICodegenGeneratedAdoAppAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAppAndrQuery, Exact<{
    ADO_app_address: string;
}>>;
export declare function useCodegenGeneratedAdoAppAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppAndrQuery, ICodegenGeneratedAdoAppAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAppAndrQuery, Exact<{
    ADO_app_address: string;
}>>;
export type CodegenGeneratedAdoAppAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppAndrQuery>;
export type CodegenGeneratedAdoAppAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppAndrLazyQuery>;
export type CodegenGeneratedAdoAppAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppAndrQuery, ICodegenGeneratedAdoAppAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoAppAndrQuery(variables: ICodegenGeneratedAdoAppAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_app_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAppComponentexistsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAppComponentexistsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppComponentexistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppComponentexistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppComponentexistsQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *      ADO_app_app_componentExists_name: // value for 'ADO_app_app_componentExists_name'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAppComponentexistsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppComponentexistsQuery, ICodegenGeneratedAdoAppComponentexistsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAppComponentexistsQuery, Exact<{
    ADO_app_address: string;
    ADO_app_app_componentExists_name: string;
}>>;
export declare function useCodegenGeneratedAdoAppComponentexistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppComponentexistsQuery, ICodegenGeneratedAdoAppComponentexistsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAppComponentexistsQuery, Exact<{
    ADO_app_address: string;
    ADO_app_app_componentExists_name: string;
}>>;
export type CodegenGeneratedAdoAppComponentexistsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppComponentexistsQuery>;
export type CodegenGeneratedAdoAppComponentexistsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppComponentexistsLazyQuery>;
export type CodegenGeneratedAdoAppComponentexistsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppComponentexistsQuery, ICodegenGeneratedAdoAppComponentexistsQueryVariables>;
export declare function refetchCodegenGeneratedAdoAppComponentexistsQuery(variables: ICodegenGeneratedAdoAppComponentexistsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_app_address: string;
        ADO_app_app_componentExists_name: string;
    }>;
};
export declare const CodegenGeneratedAdoAppComponentsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAppComponentsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppComponentsQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAppComponentsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppComponentsQuery, ICodegenGeneratedAdoAppComponentsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAppComponentsQuery, Exact<{
    ADO_app_address: string;
}>>;
export declare function useCodegenGeneratedAdoAppComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppComponentsQuery, ICodegenGeneratedAdoAppComponentsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAppComponentsQuery, Exact<{
    ADO_app_address: string;
}>>;
export type CodegenGeneratedAdoAppComponentsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppComponentsQuery>;
export type CodegenGeneratedAdoAppComponentsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppComponentsLazyQuery>;
export type CodegenGeneratedAdoAppComponentsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppComponentsQuery, ICodegenGeneratedAdoAppComponentsQueryVariables>;
export declare function refetchCodegenGeneratedAdoAppComponentsQuery(variables: ICodegenGeneratedAdoAppComponentsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_app_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAppConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAppConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppConfigQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAppConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppConfigQuery, ICodegenGeneratedAdoAppConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAppConfigQuery, Exact<{
    ADO_app_address: string;
}>>;
export declare function useCodegenGeneratedAdoAppConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppConfigQuery, ICodegenGeneratedAdoAppConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAppConfigQuery, Exact<{
    ADO_app_address: string;
}>>;
export type CodegenGeneratedAdoAppConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppConfigQuery>;
export type CodegenGeneratedAdoAppConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppConfigLazyQuery>;
export type CodegenGeneratedAdoAppConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppConfigQuery, ICodegenGeneratedAdoAppConfigQueryVariables>;
export declare function refetchCodegenGeneratedAdoAppConfigQuery(variables: ICodegenGeneratedAdoAppConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_app_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAppGetaddressDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAppGetaddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppGetaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppGetaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppGetaddressQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *      ADO_app_app_getAddress_name: // value for 'ADO_app_app_getAddress_name'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAppGetaddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppGetaddressQuery, ICodegenGeneratedAdoAppGetaddressQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAppGetaddressQuery, Exact<{
    ADO_app_address: string;
    ADO_app_app_getAddress_name: string;
}>>;
export declare function useCodegenGeneratedAdoAppGetaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppGetaddressQuery, ICodegenGeneratedAdoAppGetaddressQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAppGetaddressQuery, Exact<{
    ADO_app_address: string;
    ADO_app_app_getAddress_name: string;
}>>;
export type CodegenGeneratedAdoAppGetaddressQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppGetaddressQuery>;
export type CodegenGeneratedAdoAppGetaddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppGetaddressLazyQuery>;
export type CodegenGeneratedAdoAppGetaddressQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppGetaddressQuery, ICodegenGeneratedAdoAppGetaddressQueryVariables>;
export declare function refetchCodegenGeneratedAdoAppGetaddressQuery(variables: ICodegenGeneratedAdoAppGetaddressQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_app_address: string;
        ADO_app_app_getAddress_name: string;
    }>;
};
export declare const CodegenGeneratedAdoAppDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAppQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAppQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppQuery, ICodegenGeneratedAdoAppQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAppQuery, Exact<{
    ADO_app_address: string;
}>>;
export declare function useCodegenGeneratedAdoAppLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppQuery, ICodegenGeneratedAdoAppQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAppQuery, Exact<{
    ADO_app_address: string;
}>>;
export type CodegenGeneratedAdoAppQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppQuery>;
export type CodegenGeneratedAdoAppLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppLazyQuery>;
export type CodegenGeneratedAdoAppQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppQuery, ICodegenGeneratedAdoAppQueryVariables>;
export declare function refetchCodegenGeneratedAdoAppQuery(variables: ICodegenGeneratedAdoAppQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_app_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAuctionAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAuctionAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionAndrQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAuctionAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionAndrQuery, ICodegenGeneratedAdoAuctionAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAuctionAndrQuery, Exact<{
    ADO_auction_address: string;
}>>;
export declare function useCodegenGeneratedAdoAuctionAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionAndrQuery, ICodegenGeneratedAdoAuctionAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAuctionAndrQuery, Exact<{
    ADO_auction_address: string;
}>>;
export type CodegenGeneratedAdoAuctionAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAndrQuery>;
export type CodegenGeneratedAdoAuctionAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAndrLazyQuery>;
export type CodegenGeneratedAdoAuctionAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionAndrQuery, ICodegenGeneratedAdoAuctionAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoAuctionAndrQuery(variables: ICodegenGeneratedAdoAuctionAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_auction_address: string;
    }>;
};
export declare const CodegenGeneratedAdoAuctionAuctionidsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAuctionAuctionidsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionAuctionidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionAuctionidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionAuctionidsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_auctionIDs_tokenAddress: // value for 'ADO_auction_auction_auctionIDs_tokenAddress'
 *      ADO_auction_auction_auctionIDs_tokenId: // value for 'ADO_auction_auction_auctionIDs_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAuctionAuctionidsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionAuctionidsQuery, ICodegenGeneratedAdoAuctionAuctionidsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAuctionAuctionidsQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_auctionIDs_tokenAddress: string;
    ADO_auction_auction_auctionIDs_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoAuctionAuctionidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionAuctionidsQuery, ICodegenGeneratedAdoAuctionAuctionidsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAuctionAuctionidsQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_auctionIDs_tokenAddress: string;
    ADO_auction_auction_auctionIDs_tokenId: string;
}>>;
export type CodegenGeneratedAdoAuctionAuctionidsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctionidsQuery>;
export type CodegenGeneratedAdoAuctionAuctionidsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctionidsLazyQuery>;
export type CodegenGeneratedAdoAuctionAuctionidsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionAuctionidsQuery, ICodegenGeneratedAdoAuctionAuctionidsQueryVariables>;
export declare function refetchCodegenGeneratedAdoAuctionAuctionidsQuery(variables: ICodegenGeneratedAdoAuctionAuctionidsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_auction_address: string;
        ADO_auction_auction_auctionIDs_tokenAddress: string;
        ADO_auction_auction_auctionIDs_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoAuctionAuctioninfosforaddressDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_auctionInfosForAddress_tokenAddress: // value for 'ADO_auction_auction_auctionInfosForAddress_tokenAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery, ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_auctionInfosForAddress_tokenAddress: string;
}>>;
export declare function useCodegenGeneratedAdoAuctionAuctioninfosforaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery, ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_auctionInfosForAddress_tokenAddress: string;
}>>;
export type CodegenGeneratedAdoAuctionAuctioninfosforaddressQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery>;
export type CodegenGeneratedAdoAuctionAuctioninfosforaddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctioninfosforaddressLazyQuery>;
export type CodegenGeneratedAdoAuctionAuctioninfosforaddressQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery, ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables>;
export declare function refetchCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery(variables: ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_auction_address: string;
        ADO_auction_auction_auctionInfosForAddress_tokenAddress: string;
    }>;
};
export declare const CodegenGeneratedAdoAuctionAuctionstateDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAuctionAuctionstateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionAuctionstateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionAuctionstateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionAuctionstateQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_auctionState_auctionId: // value for 'ADO_auction_auction_auctionState_auctionId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAuctionAuctionstateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionAuctionstateQuery, ICodegenGeneratedAdoAuctionAuctionstateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAuctionAuctionstateQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_auctionState_auctionId: number;
}>>;
export declare function useCodegenGeneratedAdoAuctionAuctionstateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionAuctionstateQuery, ICodegenGeneratedAdoAuctionAuctionstateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAuctionAuctionstateQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_auctionState_auctionId: number;
}>>;
export type CodegenGeneratedAdoAuctionAuctionstateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctionstateQuery>;
export type CodegenGeneratedAdoAuctionAuctionstateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctionstateLazyQuery>;
export type CodegenGeneratedAdoAuctionAuctionstateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionAuctionstateQuery, ICodegenGeneratedAdoAuctionAuctionstateQueryVariables>;
export declare function refetchCodegenGeneratedAdoAuctionAuctionstateQuery(variables: ICodegenGeneratedAdoAuctionAuctionstateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_auction_address: string;
        ADO_auction_auction_auctionState_auctionId: number;
    }>;
};
export declare const CodegenGeneratedAdoAuctionBidsBidsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAuctionBidsBidsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionBidsBidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionBidsBidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionBidsBidsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_bids_auctionId: // value for 'ADO_auction_auction_bids_auctionId'
 *      ADO_auction_auction_bids_options: // value for 'ADO_auction_auction_bids_options'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAuctionBidsBidsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionBidsBidsQuery, ICodegenGeneratedAdoAuctionBidsBidsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAuctionBidsBidsQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_bids_auctionId: number;
    ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export declare function useCodegenGeneratedAdoAuctionBidsBidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionBidsBidsQuery, ICodegenGeneratedAdoAuctionBidsBidsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAuctionBidsBidsQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_bids_auctionId: number;
    ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export type CodegenGeneratedAdoAuctionBidsBidsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionBidsBidsQuery>;
export type CodegenGeneratedAdoAuctionBidsBidsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionBidsBidsLazyQuery>;
export type CodegenGeneratedAdoAuctionBidsBidsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionBidsBidsQuery, ICodegenGeneratedAdoAuctionBidsBidsQueryVariables>;
export declare function refetchCodegenGeneratedAdoAuctionBidsBidsQuery(variables: ICodegenGeneratedAdoAuctionBidsBidsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_auction_address: string;
        ADO_auction_auction_bids_auctionId: number;
        ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
    }>;
};
export declare const CodegenGeneratedAdoAuctionBidsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAuctionBidsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionBidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionBidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionBidsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_bids_auctionId: // value for 'ADO_auction_auction_bids_auctionId'
 *      ADO_auction_auction_bids_options: // value for 'ADO_auction_auction_bids_options'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAuctionBidsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionBidsQuery, ICodegenGeneratedAdoAuctionBidsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAuctionBidsQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_bids_auctionId: number;
    ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export declare function useCodegenGeneratedAdoAuctionBidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionBidsQuery, ICodegenGeneratedAdoAuctionBidsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAuctionBidsQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_bids_auctionId: number;
    ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export type CodegenGeneratedAdoAuctionBidsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionBidsQuery>;
export type CodegenGeneratedAdoAuctionBidsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionBidsLazyQuery>;
export type CodegenGeneratedAdoAuctionBidsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionBidsQuery, ICodegenGeneratedAdoAuctionBidsQueryVariables>;
export declare function refetchCodegenGeneratedAdoAuctionBidsQuery(variables: ICodegenGeneratedAdoAuctionBidsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_auction_address: string;
        ADO_auction_auction_bids_auctionId: number;
        ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
    }>;
};
export declare const CodegenGeneratedAdoAuctionLatestauctionstateDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAuctionLatestauctionstateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionLatestauctionstateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionLatestauctionstateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionLatestauctionstateQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_latestAuctionState_tokenAddress: // value for 'ADO_auction_auction_latestAuctionState_tokenAddress'
 *      ADO_auction_auction_latestAuctionState_tokenId: // value for 'ADO_auction_auction_latestAuctionState_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAuctionLatestauctionstateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionLatestauctionstateQuery, ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAuctionLatestauctionstateQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_latestAuctionState_tokenAddress: string;
    ADO_auction_auction_latestAuctionState_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoAuctionLatestauctionstateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionLatestauctionstateQuery, ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAuctionLatestauctionstateQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_latestAuctionState_tokenAddress: string;
    ADO_auction_auction_latestAuctionState_tokenId: string;
}>>;
export type CodegenGeneratedAdoAuctionLatestauctionstateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionLatestauctionstateQuery>;
export type CodegenGeneratedAdoAuctionLatestauctionstateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionLatestauctionstateLazyQuery>;
export type CodegenGeneratedAdoAuctionLatestauctionstateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionLatestauctionstateQuery, ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables>;
export declare function refetchCodegenGeneratedAdoAuctionLatestauctionstateQuery(variables: ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_auction_address: string;
        ADO_auction_auction_latestAuctionState_tokenAddress: string;
        ADO_auction_auction_latestAuctionState_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoAuctionSummaryfieldsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAuctionSummaryfieldsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionSummaryfieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionSummaryfieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionSummaryfieldsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_summaryFields_tokenAddress: // value for 'ADO_auction_auction_summaryFields_tokenAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAuctionSummaryfieldsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionSummaryfieldsQuery, ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAuctionSummaryfieldsQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_summaryFields_tokenAddress: string;
}>>;
export declare function useCodegenGeneratedAdoAuctionSummaryfieldsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionSummaryfieldsQuery, ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAuctionSummaryfieldsQuery, Exact<{
    ADO_auction_address: string;
    ADO_auction_auction_summaryFields_tokenAddress: string;
}>>;
export type CodegenGeneratedAdoAuctionSummaryfieldsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionSummaryfieldsQuery>;
export type CodegenGeneratedAdoAuctionSummaryfieldsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionSummaryfieldsLazyQuery>;
export type CodegenGeneratedAdoAuctionSummaryfieldsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionSummaryfieldsQuery, ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables>;
export declare function refetchCodegenGeneratedAdoAuctionSummaryfieldsQuery(variables: ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_auction_address: string;
        ADO_auction_auction_summaryFields_tokenAddress: string;
    }>;
};
export declare const CodegenGeneratedAdoAuctionDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoAuctionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoAuctionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionQuery, ICodegenGeneratedAdoAuctionQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoAuctionQuery, Exact<{
    ADO_auction_address: string;
}>>;
export declare function useCodegenGeneratedAdoAuctionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionQuery, ICodegenGeneratedAdoAuctionQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoAuctionQuery, Exact<{
    ADO_auction_address: string;
}>>;
export type CodegenGeneratedAdoAuctionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionQuery>;
export type CodegenGeneratedAdoAuctionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionLazyQuery>;
export type CodegenGeneratedAdoAuctionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionQuery, ICodegenGeneratedAdoAuctionQueryVariables>;
export declare function refetchCodegenGeneratedAdoAuctionQuery(variables: ICodegenGeneratedAdoAuctionQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_auction_address: string;
    }>;
};
export declare const CodegenGeneratedAdoChainidDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoChainidQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoChainidQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoChainidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoChainidQuery({
 *   variables: {
 *      ADO_chainId_address: // value for 'ADO_chainId_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoChainidQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoChainidQuery, ICodegenGeneratedAdoChainidQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoChainidQuery, Exact<{
    ADO_chainId_address: string;
}>>;
export declare function useCodegenGeneratedAdoChainidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoChainidQuery, ICodegenGeneratedAdoChainidQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoChainidQuery, Exact<{
    ADO_chainId_address: string;
}>>;
export type CodegenGeneratedAdoChainidQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoChainidQuery>;
export type CodegenGeneratedAdoChainidLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoChainidLazyQuery>;
export type CodegenGeneratedAdoChainidQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoChainidQuery, ICodegenGeneratedAdoChainidQueryVariables>;
export declare function refetchCodegenGeneratedAdoChainidQuery(variables: ICodegenGeneratedAdoChainidQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_chainId_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCrowdfundAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCrowdfundAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundAndrQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCrowdfundAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundAndrQuery, ICodegenGeneratedAdoCrowdfundAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundAndrQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export declare function useCodegenGeneratedAdoCrowdfundAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundAndrQuery, ICodegenGeneratedAdoCrowdfundAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCrowdfundAndrQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export type CodegenGeneratedAdoCrowdfundAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundAndrQuery>;
export type CodegenGeneratedAdoCrowdfundAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundAndrLazyQuery>;
export type CodegenGeneratedAdoCrowdfundAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundAndrQuery, ICodegenGeneratedAdoCrowdfundAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoCrowdfundAndrQuery(variables: ICodegenGeneratedAdoCrowdfundAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_crowdfund_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCrowdfundConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCrowdfundConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundConfigQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCrowdfundConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundConfigQuery, ICodegenGeneratedAdoCrowdfundConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundConfigQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export declare function useCodegenGeneratedAdoCrowdfundConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundConfigQuery, ICodegenGeneratedAdoCrowdfundConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCrowdfundConfigQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export type CodegenGeneratedAdoCrowdfundConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundConfigQuery>;
export type CodegenGeneratedAdoCrowdfundConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundConfigLazyQuery>;
export type CodegenGeneratedAdoCrowdfundConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundConfigQuery, ICodegenGeneratedAdoCrowdfundConfigQueryVariables>;
export declare function refetchCodegenGeneratedAdoCrowdfundConfigQuery(variables: ICodegenGeneratedAdoCrowdfundConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_crowdfund_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCrowdfundIstokenavailableDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCrowdfundIstokenavailableQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundIstokenavailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundIstokenavailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundIstokenavailableQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *      ADO_crowdfund_crowdfund_isTokenAvailable_tokenId: // value for 'ADO_crowdfund_crowdfund_isTokenAvailable_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCrowdfundIstokenavailableQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery, ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery, Exact<{
    ADO_crowdfund_address: string;
    ADO_crowdfund_crowdfund_isTokenAvailable_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCrowdfundIstokenavailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery, ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery, Exact<{
    ADO_crowdfund_address: string;
    ADO_crowdfund_crowdfund_isTokenAvailable_tokenId: string;
}>>;
export type CodegenGeneratedAdoCrowdfundIstokenavailableQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundIstokenavailableQuery>;
export type CodegenGeneratedAdoCrowdfundIstokenavailableLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundIstokenavailableLazyQuery>;
export type CodegenGeneratedAdoCrowdfundIstokenavailableQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery, ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables>;
export declare function refetchCodegenGeneratedAdoCrowdfundIstokenavailableQuery(variables: ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_crowdfund_address: string;
        ADO_crowdfund_crowdfund_isTokenAvailable_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCrowdfundStatePriceDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCrowdfundStatePriceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundStatePriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundStatePriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundStatePriceQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCrowdfundStatePriceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundStatePriceQuery, ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundStatePriceQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export declare function useCodegenGeneratedAdoCrowdfundStatePriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundStatePriceQuery, ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCrowdfundStatePriceQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export type CodegenGeneratedAdoCrowdfundStatePriceQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundStatePriceQuery>;
export type CodegenGeneratedAdoCrowdfundStatePriceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundStatePriceLazyQuery>;
export type CodegenGeneratedAdoCrowdfundStatePriceQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundStatePriceQuery, ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables>;
export declare function refetchCodegenGeneratedAdoCrowdfundStatePriceQuery(variables: ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_crowdfund_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCrowdfundStateRecipientDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCrowdfundStateRecipientQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundStateRecipientQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundStateRecipientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundStateRecipientQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCrowdfundStateRecipientQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundStateRecipientQuery, ICodegenGeneratedAdoCrowdfundStateRecipientQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundStateRecipientQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export declare function useCodegenGeneratedAdoCrowdfundStateRecipientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundStateRecipientQuery, ICodegenGeneratedAdoCrowdfundStateRecipientQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCrowdfundStateRecipientQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export type CodegenGeneratedAdoCrowdfundStateRecipientQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundStateRecipientQuery>;
export type CodegenGeneratedAdoCrowdfundStateRecipientLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundStateRecipientLazyQuery>;
export type CodegenGeneratedAdoCrowdfundStateRecipientQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundStateRecipientQuery, ICodegenGeneratedAdoCrowdfundStateRecipientQueryVariables>;
export declare function refetchCodegenGeneratedAdoCrowdfundStateRecipientQuery(variables: ICodegenGeneratedAdoCrowdfundStateRecipientQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_crowdfund_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCrowdfundStateDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCrowdfundStateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundStateQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCrowdfundStateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundStateQuery, ICodegenGeneratedAdoCrowdfundStateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundStateQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export declare function useCodegenGeneratedAdoCrowdfundStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundStateQuery, ICodegenGeneratedAdoCrowdfundStateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCrowdfundStateQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export type CodegenGeneratedAdoCrowdfundStateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundStateQuery>;
export type CodegenGeneratedAdoCrowdfundStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundStateLazyQuery>;
export type CodegenGeneratedAdoCrowdfundStateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundStateQuery, ICodegenGeneratedAdoCrowdfundStateQueryVariables>;
export declare function refetchCodegenGeneratedAdoCrowdfundStateQuery(variables: ICodegenGeneratedAdoCrowdfundStateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_crowdfund_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCrowdfundDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCrowdfundQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCrowdfundQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundQuery, ICodegenGeneratedAdoCrowdfundQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export declare function useCodegenGeneratedAdoCrowdfundLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundQuery, ICodegenGeneratedAdoCrowdfundQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCrowdfundQuery, Exact<{
    ADO_crowdfund_address: string;
}>>;
export type CodegenGeneratedAdoCrowdfundQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundQuery>;
export type CodegenGeneratedAdoCrowdfundLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundLazyQuery>;
export type CodegenGeneratedAdoCrowdfundQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundQuery, ICodegenGeneratedAdoCrowdfundQueryVariables>;
export declare function refetchCodegenGeneratedAdoCrowdfundQuery(variables: ICodegenGeneratedAdoCrowdfundQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_crowdfund_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20AllaccountsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20AllaccountsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AllaccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AllaccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AllaccountsQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_allAccounts_options: // value for 'ADO_cw20_cw20_allAccounts_options'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20AllaccountsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AllaccountsQuery, ICodegenGeneratedAdoCw20AllaccountsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20AllaccountsQuery, Exact<{
    ADO_cw20_address: string;
    ADO_cw20_cw20_allAccounts_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export declare function useCodegenGeneratedAdoCw20AllaccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AllaccountsQuery, ICodegenGeneratedAdoCw20AllaccountsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20AllaccountsQuery, Exact<{
    ADO_cw20_address: string;
    ADO_cw20_cw20_allAccounts_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export type CodegenGeneratedAdoCw20AllaccountsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllaccountsQuery>;
export type CodegenGeneratedAdoCw20AllaccountsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllaccountsLazyQuery>;
export type CodegenGeneratedAdoCw20AllaccountsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AllaccountsQuery, ICodegenGeneratedAdoCw20AllaccountsQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20AllaccountsQuery(variables: ICodegenGeneratedAdoCw20AllaccountsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
        ADO_cw20_cw20_allAccounts_options?: InputMaybe<IAndrSearchOptions>;
    }>;
};
export declare const CodegenGeneratedAdoCw20AllallowancesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20AllallowancesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AllallowancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AllallowancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AllallowancesQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_allAllowances_options: // value for 'ADO_cw20_cw20_allAllowances_options'
 *      ADO_cw20_cw20_allAllowances_owner: // value for 'ADO_cw20_cw20_allAllowances_owner'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20AllallowancesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AllallowancesQuery, ICodegenGeneratedAdoCw20AllallowancesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20AllallowancesQuery, Exact<{
    ADO_cw20_address: string;
    ADO_cw20_cw20_allAllowances_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw20_cw20_allAllowances_owner: string;
}>>;
export declare function useCodegenGeneratedAdoCw20AllallowancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AllallowancesQuery, ICodegenGeneratedAdoCw20AllallowancesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20AllallowancesQuery, Exact<{
    ADO_cw20_address: string;
    ADO_cw20_cw20_allAllowances_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw20_cw20_allAllowances_owner: string;
}>>;
export type CodegenGeneratedAdoCw20AllallowancesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllallowancesQuery>;
export type CodegenGeneratedAdoCw20AllallowancesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllallowancesLazyQuery>;
export type CodegenGeneratedAdoCw20AllallowancesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AllallowancesQuery, ICodegenGeneratedAdoCw20AllallowancesQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20AllallowancesQuery(variables: ICodegenGeneratedAdoCw20AllallowancesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
        ADO_cw20_cw20_allAllowances_options?: InputMaybe<IAndrSearchOptions>;
        ADO_cw20_cw20_allAllowances_owner: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20AllspenderallowancesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20AllspenderallowancesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AllspenderallowancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AllspenderallowancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AllspenderallowancesQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_allSpenderAllowances_options: // value for 'ADO_cw20_cw20_allSpenderAllowances_options'
 *      ADO_cw20_cw20_allSpenderAllowances_spender: // value for 'ADO_cw20_cw20_allSpenderAllowances_spender'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20AllspenderallowancesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AllspenderallowancesQuery, ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20AllspenderallowancesQuery, Exact<{
    ADO_cw20_address: string;
    ADO_cw20_cw20_allSpenderAllowances_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw20_cw20_allSpenderAllowances_spender: string;
}>>;
export declare function useCodegenGeneratedAdoCw20AllspenderallowancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AllspenderallowancesQuery, ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20AllspenderallowancesQuery, Exact<{
    ADO_cw20_address: string;
    ADO_cw20_cw20_allSpenderAllowances_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw20_cw20_allSpenderAllowances_spender: string;
}>>;
export type CodegenGeneratedAdoCw20AllspenderallowancesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllspenderallowancesQuery>;
export type CodegenGeneratedAdoCw20AllspenderallowancesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllspenderallowancesLazyQuery>;
export type CodegenGeneratedAdoCw20AllspenderallowancesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AllspenderallowancesQuery, ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20AllspenderallowancesQuery(variables: ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
        ADO_cw20_cw20_allSpenderAllowances_options?: InputMaybe<IAndrSearchOptions>;
        ADO_cw20_cw20_allSpenderAllowances_spender: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20AllowanceDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20AllowanceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AllowanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AllowanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AllowanceQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_allowance_owner: // value for 'ADO_cw20_cw20_allowance_owner'
 *      ADO_cw20_cw20_allowance_spender: // value for 'ADO_cw20_cw20_allowance_spender'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20AllowanceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AllowanceQuery, ICodegenGeneratedAdoCw20AllowanceQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20AllowanceQuery, Exact<{
    ADO_cw20_address: string;
    ADO_cw20_cw20_allowance_owner: string;
    ADO_cw20_cw20_allowance_spender: string;
}>>;
export declare function useCodegenGeneratedAdoCw20AllowanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AllowanceQuery, ICodegenGeneratedAdoCw20AllowanceQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20AllowanceQuery, Exact<{
    ADO_cw20_address: string;
    ADO_cw20_cw20_allowance_owner: string;
    ADO_cw20_cw20_allowance_spender: string;
}>>;
export type CodegenGeneratedAdoCw20AllowanceQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllowanceQuery>;
export type CodegenGeneratedAdoCw20AllowanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllowanceLazyQuery>;
export type CodegenGeneratedAdoCw20AllowanceQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AllowanceQuery, ICodegenGeneratedAdoCw20AllowanceQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20AllowanceQuery(variables: ICodegenGeneratedAdoCw20AllowanceQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
        ADO_cw20_cw20_allowance_owner: string;
        ADO_cw20_cw20_allowance_spender: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20AndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20AndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AndrQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20AndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AndrQuery, ICodegenGeneratedAdoCw20AndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20AndrQuery, Exact<{
    ADO_cw20_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20AndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AndrQuery, ICodegenGeneratedAdoCw20AndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20AndrQuery, Exact<{
    ADO_cw20_address: string;
}>>;
export type CodegenGeneratedAdoCw20AndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AndrQuery>;
export type CodegenGeneratedAdoCw20AndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AndrLazyQuery>;
export type CodegenGeneratedAdoCw20AndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AndrQuery, ICodegenGeneratedAdoCw20AndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20AndrQuery(variables: ICodegenGeneratedAdoCw20AndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20BalanceDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20BalanceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20BalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20BalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20BalanceQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_balance_address: // value for 'ADO_cw20_cw20_balance_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20BalanceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20BalanceQuery, ICodegenGeneratedAdoCw20BalanceQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20BalanceQuery, Exact<{
    ADO_cw20_address: string;
    ADO_cw20_cw20_balance_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20BalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20BalanceQuery, ICodegenGeneratedAdoCw20BalanceQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20BalanceQuery, Exact<{
    ADO_cw20_address: string;
    ADO_cw20_cw20_balance_address: string;
}>>;
export type CodegenGeneratedAdoCw20BalanceQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20BalanceQuery>;
export type CodegenGeneratedAdoCw20BalanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20BalanceLazyQuery>;
export type CodegenGeneratedAdoCw20BalanceQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20BalanceQuery, ICodegenGeneratedAdoCw20BalanceQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20BalanceQuery(variables: ICodegenGeneratedAdoCw20BalanceQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
        ADO_cw20_cw20_balance_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20DownloadlogoDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20DownloadlogoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20DownloadlogoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20DownloadlogoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20DownloadlogoQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20DownloadlogoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20DownloadlogoQuery, ICodegenGeneratedAdoCw20DownloadlogoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20DownloadlogoQuery, Exact<{
    ADO_cw20_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20DownloadlogoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20DownloadlogoQuery, ICodegenGeneratedAdoCw20DownloadlogoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20DownloadlogoQuery, Exact<{
    ADO_cw20_address: string;
}>>;
export type CodegenGeneratedAdoCw20DownloadlogoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20DownloadlogoQuery>;
export type CodegenGeneratedAdoCw20DownloadlogoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20DownloadlogoLazyQuery>;
export type CodegenGeneratedAdoCw20DownloadlogoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20DownloadlogoQuery, ICodegenGeneratedAdoCw20DownloadlogoQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20DownloadlogoQuery(variables: ICodegenGeneratedAdoCw20DownloadlogoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20MarketinginfoDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20MarketinginfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20MarketinginfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20MarketinginfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20MarketinginfoQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20MarketinginfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20MarketinginfoQuery, ICodegenGeneratedAdoCw20MarketinginfoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20MarketinginfoQuery, Exact<{
    ADO_cw20_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20MarketinginfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20MarketinginfoQuery, ICodegenGeneratedAdoCw20MarketinginfoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20MarketinginfoQuery, Exact<{
    ADO_cw20_address: string;
}>>;
export type CodegenGeneratedAdoCw20MarketinginfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20MarketinginfoQuery>;
export type CodegenGeneratedAdoCw20MarketinginfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20MarketinginfoLazyQuery>;
export type CodegenGeneratedAdoCw20MarketinginfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20MarketinginfoQuery, ICodegenGeneratedAdoCw20MarketinginfoQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20MarketinginfoQuery(variables: ICodegenGeneratedAdoCw20MarketinginfoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20MinterDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20MinterQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20MinterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20MinterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20MinterQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20MinterQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20MinterQuery, ICodegenGeneratedAdoCw20MinterQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20MinterQuery, Exact<{
    ADO_cw20_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20MinterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20MinterQuery, ICodegenGeneratedAdoCw20MinterQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20MinterQuery, Exact<{
    ADO_cw20_address: string;
}>>;
export type CodegenGeneratedAdoCw20MinterQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20MinterQuery>;
export type CodegenGeneratedAdoCw20MinterLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20MinterLazyQuery>;
export type CodegenGeneratedAdoCw20MinterQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20MinterQuery, ICodegenGeneratedAdoCw20MinterQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20MinterQuery(variables: ICodegenGeneratedAdoCw20MinterQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20TokeninfoDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20TokeninfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20TokeninfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20TokeninfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20TokeninfoQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20TokeninfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20TokeninfoQuery, ICodegenGeneratedAdoCw20TokeninfoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20TokeninfoQuery, Exact<{
    ADO_cw20_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20TokeninfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20TokeninfoQuery, ICodegenGeneratedAdoCw20TokeninfoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20TokeninfoQuery, Exact<{
    ADO_cw20_address: string;
}>>;
export type CodegenGeneratedAdoCw20TokeninfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20TokeninfoQuery>;
export type CodegenGeneratedAdoCw20TokeninfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20TokeninfoLazyQuery>;
export type CodegenGeneratedAdoCw20TokeninfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20TokeninfoQuery, ICodegenGeneratedAdoCw20TokeninfoQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20TokeninfoQuery(variables: ICodegenGeneratedAdoCw20TokeninfoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20Document: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20Query__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20Query` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20Query({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20Query(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20Query, ICodegenGeneratedAdoCw20QueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20Query, Exact<{
    ADO_cw20_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20Query, ICodegenGeneratedAdoCw20QueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20Query, Exact<{
    ADO_cw20_address: string;
}>>;
export type CodegenGeneratedAdoCw20QueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20Query>;
export type CodegenGeneratedAdoCw20LazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20LazyQuery>;
export type CodegenGeneratedAdoCw20QueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20Query, ICodegenGeneratedAdoCw20QueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20Query(variables: ICodegenGeneratedAdoCw20QueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20ExchangeAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20ExchangeAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20ExchangeAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20ExchangeAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20ExchangeAndrQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20ExchangeAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20ExchangeAndrQuery, ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeAndrQuery, Exact<{
    ADO_cw20_exchange_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20ExchangeAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20ExchangeAndrQuery, ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20ExchangeAndrQuery, Exact<{
    ADO_cw20_exchange_address: string;
}>>;
export type CodegenGeneratedAdoCw20ExchangeAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeAndrQuery>;
export type CodegenGeneratedAdoCw20ExchangeAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeAndrLazyQuery>;
export type CodegenGeneratedAdoCw20ExchangeAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeAndrQuery, ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20ExchangeAndrQuery(variables: ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_exchange_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20ExchangeSaleDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20ExchangeSaleQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20ExchangeSaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20ExchangeSaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20ExchangeSaleQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *      ADO_cw20_exchange_cw20_exchange_sale_cw20: // value for 'ADO_cw20_exchange_cw20_exchange_sale_cw20'
 *      ADO_cw20_exchange_cw20_exchange_sale_native: // value for 'ADO_cw20_exchange_cw20_exchange_sale_native'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20ExchangeSaleQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20ExchangeSaleQuery, ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeSaleQuery, Exact<{
    ADO_cw20_exchange_address: string;
    ADO_cw20_exchange_cw20_exchange_sale_cw20?: InputMaybe<string>;
    ADO_cw20_exchange_cw20_exchange_sale_native?: InputMaybe<string>;
}>>;
export declare function useCodegenGeneratedAdoCw20ExchangeSaleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20ExchangeSaleQuery, ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20ExchangeSaleQuery, Exact<{
    ADO_cw20_exchange_address: string;
    ADO_cw20_exchange_cw20_exchange_sale_cw20?: InputMaybe<string>;
    ADO_cw20_exchange_cw20_exchange_sale_native?: InputMaybe<string>;
}>>;
export type CodegenGeneratedAdoCw20ExchangeSaleQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeSaleQuery>;
export type CodegenGeneratedAdoCw20ExchangeSaleLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeSaleLazyQuery>;
export type CodegenGeneratedAdoCw20ExchangeSaleQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeSaleQuery, ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20ExchangeSaleQuery(variables: ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_exchange_address: string;
        ADO_cw20_exchange_cw20_exchange_sale_cw20?: InputMaybe<string>;
        ADO_cw20_exchange_cw20_exchange_sale_native?: InputMaybe<string>;
    }>;
};
export declare const CodegenGeneratedAdoCw20ExchangeSaleassetsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *      ADO_cw20_exchange_cw20_exchange_saleAssets_options: // value for 'ADO_cw20_exchange_cw20_exchange_saleAssets_options'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery, ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery, Exact<{
    ADO_cw20_exchange_address: string;
    ADO_cw20_exchange_cw20_exchange_saleAssets_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export declare function useCodegenGeneratedAdoCw20ExchangeSaleassetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery, ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery, Exact<{
    ADO_cw20_exchange_address: string;
    ADO_cw20_exchange_cw20_exchange_saleAssets_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export type CodegenGeneratedAdoCw20ExchangeSaleassetsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery>;
export type CodegenGeneratedAdoCw20ExchangeSaleassetsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeSaleassetsLazyQuery>;
export type CodegenGeneratedAdoCw20ExchangeSaleassetsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery, ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20ExchangeSaleassetsQuery(variables: ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_exchange_address: string;
        ADO_cw20_exchange_cw20_exchange_saleAssets_options?: InputMaybe<IAndrSearchOptions>;
    }>;
};
export declare const CodegenGeneratedAdoCw20ExchangeDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20ExchangeQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20ExchangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20ExchangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20ExchangeQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20ExchangeQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20ExchangeQuery, ICodegenGeneratedAdoCw20ExchangeQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeQuery, Exact<{
    ADO_cw20_exchange_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20ExchangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20ExchangeQuery, ICodegenGeneratedAdoCw20ExchangeQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20ExchangeQuery, Exact<{
    ADO_cw20_exchange_address: string;
}>>;
export type CodegenGeneratedAdoCw20ExchangeQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeQuery>;
export type CodegenGeneratedAdoCw20ExchangeLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeLazyQuery>;
export type CodegenGeneratedAdoCw20ExchangeQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeQuery, ICodegenGeneratedAdoCw20ExchangeQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20ExchangeQuery(variables: ICodegenGeneratedAdoCw20ExchangeQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_exchange_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20StakingAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20StakingAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingAndrQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20StakingAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingAndrQuery, ICodegenGeneratedAdoCw20StakingAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingAndrQuery, Exact<{
    ADO_cw20_staking_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20StakingAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingAndrQuery, ICodegenGeneratedAdoCw20StakingAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20StakingAndrQuery, Exact<{
    ADO_cw20_staking_address: string;
}>>;
export type CodegenGeneratedAdoCw20StakingAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingAndrQuery>;
export type CodegenGeneratedAdoCw20StakingAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingAndrLazyQuery>;
export type CodegenGeneratedAdoCw20StakingAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingAndrQuery, ICodegenGeneratedAdoCw20StakingAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20StakingAndrQuery(variables: ICodegenGeneratedAdoCw20StakingAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_staking_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20StakingConfigStakingTokenDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery, ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery, Exact<{
    ADO_cw20_staking_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20StakingConfigStakingTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery, ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery, Exact<{
    ADO_cw20_staking_address: string;
}>>;
export type CodegenGeneratedAdoCw20StakingConfigStakingTokenQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery>;
export type CodegenGeneratedAdoCw20StakingConfigStakingTokenLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingConfigStakingTokenLazyQuery>;
export type CodegenGeneratedAdoCw20StakingConfigStakingTokenQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery, ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery(variables: ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_staking_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20StakingConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20StakingConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingConfigQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20StakingConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingConfigQuery, ICodegenGeneratedAdoCw20StakingConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingConfigQuery, Exact<{
    ADO_cw20_staking_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20StakingConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingConfigQuery, ICodegenGeneratedAdoCw20StakingConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20StakingConfigQuery, Exact<{
    ADO_cw20_staking_address: string;
}>>;
export type CodegenGeneratedAdoCw20StakingConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingConfigQuery>;
export type CodegenGeneratedAdoCw20StakingConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingConfigLazyQuery>;
export type CodegenGeneratedAdoCw20StakingConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingConfigQuery, ICodegenGeneratedAdoCw20StakingConfigQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20StakingConfigQuery(variables: ICodegenGeneratedAdoCw20StakingConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_staking_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20StakingStakerDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20StakingStakerQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingStakerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingStakerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingStakerQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *      ADO_cw20_staking_cw20_staking_staker_address: // value for 'ADO_cw20_staking_cw20_staking_staker_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20StakingStakerQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingStakerQuery, ICodegenGeneratedAdoCw20StakingStakerQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingStakerQuery, Exact<{
    ADO_cw20_staking_address: string;
    ADO_cw20_staking_cw20_staking_staker_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20StakingStakerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingStakerQuery, ICodegenGeneratedAdoCw20StakingStakerQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20StakingStakerQuery, Exact<{
    ADO_cw20_staking_address: string;
    ADO_cw20_staking_cw20_staking_staker_address: string;
}>>;
export type CodegenGeneratedAdoCw20StakingStakerQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStakerQuery>;
export type CodegenGeneratedAdoCw20StakingStakerLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStakerLazyQuery>;
export type CodegenGeneratedAdoCw20StakingStakerQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingStakerQuery, ICodegenGeneratedAdoCw20StakingStakerQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20StakingStakerQuery(variables: ICodegenGeneratedAdoCw20StakingStakerQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_staking_address: string;
        ADO_cw20_staking_cw20_staking_staker_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20StakingStakersDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20StakingStakersQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingStakersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingStakersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingStakersQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *      ADO_cw20_staking_cw20_staking_stakers_options: // value for 'ADO_cw20_staking_cw20_staking_stakers_options'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20StakingStakersQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingStakersQuery, ICodegenGeneratedAdoCw20StakingStakersQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingStakersQuery, Exact<{
    ADO_cw20_staking_address: string;
    ADO_cw20_staking_cw20_staking_stakers_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export declare function useCodegenGeneratedAdoCw20StakingStakersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingStakersQuery, ICodegenGeneratedAdoCw20StakingStakersQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20StakingStakersQuery, Exact<{
    ADO_cw20_staking_address: string;
    ADO_cw20_staking_cw20_staking_stakers_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export type CodegenGeneratedAdoCw20StakingStakersQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStakersQuery>;
export type CodegenGeneratedAdoCw20StakingStakersLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStakersLazyQuery>;
export type CodegenGeneratedAdoCw20StakingStakersQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingStakersQuery, ICodegenGeneratedAdoCw20StakingStakersQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20StakingStakersQuery(variables: ICodegenGeneratedAdoCw20StakingStakersQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_staking_address: string;
        ADO_cw20_staking_cw20_staking_stakers_options?: InputMaybe<IAndrSearchOptions>;
    }>;
};
export declare const CodegenGeneratedAdoCw20StakingStateDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20StakingStateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingStateQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20StakingStateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingStateQuery, ICodegenGeneratedAdoCw20StakingStateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingStateQuery, Exact<{
    ADO_cw20_staking_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20StakingStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingStateQuery, ICodegenGeneratedAdoCw20StakingStateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20StakingStateQuery, Exact<{
    ADO_cw20_staking_address: string;
}>>;
export type CodegenGeneratedAdoCw20StakingStateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStateQuery>;
export type CodegenGeneratedAdoCw20StakingStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStateLazyQuery>;
export type CodegenGeneratedAdoCw20StakingStateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingStateQuery, ICodegenGeneratedAdoCw20StakingStateQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20StakingStateQuery(variables: ICodegenGeneratedAdoCw20StakingStateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_staking_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw20StakingDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw20StakingQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw20StakingQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingQuery, ICodegenGeneratedAdoCw20StakingQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingQuery, Exact<{
    ADO_cw20_staking_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw20StakingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingQuery, ICodegenGeneratedAdoCw20StakingQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw20StakingQuery, Exact<{
    ADO_cw20_staking_address: string;
}>>;
export type CodegenGeneratedAdoCw20StakingQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingQuery>;
export type CodegenGeneratedAdoCw20StakingLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingLazyQuery>;
export type CodegenGeneratedAdoCw20StakingQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingQuery, ICodegenGeneratedAdoCw20StakingQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw20StakingQuery(variables: ICodegenGeneratedAdoCw20StakingQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw20_staking_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
        ADO_cw721_cw721_allNftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721AllnftinfoAccessDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721AllnftinfoAccessQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoAccessQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoAccessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoAccessQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721AllnftinfoAccessQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721AllnftinfoAccessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721AllnftinfoAccessQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoAccessQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoAccessLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoAccessLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoAccessQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721AllnftinfoAccessQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
        ADO_cw721_cw721_allNftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721AllnftinfoInfoExtensionDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoExtensionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
        ADO_cw721_cw721_allNftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
        ADO_cw721_cw721_allNftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721AllnftinfoInfoMetadataDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoMetadataQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoMetadataLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoMetadataLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoMetadataQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
        ADO_cw721_cw721_allNftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721AllnftinfoInfoDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721AllnftinfoInfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoInfoQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721AllnftinfoInfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721AllnftinfoInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721AllnftinfoInfoQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
        ADO_cw721_cw721_allNftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721AllnftinfoDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721AllnftinfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721AllnftinfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoQuery, ICodegenGeneratedAdoCw721AllnftinfoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721AllnftinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoQuery, ICodegenGeneratedAdoCw721AllnftinfoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721AllnftinfoQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
    ADO_cw721_cw721_allNftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721AllnftinfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoQuery, ICodegenGeneratedAdoCw721AllnftinfoQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721AllnftinfoQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_allNftInfo_includeExpired: boolean;
        ADO_cw721_cw721_allNftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721AlloperatorsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721AlloperatorsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AlloperatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AlloperatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AlloperatorsQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allOperators_includeExpired: // value for 'ADO_cw721_cw721_allOperators_includeExpired'
 *      ADO_cw721_cw721_allOperators_options: // value for 'ADO_cw721_cw721_allOperators_options'
 *      ADO_cw721_cw721_allOperators_owner: // value for 'ADO_cw721_cw721_allOperators_owner'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721AlloperatorsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AlloperatorsQuery, ICodegenGeneratedAdoCw721AlloperatorsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721AlloperatorsQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allOperators_includeExpired: boolean;
    ADO_cw721_cw721_allOperators_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw721_cw721_allOperators_owner: string;
}>>;
export declare function useCodegenGeneratedAdoCw721AlloperatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AlloperatorsQuery, ICodegenGeneratedAdoCw721AlloperatorsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721AlloperatorsQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allOperators_includeExpired: boolean;
    ADO_cw721_cw721_allOperators_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw721_cw721_allOperators_owner: string;
}>>;
export type CodegenGeneratedAdoCw721AlloperatorsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AlloperatorsQuery>;
export type CodegenGeneratedAdoCw721AlloperatorsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AlloperatorsLazyQuery>;
export type CodegenGeneratedAdoCw721AlloperatorsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AlloperatorsQuery, ICodegenGeneratedAdoCw721AlloperatorsQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721AlloperatorsQuery(variables: ICodegenGeneratedAdoCw721AlloperatorsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_allOperators_includeExpired: boolean;
        ADO_cw721_cw721_allOperators_options?: InputMaybe<IAndrSearchOptions>;
        ADO_cw721_cw721_allOperators_owner: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721AlltokensDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721AlltokensQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AlltokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AlltokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AlltokensQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allTokens_options: // value for 'ADO_cw721_cw721_allTokens_options'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721AlltokensQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AlltokensQuery, ICodegenGeneratedAdoCw721AlltokensQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721AlltokensQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allTokens_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export declare function useCodegenGeneratedAdoCw721AlltokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AlltokensQuery, ICodegenGeneratedAdoCw721AlltokensQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721AlltokensQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_allTokens_options?: InputMaybe<IAndrSearchOptions>;
}>>;
export type CodegenGeneratedAdoCw721AlltokensQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AlltokensQuery>;
export type CodegenGeneratedAdoCw721AlltokensLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AlltokensLazyQuery>;
export type CodegenGeneratedAdoCw721AlltokensQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AlltokensQuery, ICodegenGeneratedAdoCw721AlltokensQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721AlltokensQuery(variables: ICodegenGeneratedAdoCw721AlltokensQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_allTokens_options?: InputMaybe<IAndrSearchOptions>;
    }>;
};
export declare const CodegenGeneratedAdoCw721AndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721AndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AndrQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721AndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AndrQuery, ICodegenGeneratedAdoCw721AndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721AndrQuery, Exact<{
    ADO_cw721_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw721AndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AndrQuery, ICodegenGeneratedAdoCw721AndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721AndrQuery, Exact<{
    ADO_cw721_address: string;
}>>;
export type CodegenGeneratedAdoCw721AndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AndrQuery>;
export type CodegenGeneratedAdoCw721AndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AndrLazyQuery>;
export type CodegenGeneratedAdoCw721AndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AndrQuery, ICodegenGeneratedAdoCw721AndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721AndrQuery(variables: ICodegenGeneratedAdoCw721AndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721ApprovalDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721ApprovalQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721ApprovalQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721ApprovalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721ApprovalQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_approval_includeExpired: // value for 'ADO_cw721_cw721_approval_includeExpired'
 *      ADO_cw721_cw721_approval_spender: // value for 'ADO_cw721_cw721_approval_spender'
 *      ADO_cw721_cw721_approval_tokenId: // value for 'ADO_cw721_cw721_approval_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721ApprovalQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721ApprovalQuery, ICodegenGeneratedAdoCw721ApprovalQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721ApprovalQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_approval_includeExpired: boolean;
    ADO_cw721_cw721_approval_spender: string;
    ADO_cw721_cw721_approval_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721ApprovalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721ApprovalQuery, ICodegenGeneratedAdoCw721ApprovalQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721ApprovalQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_approval_includeExpired: boolean;
    ADO_cw721_cw721_approval_spender: string;
    ADO_cw721_cw721_approval_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721ApprovalQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ApprovalQuery>;
export type CodegenGeneratedAdoCw721ApprovalLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ApprovalLazyQuery>;
export type CodegenGeneratedAdoCw721ApprovalQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721ApprovalQuery, ICodegenGeneratedAdoCw721ApprovalQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721ApprovalQuery(variables: ICodegenGeneratedAdoCw721ApprovalQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_approval_includeExpired: boolean;
        ADO_cw721_cw721_approval_spender: string;
        ADO_cw721_cw721_approval_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721ApprovalsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721ApprovalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721ApprovalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721ApprovalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721ApprovalsQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_approvals_includeExpired: // value for 'ADO_cw721_cw721_approvals_includeExpired'
 *      ADO_cw721_cw721_approvals_tokenId: // value for 'ADO_cw721_cw721_approvals_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721ApprovalsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721ApprovalsQuery, ICodegenGeneratedAdoCw721ApprovalsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721ApprovalsQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_approvals_includeExpired: boolean;
    ADO_cw721_cw721_approvals_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721ApprovalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721ApprovalsQuery, ICodegenGeneratedAdoCw721ApprovalsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721ApprovalsQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_approvals_includeExpired: boolean;
    ADO_cw721_cw721_approvals_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721ApprovalsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ApprovalsQuery>;
export type CodegenGeneratedAdoCw721ApprovalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ApprovalsLazyQuery>;
export type CodegenGeneratedAdoCw721ApprovalsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721ApprovalsQuery, ICodegenGeneratedAdoCw721ApprovalsQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721ApprovalsQuery(variables: ICodegenGeneratedAdoCw721ApprovalsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_approvals_includeExpired: boolean;
        ADO_cw721_cw721_approvals_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721ContractinfoDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721ContractinfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721ContractinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721ContractinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721ContractinfoQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721ContractinfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721ContractinfoQuery, ICodegenGeneratedAdoCw721ContractinfoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721ContractinfoQuery, Exact<{
    ADO_cw721_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw721ContractinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721ContractinfoQuery, ICodegenGeneratedAdoCw721ContractinfoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721ContractinfoQuery, Exact<{
    ADO_cw721_address: string;
}>>;
export type CodegenGeneratedAdoCw721ContractinfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ContractinfoQuery>;
export type CodegenGeneratedAdoCw721ContractinfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ContractinfoLazyQuery>;
export type CodegenGeneratedAdoCw721ContractinfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721ContractinfoQuery, ICodegenGeneratedAdoCw721ContractinfoQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721ContractinfoQuery(variables: ICodegenGeneratedAdoCw721ContractinfoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721IsarchivedDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721IsarchivedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721IsarchivedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721IsarchivedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721IsarchivedQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_isArchived_tokenId: // value for 'ADO_cw721_cw721_isArchived_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721IsarchivedQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721IsarchivedQuery, ICodegenGeneratedAdoCw721IsarchivedQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721IsarchivedQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_isArchived_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721IsarchivedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721IsarchivedQuery, ICodegenGeneratedAdoCw721IsarchivedQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721IsarchivedQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_isArchived_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721IsarchivedQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721IsarchivedQuery>;
export type CodegenGeneratedAdoCw721IsarchivedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721IsarchivedLazyQuery>;
export type CodegenGeneratedAdoCw721IsarchivedQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721IsarchivedQuery, ICodegenGeneratedAdoCw721IsarchivedQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721IsarchivedQuery(variables: ICodegenGeneratedAdoCw721IsarchivedQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_isArchived_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721NftinfoExtensionDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721NftinfoExtensionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721NftinfoExtensionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721NftinfoExtensionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721NftinfoExtensionQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_nftInfo_tokenId: // value for 'ADO_cw721_cw721_nftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721NftinfoExtensionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721NftinfoExtensionQuery, ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoExtensionQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_nftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721NftinfoExtensionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721NftinfoExtensionQuery, ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721NftinfoExtensionQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_nftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721NftinfoExtensionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoExtensionQuery>;
export type CodegenGeneratedAdoCw721NftinfoExtensionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoExtensionLazyQuery>;
export type CodegenGeneratedAdoCw721NftinfoExtensionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoExtensionQuery, ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721NftinfoExtensionQuery(variables: ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_nftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721NftinfoMetadataAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_nftInfo_tokenId: // value for 'ADO_cw721_cw721_nftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery, ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_nftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721NftinfoMetadataAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery, ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_nftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721NftinfoMetadataAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery>;
export type CodegenGeneratedAdoCw721NftinfoMetadataAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoMetadataAttributesLazyQuery>;
export type CodegenGeneratedAdoCw721NftinfoMetadataAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery, ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery(variables: ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_nftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721NftinfoMetadataDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721NftinfoMetadataQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721NftinfoMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721NftinfoMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721NftinfoMetadataQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_nftInfo_tokenId: // value for 'ADO_cw721_cw721_nftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721NftinfoMetadataQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721NftinfoMetadataQuery, ICodegenGeneratedAdoCw721NftinfoMetadataQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoMetadataQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_nftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721NftinfoMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721NftinfoMetadataQuery, ICodegenGeneratedAdoCw721NftinfoMetadataQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721NftinfoMetadataQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_nftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721NftinfoMetadataQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoMetadataQuery>;
export type CodegenGeneratedAdoCw721NftinfoMetadataLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoMetadataLazyQuery>;
export type CodegenGeneratedAdoCw721NftinfoMetadataQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoMetadataQuery, ICodegenGeneratedAdoCw721NftinfoMetadataQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721NftinfoMetadataQuery(variables: ICodegenGeneratedAdoCw721NftinfoMetadataQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_nftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721NftinfoDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721NftinfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721NftinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721NftinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721NftinfoQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_nftInfo_tokenId: // value for 'ADO_cw721_cw721_nftInfo_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721NftinfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721NftinfoQuery, ICodegenGeneratedAdoCw721NftinfoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_nftInfo_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721NftinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721NftinfoQuery, ICodegenGeneratedAdoCw721NftinfoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721NftinfoQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_nftInfo_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721NftinfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoQuery>;
export type CodegenGeneratedAdoCw721NftinfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoLazyQuery>;
export type CodegenGeneratedAdoCw721NftinfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoQuery, ICodegenGeneratedAdoCw721NftinfoQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721NftinfoQuery(variables: ICodegenGeneratedAdoCw721NftinfoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_nftInfo_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721NumownersDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721NumownersQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721NumownersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721NumownersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721NumownersQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_numOwners_includeExpired: // value for 'ADO_cw721_cw721_numOwners_includeExpired'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721NumownersQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721NumownersQuery, ICodegenGeneratedAdoCw721NumownersQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721NumownersQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_numOwners_includeExpired: boolean;
}>>;
export declare function useCodegenGeneratedAdoCw721NumownersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721NumownersQuery, ICodegenGeneratedAdoCw721NumownersQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721NumownersQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_numOwners_includeExpired: boolean;
}>>;
export type CodegenGeneratedAdoCw721NumownersQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NumownersQuery>;
export type CodegenGeneratedAdoCw721NumownersLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NumownersLazyQuery>;
export type CodegenGeneratedAdoCw721NumownersQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721NumownersQuery, ICodegenGeneratedAdoCw721NumownersQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721NumownersQuery(variables: ICodegenGeneratedAdoCw721NumownersQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_numOwners_includeExpired: boolean;
    }>;
};
export declare const CodegenGeneratedAdoCw721OwnerofApprovalsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721OwnerofApprovalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721OwnerofApprovalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721OwnerofApprovalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721OwnerofApprovalsQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_ownerOf_includeExpired: // value for 'ADO_cw721_cw721_ownerOf_includeExpired'
 *      ADO_cw721_cw721_ownerOf_tokenId: // value for 'ADO_cw721_cw721_ownerOf_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721OwnerofApprovalsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery, ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_ownerOf_includeExpired: boolean;
    ADO_cw721_cw721_ownerOf_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721OwnerofApprovalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery, ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_ownerOf_includeExpired: boolean;
    ADO_cw721_cw721_ownerOf_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721OwnerofApprovalsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721OwnerofApprovalsQuery>;
export type CodegenGeneratedAdoCw721OwnerofApprovalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721OwnerofApprovalsLazyQuery>;
export type CodegenGeneratedAdoCw721OwnerofApprovalsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery, ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721OwnerofApprovalsQuery(variables: ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_ownerOf_includeExpired: boolean;
        ADO_cw721_cw721_ownerOf_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721OwnerofDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721OwnerofQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721OwnerofQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721OwnerofQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721OwnerofQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_ownerOf_includeExpired: // value for 'ADO_cw721_cw721_ownerOf_includeExpired'
 *      ADO_cw721_cw721_ownerOf_tokenId: // value for 'ADO_cw721_cw721_ownerOf_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721OwnerofQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721OwnerofQuery, ICodegenGeneratedAdoCw721OwnerofQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721OwnerofQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_ownerOf_includeExpired: boolean;
    ADO_cw721_cw721_ownerOf_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721OwnerofLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721OwnerofQuery, ICodegenGeneratedAdoCw721OwnerofQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721OwnerofQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_ownerOf_includeExpired: boolean;
    ADO_cw721_cw721_ownerOf_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721OwnerofQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721OwnerofQuery>;
export type CodegenGeneratedAdoCw721OwnerofLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721OwnerofLazyQuery>;
export type CodegenGeneratedAdoCw721OwnerofQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721OwnerofQuery, ICodegenGeneratedAdoCw721OwnerofQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721OwnerofQuery(variables: ICodegenGeneratedAdoCw721OwnerofQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_ownerOf_includeExpired: boolean;
        ADO_cw721_cw721_ownerOf_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721SearchtokensExtensionDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721SearchtokensExtensionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721SearchtokensExtensionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721SearchtokensExtensionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721SearchtokensExtensionQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_searchTokens_attributes: // value for 'ADO_cw721_cw721_searchTokens_attributes'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721SearchtokensExtensionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
}>>;
export declare function useCodegenGeneratedAdoCw721SearchtokensExtensionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
}>>;
export type CodegenGeneratedAdoCw721SearchtokensExtensionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensExtensionQuery>;
export type CodegenGeneratedAdoCw721SearchtokensExtensionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensExtensionLazyQuery>;
export type CodegenGeneratedAdoCw721SearchtokensExtensionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721SearchtokensExtensionQuery(variables: ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
    }>;
};
export declare const CodegenGeneratedAdoCw721SearchtokensMetadataAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_searchTokens_attributes: // value for 'ADO_cw721_cw721_searchTokens_attributes'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery, ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
}>>;
export declare function useCodegenGeneratedAdoCw721SearchtokensMetadataAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery, ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
}>>;
export type CodegenGeneratedAdoCw721SearchtokensMetadataAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery>;
export type CodegenGeneratedAdoCw721SearchtokensMetadataAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensMetadataAttributesLazyQuery>;
export type CodegenGeneratedAdoCw721SearchtokensMetadataAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery, ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery(variables: ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
    }>;
};
export declare const CodegenGeneratedAdoCw721SearchtokensMetadataDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721SearchtokensMetadataQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721SearchtokensMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721SearchtokensMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721SearchtokensMetadataQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_searchTokens_attributes: // value for 'ADO_cw721_cw721_searchTokens_attributes'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721SearchtokensMetadataQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensMetadataQuery, ICodegenGeneratedAdoCw721SearchtokensMetadataQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensMetadataQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
}>>;
export declare function useCodegenGeneratedAdoCw721SearchtokensMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensMetadataQuery, ICodegenGeneratedAdoCw721SearchtokensMetadataQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721SearchtokensMetadataQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
}>>;
export type CodegenGeneratedAdoCw721SearchtokensMetadataQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensMetadataQuery>;
export type CodegenGeneratedAdoCw721SearchtokensMetadataLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensMetadataLazyQuery>;
export type CodegenGeneratedAdoCw721SearchtokensMetadataQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensMetadataQuery, ICodegenGeneratedAdoCw721SearchtokensMetadataQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721SearchtokensMetadataQuery(variables: ICodegenGeneratedAdoCw721SearchtokensMetadataQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
    }>;
};
export declare const CodegenGeneratedAdoCw721SearchtokensDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721SearchtokensQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721SearchtokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721SearchtokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721SearchtokensQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_searchTokens_attributes: // value for 'ADO_cw721_cw721_searchTokens_attributes'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721SearchtokensQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensQuery, ICodegenGeneratedAdoCw721SearchtokensQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
}>>;
export declare function useCodegenGeneratedAdoCw721SearchtokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensQuery, ICodegenGeneratedAdoCw721SearchtokensQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721SearchtokensQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
}>>;
export type CodegenGeneratedAdoCw721SearchtokensQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensQuery>;
export type CodegenGeneratedAdoCw721SearchtokensLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensLazyQuery>;
export type CodegenGeneratedAdoCw721SearchtokensQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensQuery, ICodegenGeneratedAdoCw721SearchtokensQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721SearchtokensQuery(variables: ICodegenGeneratedAdoCw721SearchtokensQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<ISearchAttribute | ISearchAttribute[]>;
    }>;
};
export declare const CodegenGeneratedAdoCw721TokensDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721TokensQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721TokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721TokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721TokensQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_tokens_options: // value for 'ADO_cw721_cw721_tokens_options'
 *      ADO_cw721_cw721_tokens_owner: // value for 'ADO_cw721_cw721_tokens_owner'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721TokensQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721TokensQuery, ICodegenGeneratedAdoCw721TokensQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721TokensQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_tokens_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw721_cw721_tokens_owner: string;
}>>;
export declare function useCodegenGeneratedAdoCw721TokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721TokensQuery, ICodegenGeneratedAdoCw721TokensQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721TokensQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_tokens_options?: InputMaybe<IAndrSearchOptions>;
    ADO_cw721_cw721_tokens_owner: string;
}>>;
export type CodegenGeneratedAdoCw721TokensQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TokensQuery>;
export type CodegenGeneratedAdoCw721TokensLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TokensLazyQuery>;
export type CodegenGeneratedAdoCw721TokensQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721TokensQuery, ICodegenGeneratedAdoCw721TokensQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721TokensQuery(variables: ICodegenGeneratedAdoCw721TokensQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_tokens_options?: InputMaybe<IAndrSearchOptions>;
        ADO_cw721_cw721_tokens_owner: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_transferAgreement_tokenId: // value for 'ADO_cw721_cw721_transferAgreement_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_transferAgreement_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_transferAgreement_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawLazyQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_transferAgreement_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721TransferagreementAgreementAmountDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_transferAgreement_tokenId: // value for 'ADO_cw721_cw721_transferAgreement_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_transferAgreement_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721TransferagreementAgreementAmountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_transferAgreement_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementAmountLazyQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_transferAgreement_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721TransferagreementAgreementDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721TransferagreementAgreementQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721TransferagreementAgreementQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721TransferagreementAgreementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721TransferagreementAgreementQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_transferAgreement_tokenId: // value for 'ADO_cw721_cw721_transferAgreement_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721TransferagreementAgreementQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_transferAgreement_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721TransferagreementAgreementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_transferAgreement_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementLazyQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721TransferagreementAgreementQuery(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_transferAgreement_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721TransferagreementDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721TransferagreementQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721TransferagreementQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721TransferagreementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721TransferagreementQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_transferAgreement_tokenId: // value for 'ADO_cw721_cw721_transferAgreement_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721TransferagreementQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementQuery, ICodegenGeneratedAdoCw721TransferagreementQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_transferAgreement_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoCw721TransferagreementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementQuery, ICodegenGeneratedAdoCw721TransferagreementQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721TransferagreementQuery, Exact<{
    ADO_cw721_address: string;
    ADO_cw721_cw721_transferAgreement_tokenId: string;
}>>;
export type CodegenGeneratedAdoCw721TransferagreementQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementQuery>;
export type CodegenGeneratedAdoCw721TransferagreementLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementLazyQuery>;
export type CodegenGeneratedAdoCw721TransferagreementQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementQuery, ICodegenGeneratedAdoCw721TransferagreementQueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721TransferagreementQuery(variables: ICodegenGeneratedAdoCw721TransferagreementQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
        ADO_cw721_cw721_transferAgreement_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoCw721Document: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoCw721Query__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721Query` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721Query({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoCw721Query(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721Query, ICodegenGeneratedAdoCw721QueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoCw721Query, Exact<{
    ADO_cw721_address: string;
}>>;
export declare function useCodegenGeneratedAdoCw721LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721Query, ICodegenGeneratedAdoCw721QueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoCw721Query, Exact<{
    ADO_cw721_address: string;
}>>;
export type CodegenGeneratedAdoCw721QueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721Query>;
export type CodegenGeneratedAdoCw721LazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721LazyQuery>;
export type CodegenGeneratedAdoCw721QueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721Query, ICodegenGeneratedAdoCw721QueryVariables>;
export declare function refetchCodegenGeneratedAdoCw721Query(variables: ICodegenGeneratedAdoCw721QueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_cw721_address: string;
    }>;
};
export declare const CodegenGeneratedAdoFactoryAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoFactoryAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoFactoryAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoFactoryAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoFactoryAndrQuery({
 *   variables: {
 *      ADO_factory_address: // value for 'ADO_factory_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoFactoryAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoFactoryAndrQuery, ICodegenGeneratedAdoFactoryAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoFactoryAndrQuery, Exact<{
    ADO_factory_address: string;
}>>;
export declare function useCodegenGeneratedAdoFactoryAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoFactoryAndrQuery, ICodegenGeneratedAdoFactoryAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoFactoryAndrQuery, Exact<{
    ADO_factory_address: string;
}>>;
export type CodegenGeneratedAdoFactoryAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryAndrQuery>;
export type CodegenGeneratedAdoFactoryAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryAndrLazyQuery>;
export type CodegenGeneratedAdoFactoryAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoFactoryAndrQuery, ICodegenGeneratedAdoFactoryAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoFactoryAndrQuery(variables: ICodegenGeneratedAdoFactoryAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_factory_address: string;
    }>;
};
export declare const CodegenGeneratedAdoFactoryCodeIdDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoFactoryCodeIdQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoFactoryCodeIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoFactoryCodeIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoFactoryCodeIdQuery({
 *   variables: {
 *      ADO_factory_address: // value for 'ADO_factory_address'
 *      ADO_factory_factory_code_id_key: // value for 'ADO_factory_factory_code_id_key'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoFactoryCodeIdQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoFactoryCodeIdQuery, ICodegenGeneratedAdoFactoryCodeIdQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoFactoryCodeIdQuery, Exact<{
    ADO_factory_address: string;
    ADO_factory_factory_code_id_key: string;
}>>;
export declare function useCodegenGeneratedAdoFactoryCodeIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoFactoryCodeIdQuery, ICodegenGeneratedAdoFactoryCodeIdQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoFactoryCodeIdQuery, Exact<{
    ADO_factory_address: string;
    ADO_factory_factory_code_id_key: string;
}>>;
export type CodegenGeneratedAdoFactoryCodeIdQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryCodeIdQuery>;
export type CodegenGeneratedAdoFactoryCodeIdLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryCodeIdLazyQuery>;
export type CodegenGeneratedAdoFactoryCodeIdQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoFactoryCodeIdQuery, ICodegenGeneratedAdoFactoryCodeIdQueryVariables>;
export declare function refetchCodegenGeneratedAdoFactoryCodeIdQuery(variables: ICodegenGeneratedAdoFactoryCodeIdQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_factory_address: string;
        ADO_factory_factory_code_id_key: string;
    }>;
};
export declare const CodegenGeneratedAdoFactoryDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoFactoryQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoFactoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoFactoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoFactoryQuery({
 *   variables: {
 *      ADO_factory_address: // value for 'ADO_factory_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoFactoryQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoFactoryQuery, ICodegenGeneratedAdoFactoryQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoFactoryQuery, Exact<{
    ADO_factory_address: string;
}>>;
export declare function useCodegenGeneratedAdoFactoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoFactoryQuery, ICodegenGeneratedAdoFactoryQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoFactoryQuery, Exact<{
    ADO_factory_address: string;
}>>;
export type CodegenGeneratedAdoFactoryQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryQuery>;
export type CodegenGeneratedAdoFactoryLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryLazyQuery>;
export type CodegenGeneratedAdoFactoryQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoFactoryQuery, ICodegenGeneratedAdoFactoryQueryVariables>;
export declare function refetchCodegenGeneratedAdoFactoryQuery(variables: ICodegenGeneratedAdoFactoryQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_factory_address: string;
    }>;
};
export declare const CodegenGeneratedAdoLockdropAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoLockdropAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropAndrQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoLockdropAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropAndrQuery, ICodegenGeneratedAdoLockdropAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoLockdropAndrQuery, Exact<{
    ADO_lockdrop_address: string;
}>>;
export declare function useCodegenGeneratedAdoLockdropAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropAndrQuery, ICodegenGeneratedAdoLockdropAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoLockdropAndrQuery, Exact<{
    ADO_lockdrop_address: string;
}>>;
export type CodegenGeneratedAdoLockdropAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropAndrQuery>;
export type CodegenGeneratedAdoLockdropAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropAndrLazyQuery>;
export type CodegenGeneratedAdoLockdropAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropAndrQuery, ICodegenGeneratedAdoLockdropAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoLockdropAndrQuery(variables: ICodegenGeneratedAdoLockdropAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_lockdrop_address: string;
    }>;
};
export declare const CodegenGeneratedAdoLockdropConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoLockdropConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropConfigQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoLockdropConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropConfigQuery, ICodegenGeneratedAdoLockdropConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoLockdropConfigQuery, Exact<{
    ADO_lockdrop_address: string;
}>>;
export declare function useCodegenGeneratedAdoLockdropConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropConfigQuery, ICodegenGeneratedAdoLockdropConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoLockdropConfigQuery, Exact<{
    ADO_lockdrop_address: string;
}>>;
export type CodegenGeneratedAdoLockdropConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropConfigQuery>;
export type CodegenGeneratedAdoLockdropConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropConfigLazyQuery>;
export type CodegenGeneratedAdoLockdropConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropConfigQuery, ICodegenGeneratedAdoLockdropConfigQueryVariables>;
export declare function refetchCodegenGeneratedAdoLockdropConfigQuery(variables: ICodegenGeneratedAdoLockdropConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_lockdrop_address: string;
    }>;
};
export declare const CodegenGeneratedAdoLockdropStateDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoLockdropStateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropStateQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoLockdropStateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropStateQuery, ICodegenGeneratedAdoLockdropStateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoLockdropStateQuery, Exact<{
    ADO_lockdrop_address: string;
}>>;
export declare function useCodegenGeneratedAdoLockdropStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropStateQuery, ICodegenGeneratedAdoLockdropStateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoLockdropStateQuery, Exact<{
    ADO_lockdrop_address: string;
}>>;
export type CodegenGeneratedAdoLockdropStateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropStateQuery>;
export type CodegenGeneratedAdoLockdropStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropStateLazyQuery>;
export type CodegenGeneratedAdoLockdropStateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropStateQuery, ICodegenGeneratedAdoLockdropStateQueryVariables>;
export declare function refetchCodegenGeneratedAdoLockdropStateQuery(variables: ICodegenGeneratedAdoLockdropStateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_lockdrop_address: string;
    }>;
};
export declare const CodegenGeneratedAdoLockdropUserinfoDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoLockdropUserinfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropUserinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropUserinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropUserinfoQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *      ADO_lockdrop_lockdrop_userInfo_user: // value for 'ADO_lockdrop_lockdrop_userInfo_user'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoLockdropUserinfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropUserinfoQuery, ICodegenGeneratedAdoLockdropUserinfoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoLockdropUserinfoQuery, Exact<{
    ADO_lockdrop_address: string;
    ADO_lockdrop_lockdrop_userInfo_user: string;
}>>;
export declare function useCodegenGeneratedAdoLockdropUserinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropUserinfoQuery, ICodegenGeneratedAdoLockdropUserinfoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoLockdropUserinfoQuery, Exact<{
    ADO_lockdrop_address: string;
    ADO_lockdrop_lockdrop_userInfo_user: string;
}>>;
export type CodegenGeneratedAdoLockdropUserinfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropUserinfoQuery>;
export type CodegenGeneratedAdoLockdropUserinfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropUserinfoLazyQuery>;
export type CodegenGeneratedAdoLockdropUserinfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropUserinfoQuery, ICodegenGeneratedAdoLockdropUserinfoQueryVariables>;
export declare function refetchCodegenGeneratedAdoLockdropUserinfoQuery(variables: ICodegenGeneratedAdoLockdropUserinfoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_lockdrop_address: string;
        ADO_lockdrop_lockdrop_userInfo_user: string;
    }>;
};
export declare const CodegenGeneratedAdoLockdropWithdrawalpercentallowedDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *      ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp: // value for 'ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery, ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery, Exact<{
    ADO_lockdrop_address: string;
    ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp: number;
}>>;
export declare function useCodegenGeneratedAdoLockdropWithdrawalpercentallowedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery, ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery, Exact<{
    ADO_lockdrop_address: string;
    ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp: number;
}>>;
export type CodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery>;
export type CodegenGeneratedAdoLockdropWithdrawalpercentallowedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropWithdrawalpercentallowedLazyQuery>;
export type CodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery, ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables>;
export declare function refetchCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery(variables: ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_lockdrop_address: string;
        ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp: number;
    }>;
};
export declare const CodegenGeneratedAdoLockdropDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoLockdropQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoLockdropQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropQuery, ICodegenGeneratedAdoLockdropQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoLockdropQuery, Exact<{
    ADO_lockdrop_address: string;
}>>;
export declare function useCodegenGeneratedAdoLockdropLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropQuery, ICodegenGeneratedAdoLockdropQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoLockdropQuery, Exact<{
    ADO_lockdrop_address: string;
}>>;
export type CodegenGeneratedAdoLockdropQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropQuery>;
export type CodegenGeneratedAdoLockdropLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropLazyQuery>;
export type CodegenGeneratedAdoLockdropQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropQuery, ICodegenGeneratedAdoLockdropQueryVariables>;
export declare function refetchCodegenGeneratedAdoLockdropQuery(variables: ICodegenGeneratedAdoLockdropQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_lockdrop_address: string;
    }>;
};
export declare const CodegenGeneratedAdoMarketplaceAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMarketplaceAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceAndrQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMarketplaceAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceAndrQuery, ICodegenGeneratedAdoMarketplaceAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceAndrQuery, Exact<{
    ADO_marketplace_address: string;
}>>;
export declare function useCodegenGeneratedAdoMarketplaceAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceAndrQuery, ICodegenGeneratedAdoMarketplaceAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMarketplaceAndrQuery, Exact<{
    ADO_marketplace_address: string;
}>>;
export type CodegenGeneratedAdoMarketplaceAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceAndrQuery>;
export type CodegenGeneratedAdoMarketplaceAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceAndrLazyQuery>;
export type CodegenGeneratedAdoMarketplaceAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceAndrQuery, ICodegenGeneratedAdoMarketplaceAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoMarketplaceAndrQuery(variables: ICodegenGeneratedAdoMarketplaceAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_marketplace_address: string;
    }>;
};
export declare const CodegenGeneratedAdoMarketplaceLatestsalestateDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMarketplaceLatestsalestateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceLatestsalestateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceLatestsalestateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceLatestsalestateQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_latestSaleState_tokenAddress: // value for 'ADO_marketplace_marketplace_latestSaleState_tokenAddress'
 *      ADO_marketplace_marketplace_latestSaleState_tokenId: // value for 'ADO_marketplace_marketplace_latestSaleState_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMarketplaceLatestsalestateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery, ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery, Exact<{
    ADO_marketplace_address: string;
    ADO_marketplace_marketplace_latestSaleState_tokenAddress: string;
    ADO_marketplace_marketplace_latestSaleState_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoMarketplaceLatestsalestateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery, ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery, Exact<{
    ADO_marketplace_address: string;
    ADO_marketplace_marketplace_latestSaleState_tokenAddress: string;
    ADO_marketplace_marketplace_latestSaleState_tokenId: string;
}>>;
export type CodegenGeneratedAdoMarketplaceLatestsalestateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceLatestsalestateQuery>;
export type CodegenGeneratedAdoMarketplaceLatestsalestateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceLatestsalestateLazyQuery>;
export type CodegenGeneratedAdoMarketplaceLatestsalestateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery, ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables>;
export declare function refetchCodegenGeneratedAdoMarketplaceLatestsalestateQuery(variables: ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_marketplace_address: string;
        ADO_marketplace_marketplace_latestSaleState_tokenAddress: string;
        ADO_marketplace_marketplace_latestSaleState_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoMarketplaceSaleidsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMarketplaceSaleidsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceSaleidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceSaleidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceSaleidsQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_saleIds_tokenAddress: // value for 'ADO_marketplace_marketplace_saleIds_tokenAddress'
 *      ADO_marketplace_marketplace_saleIds_tokenId: // value for 'ADO_marketplace_marketplace_saleIds_tokenId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMarketplaceSaleidsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceSaleidsQuery, ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceSaleidsQuery, Exact<{
    ADO_marketplace_address: string;
    ADO_marketplace_marketplace_saleIds_tokenAddress: string;
    ADO_marketplace_marketplace_saleIds_tokenId: string;
}>>;
export declare function useCodegenGeneratedAdoMarketplaceSaleidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceSaleidsQuery, ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMarketplaceSaleidsQuery, Exact<{
    ADO_marketplace_address: string;
    ADO_marketplace_marketplace_saleIds_tokenAddress: string;
    ADO_marketplace_marketplace_saleIds_tokenId: string;
}>>;
export type CodegenGeneratedAdoMarketplaceSaleidsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSaleidsQuery>;
export type CodegenGeneratedAdoMarketplaceSaleidsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSaleidsLazyQuery>;
export type CodegenGeneratedAdoMarketplaceSaleidsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceSaleidsQuery, ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables>;
export declare function refetchCodegenGeneratedAdoMarketplaceSaleidsQuery(variables: ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_marketplace_address: string;
        ADO_marketplace_marketplace_saleIds_tokenAddress: string;
        ADO_marketplace_marketplace_saleIds_tokenId: string;
    }>;
};
export declare const CodegenGeneratedAdoMarketplaceSaleinfosforaddressDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_saleInfosForAddress_options: // value for 'ADO_marketplace_marketplace_saleInfosForAddress_options'
 *      ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress: // value for 'ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery, ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery, Exact<{
    ADO_marketplace_address: string;
    ADO_marketplace_marketplace_saleInfosForAddress_options?: InputMaybe<IAndrSearchOptions>;
    ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress: string;
}>>;
export declare function useCodegenGeneratedAdoMarketplaceSaleinfosforaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery, ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery, Exact<{
    ADO_marketplace_address: string;
    ADO_marketplace_marketplace_saleInfosForAddress_options?: InputMaybe<IAndrSearchOptions>;
    ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress: string;
}>>;
export type CodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery>;
export type CodegenGeneratedAdoMarketplaceSaleinfosforaddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSaleinfosforaddressLazyQuery>;
export type CodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery, ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables>;
export declare function refetchCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery(variables: ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_marketplace_address: string;
        ADO_marketplace_marketplace_saleInfosForAddress_options?: InputMaybe<IAndrSearchOptions>;
        ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress: string;
    }>;
};
export declare const CodegenGeneratedAdoMarketplaceSalestateDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMarketplaceSalestateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceSalestateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceSalestateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceSalestateQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_saleState_saleId: // value for 'ADO_marketplace_marketplace_saleState_saleId'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMarketplaceSalestateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceSalestateQuery, ICodegenGeneratedAdoMarketplaceSalestateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceSalestateQuery, Exact<{
    ADO_marketplace_address: string;
    ADO_marketplace_marketplace_saleState_saleId: string;
}>>;
export declare function useCodegenGeneratedAdoMarketplaceSalestateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceSalestateQuery, ICodegenGeneratedAdoMarketplaceSalestateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMarketplaceSalestateQuery, Exact<{
    ADO_marketplace_address: string;
    ADO_marketplace_marketplace_saleState_saleId: string;
}>>;
export type CodegenGeneratedAdoMarketplaceSalestateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSalestateQuery>;
export type CodegenGeneratedAdoMarketplaceSalestateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSalestateLazyQuery>;
export type CodegenGeneratedAdoMarketplaceSalestateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceSalestateQuery, ICodegenGeneratedAdoMarketplaceSalestateQueryVariables>;
export declare function refetchCodegenGeneratedAdoMarketplaceSalestateQuery(variables: ICodegenGeneratedAdoMarketplaceSalestateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_marketplace_address: string;
        ADO_marketplace_marketplace_saleState_saleId: string;
    }>;
};
export declare const CodegenGeneratedAdoMarketplaceDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMarketplaceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMarketplaceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceQuery, ICodegenGeneratedAdoMarketplaceQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceQuery, Exact<{
    ADO_marketplace_address: string;
}>>;
export declare function useCodegenGeneratedAdoMarketplaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceQuery, ICodegenGeneratedAdoMarketplaceQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMarketplaceQuery, Exact<{
    ADO_marketplace_address: string;
}>>;
export type CodegenGeneratedAdoMarketplaceQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceQuery>;
export type CodegenGeneratedAdoMarketplaceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceLazyQuery>;
export type CodegenGeneratedAdoMarketplaceQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceQuery, ICodegenGeneratedAdoMarketplaceQueryVariables>;
export declare function refetchCodegenGeneratedAdoMarketplaceQuery(variables: ICodegenGeneratedAdoMarketplaceQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_marketplace_address: string;
    }>;
};
export declare const CodegenGeneratedAdoMerkleAirdropAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMerkleAirdropAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropAndrQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMerkleAirdropAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropAndrQuery, ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropAndrQuery, Exact<{
    ADO_merkle_airdrop_address: string;
}>>;
export declare function useCodegenGeneratedAdoMerkleAirdropAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropAndrQuery, ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMerkleAirdropAndrQuery, Exact<{
    ADO_merkle_airdrop_address: string;
}>>;
export type CodegenGeneratedAdoMerkleAirdropAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropAndrQuery>;
export type CodegenGeneratedAdoMerkleAirdropAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropAndrLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropAndrQuery, ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoMerkleAirdropAndrQuery(variables: ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_merkle_airdrop_address: string;
    }>;
};
export declare const CodegenGeneratedAdoMerkleAirdropConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMerkleAirdropConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropConfigQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMerkleAirdropConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropConfigQuery, ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropConfigQuery, Exact<{
    ADO_merkle_airdrop_address: string;
}>>;
export declare function useCodegenGeneratedAdoMerkleAirdropConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropConfigQuery, ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMerkleAirdropConfigQuery, Exact<{
    ADO_merkle_airdrop_address: string;
}>>;
export type CodegenGeneratedAdoMerkleAirdropConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropConfigQuery>;
export type CodegenGeneratedAdoMerkleAirdropConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropConfigLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropConfigQuery, ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables>;
export declare function refetchCodegenGeneratedAdoMerkleAirdropConfigQuery(variables: ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_merkle_airdrop_address: string;
    }>;
};
export declare const CodegenGeneratedAdoMerkleAirdropIsclaimedDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *      ADO_merkle_airdrop_merkle_airdrop_isClaimed_address: // value for 'ADO_merkle_airdrop_merkle_airdrop_isClaimed_address'
 *      ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage: // value for 'ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery, ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery, Exact<{
    ADO_merkle_airdrop_address: string;
    ADO_merkle_airdrop_merkle_airdrop_isClaimed_address: string;
    ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage: number;
}>>;
export declare function useCodegenGeneratedAdoMerkleAirdropIsclaimedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery, ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery, Exact<{
    ADO_merkle_airdrop_address: string;
    ADO_merkle_airdrop_merkle_airdrop_isClaimed_address: string;
    ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage: number;
}>>;
export type CodegenGeneratedAdoMerkleAirdropIsclaimedQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery>;
export type CodegenGeneratedAdoMerkleAirdropIsclaimedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropIsclaimedLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropIsclaimedQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery, ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables>;
export declare function refetchCodegenGeneratedAdoMerkleAirdropIsclaimedQuery(variables: ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_merkle_airdrop_address: string;
        ADO_merkle_airdrop_merkle_airdrop_isClaimed_address: string;
        ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage: number;
    }>;
};
export declare const CodegenGeneratedAdoMerkleAirdropMerklerootDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMerkleAirdropMerklerootQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropMerklerootQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropMerklerootQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropMerklerootQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *      ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: // value for 'ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMerkleAirdropMerklerootQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery, ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery, Exact<{
    ADO_merkle_airdrop_address: string;
    ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: number;
}>>;
export declare function useCodegenGeneratedAdoMerkleAirdropMerklerootLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery, ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery, Exact<{
    ADO_merkle_airdrop_address: string;
    ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: number;
}>>;
export type CodegenGeneratedAdoMerkleAirdropMerklerootQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropMerklerootQuery>;
export type CodegenGeneratedAdoMerkleAirdropMerklerootLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropMerklerootLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropMerklerootQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery, ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables>;
export declare function refetchCodegenGeneratedAdoMerkleAirdropMerklerootQuery(variables: ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_merkle_airdrop_address: string;
        ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: number;
    }>;
};
export declare const CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *      ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage: // value for 'ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery, ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery, Exact<{
    ADO_merkle_airdrop_address: string;
    ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage: number;
}>>;
export declare function useCodegenGeneratedAdoMerkleAirdropTotalclaimedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery, ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery, Exact<{
    ADO_merkle_airdrop_address: string;
    ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage: number;
}>>;
export type CodegenGeneratedAdoMerkleAirdropTotalclaimedQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery>;
export type CodegenGeneratedAdoMerkleAirdropTotalclaimedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropTotalclaimedLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropTotalclaimedQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery, ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables>;
export declare function refetchCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery(variables: ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_merkle_airdrop_address: string;
        ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage: number;
    }>;
};
export declare const CodegenGeneratedAdoMerkleAirdropDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoMerkleAirdropQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoMerkleAirdropQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropQuery, ICodegenGeneratedAdoMerkleAirdropQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropQuery, Exact<{
    ADO_merkle_airdrop_address: string;
}>>;
export declare function useCodegenGeneratedAdoMerkleAirdropLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropQuery, ICodegenGeneratedAdoMerkleAirdropQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoMerkleAirdropQuery, Exact<{
    ADO_merkle_airdrop_address: string;
}>>;
export type CodegenGeneratedAdoMerkleAirdropQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropQuery>;
export type CodegenGeneratedAdoMerkleAirdropLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropQuery, ICodegenGeneratedAdoMerkleAirdropQueryVariables>;
export declare function refetchCodegenGeneratedAdoMerkleAirdropQuery(variables: ICodegenGeneratedAdoMerkleAirdropQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_merkle_airdrop_address: string;
    }>;
};
export declare const CodegenGeneratedAdoPrimitiveAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoPrimitiveAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoPrimitiveAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoPrimitiveAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoPrimitiveAndrQuery({
 *   variables: {
 *      ADO_primitive_address: // value for 'ADO_primitive_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoPrimitiveAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoPrimitiveAndrQuery, ICodegenGeneratedAdoPrimitiveAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoPrimitiveAndrQuery, Exact<{
    ADO_primitive_address: string;
}>>;
export declare function useCodegenGeneratedAdoPrimitiveAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoPrimitiveAndrQuery, ICodegenGeneratedAdoPrimitiveAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoPrimitiveAndrQuery, Exact<{
    ADO_primitive_address: string;
}>>;
export type CodegenGeneratedAdoPrimitiveAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveAndrQuery>;
export type CodegenGeneratedAdoPrimitiveAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveAndrLazyQuery>;
export type CodegenGeneratedAdoPrimitiveAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoPrimitiveAndrQuery, ICodegenGeneratedAdoPrimitiveAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoPrimitiveAndrQuery(variables: ICodegenGeneratedAdoPrimitiveAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_primitive_address: string;
    }>;
};
export declare const CodegenGeneratedAdoPrimitiveGetvalueDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoPrimitiveGetvalueQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoPrimitiveGetvalueQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoPrimitiveGetvalueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoPrimitiveGetvalueQuery({
 *   variables: {
 *      ADO_primitive_address: // value for 'ADO_primitive_address'
 *      ADO_primitive_primitive_getValue_key: // value for 'ADO_primitive_primitive_getValue_key'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoPrimitiveGetvalueQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoPrimitiveGetvalueQuery, ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoPrimitiveGetvalueQuery, Exact<{
    ADO_primitive_address: string;
    ADO_primitive_primitive_getValue_key: string;
}>>;
export declare function useCodegenGeneratedAdoPrimitiveGetvalueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoPrimitiveGetvalueQuery, ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoPrimitiveGetvalueQuery, Exact<{
    ADO_primitive_address: string;
    ADO_primitive_primitive_getValue_key: string;
}>>;
export type CodegenGeneratedAdoPrimitiveGetvalueQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveGetvalueQuery>;
export type CodegenGeneratedAdoPrimitiveGetvalueLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveGetvalueLazyQuery>;
export type CodegenGeneratedAdoPrimitiveGetvalueQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoPrimitiveGetvalueQuery, ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables>;
export declare function refetchCodegenGeneratedAdoPrimitiveGetvalueQuery(variables: ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_primitive_address: string;
        ADO_primitive_primitive_getValue_key: string;
    }>;
};
export declare const CodegenGeneratedAdoPrimitiveDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoPrimitiveQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoPrimitiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoPrimitiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoPrimitiveQuery({
 *   variables: {
 *      ADO_primitive_address: // value for 'ADO_primitive_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoPrimitiveQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoPrimitiveQuery, ICodegenGeneratedAdoPrimitiveQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoPrimitiveQuery, Exact<{
    ADO_primitive_address: string;
}>>;
export declare function useCodegenGeneratedAdoPrimitiveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoPrimitiveQuery, ICodegenGeneratedAdoPrimitiveQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoPrimitiveQuery, Exact<{
    ADO_primitive_address: string;
}>>;
export type CodegenGeneratedAdoPrimitiveQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveQuery>;
export type CodegenGeneratedAdoPrimitiveLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveLazyQuery>;
export type CodegenGeneratedAdoPrimitiveQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoPrimitiveQuery, ICodegenGeneratedAdoPrimitiveQueryVariables>;
export declare function refetchCodegenGeneratedAdoPrimitiveQuery(variables: ICodegenGeneratedAdoPrimitiveQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_primitive_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery({
 *   variables: {
 *      ADO_rate_limiting_withdrawals_address: // value for 'ADO_rate_limiting_withdrawals_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery, Exact<{
    ADO_rate_limiting_withdrawals_address: string;
}>>;
export declare function useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery, Exact<{
    ADO_rate_limiting_withdrawals_address: string;
}>>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsLazyQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables>;
export declare function refetchCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rate_limiting_withdrawals_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRateLimitingWithdrawalsAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery({
 *   variables: {
 *      ADO_rate_limiting_withdrawals_address: // value for 'ADO_rate_limiting_withdrawals_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery, Exact<{
    ADO_rate_limiting_withdrawals_address: string;
}>>;
export declare function useCodegenGeneratedAdoRateLimitingWithdrawalsAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery, Exact<{
    ADO_rate_limiting_withdrawals_address: string;
}>>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsAndrLazyQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rate_limiting_withdrawals_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery({
 *   variables: {
 *      ADO_rate_limiting_withdrawals_address: // value for 'ADO_rate_limiting_withdrawals_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery, Exact<{
    ADO_rate_limiting_withdrawals_address: string;
}>>;
export declare function useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery, Exact<{
    ADO_rate_limiting_withdrawals_address: string;
}>>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsLazyQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables>;
export declare function refetchCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rate_limiting_withdrawals_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRateLimitingWithdrawalsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRateLimitingWithdrawalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRateLimitingWithdrawalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRateLimitingWithdrawalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRateLimitingWithdrawalsQuery({
 *   variables: {
 *      ADO_rate_limiting_withdrawals_address: // value for 'ADO_rate_limiting_withdrawals_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRateLimitingWithdrawalsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery, Exact<{
    ADO_rate_limiting_withdrawals_address: string;
}>>;
export declare function useCodegenGeneratedAdoRateLimitingWithdrawalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery, Exact<{
    ADO_rate_limiting_withdrawals_address: string;
}>>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsLazyQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables>;
export declare function refetchCodegenGeneratedAdoRateLimitingWithdrawalsQuery(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rate_limiting_withdrawals_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRatesAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRatesAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesAndrQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRatesAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesAndrQuery, ICodegenGeneratedAdoRatesAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRatesAndrQuery, Exact<{
    ADO_rates_address: string;
}>>;
export declare function useCodegenGeneratedAdoRatesAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesAndrQuery, ICodegenGeneratedAdoRatesAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRatesAndrQuery, Exact<{
    ADO_rates_address: string;
}>>;
export type CodegenGeneratedAdoRatesAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesAndrQuery>;
export type CodegenGeneratedAdoRatesAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesAndrLazyQuery>;
export type CodegenGeneratedAdoRatesAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesAndrQuery, ICodegenGeneratedAdoRatesAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoRatesAndrQuery(variables: ICodegenGeneratedAdoRatesAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rates_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRatesPaymentsRateExternalDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRatesPaymentsRateExternalQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesPaymentsRateExternalQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesPaymentsRateExternalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesPaymentsRateExternalQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRatesPaymentsRateExternalQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery, ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery, Exact<{
    ADO_rates_address: string;
}>>;
export declare function useCodegenGeneratedAdoRatesPaymentsRateExternalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery, ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery, Exact<{
    ADO_rates_address: string;
}>>;
export type CodegenGeneratedAdoRatesPaymentsRateExternalQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateExternalQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateExternalLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateExternalLazyQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateExternalQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery, ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables>;
export declare function refetchCodegenGeneratedAdoRatesPaymentsRateExternalQuery(variables: ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rates_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRatesPaymentsRateFlatDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRatesPaymentsRateFlatQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesPaymentsRateFlatQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesPaymentsRateFlatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesPaymentsRateFlatQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRatesPaymentsRateFlatQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery, ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery, Exact<{
    ADO_rates_address: string;
}>>;
export declare function useCodegenGeneratedAdoRatesPaymentsRateFlatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery, ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery, Exact<{
    ADO_rates_address: string;
}>>;
export type CodegenGeneratedAdoRatesPaymentsRateFlatQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateFlatQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateFlatLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateFlatLazyQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateFlatQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery, ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables>;
export declare function refetchCodegenGeneratedAdoRatesPaymentsRateFlatQuery(variables: ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rates_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRatesPaymentsRatePercentDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRatesPaymentsRatePercentQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesPaymentsRatePercentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesPaymentsRatePercentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesPaymentsRatePercentQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRatesPaymentsRatePercentQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery, ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery, Exact<{
    ADO_rates_address: string;
}>>;
export declare function useCodegenGeneratedAdoRatesPaymentsRatePercentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery, ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery, Exact<{
    ADO_rates_address: string;
}>>;
export type CodegenGeneratedAdoRatesPaymentsRatePercentQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRatePercentQuery>;
export type CodegenGeneratedAdoRatesPaymentsRatePercentLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRatePercentLazyQuery>;
export type CodegenGeneratedAdoRatesPaymentsRatePercentQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery, ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables>;
export declare function refetchCodegenGeneratedAdoRatesPaymentsRatePercentQuery(variables: ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rates_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRatesPaymentsRateDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRatesPaymentsRateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesPaymentsRateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesPaymentsRateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesPaymentsRateQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRatesPaymentsRateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateQuery, ICodegenGeneratedAdoRatesPaymentsRateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRateQuery, Exact<{
    ADO_rates_address: string;
}>>;
export declare function useCodegenGeneratedAdoRatesPaymentsRateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateQuery, ICodegenGeneratedAdoRatesPaymentsRateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRatesPaymentsRateQuery, Exact<{
    ADO_rates_address: string;
}>>;
export type CodegenGeneratedAdoRatesPaymentsRateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateLazyQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRateQuery, ICodegenGeneratedAdoRatesPaymentsRateQueryVariables>;
export declare function refetchCodegenGeneratedAdoRatesPaymentsRateQuery(variables: ICodegenGeneratedAdoRatesPaymentsRateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rates_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRatesPaymentsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRatesPaymentsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesPaymentsQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRatesPaymentsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesPaymentsQuery, ICodegenGeneratedAdoRatesPaymentsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsQuery, Exact<{
    ADO_rates_address: string;
}>>;
export declare function useCodegenGeneratedAdoRatesPaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesPaymentsQuery, ICodegenGeneratedAdoRatesPaymentsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRatesPaymentsQuery, Exact<{
    ADO_rates_address: string;
}>>;
export type CodegenGeneratedAdoRatesPaymentsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsQuery>;
export type CodegenGeneratedAdoRatesPaymentsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsLazyQuery>;
export type CodegenGeneratedAdoRatesPaymentsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsQuery, ICodegenGeneratedAdoRatesPaymentsQueryVariables>;
export declare function refetchCodegenGeneratedAdoRatesPaymentsQuery(variables: ICodegenGeneratedAdoRatesPaymentsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rates_address: string;
    }>;
};
export declare const CodegenGeneratedAdoRatesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoRatesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoRatesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesQuery, ICodegenGeneratedAdoRatesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoRatesQuery, Exact<{
    ADO_rates_address: string;
}>>;
export declare function useCodegenGeneratedAdoRatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesQuery, ICodegenGeneratedAdoRatesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoRatesQuery, Exact<{
    ADO_rates_address: string;
}>>;
export type CodegenGeneratedAdoRatesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesQuery>;
export type CodegenGeneratedAdoRatesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesLazyQuery>;
export type CodegenGeneratedAdoRatesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesQuery, ICodegenGeneratedAdoRatesQueryVariables>;
export declare function refetchCodegenGeneratedAdoRatesQuery(variables: ICodegenGeneratedAdoRatesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_rates_address: string;
    }>;
};
export declare const CodegenGeneratedAdoSplitterAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoSplitterAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoSplitterAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoSplitterAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoSplitterAndrQuery({
 *   variables: {
 *      ADO_splitter_address: // value for 'ADO_splitter_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoSplitterAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoSplitterAndrQuery, ICodegenGeneratedAdoSplitterAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoSplitterAndrQuery, Exact<{
    ADO_splitter_address: string;
}>>;
export declare function useCodegenGeneratedAdoSplitterAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoSplitterAndrQuery, ICodegenGeneratedAdoSplitterAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoSplitterAndrQuery, Exact<{
    ADO_splitter_address: string;
}>>;
export type CodegenGeneratedAdoSplitterAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterAndrQuery>;
export type CodegenGeneratedAdoSplitterAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterAndrLazyQuery>;
export type CodegenGeneratedAdoSplitterAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoSplitterAndrQuery, ICodegenGeneratedAdoSplitterAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoSplitterAndrQuery(variables: ICodegenGeneratedAdoSplitterAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_splitter_address: string;
    }>;
};
export declare const CodegenGeneratedAdoSplitterConfigRecipientsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoSplitterConfigRecipientsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoSplitterConfigRecipientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoSplitterConfigRecipientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoSplitterConfigRecipientsQuery({
 *   variables: {
 *      ADO_splitter_address: // value for 'ADO_splitter_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoSplitterConfigRecipientsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoSplitterConfigRecipientsQuery, ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoSplitterConfigRecipientsQuery, Exact<{
    ADO_splitter_address: string;
}>>;
export declare function useCodegenGeneratedAdoSplitterConfigRecipientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoSplitterConfigRecipientsQuery, ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoSplitterConfigRecipientsQuery, Exact<{
    ADO_splitter_address: string;
}>>;
export type CodegenGeneratedAdoSplitterConfigRecipientsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterConfigRecipientsQuery>;
export type CodegenGeneratedAdoSplitterConfigRecipientsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterConfigRecipientsLazyQuery>;
export type CodegenGeneratedAdoSplitterConfigRecipientsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoSplitterConfigRecipientsQuery, ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables>;
export declare function refetchCodegenGeneratedAdoSplitterConfigRecipientsQuery(variables: ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_splitter_address: string;
    }>;
};
export declare const CodegenGeneratedAdoSplitterConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoSplitterConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoSplitterConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoSplitterConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoSplitterConfigQuery({
 *   variables: {
 *      ADO_splitter_address: // value for 'ADO_splitter_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoSplitterConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoSplitterConfigQuery, ICodegenGeneratedAdoSplitterConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoSplitterConfigQuery, Exact<{
    ADO_splitter_address: string;
}>>;
export declare function useCodegenGeneratedAdoSplitterConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoSplitterConfigQuery, ICodegenGeneratedAdoSplitterConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoSplitterConfigQuery, Exact<{
    ADO_splitter_address: string;
}>>;
export type CodegenGeneratedAdoSplitterConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterConfigQuery>;
export type CodegenGeneratedAdoSplitterConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterConfigLazyQuery>;
export type CodegenGeneratedAdoSplitterConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoSplitterConfigQuery, ICodegenGeneratedAdoSplitterConfigQueryVariables>;
export declare function refetchCodegenGeneratedAdoSplitterConfigQuery(variables: ICodegenGeneratedAdoSplitterConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_splitter_address: string;
    }>;
};
export declare const CodegenGeneratedAdoSplitterDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoSplitterQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoSplitterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoSplitterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoSplitterQuery({
 *   variables: {
 *      ADO_splitter_address: // value for 'ADO_splitter_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoSplitterQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoSplitterQuery, ICodegenGeneratedAdoSplitterQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoSplitterQuery, Exact<{
    ADO_splitter_address: string;
}>>;
export declare function useCodegenGeneratedAdoSplitterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoSplitterQuery, ICodegenGeneratedAdoSplitterQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoSplitterQuery, Exact<{
    ADO_splitter_address: string;
}>>;
export type CodegenGeneratedAdoSplitterQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterQuery>;
export type CodegenGeneratedAdoSplitterLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterLazyQuery>;
export type CodegenGeneratedAdoSplitterQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoSplitterQuery, ICodegenGeneratedAdoSplitterQueryVariables>;
export declare function refetchCodegenGeneratedAdoSplitterQuery(variables: ICodegenGeneratedAdoSplitterQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_splitter_address: string;
    }>;
};
export declare const CodegenGeneratedAdoTimelockAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoTimelockAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockAndrQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoTimelockAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockAndrQuery, ICodegenGeneratedAdoTimelockAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoTimelockAndrQuery, Exact<{
    ADO_timelock_address: string;
}>>;
export declare function useCodegenGeneratedAdoTimelockAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockAndrQuery, ICodegenGeneratedAdoTimelockAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoTimelockAndrQuery, Exact<{
    ADO_timelock_address: string;
}>>;
export type CodegenGeneratedAdoTimelockAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockAndrQuery>;
export type CodegenGeneratedAdoTimelockAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockAndrLazyQuery>;
export type CodegenGeneratedAdoTimelockAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockAndrQuery, ICodegenGeneratedAdoTimelockAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoTimelockAndrQuery(variables: ICodegenGeneratedAdoTimelockAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_timelock_address: string;
    }>;
};
export declare const CodegenGeneratedAdoTimelockGetlockedfundsCoinsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFunds_owner: // value for 'ADO_timelock_timelock_getLockedFunds_owner'
 *      ADO_timelock_timelock_getLockedFunds_recipient: // value for 'ADO_timelock_timelock_getLockedFunds_recipient'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFunds_owner: string;
    ADO_timelock_timelock_getLockedFunds_recipient: string;
}>>;
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsCoinsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFunds_owner: string;
    ADO_timelock_timelock_getLockedFunds_recipient: string;
}>>;
export type CodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsCoinsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsCoinsLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables>;
export declare function refetchCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_timelock_address: string;
        ADO_timelock_timelock_getLockedFunds_owner: string;
        ADO_timelock_timelock_getLockedFunds_recipient: string;
    }>;
};
export declare const CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFunds_owner: // value for 'ADO_timelock_timelock_getLockedFunds_owner'
 *      ADO_timelock_timelock_getLockedFunds_recipient: // value for 'ADO_timelock_timelock_getLockedFunds_recipient'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFunds_owner: string;
    ADO_timelock_timelock_getLockedFunds_recipient: string;
}>>;
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFunds_owner: string;
    ADO_timelock_timelock_getLockedFunds_recipient: string;
}>>;
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables>;
export declare function refetchCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_timelock_address: string;
        ADO_timelock_timelock_getLockedFunds_owner: string;
        ADO_timelock_timelock_getLockedFunds_recipient: string;
    }>;
};
export declare const CodegenGeneratedAdoTimelockGetlockedfundsConditionDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFunds_owner: // value for 'ADO_timelock_timelock_getLockedFunds_owner'
 *      ADO_timelock_timelock_getLockedFunds_recipient: // value for 'ADO_timelock_timelock_getLockedFunds_recipient'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFunds_owner: string;
    ADO_timelock_timelock_getLockedFunds_recipient: string;
}>>;
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsConditionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFunds_owner: string;
    ADO_timelock_timelock_getLockedFunds_recipient: string;
}>>;
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsConditionLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables>;
export declare function refetchCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_timelock_address: string;
        ADO_timelock_timelock_getLockedFunds_owner: string;
        ADO_timelock_timelock_getLockedFunds_recipient: string;
    }>;
};
export declare const CodegenGeneratedAdoTimelockGetlockedfundsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFunds_owner: // value for 'ADO_timelock_timelock_getLockedFunds_owner'
 *      ADO_timelock_timelock_getLockedFunds_recipient: // value for 'ADO_timelock_timelock_getLockedFunds_recipient'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFunds_owner: string;
    ADO_timelock_timelock_getLockedFunds_recipient: string;
}>>;
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoTimelockGetlockedfundsQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFunds_owner: string;
    ADO_timelock_timelock_getLockedFunds_recipient: string;
}>>;
export type CodegenGeneratedAdoTimelockGetlockedfundsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables>;
export declare function refetchCodegenGeneratedAdoTimelockGetlockedfundsQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_timelock_address: string;
        ADO_timelock_timelock_getLockedFunds_owner: string;
        ADO_timelock_timelock_getLockedFunds_recipient: string;
    }>;
};
export declare const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_options: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_options'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_recipient: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_recipient'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
}>>;
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
}>>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables>;
export declare function refetchCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_timelock_address: string;
        ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
        ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
    }>;
};
export declare const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_options: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_options'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_recipient: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_recipient'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
}>>;
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
}>>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables>;
export declare function refetchCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_timelock_address: string;
        ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
        ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
    }>;
};
export declare const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_options: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_options'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_recipient: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_recipient'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
}>>;
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
}>>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables>;
export declare function refetchCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_timelock_address: string;
        ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
        ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
    }>;
};
export declare const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_options: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_options'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_recipient: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_recipient'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
}>>;
export declare function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery, Exact<{
    ADO_timelock_address: string;
    ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
    ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
}>>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables>;
export declare function refetchCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_timelock_address: string;
        ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
        ADO_timelock_timelock_getLockedFundsForRecipient_recipient: string;
    }>;
};
export declare const CodegenGeneratedAdoTimelockDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoTimelockQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoTimelockQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockQuery, ICodegenGeneratedAdoTimelockQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoTimelockQuery, Exact<{
    ADO_timelock_address: string;
}>>;
export declare function useCodegenGeneratedAdoTimelockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockQuery, ICodegenGeneratedAdoTimelockQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoTimelockQuery, Exact<{
    ADO_timelock_address: string;
}>>;
export type CodegenGeneratedAdoTimelockQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockQuery>;
export type CodegenGeneratedAdoTimelockLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockLazyQuery>;
export type CodegenGeneratedAdoTimelockQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockQuery, ICodegenGeneratedAdoTimelockQueryVariables>;
export declare function refetchCodegenGeneratedAdoTimelockQuery(variables: ICodegenGeneratedAdoTimelockQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_timelock_address: string;
    }>;
};
export declare const CodegenGeneratedAdoVaultAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoVaultAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVaultAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVaultAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVaultAndrQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoVaultAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVaultAndrQuery, ICodegenGeneratedAdoVaultAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoVaultAndrQuery, Exact<{
    ADO_vault_address: string;
}>>;
export declare function useCodegenGeneratedAdoVaultAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVaultAndrQuery, ICodegenGeneratedAdoVaultAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoVaultAndrQuery, Exact<{
    ADO_vault_address: string;
}>>;
export type CodegenGeneratedAdoVaultAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultAndrQuery>;
export type CodegenGeneratedAdoVaultAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultAndrLazyQuery>;
export type CodegenGeneratedAdoVaultAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVaultAndrQuery, ICodegenGeneratedAdoVaultAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoVaultAndrQuery(variables: ICodegenGeneratedAdoVaultAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_vault_address: string;
    }>;
};
export declare const CodegenGeneratedAdoVaultBalanceDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoVaultBalanceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVaultBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVaultBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVaultBalanceQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *      ADO_vault_vault_balance_address: // value for 'ADO_vault_vault_balance_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoVaultBalanceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVaultBalanceQuery, ICodegenGeneratedAdoVaultBalanceQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoVaultBalanceQuery, Exact<{
    ADO_vault_address: string;
    ADO_vault_vault_balance_address: string;
}>>;
export declare function useCodegenGeneratedAdoVaultBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVaultBalanceQuery, ICodegenGeneratedAdoVaultBalanceQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoVaultBalanceQuery, Exact<{
    ADO_vault_address: string;
    ADO_vault_vault_balance_address: string;
}>>;
export type CodegenGeneratedAdoVaultBalanceQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultBalanceQuery>;
export type CodegenGeneratedAdoVaultBalanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultBalanceLazyQuery>;
export type CodegenGeneratedAdoVaultBalanceQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVaultBalanceQuery, ICodegenGeneratedAdoVaultBalanceQueryVariables>;
export declare function refetchCodegenGeneratedAdoVaultBalanceQuery(variables: ICodegenGeneratedAdoVaultBalanceQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_vault_address: string;
        ADO_vault_vault_balance_address: string;
    }>;
};
export declare const CodegenGeneratedAdoVaultStrategyaddressDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoVaultStrategyaddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVaultStrategyaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVaultStrategyaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVaultStrategyaddressQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *      ADO_vault_vault_strategyAddress_strategy: // value for 'ADO_vault_vault_strategyAddress_strategy'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoVaultStrategyaddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVaultStrategyaddressQuery, ICodegenGeneratedAdoVaultStrategyaddressQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoVaultStrategyaddressQuery, Exact<{
    ADO_vault_address: string;
    ADO_vault_vault_strategyAddress_strategy: string;
}>>;
export declare function useCodegenGeneratedAdoVaultStrategyaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVaultStrategyaddressQuery, ICodegenGeneratedAdoVaultStrategyaddressQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoVaultStrategyaddressQuery, Exact<{
    ADO_vault_address: string;
    ADO_vault_vault_strategyAddress_strategy: string;
}>>;
export type CodegenGeneratedAdoVaultStrategyaddressQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultStrategyaddressQuery>;
export type CodegenGeneratedAdoVaultStrategyaddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultStrategyaddressLazyQuery>;
export type CodegenGeneratedAdoVaultStrategyaddressQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVaultStrategyaddressQuery, ICodegenGeneratedAdoVaultStrategyaddressQueryVariables>;
export declare function refetchCodegenGeneratedAdoVaultStrategyaddressQuery(variables: ICodegenGeneratedAdoVaultStrategyaddressQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_vault_address: string;
        ADO_vault_vault_strategyAddress_strategy: string;
    }>;
};
export declare const CodegenGeneratedAdoVaultDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoVaultQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVaultQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVaultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVaultQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoVaultQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVaultQuery, ICodegenGeneratedAdoVaultQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoVaultQuery, Exact<{
    ADO_vault_address: string;
}>>;
export declare function useCodegenGeneratedAdoVaultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVaultQuery, ICodegenGeneratedAdoVaultQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoVaultQuery, Exact<{
    ADO_vault_address: string;
}>>;
export type CodegenGeneratedAdoVaultQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultQuery>;
export type CodegenGeneratedAdoVaultLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultLazyQuery>;
export type CodegenGeneratedAdoVaultQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVaultQuery, ICodegenGeneratedAdoVaultQueryVariables>;
export declare function refetchCodegenGeneratedAdoVaultQuery(variables: ICodegenGeneratedAdoVaultQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_vault_address: string;
    }>;
};
export declare const CodegenGeneratedAdoVestingAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoVestingAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingAndrQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoVestingAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingAndrQuery, ICodegenGeneratedAdoVestingAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoVestingAndrQuery, Exact<{
    ADO_vesting_address: string;
}>>;
export declare function useCodegenGeneratedAdoVestingAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingAndrQuery, ICodegenGeneratedAdoVestingAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoVestingAndrQuery, Exact<{
    ADO_vesting_address: string;
}>>;
export type CodegenGeneratedAdoVestingAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingAndrQuery>;
export type CodegenGeneratedAdoVestingAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingAndrLazyQuery>;
export type CodegenGeneratedAdoVestingAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingAndrQuery, ICodegenGeneratedAdoVestingAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoVestingAndrQuery(variables: ICodegenGeneratedAdoVestingAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_vesting_address: string;
    }>;
};
export declare const CodegenGeneratedAdoVestingBatchDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoVestingBatchQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingBatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingBatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingBatchQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *      ADO_vesting_vesting_batch_id: // value for 'ADO_vesting_vesting_batch_id'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoVestingBatchQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingBatchQuery, ICodegenGeneratedAdoVestingBatchQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoVestingBatchQuery, Exact<{
    ADO_vesting_address: string;
    ADO_vesting_vesting_batch_id: number;
}>>;
export declare function useCodegenGeneratedAdoVestingBatchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingBatchQuery, ICodegenGeneratedAdoVestingBatchQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoVestingBatchQuery, Exact<{
    ADO_vesting_address: string;
    ADO_vesting_vesting_batch_id: number;
}>>;
export type CodegenGeneratedAdoVestingBatchQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingBatchQuery>;
export type CodegenGeneratedAdoVestingBatchLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingBatchLazyQuery>;
export type CodegenGeneratedAdoVestingBatchQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingBatchQuery, ICodegenGeneratedAdoVestingBatchQueryVariables>;
export declare function refetchCodegenGeneratedAdoVestingBatchQuery(variables: ICodegenGeneratedAdoVestingBatchQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_vesting_address: string;
        ADO_vesting_vesting_batch_id: number;
    }>;
};
export declare const CodegenGeneratedAdoVestingBatchesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoVestingBatchesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingBatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingBatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingBatchesQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoVestingBatchesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingBatchesQuery, ICodegenGeneratedAdoVestingBatchesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoVestingBatchesQuery, Exact<{
    ADO_vesting_address: string;
}>>;
export declare function useCodegenGeneratedAdoVestingBatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingBatchesQuery, ICodegenGeneratedAdoVestingBatchesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoVestingBatchesQuery, Exact<{
    ADO_vesting_address: string;
}>>;
export type CodegenGeneratedAdoVestingBatchesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingBatchesQuery>;
export type CodegenGeneratedAdoVestingBatchesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingBatchesLazyQuery>;
export type CodegenGeneratedAdoVestingBatchesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingBatchesQuery, ICodegenGeneratedAdoVestingBatchesQueryVariables>;
export declare function refetchCodegenGeneratedAdoVestingBatchesQuery(variables: ICodegenGeneratedAdoVestingBatchesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_vesting_address: string;
    }>;
};
export declare const CodegenGeneratedAdoVestingConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoVestingConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingConfigQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoVestingConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingConfigQuery, ICodegenGeneratedAdoVestingConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoVestingConfigQuery, Exact<{
    ADO_vesting_address: string;
}>>;
export declare function useCodegenGeneratedAdoVestingConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingConfigQuery, ICodegenGeneratedAdoVestingConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoVestingConfigQuery, Exact<{
    ADO_vesting_address: string;
}>>;
export type CodegenGeneratedAdoVestingConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingConfigQuery>;
export type CodegenGeneratedAdoVestingConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingConfigLazyQuery>;
export type CodegenGeneratedAdoVestingConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingConfigQuery, ICodegenGeneratedAdoVestingConfigQueryVariables>;
export declare function refetchCodegenGeneratedAdoVestingConfigQuery(variables: ICodegenGeneratedAdoVestingConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_vesting_address: string;
    }>;
};
export declare const CodegenGeneratedAdoVestingDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoVestingQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoVestingQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingQuery, ICodegenGeneratedAdoVestingQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoVestingQuery, Exact<{
    ADO_vesting_address: string;
}>>;
export declare function useCodegenGeneratedAdoVestingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingQuery, ICodegenGeneratedAdoVestingQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoVestingQuery, Exact<{
    ADO_vesting_address: string;
}>>;
export type CodegenGeneratedAdoVestingQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingQuery>;
export type CodegenGeneratedAdoVestingLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingLazyQuery>;
export type CodegenGeneratedAdoVestingQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingQuery, ICodegenGeneratedAdoVestingQueryVariables>;
export declare function refetchCodegenGeneratedAdoVestingQuery(variables: ICodegenGeneratedAdoVestingQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_vesting_address: string;
    }>;
};
export declare const CodegenGeneratedAdoWeightedDistributionSplitterAndrDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery, Exact<{
    ADO_weighted_distribution_splitter_address: string;
}>>;
export declare function useCodegenGeneratedAdoWeightedDistributionSplitterAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery, Exact<{
    ADO_weighted_distribution_splitter_address: string;
}>>;
export type CodegenGeneratedAdoWeightedDistributionSplitterAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterAndrLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables>;
export declare function refetchCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_weighted_distribution_splitter_address: string;
    }>;
};
export declare const CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery, Exact<{
    ADO_weighted_distribution_splitter_address: string;
}>>;
export declare function useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery, Exact<{
    ADO_weighted_distribution_splitter_address: string;
}>>;
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables>;
export declare function refetchCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_weighted_distribution_splitter_address: string;
    }>;
};
export declare const CodegenGeneratedAdoWeightedDistributionSplitterConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery, Exact<{
    ADO_weighted_distribution_splitter_address: string;
}>>;
export declare function useCodegenGeneratedAdoWeightedDistributionSplitterConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery, Exact<{
    ADO_weighted_distribution_splitter_address: string;
}>>;
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterConfigLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables>;
export declare function refetchCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_weighted_distribution_splitter_address: string;
    }>;
};
export declare const CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *      ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: // value for 'ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery, ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery, Exact<{
    ADO_weighted_distribution_splitter_address: string;
    ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: string;
}>>;
export declare function useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery, ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery, Exact<{
    ADO_weighted_distribution_splitter_address: string;
    ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: string;
}>>;
export type CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery, ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables>;
export declare function refetchCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_weighted_distribution_splitter_address: string;
        ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: string;
    }>;
};
export declare const CodegenGeneratedAdoWeightedDistributionSplitterDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoWeightedDistributionSplitterQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterQuery, ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterQuery, Exact<{
    ADO_weighted_distribution_splitter_address: string;
}>>;
export declare function useCodegenGeneratedAdoWeightedDistributionSplitterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterQuery, ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoWeightedDistributionSplitterQuery, Exact<{
    ADO_weighted_distribution_splitter_address: string;
}>>;
export type CodegenGeneratedAdoWeightedDistributionSplitterQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterQuery, ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables>;
export declare function refetchCodegenGeneratedAdoWeightedDistributionSplitterQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADO_weighted_distribution_splitter_address: string;
    }>;
};
export declare const CodegenGeneratedAdoDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedAdoQuery, ICodegenGeneratedAdoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdoQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedAdoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoQuery, ICodegenGeneratedAdoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdoQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedAdoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoQuery>;
export type CodegenGeneratedAdoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLazyQuery>;
export type CodegenGeneratedAdoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoQuery, ICodegenGeneratedAdoQueryVariables>;
export declare function refetchCodegenGeneratedAdoQuery(variables?: ICodegenGeneratedAdoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedAdopPackageSchemasReceiveDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdopPackageSchemasReceiveQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdopPackageSchemasReceiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdopPackageSchemasReceiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdopPackageSchemasReceiveQuery({
 *   variables: {
 *      ADOP_package_adoType: // value for 'ADOP_package_adoType'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdopPackageSchemasReceiveQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdopPackageSchemasReceiveQuery, ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdopPackageSchemasReceiveQuery, Exact<{
    ADOP_package_adoType: string;
}>>;
export declare function useCodegenGeneratedAdopPackageSchemasReceiveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdopPackageSchemasReceiveQuery, ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdopPackageSchemasReceiveQuery, Exact<{
    ADOP_package_adoType: string;
}>>;
export type CodegenGeneratedAdopPackageSchemasReceiveQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageSchemasReceiveQuery>;
export type CodegenGeneratedAdopPackageSchemasReceiveLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageSchemasReceiveLazyQuery>;
export type CodegenGeneratedAdopPackageSchemasReceiveQueryResult = Apollo.QueryResult<ICodegenGeneratedAdopPackageSchemasReceiveQuery, ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables>;
export declare function refetchCodegenGeneratedAdopPackageSchemasReceiveQuery(variables: ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADOP_package_adoType: string;
    }>;
};
export declare const CodegenGeneratedAdopPackageSchemasDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdopPackageSchemasQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdopPackageSchemasQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdopPackageSchemasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdopPackageSchemasQuery({
 *   variables: {
 *      ADOP_package_adoType: // value for 'ADOP_package_adoType'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdopPackageSchemasQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdopPackageSchemasQuery, ICodegenGeneratedAdopPackageSchemasQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdopPackageSchemasQuery, Exact<{
    ADOP_package_adoType: string;
}>>;
export declare function useCodegenGeneratedAdopPackageSchemasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdopPackageSchemasQuery, ICodegenGeneratedAdopPackageSchemasQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdopPackageSchemasQuery, Exact<{
    ADOP_package_adoType: string;
}>>;
export type CodegenGeneratedAdopPackageSchemasQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageSchemasQuery>;
export type CodegenGeneratedAdopPackageSchemasLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageSchemasLazyQuery>;
export type CodegenGeneratedAdopPackageSchemasQueryResult = Apollo.QueryResult<ICodegenGeneratedAdopPackageSchemasQuery, ICodegenGeneratedAdopPackageSchemasQueryVariables>;
export declare function refetchCodegenGeneratedAdopPackageSchemasQuery(variables: ICodegenGeneratedAdopPackageSchemasQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADOP_package_adoType: string;
    }>;
};
export declare const CodegenGeneratedAdopPackageDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdopPackageQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdopPackageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdopPackageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdopPackageQuery({
 *   variables: {
 *      ADOP_package_adoType: // value for 'ADOP_package_adoType'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdopPackageQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdopPackageQuery, ICodegenGeneratedAdopPackageQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdopPackageQuery, Exact<{
    ADOP_package_adoType: string;
}>>;
export declare function useCodegenGeneratedAdopPackageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdopPackageQuery, ICodegenGeneratedAdopPackageQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdopPackageQuery, Exact<{
    ADOP_package_adoType: string;
}>>;
export type CodegenGeneratedAdopPackageQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageQuery>;
export type CodegenGeneratedAdopPackageLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageLazyQuery>;
export type CodegenGeneratedAdopPackageQueryResult = Apollo.QueryResult<ICodegenGeneratedAdopPackageQuery, ICodegenGeneratedAdopPackageQueryVariables>;
export declare function refetchCodegenGeneratedAdopPackageQuery(variables: ICodegenGeneratedAdopPackageQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        ADOP_package_adoType: string;
    }>;
};
export declare const CodegenGeneratedAdopDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdopQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdopQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdopQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedAdopQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedAdopQuery, ICodegenGeneratedAdopQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAdopQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedAdopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdopQuery, ICodegenGeneratedAdopQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAdopQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedAdopQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopQuery>;
export type CodegenGeneratedAdopLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopLazyQuery>;
export type CodegenGeneratedAdopQueryResult = Apollo.QueryResult<ICodegenGeneratedAdopQuery, ICodegenGeneratedAdopQueryVariables>;
export declare function refetchCodegenGeneratedAdopQuery(variables?: ICodegenGeneratedAdopQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedAccountsAssetsComponentsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAccountsAssetsComponentsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAccountsAssetsComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAccountsAssetsComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAccountsAssetsComponentsQuery({
 *   variables: {
 *      accounts_assets_adoType: // value for 'accounts_assets_adoType'
 *      accounts_assets_appContract: // value for 'accounts_assets_appContract'
 *      accounts_assets_instantiateOwner: // value for 'accounts_assets_instantiateOwner'
 *      accounts_assets_kernel: // value for 'accounts_assets_kernel'
 *      accounts_assets_limit: // value for 'accounts_assets_limit'
 *      accounts_assets_memo: // value for 'accounts_assets_memo'
 *      accounts_assets_offset: // value for 'accounts_assets_offset'
 *      accounts_assets_orderBy: // value for 'accounts_assets_orderBy'
 *      accounts_assets_owner: // value for 'accounts_assets_owner'
 *      accounts_assets_ownershipRequest: // value for 'accounts_assets_ownershipRequest'
 *      accounts_assets_search: // value for 'accounts_assets_search'
 *      accounts_assets_walletAddress: // value for 'accounts_assets_walletAddress'
 *      accounts_assets_assets_components_componentType: // value for 'accounts_assets_assets_components_componentType'
 *      accounts_assets_assets_components_limit: // value for 'accounts_assets_assets_components_limit'
 *      accounts_assets_assets_components_offset: // value for 'accounts_assets_assets_components_offset'
 *   },
 * });
 */
export declare function useCodegenGeneratedAccountsAssetsComponentsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAccountsAssetsComponentsQuery, ICodegenGeneratedAccountsAssetsComponentsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAccountsAssetsComponentsQuery, Exact<{
    accounts_assets_adoType?: InputMaybe<string>;
    accounts_assets_appContract?: InputMaybe<string>;
    accounts_assets_instantiateOwner?: InputMaybe<string>;
    accounts_assets_kernel?: InputMaybe<string>;
    accounts_assets_limit: number;
    accounts_assets_memo?: InputMaybe<string>;
    accounts_assets_offset: number;
    accounts_assets_orderBy?: InputMaybe<IAndrOrderBy>;
    accounts_assets_owner?: InputMaybe<string>;
    accounts_assets_ownershipRequest?: InputMaybe<string>;
    accounts_assets_search?: InputMaybe<string>;
    accounts_assets_walletAddress: string;
    accounts_assets_assets_components_componentType?: InputMaybe<IAdoType>;
    accounts_assets_assets_components_limit: number;
    accounts_assets_assets_components_offset: number;
}>>;
export declare function useCodegenGeneratedAccountsAssetsComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAccountsAssetsComponentsQuery, ICodegenGeneratedAccountsAssetsComponentsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAccountsAssetsComponentsQuery, Exact<{
    accounts_assets_adoType?: InputMaybe<string>;
    accounts_assets_appContract?: InputMaybe<string>;
    accounts_assets_instantiateOwner?: InputMaybe<string>;
    accounts_assets_kernel?: InputMaybe<string>;
    accounts_assets_limit: number;
    accounts_assets_memo?: InputMaybe<string>;
    accounts_assets_offset: number;
    accounts_assets_orderBy?: InputMaybe<IAndrOrderBy>;
    accounts_assets_owner?: InputMaybe<string>;
    accounts_assets_ownershipRequest?: InputMaybe<string>;
    accounts_assets_search?: InputMaybe<string>;
    accounts_assets_walletAddress: string;
    accounts_assets_assets_components_componentType?: InputMaybe<IAdoType>;
    accounts_assets_assets_components_limit: number;
    accounts_assets_assets_components_offset: number;
}>>;
export type CodegenGeneratedAccountsAssetsComponentsQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsAssetsComponentsQuery>;
export type CodegenGeneratedAccountsAssetsComponentsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsAssetsComponentsLazyQuery>;
export type CodegenGeneratedAccountsAssetsComponentsQueryResult = Apollo.QueryResult<ICodegenGeneratedAccountsAssetsComponentsQuery, ICodegenGeneratedAccountsAssetsComponentsQueryVariables>;
export declare function refetchCodegenGeneratedAccountsAssetsComponentsQuery(variables: ICodegenGeneratedAccountsAssetsComponentsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        accounts_assets_adoType?: InputMaybe<string>;
        accounts_assets_appContract?: InputMaybe<string>;
        accounts_assets_instantiateOwner?: InputMaybe<string>;
        accounts_assets_kernel?: InputMaybe<string>;
        accounts_assets_limit: number;
        accounts_assets_memo?: InputMaybe<string>;
        accounts_assets_offset: number;
        accounts_assets_orderBy?: InputMaybe<IAndrOrderBy>;
        accounts_assets_owner?: InputMaybe<string>;
        accounts_assets_ownershipRequest?: InputMaybe<string>;
        accounts_assets_search?: InputMaybe<string>;
        accounts_assets_walletAddress: string;
        accounts_assets_assets_components_componentType?: InputMaybe<IAdoType>;
        accounts_assets_assets_components_limit: number;
        accounts_assets_assets_components_offset: number;
    }>;
};
export declare const CodegenGeneratedAccountsAssetsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAccountsAssetsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAccountsAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAccountsAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAccountsAssetsQuery({
 *   variables: {
 *      accounts_assets_adoType: // value for 'accounts_assets_adoType'
 *      accounts_assets_appContract: // value for 'accounts_assets_appContract'
 *      accounts_assets_instantiateOwner: // value for 'accounts_assets_instantiateOwner'
 *      accounts_assets_kernel: // value for 'accounts_assets_kernel'
 *      accounts_assets_limit: // value for 'accounts_assets_limit'
 *      accounts_assets_memo: // value for 'accounts_assets_memo'
 *      accounts_assets_offset: // value for 'accounts_assets_offset'
 *      accounts_assets_orderBy: // value for 'accounts_assets_orderBy'
 *      accounts_assets_owner: // value for 'accounts_assets_owner'
 *      accounts_assets_ownershipRequest: // value for 'accounts_assets_ownershipRequest'
 *      accounts_assets_search: // value for 'accounts_assets_search'
 *      accounts_assets_walletAddress: // value for 'accounts_assets_walletAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedAccountsAssetsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAccountsAssetsQuery, ICodegenGeneratedAccountsAssetsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAccountsAssetsQuery, Exact<{
    accounts_assets_adoType?: InputMaybe<string>;
    accounts_assets_appContract?: InputMaybe<string>;
    accounts_assets_instantiateOwner?: InputMaybe<string>;
    accounts_assets_kernel?: InputMaybe<string>;
    accounts_assets_limit: number;
    accounts_assets_memo?: InputMaybe<string>;
    accounts_assets_offset: number;
    accounts_assets_orderBy?: InputMaybe<IAndrOrderBy>;
    accounts_assets_owner?: InputMaybe<string>;
    accounts_assets_ownershipRequest?: InputMaybe<string>;
    accounts_assets_search?: InputMaybe<string>;
    accounts_assets_walletAddress: string;
}>>;
export declare function useCodegenGeneratedAccountsAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAccountsAssetsQuery, ICodegenGeneratedAccountsAssetsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAccountsAssetsQuery, Exact<{
    accounts_assets_adoType?: InputMaybe<string>;
    accounts_assets_appContract?: InputMaybe<string>;
    accounts_assets_instantiateOwner?: InputMaybe<string>;
    accounts_assets_kernel?: InputMaybe<string>;
    accounts_assets_limit: number;
    accounts_assets_memo?: InputMaybe<string>;
    accounts_assets_offset: number;
    accounts_assets_orderBy?: InputMaybe<IAndrOrderBy>;
    accounts_assets_owner?: InputMaybe<string>;
    accounts_assets_ownershipRequest?: InputMaybe<string>;
    accounts_assets_search?: InputMaybe<string>;
    accounts_assets_walletAddress: string;
}>>;
export type CodegenGeneratedAccountsAssetsQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsAssetsQuery>;
export type CodegenGeneratedAccountsAssetsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsAssetsLazyQuery>;
export type CodegenGeneratedAccountsAssetsQueryResult = Apollo.QueryResult<ICodegenGeneratedAccountsAssetsQuery, ICodegenGeneratedAccountsAssetsQueryVariables>;
export declare function refetchCodegenGeneratedAccountsAssetsQuery(variables: ICodegenGeneratedAccountsAssetsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        accounts_assets_adoType?: InputMaybe<string>;
        accounts_assets_appContract?: InputMaybe<string>;
        accounts_assets_instantiateOwner?: InputMaybe<string>;
        accounts_assets_kernel?: InputMaybe<string>;
        accounts_assets_limit: number;
        accounts_assets_memo?: InputMaybe<string>;
        accounts_assets_offset: number;
        accounts_assets_orderBy?: InputMaybe<IAndrOrderBy>;
        accounts_assets_owner?: InputMaybe<string>;
        accounts_assets_ownershipRequest?: InputMaybe<string>;
        accounts_assets_search?: InputMaybe<string>;
        accounts_assets_walletAddress: string;
    }>;
};
export declare const CodegenGeneratedAccountsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAccountsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedAccountsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedAccountsQuery, ICodegenGeneratedAccountsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedAccountsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAccountsQuery, ICodegenGeneratedAccountsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedAccountsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedAccountsQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsQuery>;
export type CodegenGeneratedAccountsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsLazyQuery>;
export type CodegenGeneratedAccountsQueryResult = Apollo.QueryResult<ICodegenGeneratedAccountsQuery, ICodegenGeneratedAccountsQueryVariables>;
export declare function refetchCodegenGeneratedAccountsQuery(variables?: ICodegenGeneratedAccountsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedChainconfigsAllconfigsIconurlsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainconfigsAllconfigsIconurlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainconfigsAllconfigsIconurlsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery>;
export type CodegenGeneratedChainconfigsAllconfigsIconurlsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllconfigsIconurlsLazyQuery>;
export type CodegenGeneratedChainconfigsAllconfigsIconurlsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables>;
export declare function refetchCodegenGeneratedChainconfigsAllconfigsIconurlsQuery(variables?: ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedChainconfigsAllconfigsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedChainconfigsAllconfigsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsAllconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsAllconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsAllconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedChainconfigsAllconfigsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsAllconfigsQuery, ICodegenGeneratedChainconfigsAllconfigsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainconfigsAllconfigsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainconfigsAllconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsAllconfigsQuery, ICodegenGeneratedChainconfigsAllconfigsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainconfigsAllconfigsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainconfigsAllconfigsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllconfigsQuery>;
export type CodegenGeneratedChainconfigsAllconfigsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllconfigsLazyQuery>;
export type CodegenGeneratedChainconfigsAllconfigsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsAllconfigsQuery, ICodegenGeneratedChainconfigsAllconfigsQueryVariables>;
export declare function refetchCodegenGeneratedChainconfigsAllconfigsQuery(variables?: ICodegenGeneratedChainconfigsAllconfigsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedChainconfigsAllstoredconfigsIconurlsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainconfigsAllstoredconfigsIconurlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainconfigsAllstoredconfigsIconurlsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery>;
export type CodegenGeneratedChainconfigsAllstoredconfigsIconurlsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllstoredconfigsIconurlsLazyQuery>;
export type CodegenGeneratedChainconfigsAllstoredconfigsIconurlsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQueryVariables>;
export declare function refetchCodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery(variables?: ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedChainconfigsAllstoredconfigsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedChainconfigsAllstoredconfigsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsAllstoredconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsAllstoredconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsAllstoredconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedChainconfigsAllstoredconfigsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsAllstoredconfigsQuery, ICodegenGeneratedChainconfigsAllstoredconfigsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainconfigsAllstoredconfigsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainconfigsAllstoredconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsAllstoredconfigsQuery, ICodegenGeneratedChainconfigsAllstoredconfigsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainconfigsAllstoredconfigsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainconfigsAllstoredconfigsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllstoredconfigsQuery>;
export type CodegenGeneratedChainconfigsAllstoredconfigsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllstoredconfigsLazyQuery>;
export type CodegenGeneratedChainconfigsAllstoredconfigsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsAllstoredconfigsQuery, ICodegenGeneratedChainconfigsAllstoredconfigsQueryVariables>;
export declare function refetchCodegenGeneratedChainconfigsAllstoredconfigsQuery(variables?: ICodegenGeneratedChainconfigsAllstoredconfigsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedChainconfigsConfigIconurlsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedChainconfigsConfigIconurlsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsConfigIconurlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsConfigIconurlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsConfigIconurlsQuery({
 *   variables: {
 *      chainConfigs_config_identifier: // value for 'chainConfigs_config_identifier'
 *   },
 * });
 */
export declare function useCodegenGeneratedChainconfigsConfigIconurlsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsConfigIconurlsQuery, ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainconfigsConfigIconurlsQuery, Exact<{
    chainConfigs_config_identifier: string;
}>>;
export declare function useCodegenGeneratedChainconfigsConfigIconurlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsConfigIconurlsQuery, ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainconfigsConfigIconurlsQuery, Exact<{
    chainConfigs_config_identifier: string;
}>>;
export type CodegenGeneratedChainconfigsConfigIconurlsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsConfigIconurlsQuery>;
export type CodegenGeneratedChainconfigsConfigIconurlsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsConfigIconurlsLazyQuery>;
export type CodegenGeneratedChainconfigsConfigIconurlsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsConfigIconurlsQuery, ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables>;
export declare function refetchCodegenGeneratedChainconfigsConfigIconurlsQuery(variables: ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainConfigs_config_identifier: string;
    }>;
};
export declare const CodegenGeneratedChainconfigsConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedChainconfigsConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsConfigQuery({
 *   variables: {
 *      chainConfigs_config_identifier: // value for 'chainConfigs_config_identifier'
 *   },
 * });
 */
export declare function useCodegenGeneratedChainconfigsConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsConfigQuery, ICodegenGeneratedChainconfigsConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainconfigsConfigQuery, Exact<{
    chainConfigs_config_identifier: string;
}>>;
export declare function useCodegenGeneratedChainconfigsConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsConfigQuery, ICodegenGeneratedChainconfigsConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainconfigsConfigQuery, Exact<{
    chainConfigs_config_identifier: string;
}>>;
export type CodegenGeneratedChainconfigsConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsConfigQuery>;
export type CodegenGeneratedChainconfigsConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsConfigLazyQuery>;
export type CodegenGeneratedChainconfigsConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsConfigQuery, ICodegenGeneratedChainconfigsConfigQueryVariables>;
export declare function refetchCodegenGeneratedChainconfigsConfigQuery(variables: ICodegenGeneratedChainconfigsConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainConfigs_config_identifier: string;
    }>;
};
export declare const CodegenGeneratedChainconfigsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedChainconfigsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedChainconfigsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsQuery, ICodegenGeneratedChainconfigsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainconfigsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsQuery, ICodegenGeneratedChainconfigsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainconfigsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainconfigsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsQuery>;
export type CodegenGeneratedChainconfigsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsLazyQuery>;
export type CodegenGeneratedChainconfigsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsQuery, ICodegenGeneratedChainconfigsQueryVariables>;
export declare function refetchCodegenGeneratedChainconfigsQuery(variables?: ICodegenGeneratedChainconfigsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery, ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery, ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery, ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedKeplrconfigsAllconfigsBip44Document: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsBip44Query__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsBip44Query` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsBip44Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsBip44Query({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsAllconfigsBip44Query(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query, ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedKeplrconfigsAllconfigsBip44LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query, ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedKeplrconfigsAllconfigsBip44QueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsBip44Query>;
export type CodegenGeneratedKeplrconfigsAllconfigsBip44LazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsBip44LazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsBip44QueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query, ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsAllconfigsBip44Query(variables?: ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedKeplrconfigsAllconfigsCurrenciesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsCurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedKeplrconfigsAllconfigsGaspricestepDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery, ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery, ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsGaspricestepLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery, ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery, ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery, ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery, ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedKeplrconfigsAllconfigsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsAllconfigsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsQuery, ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedKeplrconfigsAllconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsQuery, ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsAllconfigsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedKeplrconfigsAllconfigsQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsQuery, ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsAllconfigsQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedKeplrconfigsConfigBech32ConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery, ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export declare function useCodegenGeneratedKeplrconfigsConfigBech32ConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery, ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export type CodegenGeneratedKeplrconfigsConfigBech32ConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery>;
export type CodegenGeneratedKeplrconfigsConfigBech32ConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigBech32ConfigLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigBech32ConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery, ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery(variables: ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        keplrConfigs_config_identifier: string;
    }>;
};
export declare const CodegenGeneratedKeplrconfigsConfigBip44Document: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsConfigBip44Query__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigBip44Query` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigBip44Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigBip44Query({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsConfigBip44Query(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigBip44Query, ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigBip44Query, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export declare function useCodegenGeneratedKeplrconfigsConfigBip44LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigBip44Query, ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsConfigBip44Query, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export type CodegenGeneratedKeplrconfigsConfigBip44QueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigBip44Query>;
export type CodegenGeneratedKeplrconfigsConfigBip44LazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigBip44LazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigBip44QueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigBip44Query, ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsConfigBip44Query(variables: ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        keplrConfigs_config_identifier: string;
    }>;
};
export declare const CodegenGeneratedKeplrconfigsConfigCurrenciesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export declare function useCodegenGeneratedKeplrconfigsConfigCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export type CodegenGeneratedKeplrconfigsConfigCurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery>;
export type CodegenGeneratedKeplrconfigsConfigCurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigCurrenciesLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigCurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsConfigCurrenciesQuery(variables: ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        keplrConfigs_config_identifier: string;
    }>;
};
export declare const CodegenGeneratedKeplrconfigsConfigFeecurrenciesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export declare function useCodegenGeneratedKeplrconfigsConfigFeecurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export type CodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery>;
export type CodegenGeneratedKeplrconfigsConfigFeecurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigFeecurrenciesLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery(variables: ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        keplrConfigs_config_identifier: string;
    }>;
};
export declare const CodegenGeneratedKeplrconfigsConfigGaspricestepDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery, ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export declare function useCodegenGeneratedKeplrconfigsConfigGaspricestepLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery, ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export type CodegenGeneratedKeplrconfigsConfigGaspricestepQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery>;
export type CodegenGeneratedKeplrconfigsConfigGaspricestepLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigGaspricestepLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigGaspricestepQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery, ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsConfigGaspricestepQuery(variables: ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        keplrConfigs_config_identifier: string;
    }>;
};
export declare const CodegenGeneratedKeplrconfigsConfigStakecurrencyDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery, ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export declare function useCodegenGeneratedKeplrconfigsConfigStakecurrencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery, ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export type CodegenGeneratedKeplrconfigsConfigStakecurrencyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery>;
export type CodegenGeneratedKeplrconfigsConfigStakecurrencyLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigStakecurrencyLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigStakecurrencyQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery, ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery(variables: ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        keplrConfigs_config_identifier: string;
    }>;
};
export declare const CodegenGeneratedKeplrconfigsConfigDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigQuery, ICodegenGeneratedKeplrconfigsConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export declare function useCodegenGeneratedKeplrconfigsConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigQuery, ICodegenGeneratedKeplrconfigsConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsConfigQuery, Exact<{
    keplrConfigs_config_identifier: string;
}>>;
export type CodegenGeneratedKeplrconfigsConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigQuery>;
export type CodegenGeneratedKeplrconfigsConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigQuery, ICodegenGeneratedKeplrconfigsConfigQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsConfigQuery(variables: ICodegenGeneratedKeplrconfigsConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        keplrConfigs_config_identifier: string;
    }>;
};
export declare const CodegenGeneratedKeplrconfigsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedKeplrconfigsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedKeplrconfigsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsQuery, ICodegenGeneratedKeplrconfigsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedKeplrconfigsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedKeplrconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsQuery, ICodegenGeneratedKeplrconfigsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedKeplrconfigsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedKeplrconfigsQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsQuery>;
export type CodegenGeneratedKeplrconfigsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsLazyQuery>;
export type CodegenGeneratedKeplrconfigsQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsQuery, ICodegenGeneratedKeplrconfigsQueryVariables>;
export declare function refetchCodegenGeneratedKeplrconfigsQuery(variables?: ICodegenGeneratedKeplrconfigsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedTxByaccountEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByaccountEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByaccountEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountEventsAttributesQuery, ICodegenGeneratedTxByaccountEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByaccountEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export declare function useCodegenGeneratedTxByaccountEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountEventsAttributesQuery, ICodegenGeneratedTxByaccountEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByaccountEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export type CodegenGeneratedTxByaccountEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountEventsAttributesQuery>;
export type CodegenGeneratedTxByaccountEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByaccountEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountEventsAttributesQuery, ICodegenGeneratedTxByaccountEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxByaccountEventsAttributesQuery(variables: ICodegenGeneratedTxByaccountEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byAccount_maxHeight?: InputMaybe<number>;
        tx_byAccount_minHeight?: InputMaybe<number>;
        tx_byAccount_sentFromOrTo: string;
    }>;
};
export declare const CodegenGeneratedTxByaccountEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByaccountEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByaccountEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountEventsQuery, ICodegenGeneratedTxByaccountEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByaccountEventsQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export declare function useCodegenGeneratedTxByaccountEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountEventsQuery, ICodegenGeneratedTxByaccountEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByaccountEventsQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export type CodegenGeneratedTxByaccountEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountEventsQuery>;
export type CodegenGeneratedTxByaccountEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountEventsLazyQuery>;
export type CodegenGeneratedTxByaccountEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountEventsQuery, ICodegenGeneratedTxByaccountEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxByaccountEventsQuery(variables: ICodegenGeneratedTxByaccountEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byAccount_maxHeight?: InputMaybe<number>;
        tx_byAccount_minHeight?: InputMaybe<number>;
        tx_byAccount_sentFromOrTo: string;
    }>;
};
export declare const CodegenGeneratedTxByaccountMsgresponsesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByaccountMsgresponsesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountMsgresponsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountMsgresponsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountMsgresponsesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByaccountMsgresponsesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountMsgresponsesQuery, ICodegenGeneratedTxByaccountMsgresponsesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByaccountMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export declare function useCodegenGeneratedTxByaccountMsgresponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountMsgresponsesQuery, ICodegenGeneratedTxByaccountMsgresponsesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByaccountMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export type CodegenGeneratedTxByaccountMsgresponsesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountMsgresponsesQuery>;
export type CodegenGeneratedTxByaccountMsgresponsesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountMsgresponsesLazyQuery>;
export type CodegenGeneratedTxByaccountMsgresponsesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountMsgresponsesQuery, ICodegenGeneratedTxByaccountMsgresponsesQueryVariables>;
export declare function refetchCodegenGeneratedTxByaccountMsgresponsesQuery(variables: ICodegenGeneratedTxByaccountMsgresponsesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byAccount_maxHeight?: InputMaybe<number>;
        tx_byAccount_minHeight?: InputMaybe<number>;
        tx_byAccount_sentFromOrTo: string;
    }>;
};
export declare const CodegenGeneratedTxByaccountTxlogEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery, ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export declare function useCodegenGeneratedTxByaccountTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery, ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export type CodegenGeneratedTxByaccountTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxByaccountTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByaccountTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery, ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxByaccountTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byAccount_maxHeight?: InputMaybe<number>;
        tx_byAccount_minHeight?: InputMaybe<number>;
        tx_byAccount_sentFromOrTo: string;
    }>;
};
export declare const CodegenGeneratedTxByaccountTxlogEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByaccountTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByaccountTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountTxlogEventsQuery, ICodegenGeneratedTxByaccountTxlogEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByaccountTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export declare function useCodegenGeneratedTxByaccountTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountTxlogEventsQuery, ICodegenGeneratedTxByaccountTxlogEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByaccountTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export type CodegenGeneratedTxByaccountTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogEventsQuery>;
export type CodegenGeneratedTxByaccountTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogEventsLazyQuery>;
export type CodegenGeneratedTxByaccountTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountTxlogEventsQuery, ICodegenGeneratedTxByaccountTxlogEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxByaccountTxlogEventsQuery(variables: ICodegenGeneratedTxByaccountTxlogEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byAccount_maxHeight?: InputMaybe<number>;
        tx_byAccount_minHeight?: InputMaybe<number>;
        tx_byAccount_sentFromOrTo: string;
    }>;
};
export declare const CodegenGeneratedTxByaccountTxlogDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByaccountTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByaccountTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountTxlogQuery, ICodegenGeneratedTxByaccountTxlogQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByaccountTxlogQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export declare function useCodegenGeneratedTxByaccountTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountTxlogQuery, ICodegenGeneratedTxByaccountTxlogQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByaccountTxlogQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export type CodegenGeneratedTxByaccountTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogQuery>;
export type CodegenGeneratedTxByaccountTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogLazyQuery>;
export type CodegenGeneratedTxByaccountTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountTxlogQuery, ICodegenGeneratedTxByaccountTxlogQueryVariables>;
export declare function refetchCodegenGeneratedTxByaccountTxlogQuery(variables: ICodegenGeneratedTxByaccountTxlogQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byAccount_maxHeight?: InputMaybe<number>;
        tx_byAccount_minHeight?: InputMaybe<number>;
        tx_byAccount_sentFromOrTo: string;
    }>;
};
export declare const CodegenGeneratedTxByaccountDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByaccountQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByaccountQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountQuery, ICodegenGeneratedTxByaccountQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByaccountQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export declare function useCodegenGeneratedTxByaccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountQuery, ICodegenGeneratedTxByaccountQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByaccountQuery, Exact<{
    chainId: string;
    tx_byAccount_maxHeight?: InputMaybe<number>;
    tx_byAccount_minHeight?: InputMaybe<number>;
    tx_byAccount_sentFromOrTo: string;
}>>;
export type CodegenGeneratedTxByaccountQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountQuery>;
export type CodegenGeneratedTxByaccountLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountLazyQuery>;
export type CodegenGeneratedTxByaccountQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountQuery, ICodegenGeneratedTxByaccountQueryVariables>;
export declare function refetchCodegenGeneratedTxByaccountQuery(variables: ICodegenGeneratedTxByaccountQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byAccount_maxHeight?: InputMaybe<number>;
        tx_byAccount_minHeight?: InputMaybe<number>;
        tx_byAccount_sentFromOrTo: string;
    }>;
};
export declare const CodegenGeneratedTxBycontractEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBycontractEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBycontractEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractEventsAttributesQuery, ICodegenGeneratedTxBycontractEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBycontractEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export declare function useCodegenGeneratedTxBycontractEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractEventsAttributesQuery, ICodegenGeneratedTxBycontractEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBycontractEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export type CodegenGeneratedTxBycontractEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractEventsAttributesQuery>;
export type CodegenGeneratedTxBycontractEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractEventsAttributesLazyQuery>;
export type CodegenGeneratedTxBycontractEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractEventsAttributesQuery, ICodegenGeneratedTxBycontractEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxBycontractEventsAttributesQuery(variables: ICodegenGeneratedTxBycontractEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byContract_address: string;
        tx_byContract_maxHeight?: InputMaybe<number>;
        tx_byContract_minHeight?: InputMaybe<number>;
    }>;
};
export declare const CodegenGeneratedTxBycontractEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBycontractEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBycontractEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractEventsQuery, ICodegenGeneratedTxBycontractEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBycontractEventsQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export declare function useCodegenGeneratedTxBycontractEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractEventsQuery, ICodegenGeneratedTxBycontractEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBycontractEventsQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export type CodegenGeneratedTxBycontractEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractEventsQuery>;
export type CodegenGeneratedTxBycontractEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractEventsLazyQuery>;
export type CodegenGeneratedTxBycontractEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractEventsQuery, ICodegenGeneratedTxBycontractEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxBycontractEventsQuery(variables: ICodegenGeneratedTxBycontractEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byContract_address: string;
        tx_byContract_maxHeight?: InputMaybe<number>;
        tx_byContract_minHeight?: InputMaybe<number>;
    }>;
};
export declare const CodegenGeneratedTxBycontractMsgresponsesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBycontractMsgresponsesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractMsgresponsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractMsgresponsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractMsgresponsesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBycontractMsgresponsesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractMsgresponsesQuery, ICodegenGeneratedTxBycontractMsgresponsesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBycontractMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export declare function useCodegenGeneratedTxBycontractMsgresponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractMsgresponsesQuery, ICodegenGeneratedTxBycontractMsgresponsesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBycontractMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export type CodegenGeneratedTxBycontractMsgresponsesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractMsgresponsesQuery>;
export type CodegenGeneratedTxBycontractMsgresponsesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractMsgresponsesLazyQuery>;
export type CodegenGeneratedTxBycontractMsgresponsesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractMsgresponsesQuery, ICodegenGeneratedTxBycontractMsgresponsesQueryVariables>;
export declare function refetchCodegenGeneratedTxBycontractMsgresponsesQuery(variables: ICodegenGeneratedTxBycontractMsgresponsesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byContract_address: string;
        tx_byContract_maxHeight?: InputMaybe<number>;
        tx_byContract_minHeight?: InputMaybe<number>;
    }>;
};
export declare const CodegenGeneratedTxBycontractTxlogEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery, ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export declare function useCodegenGeneratedTxBycontractTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery, ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export type CodegenGeneratedTxBycontractTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxBycontractTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxBycontractTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery, ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxBycontractTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byContract_address: string;
        tx_byContract_maxHeight?: InputMaybe<number>;
        tx_byContract_minHeight?: InputMaybe<number>;
    }>;
};
export declare const CodegenGeneratedTxBycontractTxlogEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBycontractTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBycontractTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractTxlogEventsQuery, ICodegenGeneratedTxBycontractTxlogEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBycontractTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export declare function useCodegenGeneratedTxBycontractTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractTxlogEventsQuery, ICodegenGeneratedTxBycontractTxlogEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBycontractTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export type CodegenGeneratedTxBycontractTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogEventsQuery>;
export type CodegenGeneratedTxBycontractTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogEventsLazyQuery>;
export type CodegenGeneratedTxBycontractTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractTxlogEventsQuery, ICodegenGeneratedTxBycontractTxlogEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxBycontractTxlogEventsQuery(variables: ICodegenGeneratedTxBycontractTxlogEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byContract_address: string;
        tx_byContract_maxHeight?: InputMaybe<number>;
        tx_byContract_minHeight?: InputMaybe<number>;
    }>;
};
export declare const CodegenGeneratedTxBycontractTxlogDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBycontractTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBycontractTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractTxlogQuery, ICodegenGeneratedTxBycontractTxlogQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBycontractTxlogQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export declare function useCodegenGeneratedTxBycontractTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractTxlogQuery, ICodegenGeneratedTxBycontractTxlogQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBycontractTxlogQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export type CodegenGeneratedTxBycontractTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogQuery>;
export type CodegenGeneratedTxBycontractTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogLazyQuery>;
export type CodegenGeneratedTxBycontractTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractTxlogQuery, ICodegenGeneratedTxBycontractTxlogQueryVariables>;
export declare function refetchCodegenGeneratedTxBycontractTxlogQuery(variables: ICodegenGeneratedTxBycontractTxlogQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byContract_address: string;
        tx_byContract_maxHeight?: InputMaybe<number>;
        tx_byContract_minHeight?: InputMaybe<number>;
    }>;
};
export declare const CodegenGeneratedTxBycontractDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBycontractQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBycontractQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractQuery, ICodegenGeneratedTxBycontractQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBycontractQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export declare function useCodegenGeneratedTxBycontractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractQuery, ICodegenGeneratedTxBycontractQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBycontractQuery, Exact<{
    chainId: string;
    tx_byContract_address: string;
    tx_byContract_maxHeight?: InputMaybe<number>;
    tx_byContract_minHeight?: InputMaybe<number>;
}>>;
export type CodegenGeneratedTxBycontractQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractQuery>;
export type CodegenGeneratedTxBycontractLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractLazyQuery>;
export type CodegenGeneratedTxBycontractQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractQuery, ICodegenGeneratedTxBycontractQueryVariables>;
export declare function refetchCodegenGeneratedTxBycontractQuery(variables: ICodegenGeneratedTxBycontractQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byContract_address: string;
        tx_byContract_maxHeight?: InputMaybe<number>;
        tx_byContract_minHeight?: InputMaybe<number>;
    }>;
};
export declare const CodegenGeneratedTxByhashEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByhashEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByhashEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashEventsAttributesQuery, ICodegenGeneratedTxByhashEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByhashEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export declare function useCodegenGeneratedTxByhashEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashEventsAttributesQuery, ICodegenGeneratedTxByhashEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByhashEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export type CodegenGeneratedTxByhashEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashEventsAttributesQuery>;
export type CodegenGeneratedTxByhashEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByhashEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashEventsAttributesQuery, ICodegenGeneratedTxByhashEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxByhashEventsAttributesQuery(variables: ICodegenGeneratedTxByhashEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHash_hash: string;
    }>;
};
export declare const CodegenGeneratedTxByhashEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByhashEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByhashEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashEventsQuery, ICodegenGeneratedTxByhashEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByhashEventsQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export declare function useCodegenGeneratedTxByhashEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashEventsQuery, ICodegenGeneratedTxByhashEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByhashEventsQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export type CodegenGeneratedTxByhashEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashEventsQuery>;
export type CodegenGeneratedTxByhashEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashEventsLazyQuery>;
export type CodegenGeneratedTxByhashEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashEventsQuery, ICodegenGeneratedTxByhashEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxByhashEventsQuery(variables: ICodegenGeneratedTxByhashEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHash_hash: string;
    }>;
};
export declare const CodegenGeneratedTxByhashMsgresponsesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByhashMsgresponsesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashMsgresponsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashMsgresponsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashMsgresponsesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByhashMsgresponsesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashMsgresponsesQuery, ICodegenGeneratedTxByhashMsgresponsesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByhashMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export declare function useCodegenGeneratedTxByhashMsgresponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashMsgresponsesQuery, ICodegenGeneratedTxByhashMsgresponsesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByhashMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export type CodegenGeneratedTxByhashMsgresponsesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashMsgresponsesQuery>;
export type CodegenGeneratedTxByhashMsgresponsesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashMsgresponsesLazyQuery>;
export type CodegenGeneratedTxByhashMsgresponsesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashMsgresponsesQuery, ICodegenGeneratedTxByhashMsgresponsesQueryVariables>;
export declare function refetchCodegenGeneratedTxByhashMsgresponsesQuery(variables: ICodegenGeneratedTxByhashMsgresponsesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHash_hash: string;
    }>;
};
export declare const CodegenGeneratedTxByhashTxlogEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByhashTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByhashTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery, ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export declare function useCodegenGeneratedTxByhashTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery, ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export type CodegenGeneratedTxByhashTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxByhashTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByhashTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery, ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxByhashTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHash_hash: string;
    }>;
};
export declare const CodegenGeneratedTxByhashTxlogEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByhashTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByhashTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashTxlogEventsQuery, ICodegenGeneratedTxByhashTxlogEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByhashTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export declare function useCodegenGeneratedTxByhashTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashTxlogEventsQuery, ICodegenGeneratedTxByhashTxlogEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByhashTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export type CodegenGeneratedTxByhashTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogEventsQuery>;
export type CodegenGeneratedTxByhashTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogEventsLazyQuery>;
export type CodegenGeneratedTxByhashTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashTxlogEventsQuery, ICodegenGeneratedTxByhashTxlogEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxByhashTxlogEventsQuery(variables: ICodegenGeneratedTxByhashTxlogEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHash_hash: string;
    }>;
};
export declare const CodegenGeneratedTxByhashTxlogDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByhashTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByhashTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashTxlogQuery, ICodegenGeneratedTxByhashTxlogQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByhashTxlogQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export declare function useCodegenGeneratedTxByhashTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashTxlogQuery, ICodegenGeneratedTxByhashTxlogQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByhashTxlogQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export type CodegenGeneratedTxByhashTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogQuery>;
export type CodegenGeneratedTxByhashTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogLazyQuery>;
export type CodegenGeneratedTxByhashTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashTxlogQuery, ICodegenGeneratedTxByhashTxlogQueryVariables>;
export declare function refetchCodegenGeneratedTxByhashTxlogQuery(variables: ICodegenGeneratedTxByhashTxlogQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHash_hash: string;
    }>;
};
export declare const CodegenGeneratedTxByhashDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByhashQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByhashQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashQuery, ICodegenGeneratedTxByhashQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByhashQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export declare function useCodegenGeneratedTxByhashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashQuery, ICodegenGeneratedTxByhashQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByhashQuery, Exact<{
    chainId: string;
    tx_byHash_hash: string;
}>>;
export type CodegenGeneratedTxByhashQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashQuery>;
export type CodegenGeneratedTxByhashLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashLazyQuery>;
export type CodegenGeneratedTxByhashQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashQuery, ICodegenGeneratedTxByhashQueryVariables>;
export declare function refetchCodegenGeneratedTxByhashQuery(variables: ICodegenGeneratedTxByhashQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHash_hash: string;
    }>;
};
export declare const CodegenGeneratedTxByheightEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByheightEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByheightEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightEventsAttributesQuery, ICodegenGeneratedTxByheightEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByheightEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export declare function useCodegenGeneratedTxByheightEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightEventsAttributesQuery, ICodegenGeneratedTxByheightEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByheightEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export type CodegenGeneratedTxByheightEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightEventsAttributesQuery>;
export type CodegenGeneratedTxByheightEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByheightEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightEventsAttributesQuery, ICodegenGeneratedTxByheightEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxByheightEventsAttributesQuery(variables: ICodegenGeneratedTxByheightEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHeight_height: number;
    }>;
};
export declare const CodegenGeneratedTxByheightEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByheightEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByheightEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightEventsQuery, ICodegenGeneratedTxByheightEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByheightEventsQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export declare function useCodegenGeneratedTxByheightEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightEventsQuery, ICodegenGeneratedTxByheightEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByheightEventsQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export type CodegenGeneratedTxByheightEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightEventsQuery>;
export type CodegenGeneratedTxByheightEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightEventsLazyQuery>;
export type CodegenGeneratedTxByheightEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightEventsQuery, ICodegenGeneratedTxByheightEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxByheightEventsQuery(variables: ICodegenGeneratedTxByheightEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHeight_height: number;
    }>;
};
export declare const CodegenGeneratedTxByheightMsgresponsesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByheightMsgresponsesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightMsgresponsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightMsgresponsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightMsgresponsesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByheightMsgresponsesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightMsgresponsesQuery, ICodegenGeneratedTxByheightMsgresponsesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByheightMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export declare function useCodegenGeneratedTxByheightMsgresponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightMsgresponsesQuery, ICodegenGeneratedTxByheightMsgresponsesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByheightMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export type CodegenGeneratedTxByheightMsgresponsesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightMsgresponsesQuery>;
export type CodegenGeneratedTxByheightMsgresponsesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightMsgresponsesLazyQuery>;
export type CodegenGeneratedTxByheightMsgresponsesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightMsgresponsesQuery, ICodegenGeneratedTxByheightMsgresponsesQueryVariables>;
export declare function refetchCodegenGeneratedTxByheightMsgresponsesQuery(variables: ICodegenGeneratedTxByheightMsgresponsesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHeight_height: number;
    }>;
};
export declare const CodegenGeneratedTxByheightTxlogEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByheightTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByheightTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery, ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export declare function useCodegenGeneratedTxByheightTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery, ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export type CodegenGeneratedTxByheightTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxByheightTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByheightTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery, ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxByheightTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHeight_height: number;
    }>;
};
export declare const CodegenGeneratedTxByheightTxlogEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByheightTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByheightTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightTxlogEventsQuery, ICodegenGeneratedTxByheightTxlogEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByheightTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export declare function useCodegenGeneratedTxByheightTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightTxlogEventsQuery, ICodegenGeneratedTxByheightTxlogEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByheightTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export type CodegenGeneratedTxByheightTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogEventsQuery>;
export type CodegenGeneratedTxByheightTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogEventsLazyQuery>;
export type CodegenGeneratedTxByheightTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightTxlogEventsQuery, ICodegenGeneratedTxByheightTxlogEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxByheightTxlogEventsQuery(variables: ICodegenGeneratedTxByheightTxlogEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHeight_height: number;
    }>;
};
export declare const CodegenGeneratedTxByheightTxlogDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByheightTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByheightTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightTxlogQuery, ICodegenGeneratedTxByheightTxlogQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByheightTxlogQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export declare function useCodegenGeneratedTxByheightTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightTxlogQuery, ICodegenGeneratedTxByheightTxlogQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByheightTxlogQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export type CodegenGeneratedTxByheightTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogQuery>;
export type CodegenGeneratedTxByheightTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogLazyQuery>;
export type CodegenGeneratedTxByheightTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightTxlogQuery, ICodegenGeneratedTxByheightTxlogQueryVariables>;
export declare function refetchCodegenGeneratedTxByheightTxlogQuery(variables: ICodegenGeneratedTxByheightTxlogQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHeight_height: number;
    }>;
};
export declare const CodegenGeneratedTxByheightDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByheightQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByheightQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightQuery, ICodegenGeneratedTxByheightQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByheightQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export declare function useCodegenGeneratedTxByheightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightQuery, ICodegenGeneratedTxByheightQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByheightQuery, Exact<{
    chainId: string;
    tx_byHeight_height: number;
}>>;
export type CodegenGeneratedTxByheightQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightQuery>;
export type CodegenGeneratedTxByheightLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightLazyQuery>;
export type CodegenGeneratedTxByheightQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightQuery, ICodegenGeneratedTxByheightQueryVariables>;
export declare function refetchCodegenGeneratedTxByheightQuery(variables: ICodegenGeneratedTxByheightQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byHeight_height: number;
    }>;
};
export declare const CodegenGeneratedTxByownerEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByownerEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByownerEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerEventsAttributesQuery, ICodegenGeneratedTxByownerEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByownerEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export declare function useCodegenGeneratedTxByownerEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerEventsAttributesQuery, ICodegenGeneratedTxByownerEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByownerEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export type CodegenGeneratedTxByownerEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerEventsAttributesQuery>;
export type CodegenGeneratedTxByownerEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByownerEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerEventsAttributesQuery, ICodegenGeneratedTxByownerEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxByownerEventsAttributesQuery(variables: ICodegenGeneratedTxByownerEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byOwner_maxHeight?: InputMaybe<number>;
        tx_byOwner_minHeight?: InputMaybe<number>;
        tx_byOwner_walletAddress: string;
    }>;
};
export declare const CodegenGeneratedTxByownerEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByownerEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByownerEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerEventsQuery, ICodegenGeneratedTxByownerEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByownerEventsQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export declare function useCodegenGeneratedTxByownerEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerEventsQuery, ICodegenGeneratedTxByownerEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByownerEventsQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export type CodegenGeneratedTxByownerEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerEventsQuery>;
export type CodegenGeneratedTxByownerEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerEventsLazyQuery>;
export type CodegenGeneratedTxByownerEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerEventsQuery, ICodegenGeneratedTxByownerEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxByownerEventsQuery(variables: ICodegenGeneratedTxByownerEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byOwner_maxHeight?: InputMaybe<number>;
        tx_byOwner_minHeight?: InputMaybe<number>;
        tx_byOwner_walletAddress: string;
    }>;
};
export declare const CodegenGeneratedTxByownerMsgresponsesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByownerMsgresponsesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerMsgresponsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerMsgresponsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerMsgresponsesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByownerMsgresponsesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerMsgresponsesQuery, ICodegenGeneratedTxByownerMsgresponsesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByownerMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export declare function useCodegenGeneratedTxByownerMsgresponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerMsgresponsesQuery, ICodegenGeneratedTxByownerMsgresponsesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByownerMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export type CodegenGeneratedTxByownerMsgresponsesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerMsgresponsesQuery>;
export type CodegenGeneratedTxByownerMsgresponsesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerMsgresponsesLazyQuery>;
export type CodegenGeneratedTxByownerMsgresponsesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerMsgresponsesQuery, ICodegenGeneratedTxByownerMsgresponsesQueryVariables>;
export declare function refetchCodegenGeneratedTxByownerMsgresponsesQuery(variables: ICodegenGeneratedTxByownerMsgresponsesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byOwner_maxHeight?: InputMaybe<number>;
        tx_byOwner_minHeight?: InputMaybe<number>;
        tx_byOwner_walletAddress: string;
    }>;
};
export declare const CodegenGeneratedTxByownerTxlogEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByownerTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByownerTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery, ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export declare function useCodegenGeneratedTxByownerTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery, ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export type CodegenGeneratedTxByownerTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxByownerTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByownerTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery, ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxByownerTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byOwner_maxHeight?: InputMaybe<number>;
        tx_byOwner_minHeight?: InputMaybe<number>;
        tx_byOwner_walletAddress: string;
    }>;
};
export declare const CodegenGeneratedTxByownerTxlogEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByownerTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByownerTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerTxlogEventsQuery, ICodegenGeneratedTxByownerTxlogEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByownerTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export declare function useCodegenGeneratedTxByownerTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerTxlogEventsQuery, ICodegenGeneratedTxByownerTxlogEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByownerTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export type CodegenGeneratedTxByownerTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogEventsQuery>;
export type CodegenGeneratedTxByownerTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogEventsLazyQuery>;
export type CodegenGeneratedTxByownerTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerTxlogEventsQuery, ICodegenGeneratedTxByownerTxlogEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxByownerTxlogEventsQuery(variables: ICodegenGeneratedTxByownerTxlogEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byOwner_maxHeight?: InputMaybe<number>;
        tx_byOwner_minHeight?: InputMaybe<number>;
        tx_byOwner_walletAddress: string;
    }>;
};
export declare const CodegenGeneratedTxByownerTxlogDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByownerTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByownerTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerTxlogQuery, ICodegenGeneratedTxByownerTxlogQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByownerTxlogQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export declare function useCodegenGeneratedTxByownerTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerTxlogQuery, ICodegenGeneratedTxByownerTxlogQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByownerTxlogQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export type CodegenGeneratedTxByownerTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogQuery>;
export type CodegenGeneratedTxByownerTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogLazyQuery>;
export type CodegenGeneratedTxByownerTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerTxlogQuery, ICodegenGeneratedTxByownerTxlogQueryVariables>;
export declare function refetchCodegenGeneratedTxByownerTxlogQuery(variables: ICodegenGeneratedTxByownerTxlogQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byOwner_maxHeight?: InputMaybe<number>;
        tx_byOwner_minHeight?: InputMaybe<number>;
        tx_byOwner_walletAddress: string;
    }>;
};
export declare const CodegenGeneratedTxByownerDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByownerQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByownerQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerQuery, ICodegenGeneratedTxByownerQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByownerQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export declare function useCodegenGeneratedTxByownerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerQuery, ICodegenGeneratedTxByownerQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByownerQuery, Exact<{
    chainId: string;
    tx_byOwner_maxHeight?: InputMaybe<number>;
    tx_byOwner_minHeight?: InputMaybe<number>;
    tx_byOwner_walletAddress: string;
}>>;
export type CodegenGeneratedTxByownerQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerQuery>;
export type CodegenGeneratedTxByownerLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerLazyQuery>;
export type CodegenGeneratedTxByownerQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerQuery, ICodegenGeneratedTxByownerQueryVariables>;
export declare function refetchCodegenGeneratedTxByownerQuery(variables: ICodegenGeneratedTxByownerQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byOwner_maxHeight?: InputMaybe<number>;
        tx_byOwner_minHeight?: InputMaybe<number>;
        tx_byOwner_walletAddress: string;
    }>;
};
export declare const CodegenGeneratedTxByrawstringEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByrawstringEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByrawstringEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByrawstringEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByrawstringEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byRawString_query: // value for 'tx_byRawString_query'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByrawstringEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByrawstringEventsAttributesQuery, ICodegenGeneratedTxByrawstringEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByrawstringEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export declare function useCodegenGeneratedTxByrawstringEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByrawstringEventsAttributesQuery, ICodegenGeneratedTxByrawstringEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByrawstringEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export type CodegenGeneratedTxByrawstringEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringEventsAttributesQuery>;
export type CodegenGeneratedTxByrawstringEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByrawstringEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByrawstringEventsAttributesQuery, ICodegenGeneratedTxByrawstringEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxByrawstringEventsAttributesQuery(variables: ICodegenGeneratedTxByrawstringEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byRawString_query: string;
    }>;
};
export declare const CodegenGeneratedTxByrawstringEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByrawstringEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByrawstringEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByrawstringEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByrawstringEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byRawString_query: // value for 'tx_byRawString_query'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByrawstringEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByrawstringEventsQuery, ICodegenGeneratedTxByrawstringEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByrawstringEventsQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export declare function useCodegenGeneratedTxByrawstringEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByrawstringEventsQuery, ICodegenGeneratedTxByrawstringEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByrawstringEventsQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export type CodegenGeneratedTxByrawstringEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringEventsQuery>;
export type CodegenGeneratedTxByrawstringEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringEventsLazyQuery>;
export type CodegenGeneratedTxByrawstringEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByrawstringEventsQuery, ICodegenGeneratedTxByrawstringEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxByrawstringEventsQuery(variables: ICodegenGeneratedTxByrawstringEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byRawString_query: string;
    }>;
};
export declare const CodegenGeneratedTxByrawstringMsgresponsesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByrawstringMsgresponsesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByrawstringMsgresponsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByrawstringMsgresponsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByrawstringMsgresponsesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byRawString_query: // value for 'tx_byRawString_query'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByrawstringMsgresponsesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByrawstringMsgresponsesQuery, ICodegenGeneratedTxByrawstringMsgresponsesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByrawstringMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export declare function useCodegenGeneratedTxByrawstringMsgresponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByrawstringMsgresponsesQuery, ICodegenGeneratedTxByrawstringMsgresponsesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByrawstringMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export type CodegenGeneratedTxByrawstringMsgresponsesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringMsgresponsesQuery>;
export type CodegenGeneratedTxByrawstringMsgresponsesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringMsgresponsesLazyQuery>;
export type CodegenGeneratedTxByrawstringMsgresponsesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByrawstringMsgresponsesQuery, ICodegenGeneratedTxByrawstringMsgresponsesQueryVariables>;
export declare function refetchCodegenGeneratedTxByrawstringMsgresponsesQuery(variables: ICodegenGeneratedTxByrawstringMsgresponsesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byRawString_query: string;
    }>;
};
export declare const CodegenGeneratedTxByrawstringTxlogEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByrawstringTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByrawstringTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByrawstringTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByrawstringTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byRawString_query: // value for 'tx_byRawString_query'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByrawstringTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByrawstringTxlogEventsAttributesQuery, ICodegenGeneratedTxByrawstringTxlogEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByrawstringTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export declare function useCodegenGeneratedTxByrawstringTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByrawstringTxlogEventsAttributesQuery, ICodegenGeneratedTxByrawstringTxlogEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByrawstringTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export type CodegenGeneratedTxByrawstringTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxByrawstringTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByrawstringTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByrawstringTxlogEventsAttributesQuery, ICodegenGeneratedTxByrawstringTxlogEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxByrawstringTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxByrawstringTxlogEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byRawString_query: string;
    }>;
};
export declare const CodegenGeneratedTxByrawstringTxlogEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByrawstringTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByrawstringTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByrawstringTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByrawstringTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byRawString_query: // value for 'tx_byRawString_query'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByrawstringTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByrawstringTxlogEventsQuery, ICodegenGeneratedTxByrawstringTxlogEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByrawstringTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export declare function useCodegenGeneratedTxByrawstringTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByrawstringTxlogEventsQuery, ICodegenGeneratedTxByrawstringTxlogEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByrawstringTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export type CodegenGeneratedTxByrawstringTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringTxlogEventsQuery>;
export type CodegenGeneratedTxByrawstringTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringTxlogEventsLazyQuery>;
export type CodegenGeneratedTxByrawstringTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByrawstringTxlogEventsQuery, ICodegenGeneratedTxByrawstringTxlogEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxByrawstringTxlogEventsQuery(variables: ICodegenGeneratedTxByrawstringTxlogEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byRawString_query: string;
    }>;
};
export declare const CodegenGeneratedTxByrawstringTxlogDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByrawstringTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByrawstringTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByrawstringTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByrawstringTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byRawString_query: // value for 'tx_byRawString_query'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByrawstringTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByrawstringTxlogQuery, ICodegenGeneratedTxByrawstringTxlogQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByrawstringTxlogQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export declare function useCodegenGeneratedTxByrawstringTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByrawstringTxlogQuery, ICodegenGeneratedTxByrawstringTxlogQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByrawstringTxlogQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export type CodegenGeneratedTxByrawstringTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringTxlogQuery>;
export type CodegenGeneratedTxByrawstringTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringTxlogLazyQuery>;
export type CodegenGeneratedTxByrawstringTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByrawstringTxlogQuery, ICodegenGeneratedTxByrawstringTxlogQueryVariables>;
export declare function refetchCodegenGeneratedTxByrawstringTxlogQuery(variables: ICodegenGeneratedTxByrawstringTxlogQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byRawString_query: string;
    }>;
};
export declare const CodegenGeneratedTxByrawstringDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxByrawstringQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByrawstringQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByrawstringQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByrawstringQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byRawString_query: // value for 'tx_byRawString_query'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxByrawstringQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByrawstringQuery, ICodegenGeneratedTxByrawstringQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxByrawstringQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export declare function useCodegenGeneratedTxByrawstringLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByrawstringQuery, ICodegenGeneratedTxByrawstringQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxByrawstringQuery, Exact<{
    chainId: string;
    tx_byRawString_query: string;
}>>;
export type CodegenGeneratedTxByrawstringQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringQuery>;
export type CodegenGeneratedTxByrawstringLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByrawstringLazyQuery>;
export type CodegenGeneratedTxByrawstringQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByrawstringQuery, ICodegenGeneratedTxByrawstringQueryVariables>;
export declare function refetchCodegenGeneratedTxByrawstringQuery(variables: ICodegenGeneratedTxByrawstringQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byRawString_query: string;
    }>;
};
export declare const CodegenGeneratedTxBytagEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBytagEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBytagEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagEventsAttributesQuery, ICodegenGeneratedTxBytagEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBytagEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export declare function useCodegenGeneratedTxBytagEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagEventsAttributesQuery, ICodegenGeneratedTxBytagEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBytagEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export type CodegenGeneratedTxBytagEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagEventsAttributesQuery>;
export type CodegenGeneratedTxBytagEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagEventsAttributesLazyQuery>;
export type CodegenGeneratedTxBytagEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagEventsAttributesQuery, ICodegenGeneratedTxBytagEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxBytagEventsAttributesQuery(variables: ICodegenGeneratedTxBytagEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byTag_maxHeight?: InputMaybe<number>;
        tx_byTag_minHeight?: InputMaybe<number>;
        tx_byTag_tags: any;
    }>;
};
export declare const CodegenGeneratedTxBytagEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBytagEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBytagEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagEventsQuery, ICodegenGeneratedTxBytagEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBytagEventsQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export declare function useCodegenGeneratedTxBytagEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagEventsQuery, ICodegenGeneratedTxBytagEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBytagEventsQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export type CodegenGeneratedTxBytagEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagEventsQuery>;
export type CodegenGeneratedTxBytagEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagEventsLazyQuery>;
export type CodegenGeneratedTxBytagEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagEventsQuery, ICodegenGeneratedTxBytagEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxBytagEventsQuery(variables: ICodegenGeneratedTxBytagEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byTag_maxHeight?: InputMaybe<number>;
        tx_byTag_minHeight?: InputMaybe<number>;
        tx_byTag_tags: any;
    }>;
};
export declare const CodegenGeneratedTxBytagMsgresponsesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBytagMsgresponsesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagMsgresponsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagMsgresponsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagMsgresponsesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBytagMsgresponsesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagMsgresponsesQuery, ICodegenGeneratedTxBytagMsgresponsesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBytagMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export declare function useCodegenGeneratedTxBytagMsgresponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagMsgresponsesQuery, ICodegenGeneratedTxBytagMsgresponsesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBytagMsgresponsesQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export type CodegenGeneratedTxBytagMsgresponsesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagMsgresponsesQuery>;
export type CodegenGeneratedTxBytagMsgresponsesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagMsgresponsesLazyQuery>;
export type CodegenGeneratedTxBytagMsgresponsesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagMsgresponsesQuery, ICodegenGeneratedTxBytagMsgresponsesQueryVariables>;
export declare function refetchCodegenGeneratedTxBytagMsgresponsesQuery(variables: ICodegenGeneratedTxBytagMsgresponsesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byTag_maxHeight?: InputMaybe<number>;
        tx_byTag_minHeight?: InputMaybe<number>;
        tx_byTag_tags: any;
    }>;
};
export declare const CodegenGeneratedTxBytagTxlogEventsAttributesDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBytagTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBytagTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery, ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export declare function useCodegenGeneratedTxBytagTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery, ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export type CodegenGeneratedTxBytagTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxBytagTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxBytagTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery, ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables>;
export declare function refetchCodegenGeneratedTxBytagTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byTag_maxHeight?: InputMaybe<number>;
        tx_byTag_minHeight?: InputMaybe<number>;
        tx_byTag_tags: any;
    }>;
};
export declare const CodegenGeneratedTxBytagTxlogEventsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBytagTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBytagTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagTxlogEventsQuery, ICodegenGeneratedTxBytagTxlogEventsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBytagTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export declare function useCodegenGeneratedTxBytagTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagTxlogEventsQuery, ICodegenGeneratedTxBytagTxlogEventsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBytagTxlogEventsQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export type CodegenGeneratedTxBytagTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogEventsQuery>;
export type CodegenGeneratedTxBytagTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogEventsLazyQuery>;
export type CodegenGeneratedTxBytagTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagTxlogEventsQuery, ICodegenGeneratedTxBytagTxlogEventsQueryVariables>;
export declare function refetchCodegenGeneratedTxBytagTxlogEventsQuery(variables: ICodegenGeneratedTxBytagTxlogEventsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byTag_maxHeight?: InputMaybe<number>;
        tx_byTag_minHeight?: InputMaybe<number>;
        tx_byTag_tags: any;
    }>;
};
export declare const CodegenGeneratedTxBytagTxlogDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBytagTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBytagTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagTxlogQuery, ICodegenGeneratedTxBytagTxlogQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBytagTxlogQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export declare function useCodegenGeneratedTxBytagTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagTxlogQuery, ICodegenGeneratedTxBytagTxlogQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBytagTxlogQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export type CodegenGeneratedTxBytagTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogQuery>;
export type CodegenGeneratedTxBytagTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogLazyQuery>;
export type CodegenGeneratedTxBytagTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagTxlogQuery, ICodegenGeneratedTxBytagTxlogQueryVariables>;
export declare function refetchCodegenGeneratedTxBytagTxlogQuery(variables: ICodegenGeneratedTxBytagTxlogQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byTag_maxHeight?: InputMaybe<number>;
        tx_byTag_minHeight?: InputMaybe<number>;
        tx_byTag_tags: any;
    }>;
};
export declare const CodegenGeneratedTxBytagDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxBytagQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxBytagQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagQuery, ICodegenGeneratedTxBytagQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxBytagQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export declare function useCodegenGeneratedTxBytagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagQuery, ICodegenGeneratedTxBytagQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxBytagQuery, Exact<{
    chainId: string;
    tx_byTag_maxHeight?: InputMaybe<number>;
    tx_byTag_minHeight?: InputMaybe<number>;
    tx_byTag_tags: any;
}>>;
export type CodegenGeneratedTxBytagQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagQuery>;
export type CodegenGeneratedTxBytagLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagLazyQuery>;
export type CodegenGeneratedTxBytagQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagQuery, ICodegenGeneratedTxBytagQueryVariables>;
export declare function refetchCodegenGeneratedTxBytagQuery(variables: ICodegenGeneratedTxBytagQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        tx_byTag_maxHeight?: InputMaybe<number>;
        tx_byTag_minHeight?: InputMaybe<number>;
        tx_byTag_tags: any;
    }>;
};
export declare const CodegenGeneratedTxDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTxQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *   },
 * });
 */
export declare function useCodegenGeneratedTxQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxQuery, ICodegenGeneratedTxQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTxQuery, Exact<{
    chainId: string;
}>>;
export declare function useCodegenGeneratedTxLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxQuery, ICodegenGeneratedTxQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTxQuery, Exact<{
    chainId: string;
}>>;
export type CodegenGeneratedTxQueryHookResult = ReturnType<typeof useCodegenGeneratedTxQuery>;
export type CodegenGeneratedTxLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxLazyQuery>;
export type CodegenGeneratedTxQueryResult = Apollo.QueryResult<ICodegenGeneratedTxQuery, ICodegenGeneratedTxQueryVariables>;
export declare function refetchCodegenGeneratedTxQuery(variables: ICodegenGeneratedTxQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
    }>;
};
export declare const CodegenGeneratedAdoaddedDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoaddedSubscription__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoaddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoaddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoaddedSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoaddedSubscription(baseOptions: Apollo.SubscriptionHookOptions<ICodegenGeneratedAdoaddedSubscription, ICodegenGeneratedAdoaddedSubscriptionVariables>): Apollo.SubscriptionResult<ICodegenGeneratedAdoaddedSubscription, Exact<{
    filter: IAdoAddedSubscriptionInput;
}>>;
export type CodegenGeneratedAdoaddedSubscriptionHookResult = ReturnType<typeof useCodegenGeneratedAdoaddedSubscription>;
export type CodegenGeneratedAdoaddedSubscriptionResult = Apollo.SubscriptionResult<ICodegenGeneratedAdoaddedSubscription>;
export declare const CodegenGeneratedAdoownerupdatedDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedAdoownerupdatedSubscription__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoownerupdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoownerupdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoownerupdatedSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export declare function useCodegenGeneratedAdoownerupdatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<ICodegenGeneratedAdoownerupdatedSubscription, ICodegenGeneratedAdoownerupdatedSubscriptionVariables>): Apollo.SubscriptionResult<ICodegenGeneratedAdoownerupdatedSubscription, Exact<{
    filter: IAdoOwnerUpdatedSubscriptionInput;
}>>;
export type CodegenGeneratedAdoownerupdatedSubscriptionHookResult = ReturnType<typeof useCodegenGeneratedAdoownerupdatedSubscription>;
export type CodegenGeneratedAdoownerupdatedSubscriptionResult = Apollo.SubscriptionResult<ICodegenGeneratedAdoownerupdatedSubscription>;
export declare const TxByAccountDocument: Apollo.DocumentNode;
/**
 * __useTxByAccountQuery__
 *
 * To run a query within a React component, call `useTxByAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByAccountQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      sentFromOrTo: // value for 'sentFromOrTo'
 *      minHeight: // value for 'minHeight'
 *      maxHeight: // value for 'maxHeight'
 *   },
 * });
 */
export declare function useTxByAccountQuery(baseOptions: Apollo.QueryHookOptions<ITxByAccountQuery, ITxByAccountQueryVariables>): Apollo.QueryResult<ITxByAccountQuery, Exact<{
    chainId: string;
    sentFromOrTo: string;
    minHeight?: InputMaybe<number>;
    maxHeight?: InputMaybe<number>;
}>>;
export declare function useTxByAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITxByAccountQuery, ITxByAccountQueryVariables>): Apollo.LazyQueryResultTuple<ITxByAccountQuery, Exact<{
    chainId: string;
    sentFromOrTo: string;
    minHeight?: InputMaybe<number>;
    maxHeight?: InputMaybe<number>;
}>>;
export type TxByAccountQueryHookResult = ReturnType<typeof useTxByAccountQuery>;
export type TxByAccountLazyQueryHookResult = ReturnType<typeof useTxByAccountLazyQuery>;
export type TxByAccountQueryResult = Apollo.QueryResult<ITxByAccountQuery, ITxByAccountQueryVariables>;
export declare function refetchTxByAccountQuery(variables: ITxByAccountQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        sentFromOrTo: string;
        minHeight?: InputMaybe<number>;
        maxHeight?: InputMaybe<number>;
    }>;
};
export declare const TxByContractDocument: Apollo.DocumentNode;
/**
 * __useTxByContractQuery__
 *
 * To run a query within a React component, call `useTxByContractQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByContractQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      contractAddress: // value for 'contractAddress'
 *      minHeight: // value for 'minHeight'
 *      maxHeight: // value for 'maxHeight'
 *   },
 * });
 */
export declare function useTxByContractQuery(baseOptions: Apollo.QueryHookOptions<ITxByContractQuery, ITxByContractQueryVariables>): Apollo.QueryResult<ITxByContractQuery, Exact<{
    chainId: string;
    contractAddress: string;
    minHeight?: InputMaybe<number>;
    maxHeight?: InputMaybe<number>;
}>>;
export declare function useTxByContractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITxByContractQuery, ITxByContractQueryVariables>): Apollo.LazyQueryResultTuple<ITxByContractQuery, Exact<{
    chainId: string;
    contractAddress: string;
    minHeight?: InputMaybe<number>;
    maxHeight?: InputMaybe<number>;
}>>;
export type TxByContractQueryHookResult = ReturnType<typeof useTxByContractQuery>;
export type TxByContractLazyQueryHookResult = ReturnType<typeof useTxByContractLazyQuery>;
export type TxByContractQueryResult = Apollo.QueryResult<ITxByContractQuery, ITxByContractQueryVariables>;
export declare function refetchTxByContractQuery(variables: ITxByContractQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        contractAddress: string;
        minHeight?: InputMaybe<number>;
        maxHeight?: InputMaybe<number>;
    }>;
};
export declare const TxByHeightDocument: Apollo.DocumentNode;
/**
 * __useTxByHeightQuery__
 *
 * To run a query within a React component, call `useTxByHeightQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByHeightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByHeightQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      height: // value for 'height'
 *   },
 * });
 */
export declare function useTxByHeightQuery(baseOptions: Apollo.QueryHookOptions<ITxByHeightQuery, ITxByHeightQueryVariables>): Apollo.QueryResult<ITxByHeightQuery, Exact<{
    chainId: string;
    height: number;
}>>;
export declare function useTxByHeightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITxByHeightQuery, ITxByHeightQueryVariables>): Apollo.LazyQueryResultTuple<ITxByHeightQuery, Exact<{
    chainId: string;
    height: number;
}>>;
export type TxByHeightQueryHookResult = ReturnType<typeof useTxByHeightQuery>;
export type TxByHeightLazyQueryHookResult = ReturnType<typeof useTxByHeightLazyQuery>;
export type TxByHeightQueryResult = Apollo.QueryResult<ITxByHeightQuery, ITxByHeightQueryVariables>;
export declare function refetchTxByHeightQuery(variables: ITxByHeightQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        height: number;
    }>;
};
export declare const TxByHashDocument: Apollo.DocumentNode;
/**
 * __useTxByHashQuery__
 *
 * To run a query within a React component, call `useTxByHashQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByHashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByHashQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      hash: // value for 'hash'
 *   },
 * });
 */
export declare function useTxByHashQuery(baseOptions: Apollo.QueryHookOptions<ITxByHashQuery, ITxByHashQueryVariables>): Apollo.QueryResult<ITxByHashQuery, Exact<{
    chainId: string;
    hash: string;
}>>;
export declare function useTxByHashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITxByHashQuery, ITxByHashQueryVariables>): Apollo.LazyQueryResultTuple<ITxByHashQuery, Exact<{
    chainId: string;
    hash: string;
}>>;
export type TxByHashQueryHookResult = ReturnType<typeof useTxByHashQuery>;
export type TxByHashLazyQueryHookResult = ReturnType<typeof useTxByHashLazyQuery>;
export type TxByHashQueryResult = Apollo.QueryResult<ITxByHashQuery, ITxByHashQueryVariables>;
export declare function refetchTxByHashQuery(variables: ITxByHashQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chainId: string;
        hash: string;
    }>;
};
