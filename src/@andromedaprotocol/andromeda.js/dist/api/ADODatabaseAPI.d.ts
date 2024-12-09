import type AndromedaClient from "../AndromedaClient";
import ADOAPI from "./ADOAPI";
export default class ADODatabaseAPI extends ADOAPI {
    address: string;
    constructor(client: AndromedaClient, address?: string);
    /**
     * Provides a message object for the ADO DB's `GetCodeId` query
     * @param name
     * @returns
     */
    getCodeIdQuery(name: string): {
        code_id: {
            key: string;
        };
    };
    /**
     * Provides a message object for the ADO DB's `GetCodeId` query
     * @param name
     * @returns
     */
    getAdoTypeQuery(codeId: number): {
        ado_type: {
            code_id: number;
        };
    };
    /**
     * Gets the code ID for an ADO type from the ADO DB
     * @param name
     * @param address
     * @returns
     */
    getCodeId(name: string, address?: string): Promise<number>;
    /**
   * Gets the code ID for an ADO type from the ADO DB
   * @param name
   * @param address
   * @returns
   */
    getAdoType(codeId: number, address?: string): Promise<string>;
    /**
     * Provides a message object for the ADO DB's `GetCodeId` query
     * @param name
     * @returns
     */
    getAllADOQuery(startAfter?: string, limit?: number): {
        all_ado_types: {
            limit: number;
            start_after: string;
        };
    };
    /**
     * Gets the code ID for an ADO type from the ADO DB
     * @param name
     * @param address
     * @returns
     */
    getAllADO(startAfter?: string, limit?: number, address?: string): Promise<string[]>;
}
