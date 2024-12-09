"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ADOAPI_1 = __importDefault(require("./ADOAPI"));
class ADODatabaseAPI extends ADOAPI_1.default {
    constructor(client, address = "") {
        super(client, address);
        this.address = address;
    }
    // /**
    //  * Provides a message object for the ADO DB's `UpdateCodeId` message
    //  * @param code_id_key
    //  * @param code_id
    //  * @returns
    //  */
    // updateCodeIdMsg(code_id_key: string, code_id: number) {
    //   return {
    //     update_code_id: {
    //       code_id,
    //       code_id_key,
    //     },
    //   };
    // }
    // /**
    //  * Updates the Code ID for a given key within the ADO DB
    //  * @param code_id_key
    //  * @param code_id
    //  * @param fee
    //  * @param address
    //  * @param memo
    //  * @returns
    //  */
    // async updateCodeId(
    //   code_id_key: string,
    //   code_id: number,
    //   fee: Fee,
    //   address?: string,
    //   memo?: string
    // ) {
    //   const msg = this.updateCodeIdMsg(code_id_key, code_id);
    //   if (!address && !this.address)
    //     throw new Error("Please provide a valid ADO DB address");
    //   return this.client.execute(
    //     address ?? this.address!,
    //     msg,
    //     fee,
    //     memo ?? `Update Code ID (${code_id_key}, ${code_id})`
    //   );
    // }
    /**
     * Provides a message object for the ADO DB's `GetCodeId` query
     * @param name
     * @returns
     */
    getCodeIdQuery(name) {
        return {
            code_id: {
                key: name,
            },
        };
    }
    /**
     * Provides a message object for the ADO DB's `GetCodeId` query
     * @param name
     * @returns
     */
    getAdoTypeQuery(codeId) {
        return {
            ado_type: {
                code_id: codeId,
            },
        };
    }
    /**
     * Gets the code ID for an ADO type from the ADO DB
     * @param name
     * @param address
     * @returns
     */
    async getCodeId(name, address) {
        if (!this.address && !address)
            throw new Error("No provided ADO DB address to retrieve code ID");
        const msg = this.getCodeIdQuery(name);
        return this.client.queryContract(address ?? this.address, msg);
    }
    /**
   * Gets the code ID for an ADO type from the ADO DB
   * @param name
   * @param address
   * @returns
   */
    async getAdoType(codeId, address) {
        if (!this.address && !address)
            throw new Error("No provided ADO DB address to retrieve code ID");
        const msg = this.getAdoTypeQuery(codeId);
        return this.client.queryContract(address ?? this.address, msg);
    }
    /**
     * Provides a message object for the ADO DB's `GetCodeId` query
     * @param name
     * @returns
     */
    getAllADOQuery(startAfter = '', limit = 100) {
        return {
            all_ado_types: {
                limit,
                start_after: startAfter
            },
        };
    }
    /**
     * Gets the code ID for an ADO type from the ADO DB
     * @param name
     * @param address
     * @returns
     */
    async getAllADO(startAfter = '', limit = 100, address) {
        if (!this.address && !address)
            throw new Error("No provided ADO DB address to retrieve code ID");
        const msg = this.getAllADOQuery(startAfter, limit);
        return this.client.queryContract(address ?? this.address, msg);
    }
}
exports.default = ADODatabaseAPI;
