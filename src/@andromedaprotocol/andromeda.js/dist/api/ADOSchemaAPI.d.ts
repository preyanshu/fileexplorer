import { Schema } from "jsonschema";
import ADOAPI from "./ADOAPI";
import AndromedaClient, { ContractSchema } from "../index";
export default class ADOSchemaAPI extends ADOAPI {
    address: string;
    constructor(client: AndromedaClient, address?: string);
    static readonly SCHEMA_BASE_URL = "https://api.andromedaprotocol.io/v1/schema";
    /**
     * Gets the schema for the key in schemadb
     * @param key
     * @param address
     * @returns
     */
    private getSchemaFromVersion;
    /**
     * Gets the schema for the codeId
     * @param key
     * @param address
     * @returns
     */
    getSchemaFromCodeId<T = ContractSchema>(codeId: number, subSchema?: string, fallbackType?: string): Promise<{
        schema: NonNullable<Awaited<T>>;
        codeId: number;
    }>;
    /**
  * Gets the sub schema, like receive schema, from the codeId. Similar to getSchemaFromCodeId
  * @param key
  * @param address
  * @returns
  */
    getSubSchemaFromCodeId(codeId: number, subKey: string): Promise<{
        schema: Schema;
        codeId: number;
    }>;
}
