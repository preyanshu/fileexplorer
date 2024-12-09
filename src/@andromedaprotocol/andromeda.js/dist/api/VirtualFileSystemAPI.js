"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const ADOAPI_1 = __importDefault(require("./ADOAPI"));
class VirtualFileSystemAPI extends ADOAPI_1.default {
    constructor(client, address) {
        super(client, address);
        this.client = client;
        this.address = address;
    }
    /**
     * Check to ensure the vfs has a valid address
     */
    preMessage() {
        if (!this.address ||
            this.address.length === 0 ||
            !(0, __1.validateAddress)(this.address))
            throw new Error("VFS has no assigned address");
    }
    /**
     * Generates a 'ResolvePath' query message for the VFS
     * @param path
     * @returns
     */
    resolvePathMsg(path) {
        return {
            resolve_path: {
                path,
            },
        };
    }
    /**
     * Resolves the address for a given path
     * @param path
     * @returns
     */
    async resolvePath(path) {
        this.preMessage();
        if (!path || path.length === 0)
            throw new Error("Cannot resolve an empty path using the VFS");
        return this.client.queryContract(this.address, this.resolvePathMsg(path));
    }
    /**
     * Generates a 'RegisterUser' message for the VFS
     * @param username
     * @returns
     */
    registerUserMsg(username) {
        return {
            register_user: {
                username,
            },
        };
    }
    /**
     * Registers a username for the currently used signing address
     * @param username
     * @param msgParams
     * @returns
     */
    async registerUser(username, msgParams) {
        this.preMessage();
        if (!username || username.length === 0)
            throw new Error("Cannot register an empty username");
        return this.client.execute(this.address, this.registerUserMsg(username), msgParams?.fee, msgParams?.memo, msgParams?.funds);
    }
    /**
     * Generates a 'AddPath' message for the VFS
     * @param name
     * @param address
     * @returns
     */
    addPathMsg(name, address) {
        return {
            add_path: {
                name,
                address,
            },
        };
    }
    /**
     * Registers a path for the currently used signing address
     * @param name
     * @param address
     * @param msgParams
     * @returns
     */
    async addPath(name, address, msgParams) {
        this.preMessage();
        if (!name || name.length === 0)
            throw new Error("Cannot register an empty path");
        if (!address || address.length === 0 || !(0, __1.validateAddress)(address))
            throw new Error("Cannot register an invalid address for a path within the VFS");
        return this.client.execute(this.address, this.addPathMsg(name, address), msgParams?.fee, msgParams?.memo, msgParams?.funds);
    }
    // /**
    //  * Generates a 'AddParentPath' message for the VFS
    //  * @param name
    //  * @param parent_address
    //  * @returns
    //  */
    // addParentPathMsg(name: string, parent_address: string) {
    //   return {
    //     add_path: {
    //       name,
    //       parent_address,
    //     },
    //   };
    // }
    // /**
    //  * Registers a parent path for the currently used signing address
    //  * @param name
    //  * @param parent_address
    //  * @param msgParams
    //  * @returns
    //  */
    // async addParentPath(
    //   name: string,
    //   parent_address: string,
    //   msgParams?: OptionalExecuteParams
    // ) {
    //   this.preMessage();
    //   if (!name || name.length === 0)
    //     throw new Error("Cannot register an empty path");
    //   if (
    //     !parent_address ||
    //     parent_address.length === 0 ||
    //     !validateAddress(parent_address)
    //   )
    //     throw new Error(
    //       "Cannot register an invalid address for a path within the VFS"
    //     );
    //   return this.client.execute(
    //     this.address,
    //     this.addParentPathMsg(name, parent_address),
    //     msgParams?.fee,
    //     msgParams?.memo,
    //     msgParams?.funds
    //   );
    // }
    /**
     * Generates a 'GetUsername' query message for the VFS
     * @param address
     * @returns
     */
    getUsernameMsg(address) {
        return {
            get_username: {
                address,
            },
        };
    }
    /**
     * Resolves the username for the given address
     * @param address
     * @returns
     */
    async getUsername(address) {
        this.preMessage();
        return this.client.queryContract(this.address, this.getUsernameMsg(address));
    }
/**
 * Generates a 'SubDir' query message for the VFS with optional min, max, and limit parameters
 * @param path
 * @param min
 * @param max
 * @param limit
 * @returns
 */
   subDirMsg(path, min, max, limit) {
    if (min !== undefined && min < 0) {
        throw new Error("min must be a non-negative number");
    }
    if (max !== undefined && max < 0) {
        throw new Error("max must be a non-negative number");
    }
    if (limit !== undefined && limit < 0) {
        throw new Error("limit must be a non-negative number");
    }
    if (min !== undefined && max !== undefined && min > max) {
        throw new Error("min cannot be greater than max");
    }

    // Construct the query message
    const message = {
        sub_dir: {
            path,
        },
    };

    // Add optional parameters only if they are provided
    if (min !== undefined) message.sub_dir.min = min;
    if (max !== undefined) message.sub_dir.max = max;
    if (limit !== undefined) message.sub_dir.limit = limit;

    console.log("message100: ", message);

    return message;
}

/**
 * Resolves the sub dir for a given path with optional min, max, and limit
 * @param path
 * @param min
 * @param max
 * @param limit
 * @returns
 */
async subDir(path, min, max, limit) {
    this.preMessage();

    console.log("path: ", path);
    if (!path || path.length === 0) {
        throw new Error("Cannot resolve an empty path using the VFS");
    }
    return this.client.queryContract(
        this.address,
        this.subDirMsg(path, min, max, limit)
    );
}

    /**
     * Generates a 'paths' query message for the VFS
     * @param addr
     * @returns
     */
    pathsMsg(addr) {
        return {
            paths: {
                addr,
            },
        };
    }
    /**
     * Resolves the paths for a given address
     * @param addr
     * @returns
     */
    async paths(addr) {
        this.preMessage();
        if (!addr ||
            addr.length === 0 ||
            !(0, __1.validateAddress)(addr))
            throw new Error("Cannot resolve an invalid address using the VFS");
        return this.client.queryContract(this.address, this.pathsMsg(addr));
    }
}
exports.default = VirtualFileSystemAPI;
