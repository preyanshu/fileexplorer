import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
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
export declare const AndrFragmentFragmentDoc: import("@apollo/client").DocumentNode;
export declare const ComponentFragmentDoc: import("@apollo/client").DocumentNode;
export declare const AppComponentFragmentDoc: import("@apollo/client").DocumentNode;
export declare const Bech32configFragmentDoc: import("@apollo/client").DocumentNode;
export declare const CurrencyFragmentDoc: import("@apollo/client").DocumentNode;
export declare const KeplrConfigFragmentDoc: import("@apollo/client").DocumentNode;
export declare const ChainConfigFragmentDoc: import("@apollo/client").DocumentNode;
export declare const TxInfoFragmentDoc: import("@apollo/client").DocumentNode;
export declare const AddressListContainsAddressDocument: import("@apollo/client").DocumentNode;
export declare const AppConfigDocument: import("@apollo/client").DocumentNode;
export declare const AppComponentsDocument: import("@apollo/client").DocumentNode;
export declare const AppConfigAndComponentsDocument: import("@apollo/client").DocumentNode;
export declare const AssetsDocument: import("@apollo/client").DocumentNode;
export declare const BaseAdoDocument: import("@apollo/client").DocumentNode;
export declare const MiniBaseAdoDocument: import("@apollo/client").DocumentNode;
export declare const CrowdfundAvailableTokensDocument: import("@apollo/client").DocumentNode;
export declare const CrowdfundIsTokenAvailableDocument: import("@apollo/client").DocumentNode;
export declare const CrowdfundConfigDocument: import("@apollo/client").DocumentNode;
export declare const CrowdfundStateDocument: import("@apollo/client").DocumentNode;
export declare const Cw20TokenInfoDocument: import("@apollo/client").DocumentNode;
export declare const Cw20Document: import("@apollo/client").DocumentNode;
export declare const Cw721InfoDocument: import("@apollo/client").DocumentNode;
export declare const ChainConfigDocument: import("@apollo/client").DocumentNode;
export declare const AllChainConfigDocument: import("@apollo/client").DocumentNode;
export declare const AllStoredChainConfigDocument: import("@apollo/client").DocumentNode;
export declare const KeplrConfigDocument: import("@apollo/client").DocumentNode;
export declare const AllKeplrConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAddressListAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAddressListIncludesaddressDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAddressListDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAdoAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAdoDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAdosmartDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAppAddressesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAppAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAppComponentexistsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAppComponentsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAppConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAppGetaddressDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAppDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAuctionAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAuctionAuctionidsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAuctionAuctioninfosforaddressDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAuctionAuctionstateDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAuctionBidsBidsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAuctionBidsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAuctionLatestauctionstateDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAuctionSummaryfieldsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoAuctionDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoChainidDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCrowdfundAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCrowdfundConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCrowdfundIstokenavailableDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCrowdfundStatePriceDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCrowdfundStateRecipientDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCrowdfundStateDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCrowdfundDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20AllaccountsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20AllallowancesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20AllspenderallowancesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20AllowanceDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20AndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20BalanceDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20DownloadlogoDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20MarketinginfoDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20MinterDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20TokeninfoDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20Document: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20ExchangeAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20ExchangeSaleDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20ExchangeSaleassetsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20ExchangeDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20StakingAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20StakingConfigStakingTokenDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20StakingConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20StakingStakerDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20StakingStakersDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20StakingStateDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw20StakingDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721AllnftinfoAccessDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721AllnftinfoInfoExtensionDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721AllnftinfoInfoMetadataDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721AllnftinfoInfoDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721AllnftinfoDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721AlloperatorsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721AlltokensDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721AndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721ApprovalDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721ApprovalsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721ContractinfoDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721IsarchivedDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721NftinfoExtensionDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721NftinfoMetadataAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721NftinfoMetadataDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721NftinfoDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721NumownersDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721OwnerofApprovalsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721OwnerofDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721SearchtokensExtensionDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721SearchtokensMetadataAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721SearchtokensMetadataDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721SearchtokensDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721TokensDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721TransferagreementAgreementAmountDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721TransferagreementAgreementDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721TransferagreementDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoCw721Document: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoFactoryAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoFactoryCodeIdDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoFactoryDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoLockdropAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoLockdropConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoLockdropStateDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoLockdropUserinfoDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoLockdropWithdrawalpercentallowedDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoLockdropDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMarketplaceAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMarketplaceLatestsalestateDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMarketplaceSaleidsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMarketplaceSaleinfosforaddressDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMarketplaceSalestateDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMarketplaceDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMerkleAirdropAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMerkleAirdropConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMerkleAirdropIsclaimedDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMerkleAirdropMerklerootDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoMerkleAirdropDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoPrimitiveAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoPrimitiveGetvalueDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoPrimitiveDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRateLimitingWithdrawalsAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRateLimitingWithdrawalsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRatesAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRatesPaymentsRateExternalDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRatesPaymentsRateFlatDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRatesPaymentsRatePercentDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRatesPaymentsRateDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRatesPaymentsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoRatesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoSplitterAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoSplitterConfigRecipientsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoSplitterConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoSplitterDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoTimelockAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoTimelockGetlockedfundsCoinsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoTimelockGetlockedfundsConditionDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoTimelockGetlockedfundsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoTimelockDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoVaultAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoVaultBalanceDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoVaultStrategyaddressDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoVaultDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoVestingAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoVestingBatchDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoVestingBatchesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoVestingConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoVestingDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoWeightedDistributionSplitterAndrDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoWeightedDistributionSplitterConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoWeightedDistributionSplitterDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdopPackageSchemasReceiveDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdopPackageSchemasDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdopPackageDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdopDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAccountsAssetsComponentsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAccountsAssetsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAccountsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedChainconfigsAllconfigsIconurlsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedChainconfigsAllconfigsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedChainconfigsAllstoredconfigsIconurlsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedChainconfigsAllstoredconfigsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedChainconfigsConfigIconurlsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedChainconfigsConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedChainconfigsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsAllconfigsBip44Document: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsAllconfigsCurrenciesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsAllconfigsGaspricestepDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsAllconfigsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsConfigBech32ConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsConfigBip44Document: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsConfigCurrenciesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsConfigFeecurrenciesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsConfigGaspricestepDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsConfigStakecurrencyDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsConfigDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedKeplrconfigsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByaccountEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByaccountEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByaccountMsgresponsesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByaccountTxlogEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByaccountTxlogEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByaccountTxlogDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByaccountDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBycontractEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBycontractEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBycontractMsgresponsesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBycontractTxlogEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBycontractTxlogEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBycontractTxlogDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBycontractDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByhashEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByhashEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByhashMsgresponsesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByhashTxlogEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByhashTxlogEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByhashTxlogDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByhashDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByheightEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByheightEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByheightMsgresponsesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByheightTxlogEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByheightTxlogEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByheightTxlogDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByheightDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByownerEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByownerEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByownerMsgresponsesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByownerTxlogEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByownerTxlogEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByownerTxlogDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByownerDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByrawstringEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByrawstringEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByrawstringMsgresponsesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByrawstringTxlogEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByrawstringTxlogEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByrawstringTxlogDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxByrawstringDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBytagEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBytagEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBytagMsgresponsesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBytagTxlogEventsAttributesDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBytagTxlogEventsDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBytagTxlogDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxBytagDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedTxDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoaddedDocument: import("@apollo/client").DocumentNode;
export declare const CodegenGeneratedAdoownerupdatedDocument: import("@apollo/client").DocumentNode;
export declare const TxByAccountDocument: import("@apollo/client").DocumentNode;
export declare const TxByContractDocument: import("@apollo/client").DocumentNode;
export declare const TxByHeightDocument: import("@apollo/client").DocumentNode;
export declare const TxByHashDocument: import("@apollo/client").DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    ADDRESS_LIST_CONTAINS_ADDRESS(variables: IAddressListContainsAddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAddressListContainsAddressQuery>;
    APP_CONFIG(variables: IAppConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAppConfigQuery>;
    APP_COMPONENTS(variables: IAppComponentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAppComponentsQuery>;
    APP_CONFIG_AND_COMPONENTS(variables: IAppConfigAndComponentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAppConfigAndComponentsQuery>;
    ASSETS(variables: IAssetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAssetsQuery>;
    BASE_ADO(variables: IBaseAdoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IBaseAdoQuery>;
    MINI_BASE_ADO(variables: IMiniBaseAdoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMiniBaseAdoQuery>;
    CROWDFUND_AVAILABLE_TOKENS(variables: ICrowdfundAvailableTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICrowdfundAvailableTokensQuery>;
    CROWDFUND_IS_TOKEN_AVAILABLE(variables: ICrowdfundIsTokenAvailableQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICrowdfundIsTokenAvailableQuery>;
    CROWDFUND_CONFIG(variables: ICrowdfundConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICrowdfundConfigQuery>;
    CROWDFUND_STATE(variables: ICrowdfundStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICrowdfundStateQuery>;
    CW20_TOKEN_INFO(variables: ICw20TokenInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICw20TokenInfoQuery>;
    CW20(variables: ICw20QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICw20Query>;
    CW721_INFO(variables: ICw721InfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICw721InfoQuery>;
    CHAIN_CONFIG(variables: IChainConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IChainConfigQuery>;
    ALL_CHAIN_CONFIG(variables?: IAllChainConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAllChainConfigQuery>;
    ALL_STORED_CHAIN_CONFIG(variables?: IAllStoredChainConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAllStoredChainConfigQuery>;
    KEPLR_CONFIG(variables: IKeplrConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IKeplrConfigQuery>;
    ALL_KEPLR_CONFIG(variables?: IAllKeplrConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAllKeplrConfigQuery>;
    CODEGEN_GENERATED_ADO_ADDRESS_LIST_ANDR(variables: ICodegenGeneratedAdoAddressListAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAddressListAndrQuery>;
    CODEGEN_GENERATED_ADO_ADDRESS_LIST_INCLUDESADDRESS(variables: ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAddressListIncludesaddressQuery>;
    CODEGEN_GENERATED_ADO_ADDRESS_LIST(variables: ICodegenGeneratedAdoAddressListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAddressListQuery>;
    CODEGEN_GENERATED_ADO_ADO_ANDR(variables: ICodegenGeneratedAdoAdoAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAdoAndrQuery>;
    CODEGEN_GENERATED_ADO_ADO(variables: ICodegenGeneratedAdoAdoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAdoQuery>;
    CODEGEN_GENERATED_ADO_ADOSMART(variables: ICodegenGeneratedAdoAdosmartQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAdosmartQuery>;
    CODEGEN_GENERATED_ADO_APP_ADDRESSES(variables: ICodegenGeneratedAdoAppAddressesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppAddressesQuery>;
    CODEGEN_GENERATED_ADO_APP_ANDR(variables: ICodegenGeneratedAdoAppAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppAndrQuery>;
    CODEGEN_GENERATED_ADO_APP_COMPONENTEXISTS(variables: ICodegenGeneratedAdoAppComponentexistsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppComponentexistsQuery>;
    CODEGEN_GENERATED_ADO_APP_COMPONENTS(variables: ICodegenGeneratedAdoAppComponentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppComponentsQuery>;
    CODEGEN_GENERATED_ADO_APP_CONFIG(variables: ICodegenGeneratedAdoAppConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppConfigQuery>;
    CODEGEN_GENERATED_ADO_APP_GETADDRESS(variables: ICodegenGeneratedAdoAppGetaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppGetaddressQuery>;
    CODEGEN_GENERATED_ADO_APP(variables: ICodegenGeneratedAdoAppQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppQuery>;
    CODEGEN_GENERATED_ADO_AUCTION_ANDR(variables: ICodegenGeneratedAdoAuctionAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionAndrQuery>;
    CODEGEN_GENERATED_ADO_AUCTION_AUCTIONIDS(variables: ICodegenGeneratedAdoAuctionAuctionidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionAuctionidsQuery>;
    CODEGEN_GENERATED_ADO_AUCTION_AUCTIONINFOSFORADDRESS(variables: ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery>;
    CODEGEN_GENERATED_ADO_AUCTION_AUCTIONSTATE(variables: ICodegenGeneratedAdoAuctionAuctionstateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionAuctionstateQuery>;
    CODEGEN_GENERATED_ADO_AUCTION_BIDS_BIDS(variables: ICodegenGeneratedAdoAuctionBidsBidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionBidsBidsQuery>;
    CODEGEN_GENERATED_ADO_AUCTION_BIDS(variables: ICodegenGeneratedAdoAuctionBidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionBidsQuery>;
    CODEGEN_GENERATED_ADO_AUCTION_LATESTAUCTIONSTATE(variables: ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionLatestauctionstateQuery>;
    CODEGEN_GENERATED_ADO_AUCTION_SUMMARYFIELDS(variables: ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionSummaryfieldsQuery>;
    CODEGEN_GENERATED_ADO_AUCTION(variables: ICodegenGeneratedAdoAuctionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionQuery>;
    CODEGEN_GENERATED_ADO_CHAINID(variables: ICodegenGeneratedAdoChainidQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoChainidQuery>;
    CODEGEN_GENERATED_ADO_CROWDFUND_ANDR(variables: ICodegenGeneratedAdoCrowdfundAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundAndrQuery>;
    CODEGEN_GENERATED_ADO_CROWDFUND_CONFIG(variables: ICodegenGeneratedAdoCrowdfundConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundConfigQuery>;
    CODEGEN_GENERATED_ADO_CROWDFUND_ISTOKENAVAILABLE(variables: ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery>;
    CODEGEN_GENERATED_ADO_CROWDFUND_STATE_PRICE(variables: ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundStatePriceQuery>;
    CODEGEN_GENERATED_ADO_CROWDFUND_STATE_RECIPIENT(variables: ICodegenGeneratedAdoCrowdfundStateRecipientQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundStateRecipientQuery>;
    CODEGEN_GENERATED_ADO_CROWDFUND_STATE(variables: ICodegenGeneratedAdoCrowdfundStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundStateQuery>;
    CODEGEN_GENERATED_ADO_CROWDFUND(variables: ICodegenGeneratedAdoCrowdfundQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundQuery>;
    CODEGEN_GENERATED_ADO_CW20_ALLACCOUNTS(variables: ICodegenGeneratedAdoCw20AllaccountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AllaccountsQuery>;
    CODEGEN_GENERATED_ADO_CW20_ALLALLOWANCES(variables: ICodegenGeneratedAdoCw20AllallowancesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AllallowancesQuery>;
    CODEGEN_GENERATED_ADO_CW20_ALLSPENDERALLOWANCES(variables: ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AllspenderallowancesQuery>;
    CODEGEN_GENERATED_ADO_CW20_ALLOWANCE(variables: ICodegenGeneratedAdoCw20AllowanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AllowanceQuery>;
    CODEGEN_GENERATED_ADO_CW20_ANDR(variables: ICodegenGeneratedAdoCw20AndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AndrQuery>;
    CODEGEN_GENERATED_ADO_CW20_BALANCE(variables: ICodegenGeneratedAdoCw20BalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20BalanceQuery>;
    CODEGEN_GENERATED_ADO_CW20_DOWNLOADLOGO(variables: ICodegenGeneratedAdoCw20DownloadlogoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20DownloadlogoQuery>;
    CODEGEN_GENERATED_ADO_CW20_MARKETINGINFO(variables: ICodegenGeneratedAdoCw20MarketinginfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20MarketinginfoQuery>;
    CODEGEN_GENERATED_ADO_CW20_MINTER(variables: ICodegenGeneratedAdoCw20MinterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20MinterQuery>;
    CODEGEN_GENERATED_ADO_CW20_TOKENINFO(variables: ICodegenGeneratedAdoCw20TokeninfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20TokeninfoQuery>;
    CODEGEN_GENERATED_ADO_CW20(variables: ICodegenGeneratedAdoCw20QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20Query>;
    CODEGEN_GENERATED_ADO_CW20_EXCHANGE_ANDR(variables: ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20ExchangeAndrQuery>;
    CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALE(variables: ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20ExchangeSaleQuery>;
    CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALEASSETS(variables: ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery>;
    CODEGEN_GENERATED_ADO_CW20_EXCHANGE(variables: ICodegenGeneratedAdoCw20ExchangeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20ExchangeQuery>;
    CODEGEN_GENERATED_ADO_CW20_STAKING_ANDR(variables: ICodegenGeneratedAdoCw20StakingAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingAndrQuery>;
    CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG_STAKING_TOKEN(variables: ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery>;
    CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG(variables: ICodegenGeneratedAdoCw20StakingConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingConfigQuery>;
    CODEGEN_GENERATED_ADO_CW20_STAKING_STAKER(variables: ICodegenGeneratedAdoCw20StakingStakerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingStakerQuery>;
    CODEGEN_GENERATED_ADO_CW20_STAKING_STAKERS(variables: ICodegenGeneratedAdoCw20StakingStakersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingStakersQuery>;
    CODEGEN_GENERATED_ADO_CW20_STAKING_STATE(variables: ICodegenGeneratedAdoCw20StakingStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingStateQuery>;
    CODEGEN_GENERATED_ADO_CW20_STAKING(variables: ICodegenGeneratedAdoCw20StakingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingQuery>;
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS_APPROVALS(variables: ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery>;
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS(variables: ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery>;
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_EXTENSION(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery>;
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_METADATA_ATTRIBUTES(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesQuery>;
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_METADATA(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoInfoMetadataQuery>;
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery>;
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO(variables: ICodegenGeneratedAdoCw721AllnftinfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoQuery>;
    CODEGEN_GENERATED_ADO_CW721_ALLOPERATORS(variables: ICodegenGeneratedAdoCw721AlloperatorsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AlloperatorsQuery>;
    CODEGEN_GENERATED_ADO_CW721_ALLTOKENS(variables: ICodegenGeneratedAdoCw721AlltokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AlltokensQuery>;
    CODEGEN_GENERATED_ADO_CW721_ANDR(variables: ICodegenGeneratedAdoCw721AndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AndrQuery>;
    CODEGEN_GENERATED_ADO_CW721_APPROVAL(variables: ICodegenGeneratedAdoCw721ApprovalQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721ApprovalQuery>;
    CODEGEN_GENERATED_ADO_CW721_APPROVALS(variables: ICodegenGeneratedAdoCw721ApprovalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721ApprovalsQuery>;
    CODEGEN_GENERATED_ADO_CW721_CONTRACTINFO(variables: ICodegenGeneratedAdoCw721ContractinfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721ContractinfoQuery>;
    CODEGEN_GENERATED_ADO_CW721_ISARCHIVED(variables: ICodegenGeneratedAdoCw721IsarchivedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721IsarchivedQuery>;
    CODEGEN_GENERATED_ADO_CW721_NFTINFO_EXTENSION(variables: ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721NftinfoExtensionQuery>;
    CODEGEN_GENERATED_ADO_CW721_NFTINFO_METADATA_ATTRIBUTES(variables: ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721NftinfoMetadataAttributesQuery>;
    CODEGEN_GENERATED_ADO_CW721_NFTINFO_METADATA(variables: ICodegenGeneratedAdoCw721NftinfoMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721NftinfoMetadataQuery>;
    CODEGEN_GENERATED_ADO_CW721_NFTINFO(variables: ICodegenGeneratedAdoCw721NftinfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721NftinfoQuery>;
    CODEGEN_GENERATED_ADO_CW721_NUMOWNERS(variables: ICodegenGeneratedAdoCw721NumownersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721NumownersQuery>;
    CODEGEN_GENERATED_ADO_CW721_OWNEROF_APPROVALS(variables: ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery>;
    CODEGEN_GENERATED_ADO_CW721_OWNEROF(variables: ICodegenGeneratedAdoCw721OwnerofQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721OwnerofQuery>;
    CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_EXTENSION(variables: ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery>;
    CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_METADATA_ATTRIBUTES(variables: ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721SearchtokensMetadataAttributesQuery>;
    CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_METADATA(variables: ICodegenGeneratedAdoCw721SearchtokensMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721SearchtokensMetadataQuery>;
    CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS(variables: ICodegenGeneratedAdoCw721SearchtokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721SearchtokensQuery>;
    CODEGEN_GENERATED_ADO_CW721_TOKENS(variables: ICodegenGeneratedAdoCw721TokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721TokensQuery>;
    CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT_RAW(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery>;
    CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery>;
    CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery>;
    CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT(variables: ICodegenGeneratedAdoCw721TransferagreementQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721TransferagreementQuery>;
    CODEGEN_GENERATED_ADO_CW721(variables: ICodegenGeneratedAdoCw721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721Query>;
    CODEGEN_GENERATED_ADO_FACTORY_ANDR(variables: ICodegenGeneratedAdoFactoryAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoFactoryAndrQuery>;
    CODEGEN_GENERATED_ADO_FACTORY_CODE_ID(variables: ICodegenGeneratedAdoFactoryCodeIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoFactoryCodeIdQuery>;
    CODEGEN_GENERATED_ADO_FACTORY(variables: ICodegenGeneratedAdoFactoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoFactoryQuery>;
    CODEGEN_GENERATED_ADO_LOCKDROP_ANDR(variables: ICodegenGeneratedAdoLockdropAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropAndrQuery>;
    CODEGEN_GENERATED_ADO_LOCKDROP_CONFIG(variables: ICodegenGeneratedAdoLockdropConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropConfigQuery>;
    CODEGEN_GENERATED_ADO_LOCKDROP_STATE(variables: ICodegenGeneratedAdoLockdropStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropStateQuery>;
    CODEGEN_GENERATED_ADO_LOCKDROP_USERINFO(variables: ICodegenGeneratedAdoLockdropUserinfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropUserinfoQuery>;
    CODEGEN_GENERATED_ADO_LOCKDROP_WITHDRAWALPERCENTALLOWED(variables: ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery>;
    CODEGEN_GENERATED_ADO_LOCKDROP(variables: ICodegenGeneratedAdoLockdropQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropQuery>;
    CODEGEN_GENERATED_ADO_MARKETPLACE_ANDR(variables: ICodegenGeneratedAdoMarketplaceAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceAndrQuery>;
    CODEGEN_GENERATED_ADO_MARKETPLACE_LATESTSALESTATE(variables: ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery>;
    CODEGEN_GENERATED_ADO_MARKETPLACE_SALEIDS(variables: ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceSaleidsQuery>;
    CODEGEN_GENERATED_ADO_MARKETPLACE_SALEINFOSFORADDRESS(variables: ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery>;
    CODEGEN_GENERATED_ADO_MARKETPLACE_SALESTATE(variables: ICodegenGeneratedAdoMarketplaceSalestateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceSalestateQuery>;
    CODEGEN_GENERATED_ADO_MARKETPLACE(variables: ICodegenGeneratedAdoMarketplaceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceQuery>;
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ANDR(variables: ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropAndrQuery>;
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_CONFIG(variables: ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropConfigQuery>;
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ISCLAIMED(variables: ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery>;
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_MERKLEROOT(variables: ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery>;
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_TOTALCLAIMED(variables: ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery>;
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP(variables: ICodegenGeneratedAdoMerkleAirdropQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropQuery>;
    CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR(variables: ICodegenGeneratedAdoPrimitiveAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoPrimitiveAndrQuery>;
    CODEGEN_GENERATED_ADO_PRIMITIVE_GETVALUE(variables: ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoPrimitiveGetvalueQuery>;
    CODEGEN_GENERATED_ADO_PRIMITIVE(variables: ICodegenGeneratedAdoPrimitiveQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoPrimitiveQuery>;
    CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ACCOUNTDETAILS(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery>;
    CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ANDR(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery>;
    CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_COINALLOWANCEDETAILS(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery>;
    CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery>;
    CODEGEN_GENERATED_ADO_RATES_ANDR(variables: ICodegenGeneratedAdoRatesAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesAndrQuery>;
    CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_EXTERNAL(variables: ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery>;
    CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_FLAT(variables: ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery>;
    CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_PERCENT(variables: ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery>;
    CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE(variables: ICodegenGeneratedAdoRatesPaymentsRateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesPaymentsRateQuery>;
    CODEGEN_GENERATED_ADO_RATES_PAYMENTS(variables: ICodegenGeneratedAdoRatesPaymentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesPaymentsQuery>;
    CODEGEN_GENERATED_ADO_RATES(variables: ICodegenGeneratedAdoRatesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesQuery>;
    CODEGEN_GENERATED_ADO_SPLITTER_ANDR(variables: ICodegenGeneratedAdoSplitterAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoSplitterAndrQuery>;
    CODEGEN_GENERATED_ADO_SPLITTER_CONFIG_RECIPIENTS(variables: ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoSplitterConfigRecipientsQuery>;
    CODEGEN_GENERATED_ADO_SPLITTER_CONFIG(variables: ICodegenGeneratedAdoSplitterConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoSplitterConfigQuery>;
    CODEGEN_GENERATED_ADO_SPLITTER(variables: ICodegenGeneratedAdoSplitterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoSplitterQuery>;
    CODEGEN_GENERATED_ADO_TIMELOCK_ANDR(variables: ICodegenGeneratedAdoTimelockAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockAndrQuery>;
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_COINS(variables: ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery>;
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION_MINIUMFUNDS(variables: ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery>;
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION(variables: ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery>;
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS(variables: ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsQuery>;
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_COINS(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery>;
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION_MINIUMFUNDS(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery>;
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery>;
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery>;
    CODEGEN_GENERATED_ADO_TIMELOCK(variables: ICodegenGeneratedAdoTimelockQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockQuery>;
    CODEGEN_GENERATED_ADO_VAULT_ANDR(variables: ICodegenGeneratedAdoVaultAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVaultAndrQuery>;
    CODEGEN_GENERATED_ADO_VAULT_BALANCE(variables: ICodegenGeneratedAdoVaultBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVaultBalanceQuery>;
    CODEGEN_GENERATED_ADO_VAULT_STRATEGYADDRESS(variables: ICodegenGeneratedAdoVaultStrategyaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVaultStrategyaddressQuery>;
    CODEGEN_GENERATED_ADO_VAULT(variables: ICodegenGeneratedAdoVaultQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVaultQuery>;
    CODEGEN_GENERATED_ADO_VESTING_ANDR(variables: ICodegenGeneratedAdoVestingAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingAndrQuery>;
    CODEGEN_GENERATED_ADO_VESTING_BATCH(variables: ICodegenGeneratedAdoVestingBatchQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingBatchQuery>;
    CODEGEN_GENERATED_ADO_VESTING_BATCHES(variables: ICodegenGeneratedAdoVestingBatchesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingBatchesQuery>;
    CODEGEN_GENERATED_ADO_VESTING_CONFIG(variables: ICodegenGeneratedAdoVestingConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingConfigQuery>;
    CODEGEN_GENERATED_ADO_VESTING(variables: ICodegenGeneratedAdoVestingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingQuery>;
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_ANDR(variables: ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery>;
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG_RECIPIENTS(variables: ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery>;
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG(variables: ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery>;
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_GETUSERWEIGHT(variables: ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery>;
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER(variables: ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterQuery>;
    CODEGEN_GENERATED_ADO(variables?: ICodegenGeneratedAdoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoQuery>;
    CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS_RECEIVE(variables: ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdopPackageSchemasReceiveQuery>;
    CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS(variables: ICodegenGeneratedAdopPackageSchemasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdopPackageSchemasQuery>;
    CODEGEN_GENERATED_ADOP_PACKAGE(variables: ICodegenGeneratedAdopPackageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdopPackageQuery>;
    CODEGEN_GENERATED_ADOP(variables?: ICodegenGeneratedAdopQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdopQuery>;
    CODEGEN_GENERATED_ACCOUNTS_ASSETS_COMPONENTS(variables: ICodegenGeneratedAccountsAssetsComponentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAccountsAssetsComponentsQuery>;
    CODEGEN_GENERATED_ACCOUNTS_ASSETS(variables: ICodegenGeneratedAccountsAssetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAccountsAssetsQuery>;
    CODEGEN_GENERATED_ACCOUNTS(variables?: ICodegenGeneratedAccountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAccountsQuery>;
    CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS_ICONURLS(variables?: ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery>;
    CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS(variables?: ICodegenGeneratedChainconfigsAllconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsAllconfigsQuery>;
    CODEGEN_GENERATED_CHAINCONFIGS_ALLSTOREDCONFIGS_ICONURLS(variables?: ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsAllstoredconfigsIconurlsQuery>;
    CODEGEN_GENERATED_CHAINCONFIGS_ALLSTOREDCONFIGS(variables?: ICodegenGeneratedChainconfigsAllstoredconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsAllstoredconfigsQuery>;
    CODEGEN_GENERATED_CHAINCONFIGS_CONFIG_ICONURLS(variables: ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsConfigIconurlsQuery>;
    CODEGEN_GENERATED_CHAINCONFIGS_CONFIG(variables: ICodegenGeneratedChainconfigsConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsConfigQuery>;
    CODEGEN_GENERATED_CHAINCONFIGS(variables?: ICodegenGeneratedChainconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BECH32CONFIG(variables?: ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BIP44(variables?: ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query>;
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_CURRENCIES(variables?: ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_FEECURRENCIES(variables?: ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_GASPRICESTEP(variables?: ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_STAKECURRENCY(variables?: ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS(variables?: ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BECH32CONFIG(variables: ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BIP44(variables: ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigBip44Query>;
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_CURRENCIES(variables: ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_FEECURRENCIES(variables: ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_GASPRICESTEP(variables: ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_STAKECURRENCY(variables: ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG(variables: ICodegenGeneratedKeplrconfigsConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigQuery>;
    CODEGEN_GENERATED_KEPLRCONFIGS(variables?: ICodegenGeneratedKeplrconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsQuery>;
    CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByaccountEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS(variables: ICodegenGeneratedTxByaccountEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountEventsQuery>;
    CODEGEN_GENERATED_TX_BYACCOUNT_MSGRESPONSES(variables: ICodegenGeneratedTxByaccountMsgresponsesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountMsgresponsesQuery>;
    CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS(variables: ICodegenGeneratedTxByaccountTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountTxlogEventsQuery>;
    CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG(variables: ICodegenGeneratedTxByaccountTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountTxlogQuery>;
    CODEGEN_GENERATED_TX_BYACCOUNT(variables: ICodegenGeneratedTxByaccountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountQuery>;
    CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxBycontractEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS(variables: ICodegenGeneratedTxBycontractEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractEventsQuery>;
    CODEGEN_GENERATED_TX_BYCONTRACT_MSGRESPONSES(variables: ICodegenGeneratedTxBycontractMsgresponsesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractMsgresponsesQuery>;
    CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS(variables: ICodegenGeneratedTxBycontractTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractTxlogEventsQuery>;
    CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG(variables: ICodegenGeneratedTxBycontractTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractTxlogQuery>;
    CODEGEN_GENERATED_TX_BYCONTRACT(variables: ICodegenGeneratedTxBycontractQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractQuery>;
    CODEGEN_GENERATED_TX_BYHASH_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByhashEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYHASH_EVENTS(variables: ICodegenGeneratedTxByhashEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashEventsQuery>;
    CODEGEN_GENERATED_TX_BYHASH_MSGRESPONSES(variables: ICodegenGeneratedTxByhashMsgresponsesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashMsgresponsesQuery>;
    CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS(variables: ICodegenGeneratedTxByhashTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashTxlogEventsQuery>;
    CODEGEN_GENERATED_TX_BYHASH_TXLOG(variables: ICodegenGeneratedTxByhashTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashTxlogQuery>;
    CODEGEN_GENERATED_TX_BYHASH(variables: ICodegenGeneratedTxByhashQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashQuery>;
    CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByheightEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS(variables: ICodegenGeneratedTxByheightEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightEventsQuery>;
    CODEGEN_GENERATED_TX_BYHEIGHT_MSGRESPONSES(variables: ICodegenGeneratedTxByheightMsgresponsesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightMsgresponsesQuery>;
    CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS(variables: ICodegenGeneratedTxByheightTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightTxlogEventsQuery>;
    CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG(variables: ICodegenGeneratedTxByheightTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightTxlogQuery>;
    CODEGEN_GENERATED_TX_BYHEIGHT(variables: ICodegenGeneratedTxByheightQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightQuery>;
    CODEGEN_GENERATED_TX_BYOWNER_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByownerEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYOWNER_EVENTS(variables: ICodegenGeneratedTxByownerEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerEventsQuery>;
    CODEGEN_GENERATED_TX_BYOWNER_MSGRESPONSES(variables: ICodegenGeneratedTxByownerMsgresponsesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerMsgresponsesQuery>;
    CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS(variables: ICodegenGeneratedTxByownerTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerTxlogEventsQuery>;
    CODEGEN_GENERATED_TX_BYOWNER_TXLOG(variables: ICodegenGeneratedTxByownerTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerTxlogQuery>;
    CODEGEN_GENERATED_TX_BYOWNER(variables: ICodegenGeneratedTxByownerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerQuery>;
    CODEGEN_GENERATED_TX_BYRAWSTRING_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByrawstringEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByrawstringEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYRAWSTRING_EVENTS(variables: ICodegenGeneratedTxByrawstringEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByrawstringEventsQuery>;
    CODEGEN_GENERATED_TX_BYRAWSTRING_MSGRESPONSES(variables: ICodegenGeneratedTxByrawstringMsgresponsesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByrawstringMsgresponsesQuery>;
    CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByrawstringTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByrawstringTxlogEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG_EVENTS(variables: ICodegenGeneratedTxByrawstringTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByrawstringTxlogEventsQuery>;
    CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG(variables: ICodegenGeneratedTxByrawstringTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByrawstringTxlogQuery>;
    CODEGEN_GENERATED_TX_BYRAWSTRING(variables: ICodegenGeneratedTxByrawstringQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByrawstringQuery>;
    CODEGEN_GENERATED_TX_BYTAG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxBytagEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYTAG_EVENTS(variables: ICodegenGeneratedTxBytagEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagEventsQuery>;
    CODEGEN_GENERATED_TX_BYTAG_MSGRESPONSES(variables: ICodegenGeneratedTxBytagMsgresponsesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagMsgresponsesQuery>;
    CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery>;
    CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS(variables: ICodegenGeneratedTxBytagTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagTxlogEventsQuery>;
    CODEGEN_GENERATED_TX_BYTAG_TXLOG(variables: ICodegenGeneratedTxBytagTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagTxlogQuery>;
    CODEGEN_GENERATED_TX_BYTAG(variables: ICodegenGeneratedTxBytagQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagQuery>;
    CODEGEN_GENERATED_TX(variables: ICodegenGeneratedTxQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxQuery>;
    CODEGEN_GENERATED_ADOADDED(variables: ICodegenGeneratedAdoaddedSubscriptionVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoaddedSubscription>;
    CODEGEN_GENERATED_ADOOWNERUPDATED(variables: ICodegenGeneratedAdoownerupdatedSubscriptionVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoownerupdatedSubscription>;
    TX_BY_ACCOUNT(variables: ITxByAccountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ITxByAccountQuery>;
    TX_BY_CONTRACT(variables: ITxByContractQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ITxByContractQuery>;
    TX_BY_HEIGHT(variables: ITxByHeightQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ITxByHeightQuery>;
    TX_BY_HASH(variables: ITxByHashQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ITxByHashQuery>;
};
export type Sdk = ReturnType<typeof getSdk>;
