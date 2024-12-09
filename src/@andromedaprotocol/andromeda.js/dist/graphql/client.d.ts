import { RequestDocument } from "graphql-request";
import { getSdk } from "@andromedaprotocol/gql/dist/__generated/node";
/**
 * Queries the GraphQL server
 * @param document The query document
 * @param variables The variables for the query
 * @returns
 * @deprecated
 */
export declare function query<Input, Output>(document: RequestDocument, variables?: Input): Promise<Output>;
/**
 * Sets the GQL Server URI
 * @param newUri The new GQL Server URI
 * @deprecated
 */
export declare function setGQLUri(newUri: string): void;
export declare const querySdk: ReturnType<typeof getSdk>;
/**
 * Sets the GQL Server URI
 * @param newUri The new GQL Server URI
 */
export declare function setGQLSdkUri(newUri: string): void;
