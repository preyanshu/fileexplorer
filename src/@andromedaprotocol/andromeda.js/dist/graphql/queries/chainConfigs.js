"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryAllStoredChainConfigs = exports.queryAllChainConfigs = exports.queryChainConfig = void 0;
const client_1 = require("../client");
/**
 * Queries a chain config by chain ID or config name
 * @param identifier
 * @returns
 */
async function queryChainConfig(identifier) {
    const resp = await client_1.querySdk.CHAIN_CONFIG({
        'identifier': identifier
    });
    return resp.chainConfigs.config;
}
exports.queryChainConfig = queryChainConfig;
/**
 * Queries all stored chain configs
 * @returns
 */
async function queryAllChainConfigs() {
    const resp = await client_1.querySdk.ALL_CHAIN_CONFIG();
    return resp.chainConfigs.allConfigs;
}
exports.queryAllChainConfigs = queryAllChainConfigs;
/**
 * Queries all stored chain configs
 * @returns
 */
async function queryAllStoredChainConfigs() {
    const resp = await client_1.querySdk.ALL_STORED_CHAIN_CONFIG();
    return resp.chainConfigs.allStoredConfigs;
}
exports.queryAllStoredChainConfigs = queryAllStoredChainConfigs;
