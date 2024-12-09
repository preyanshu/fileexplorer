"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ADOAPI_1 = __importDefault(require("./ADOAPI"));
const axios_1 = __importDefault(require("axios"));
class ADOSchemaAPI extends ADOAPI_1.default {
    constructor(client, address = "") {
        super(client, address);
        this.address = address;
    }
    /**
     * Gets the schema for the key in schemadb
     * @param key
     * @param address
     * @returns
     */
    async getSchemaFromVersion(adoVersion, subSchema = 'default') {
        const [adoType, version] = adoVersion.split('@');
        const subPath = subSchema === 'default' ? adoType : subSchema;
        const schema = await axios_1.default.get(`${ADOSchemaAPI.SCHEMA_BASE_URL}/raw/${adoType}/${version}/${subPath}`).then(res => res.data);
        return {
            schema,
            adoVersion: adoVersion
        };
    }
    /**
     * Gets the schema for the codeId
     * @param key
     * @param address
     * @returns
     */
    async getSchemaFromCodeId(codeId, subSchema = 'default', fallbackType) {
        let schema = await axios_1.default.get(`${ADOSchemaAPI.SCHEMA_BASE_URL}/raw/code_id/${codeId}/${await this.client.chainClient?.queryClient?.getChainId()}/${subSchema}`).then(res => res.data).catch(() => undefined);
        if (!schema) {
            schema = await this.client.os.adoDB?.getAdoType(codeId).then(adoVersion => this.getSchemaFromVersion(adoVersion, subSchema)).then(data => data.schema).catch(() => undefined);
        }
        // If we still don't have schema, try to get ado type from ado type query
        if (!schema && fallbackType) {
            schema = await this.getSchemaFromVersion(fallbackType, subSchema).then(data => data.schema).catch(() => undefined);
        }
        if (!schema)
            throw new Error("Schema not found!");
        return {
            schema: schema,
            codeId,
        };
    }
    /**
  * Gets the sub schema, like receive schema, from the codeId. Similar to getSchemaFromCodeId
  * @param key
  * @param address
  * @returns
  */
    async getSubSchemaFromCodeId(codeId, subKey) {
        return this.getSchemaFromCodeId(codeId, subKey);
    }
}
ADOSchemaAPI.SCHEMA_BASE_URL = 'https://api.andromedaprotocol.io/v1/schema';
exports.default = ADOSchemaAPI;
