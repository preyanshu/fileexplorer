"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGQLSdkUri = exports.querySdk = exports.setGQLUri = exports.query = void 0;
const graphql_request_1 = require("graphql-request");
const node_1 = require("@/@andromedaprotocol/gql/dist/__generated/node");
/**
 * The URI to send the GQL queries to
 */
let uri = process.env.GQL_URL ?? "https://gql.testnet.andromedaprotocol.io/graphql";
/**
 * Queries the GraphQL server
 * @param document The query document
 * @param variables The variables for the query
 * @returns
 * @deprecated
 */
async function query(document, variables) {
    return await (0, graphql_request_1.request)(uri, document, variables ?? {});
}
exports.query = query;
/**
 * Sets the GQL Server URI
 * @param newUri The new GQL Server URI
 * @deprecated
 */
function setGQLUri(newUri) {
    uri = newUri;
}
exports.setGQLUri = setGQLUri;
/**
 * The URI to send the GQL queries to
*/
const URI = process.env.GQL_URL ?? "https://gql.testnet.andromedaprotocol.io/graphql";
const gqlClient = new graphql_request_1.GraphQLClient(URI);
exports.querySdk = (0, node_1.getSdk)(gqlClient);
/**
 * Sets the GQL Server URI
 * @param newUri The new GQL Server URI
 */
function setGQLSdkUri(newUri) {
    gqlClient.setEndpoint(newUri);
}
exports.setGQLSdkUri = setGQLSdkUri;
