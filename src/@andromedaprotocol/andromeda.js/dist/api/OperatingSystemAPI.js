"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const ADOAPI_1 = __importDefault(require("./ADOAPI"));
const ADODatabaseAPI_1 = __importDefault(require("./ADODatabaseAPI"));
const VirtualFileSystemAPI_1 = __importDefault(require("./VirtualFileSystemAPI"));
class OperatingSystemAPI extends ADOAPI_1.default {
    constructor(client, address = "") {
        super(client, address);
        this.address = address;
    }
    /**
     * Check to ensure the registry has a valid address
     */
    preMessage() {
        if (!this.address ||
            this.address.length === 0 ||
            !(0, __1.validateAddress)(this.address))
            throw new Error("Kernel has no assigned address");
    }
    /**
     * Assigns the kernel address before fetching any key addresses
     * @param address
     */
    async assignKernelAddress(address) {
        this.address = address;
        await this.fetchVFSAddress();
        await this.fetchADODBAddress();
    }
    /**
     * Fetches the current VFS address from the kernel
     */
    async fetchVFSAddress() {
        const vfsKey = "vfs";
        const vfsAddress = await this.fetchKeyAddress(vfsKey);
        this.vfs = new VirtualFileSystemAPI_1.default(this.client, vfsAddress);
    }
    /**
     * Fetches the current ADODB address from the kernel
     */
    async fetchADODBAddress() {
        const adoDBKey = "adodb";
        const adoDBAddress = await this.fetchKeyAddress(adoDBKey);
        this.adoDB = new ADODatabaseAPI_1.default(this.client, adoDBAddress);
    }
    /**
     * Generates a 'KeyAddress' kernel query for a given key
     * @param key
     * @returns
     */
    getKeyAddressMessage(key) {
        return {
            key_address: {
                key,
            },
        };
    }
    /**
     * Fetches a key address for a given key from the currently assigned kernel
     * @param key
     * @returns
     */
    async fetchKeyAddress(key) {
        this.preMessage();
        if (!key || key.length === 0)
            throw new Error("Cannot fetch empty key address from kernel");
        return this.client.queryContract(this.address, this.getKeyAddressMessage(key));
    }
}
exports.default = OperatingSystemAPI;
