import { SigningArchwayClient } from "@archwayhq/arch3.js";
import BaseChainClient from "./BaseChainClient";
import { CosmWasmClient, ExecuteResult, InstantiateOptions, InstantiateResult, MigrateResult, SigningCosmWasmClientOptions, UploadResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { DeliverTxResponse, GasPrice, StdFee } from "@cosmjs/stargate";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Fee, Msg } from "..";
import ChainClient from "./ChainClient";
export default class ArchwayClient extends BaseChainClient {
    signingClient?: SigningArchwayClient;
    queryClient?: CosmWasmClient;
    gasPrice?: GasPrice;
    connect(endpoint: string, signer?: OfflineSigner, options?: SigningCosmWasmClientOptions): Promise<void>;
    disconnect(): Promise<void>;
    sign(messages: EncodeObject[], fee: StdFee, memo?: string): Promise<TxRaw>;
    broadcast(tx: TxRaw): ReturnType<ChainClient["broadcast"]>;
    signAndBroadcast(messages: EncodeObject[], fee?: Fee, memo?: string | undefined): Promise<DeliverTxResponse>;
    simulateMulti(messages: EncodeObject[], _fee?: Fee, memo?: string | undefined): Promise<number>;
    simulate(message: EncodeObject, _fee?: Fee | undefined, memo?: string | undefined): Promise<number>;
    execute(contractAddress: string, msg: Msg, _fee?: Fee | undefined, memo?: string | undefined, funds?: readonly Coin[] | undefined): Promise<ExecuteResult>;
    simulateExecute(address: string, msg: Msg, funds: Coin[], _fee?: Fee, memo?: string | undefined): Promise<number>;
    upload(code: Uint8Array, fee?: Fee, memo?: string | undefined): Promise<UploadResult>;
    simulateUpload(code: Uint8Array, _fee?: Fee | undefined, memo?: string | undefined): Promise<number | undefined>;
    instantiate(codeId: number, msg: Msg, label: string, fee?: Fee, options?: InstantiateOptions): Promise<InstantiateResult>;
    simulateInstantiate(codeId: number, msg: Msg, label: string, fee?: StdFee, options?: InstantiateOptions): Promise<number | undefined>;
    migrate(contractAddress: string, codeId: number, msg: Msg, fee?: Fee, memo?: string | undefined): Promise<MigrateResult>;
    simulateMigrate(contractAddress: string, codeId: number, msg: Msg, fee?: Fee | undefined, memo?: string | undefined): Promise<number | undefined>;
    sendTokens(receivingAddress: string, amount: readonly Coin[], fee?: Fee, memo?: string | undefined): Promise<any>;
}
