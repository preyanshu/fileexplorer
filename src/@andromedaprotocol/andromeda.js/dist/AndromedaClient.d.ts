import { InstantiateOptions, SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate";
import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { ADOAPI } from "./api";
import type { Coin, EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import OperatingSystemAPI from "./api/OperatingSystemAPI";
import type { ChainClient } from "./clients";
import type { Fee, Msg } from "./types";
import { OfflineDirectSigner } from "@injectivelabs/sdk-ts/dist/cjs/core/accounts/signers/types/proto-signer";
import ADOSchemaAPI from "./api/ADOSchemaAPI";
/**
 * A helper class for interacting with the Andromeda ecosystem
 */
export default class AndromedaClient {
    chainClient?: ChainClient;
    /**
     * Instantiate all provided APIs
     */
    ado: ADOAPI;
    schema: ADOSchemaAPI;
    os: OperatingSystemAPI;
    /**
     * A pre-message hook to check that the client is connected and functioning
     * @param signed Whether the message is signed
     */
    private preMessage;
    /**
     * Connects to a new chain by endpoint
     * @param endpoint The endpoint of the chain to connect to
     * @param signer The signer used to sign messages
     * @param options Any additional client options (**Only for CosmosClients**)
     */
    connect(endpoint: string, kernelAddress: string, addressPrefix: string, signer?: OfflineSigner | OfflineDirectSigner, options?: SigningCosmWasmClientOptions): Promise<void>;
    /**
     * Assigns key addresses to the provided APIs
     * @param kernelAddress
     * @returns
     */
    private assignKeyAddresses;
    /**
     * Disconnects the assigned clients
     */
    disconnect(): void;
    /**
     * Whether the client is currently connected
     */
    get isConnected(): boolean;
    /**
     * Wrapper function for CosmWasm sign and broadcast
     * @param messages
     * @param fee
     * @param memo
     * @returns
     */
    signAndBroadcast(messages: EncodeObject[], fee: Fee, memo?: string): Promise<DeliverTxResponse>;
    /**
     * Wrapper function for CosmWasm execute
     * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#signAndBroadcast
     * @param contractAddress
     * @param msg
     * @param fee
     * @param memo
     * @returns
     */
    execute(contractAddress: string, msg: Msg, fee?: Fee, memo?: string, funds?: readonly Coin[]): Promise<import("@cosmjs/cosmwasm-stargate").ExecuteResult>;
    /**
     *  Wrapper function for CosmWasm upload
     * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#upload
     * @param code
     * @param fee
     * @param memo
     * @returns
     */
    upload(code: Uint8Array, fee?: Fee, memo?: string): Promise<import("@cosmjs/cosmwasm-stargate").UploadResult>;
    /**
     * Wrapper function for CosmWasm instantiate
     * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#instantiate
     * @param codeId
     * @param msg
     * @param label
     * @param fee
     * @param options
     * @returns
     */
    instantiate(codeId: number, msg: Msg, label: string, fee?: Fee, options?: InstantiateOptions): Promise<import("@cosmjs/cosmwasm-stargate").InstantiateResult>;
    /**
     * Wrapper function for CosmWasm query
     * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#queryContractSmart
     * @param address
     * @param query
     * @returns
     */
    queryContract<T = any>(address: string, query: Msg): Promise<T>;
    /**
     * Wrapper function for CosmWasm migrate
     * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#migrate
     * @param contractAddress
     * @param codeId
     * @param msg
     * @param fee
     * @param memo
     * @returns
     */
    migrate(contractAddress: string, codeId: number, msg: Msg, fee?: Fee, memo?: string): Promise<import("@cosmjs/cosmwasm-stargate").MigrateResult>;
    /**
     * Estimates the gas cost of sending an execute transaction
     * @param address
     * @param msg
     * @param funds
     * @param memo
     * @returns A gas fee estimation
     */
    simulateExecute(address: string, msg: Msg, funds: Coin[], fee?: StdFee, memo?: string): Promise<number | undefined>;
    /**
     * Estimates the fee cost of sending an execute transaction
     * @param address
     * @param msg
     * @param funds
     * @param memo
     * @returns A fee estimation
     */
    estimateExecuteFee(address: string, msg: Msg, funds: Coin[], fee?: StdFee, memo?: string): Promise<StdFee>;
    /**
     * Estimates the gas cost of sending an instantiate transaction
     * @param codeId
     * @param msg
     * @returns A gas fee estimation
     */
    simulateInstantiate(codeId: number, msg: Msg, label: string, fee?: StdFee, memo?: string): Promise<number | undefined>;
    /**
     * Estimates the fee cost of sending an instantiate transaction
     * @param codeId
     * @param msg
     * @param label
     * @returns A fee estimation
     */
    estimateInstantiationFee(codeId: number, msg: Msg, label: string, fee?: StdFee, memo?: string): Promise<StdFee>;
    /**
     * Estimates the gas cost of sending an upload transaction
     * @param wasmByteCode
     * @returns A gas fee estimation
     */
    simulateUpload(wasmByteCode: Uint8Array): Promise<number | undefined>;
    /**
     * Estimates the fee cost of sending an upload transaction
     * @param wasmByteCode
     * @returns A fee estimate
     */
    estimateUploadFee(wasmByteCode: Uint8Array): Promise<StdFee>;
    /**
     * Estimates the gas cost of sending a migrate transaction
     * @param address
     * @param codeId
     * @param msg
     * @returns A gas fee estimation
     */
    simulateMigrate(address: string, codeId: number, msg: Msg, fee?: StdFee): Promise<number | undefined>;
    /**
     * Estimates the fee cost of sending a migrate transaction
     * @param address
     * @param codeId
     * @param msg
     * @returns A fee estimate
     */
    estimateMigrateFee(address: string, codeId: number, msg: Msg): Promise<StdFee>;
    /**
     * Simulates provided messages returning an estimated gas cost
     * @param msgs
     * @param memo
     * @returns
     */
    simulateMsgs(msgs: readonly EncodeObject[], fee?: StdFee, memo?: string): Promise<number | undefined>;
    /**
     * Simulates provided messages and calculates an estimated fee
     * @param msgs
     * @param memo
     * @returns
     */
    estimateFee(msgs: readonly EncodeObject[], fee?: StdFee, memo?: string): Promise<StdFee>;
    /**
     * Wrapper around cosmjs calculateFee using client's set gasPrice. Errors if no gas price provided.
     * @param gas
     * @returns
     */
    calculcateFee(gas: number): StdFee;
    /**
     * Wrapper around the cosm.js client's "getTx" function
     * @param hash The Tx Hash
     * @returns
     */
    getTx(hash: string): Promise<import("@cosmjs/cosmwasm-stargate").IndexedTx | null>;
    /**
     * Wrapper around the cosm.js client's "sendTokens" function
     * @param receivingAddress
     * @param amount
     * @param fee
     * @param memo
     * @returns
     */
    sendTokens(receivingAddress: string, amount: readonly Coin[], fee?: Fee, memo?: string): Promise<DeliverTxResponse | undefined>;
    /**
     * Gets the balance for a given address and denom. Defaults to the signing wallet address if none provided.
     * @param denom
     * @param address
     * @returns
     */
    getBalance(denom: string, address?: string): Promise<Coin>;
    /**
     * Gets all send transactions for a given address
     * @param addr
     * @returns
     */
    getSentTxsByAddress(addr: string): Promise<import("@cosmjs/cosmwasm-stargate").IndexedTx[]>;
    /**
     * Gets all transactions sent to a contract
     * @param addr
     * @returns
     */
    getTxsByContract(addr: string): Promise<import("@cosmjs/cosmwasm-stargate").IndexedTx[]>;
    /**
     * Gets all bank messages sent to or from an address
     * @param addr
     * @returns
     */
    getBankTxsByAddress(addr: string): Promise<import("@cosmjs/cosmwasm-stargate").IndexedTx[]>;
    /**
     * Queries all possible transactions for a given address
     * @param addr
     * @returns
     */
    getAllTxsByAddress(addr: string): Promise<import("@cosmjs/cosmwasm-stargate").IndexedTx[]>;
}
