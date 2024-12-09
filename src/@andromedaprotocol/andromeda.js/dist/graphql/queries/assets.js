"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryAssets = void 0;
const client_1 = require("../client");
/**
 * Queries all assets owned by a wallet address
 * @param walletAddress
 * @param limit
 * @param offset
 * @returns
 */
async function queryAssets(walletAddress, limit, offset, orderBy, search, adoType) {
    const resp = await client_1.querySdk.ASSETS({
        walletAddress,
        limit,
        offset,
        orderBy,
        search,
        adoType
    });
    return resp.accounts.assets;
}
exports.queryAssets = queryAssets;
