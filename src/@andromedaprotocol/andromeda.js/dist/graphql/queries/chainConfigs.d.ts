/**
 * Queries a chain config by chain ID or config name
 * @param identifier
 * @returns
 */
export declare function queryChainConfig(identifier: string): Promise<{
    __typename?: "ChainConfig" | undefined;
    addressPrefix: string;
    blockExplorerTxPages: string[];
    blockExplorerAddressPages: string[];
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
        __typename?: "IconUrl" | undefined;
        sm: string;
        lg: string;
    };
}>;
/**
 * Queries all stored chain configs
 * @returns
 */
export declare function queryAllChainConfigs(): Promise<{
    __typename?: "ChainConfig" | undefined;
    addressPrefix: string;
    blockExplorerTxPages: string[];
    blockExplorerAddressPages: string[];
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
        __typename?: "IconUrl" | undefined;
        sm: string;
        lg: string;
    };
}[]>;
/**
 * Queries all stored chain configs
 * @returns
 */
export declare function queryAllStoredChainConfigs(): Promise<{
    __typename?: "ChainConfig" | undefined;
    addressPrefix: string;
    blockExplorerTxPages: string[];
    blockExplorerAddressPages: string[];
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
        __typename?: "IconUrl" | undefined;
        sm: string;
        lg: string;
    };
}[]>;
