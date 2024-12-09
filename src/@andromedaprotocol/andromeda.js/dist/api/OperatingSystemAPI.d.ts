import type AndromedaClient from "../AndromedaClient";
import ADOAPI from "./ADOAPI";
import ADODatabaseAPI from "./ADODatabaseAPI";
import VirtualFileSystemAPI from "./VirtualFileSystemAPI";
export default class OperatingSystemAPI extends ADOAPI {
    address: string;
    vfs?: VirtualFileSystemAPI;
    adoDB?: ADODatabaseAPI;
    constructor(client: AndromedaClient, address?: string);
    /**
     * Check to ensure the registry has a valid address
     */
    private preMessage;
    /**
     * Assigns the kernel address before fetching any key addresses
     * @param address
     */
    assignKernelAddress(address: string): Promise<void>;
    /**
     * Fetches the current VFS address from the kernel
     */
    fetchVFSAddress(): Promise<void>;
    /**
     * Fetches the current ADODB address from the kernel
     */
    fetchADODBAddress(): Promise<void>;
    /**
     * Generates a 'KeyAddress' kernel query for a given key
     * @param key
     * @returns
     */
    getKeyAddressMessage(key: string): {
        key_address: {
            key: string;
        };
    };
    /**
     * Fetches a key address for a given key from the currently assigned kernel
     * @param key
     * @returns
     */
    fetchKeyAddress(key: string): Promise<any>;
}
