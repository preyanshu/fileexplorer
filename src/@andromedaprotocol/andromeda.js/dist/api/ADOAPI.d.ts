import type AndromedaClient from "../AndromedaClient";
import type { Expiration, Fee, Module, Msg } from "../types";
export default class ADOAPI {
    protected client: AndromedaClient;
    protected address: string;
    constructor(client: AndromedaClient, address?: string);
    /**
     * Converts a message object to an Andromeda Execute Message
     * @param msg
     * @returns
     */
    protected andromedaReceive(msg: Msg): {
        andr_receive: Msg;
    };
    /**
     * Execute Messages
     */
    /**
     * Returns an update owner message
     * @param newOwner
     * @returns
     */
    updateOwnerMsg(newOwner: string, expiration?: Expiration): {
        ownership: {
            update_owner: {
                new_owner: string;
                expiration: Expiration | undefined;
            };
        };
    };
    /**
     * Updates the owner for the given ADO.
     * **Only accessible to the current owner**
     * @param newOwner
     * @param addr
     * @param fee
     * @param memo
     * @returns
     */
    updateOwner(newOwner: string, addr?: string, expiration?: Expiration, fee?: Fee, memo?: string): Promise<import("@cosmjs/cosmwasm-stargate").ExecuteResult>;
    /**
     * Returns an update app contract message
     * @param appContract
     * @returns
     */
    updateAppContractMsg(appContract: string): {
        update_app_contract: {
            address: string;
        };
    };
    /**
     * Updates the app contract for a given ADO.
     *  **Only accessible to the current owner**
     * @param appContract
     * @param addr
     * @param fee
     * @param memo
     * @returns
     */
    updateAppContract(appContract: string, addr?: string, fee?: Fee, memo?: string): Promise<import("@cosmjs/cosmwasm-stargate").ExecuteResult>;
    /**
     * Returns a register module message
     * @param module
     * @returns
     */
    registerModuleMsg(module: Module): {
        register_module: {
            module: Module;
        };
    };
    /**
     * Register a module with an ADO.
     * **Only accessible by the contract owner.**
     * **Will error if the ADO does not implement modules.**
     * @param module
     * @param addr
     * @param fee
     * @param memo
     * @returns
     */
    registerModule(module: Module, addr?: string, fee?: Fee, memo?: string): Promise<import("@cosmjs/cosmwasm-stargate").ExecuteResult>;
    /**
     * Returns a deregister module message
     * @param id The module idx
     * @returns
     */
    deregisterModuleMsg(id: number): {
        deregister_module: {
            module_idx: string;
        };
    };
    /**
     * Deregisters a module with an ADO.
     * **Only accessible by the contract owner.**
     * **Will error if the ADO does not implement modules.**
     * @param id The module idx
     * @param addr
     * @param fee
     * @param memo
     * @returns
     */
    deregisterModule(id: number, addr?: string, fee?: Fee, memo?: string): Promise<import("@cosmjs/cosmwasm-stargate").ExecuteResult>;
    /**
     * Returns am alter module message
     * @param id The module idx
     * @param module
     * @returns
     */
    alterModuleMsg(id: number, module: Module): {
        alter_module: {
            module: Module;
            module_idx: string;
        };
    };
    /**
     * Alters a module within an ADO.
     * **Only accessible by the contract owner.**
     * **Will error if the ADO does not implement modules.**
     * @param id The module idx
     * @param module
     * @param addr
     * @param fee
     * @param memo
     * @returns
     */
    alterModule(id: number, module: Module, addr?: string, fee?: Fee, memo?: string): Promise<import("@cosmjs/cosmwasm-stargate").ExecuteResult>;
    /**
     * Returns an owner query message
     * @returns
     */
    ownerQuery(): {
        owner: {};
    };
    /**
     * Gets the owner address for a provided ADO
     * @param addr
     * @returns
     */
    getOwner(addr?: string): Promise<string>;
    /**
     * Validates if a given address is an owner or operator for the given ADO
     * @param addr
     * @param contractAddr
     * @returns
     */
    isOwner(addr: string, contractAddr?: string): Promise<boolean>;
    /**
     * Returns an ADO type query message
     * @returns
     */
    typeQuery(): {
        type: {};
    };
    /**
     * Gets the ADO type for the provided ADO
     * @param addr
     * @returns
     */
    getType(addr?: string): Promise<string>;
    /**
     * Returns a publisher query message
     * @returns
     */
    publisherQuery(): {
        original_publisher: {};
    };
    /**
     * Gets the original publisher of the given ADO
     * @param addr
     * @returns
     */
    getPublisher(addr?: string): Promise<string>;
    /**
     * Returns a block height creation query
     * @returns
     */
    createdHeightQuery(): {
        block_height_upon_creation: {};
    };
    /**
     * Gets the block height at which the given ADO was created
     * @param addr
     * @returns
     */
    getCreatedHeight(addr?: string): Promise<number>;
    /**
     * Returns a version query
     * @returns
     */
    versionQuery(): {
        version: {};
    };
    /**
     * Gets the version for a given ADO
     * @param addr
     * @returns
     */
    getVersion(addr?: string): Promise<string>;
    /**
     * Returns a module query
     * @param id
     * @returns
     */
    moduleQuery(id: string | number): {
        module: {
            id: string | number;
        };
    };
    /**
     * Gets the modules for a given ADO
     * **Will error if the ADO does not implement modules**
     * @param id
     * @param addr
     * @returns
     */
    getModule(id: string | number, addr?: string): Promise<{
        idx: number;
        name?: string | undefined;
        address: string;
        is_mutable: boolean;
    }>;
    /**
     * Returns a module IDs query
     * @returns
     */
    moduleIdsQuery(): {
        module_ids: {};
    };
    /**
     * Gets all module IDs for a given ADO.
     * **Will error if the ADO does not implement modules**
     * @param addr
     * @returns
     */
    getModuleIds(addr?: string): Promise<string[]>;
    /**
     * Gets all modules for a given ADO. Uses several queries so response may be slow.
     * **Will error if the ADO does not implement modules**
     * @param addr
     * @returns
     */
    getModules(addr?: string): Promise<{
        idx: number;
        name?: string | undefined;
        address: string;
        is_mutable: boolean;
    }[]>;
}
