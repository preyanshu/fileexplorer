import { OptionalExecuteParams } from "..";
import type AndromedaClient from "../AndromedaClient";
import ADOAPI from "./ADOAPI";

export default class VirtualFileSystemAPI extends ADOAPI {
    client: AndromedaClient;
    address: string;
    constructor(client: AndromedaClient, address: string);

    /**
     * Check to ensure the vfs has a valid address
     */
    private preMessage(): void;

    /**
     * Generates a 'ResolvePath' query message for the VFS
     * @param path
     * @returns
     */
    resolvePathMsg(path: string): {
        resolve_path: {
            path: string;
        };
    };

    /**
     * Resolves the address for a given path
     * @param path
     * @returns
     */
    resolvePath(path: string): Promise<any>;

    /**
     * Generates a 'RegisterUser' message for the VFS
     * @param username
     * @returns
     */
    registerUserMsg(username: string): {
        register_user: {
            username: string;
        };
    };

    /**
     * Registers a username for the currently used signing address
     * @param username
     * @param msgParams
     * @returns
     */
    registerUser(username: string, msgParams?: OptionalExecuteParams): Promise<import("@cosmjs/cosmwasm-stargate").ExecuteResult>;

    /**
     * Generates a 'AddPath' message for the VFS
     * @param name
     * @param address
     * @returns
     */
    addPathMsg(name: string, address: string): {
        add_path: {
            name: string;
            address: string;
        };
    };

    /**
     * Registers a path for the currently used signing address
     * @param name
     * @param address
     * @param msgParams
     * @returns
     */
    addPath(name: string, address: string, msgParams?: OptionalExecuteParams): Promise<import("@cosmjs/cosmwasm-stargate").ExecuteResult>;

    /**
     * Generates a 'GetUsername' query message for the VFS
     * @param address
     * @returns
     */
    getUsernameMsg(address: string): {
        get_username: {
            address: string;
        };
    };

    /**
     * Resolves the username for the given address
     * @param address
     * @returns
     */
    getUsername(address: string): Promise<any>;

    /**
     * Generates a 'SubDir' query message for the VFS with optional min, max, and limit parameters
     * @param path
     * @param min
     * @param max
     * @param limit
     * @returns
     */
    subDirMsg(path: string, min?: any, max?: any, limit?: number): {
        sub_dir: {
            path: string;
            min?: any;
            max?: any;
            limit?: number;
        };
    };

    /**
     * Resolves the sub dir for a given path with optional min, max, and limit
     * @param path
     * @param min
     * @param max
     * @param limit
     * @returns
     */
    subDir(path: string, min?: any , max?: any, limit?: number): Promise<any>;

    /**
     * Generates a 'paths' query message for the VFS
     * @param addr
     * @returns
     */
    pathsMsg(addr: string): {
        paths: {
            addr: string;
        };
    };

    /**
     * Resolves the paths for a given address
     * @param addr
     * @returns
     */
    paths(addr: string): Promise<string[]>;
}
