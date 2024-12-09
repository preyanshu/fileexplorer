/**
 * Queries details about an App given its contract address
 * @param contractAddress The contract address of the app
 * @returns
 */
export declare function queryApp(contractAddress: string): Promise<{
    __typename?: "AppAdo" | undefined;
    address: string;
    config: {
        __typename?: "AppConfig" | undefined;
        name: string;
        owner: string;
    };
    components: {
        __typename?: "AppComponent" | undefined;
        address: string;
        ado_type: string;
        instantiate_msg: any;
        name: string;
        type: string;
    }[];
}>;
