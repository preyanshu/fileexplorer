import { CosmWasmClient, InstantiateOptions, InstantiateResult, MigrateResult, SigningCosmWasmClientOptions, UploadResult } from "@cosmjs/cosmwasm-stargate";
import { Fee, Msg } from '..';
import { Coin, EncodeObject, OfflineDirectSigner } from "@cosmjs/proto-signing";
import { DeliverTxResponse, GasPrice, StdFee } from "@cosmjs/stargate";
import BaseChainClient from "./BaseChainClient";
import ChainClient from "./ChainClient";
import { SigningStargateClient } from "@injectivelabs/sdk-ts/dist/cjs/core/stargate/SigningStargateClient";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Log } from "@cosmjs/stargate/build/logs";
export default class InjectiveClient extends BaseChainClient implements ChainClient {
    signingClient?: SigningStargateClient;
    queryClient?: CosmWasmClient;
    gasPrice?: GasPrice;
    private directSigner?;
    protected preMessage(signed?: boolean): void;
    connect(endpoint: string, signer?: OfflineDirectSigner, options?: SigningCosmWasmClientOptions): Promise<void>;
    disconnect(): Promise<void>;
    sign(messages: EncodeObject[], fee?: StdFee, memo?: string): Promise<TxRaw>;
    broadcast(tx: TxRaw): Promise<DeliverTxResponse>;
    signAndBroadcast(messages: EncodeObject[], fee?: StdFee | "auto", memo?: string): Promise<DeliverTxResponse & {
        logs: Log[];
    }>;
    simulateMulti(messages: EncodeObject[], _fee?: Fee, memo?: string | undefined): Promise<number>;
    simulate(message: EncodeObject, _fee?: Fee | undefined, memo?: string | undefined): Promise<number>;
    execute(contractAddress: string, msg: Msg, fee?: StdFee | undefined, memo?: string | undefined, funds?: readonly Coin[] | undefined): Promise<DeliverTxResponse & {
        logs: any;
    }>;
    simulateExecute(address: string, msg: Msg, funds: Coin[], _fee?: Fee, memo?: string | undefined): Promise<number>;
    upload(code: Uint8Array, fee?: StdFee | "auto", memo?: string | undefined): Promise<UploadResult>;
    simulateUpload(code: Uint8Array, _fee?: Fee | undefined, memo?: string | undefined): Promise<number | undefined>;
    instantiate(codeId: number, msg: Msg, label: string, fee?: StdFee | "auto", options?: InstantiateOptions): Promise<InstantiateResult>;
    simulateInstantiate(codeId: number, msg: Msg, label: string, fee?: StdFee, options?: InstantiateOptions): Promise<number | undefined>;
    migrate(contractAddress: string, codeId: number, msg: Msg, fee?: StdFee | "auto", memo?: string | undefined): Promise<MigrateResult>;
    simulateMigrate(contractAddress: string, codeId: number, msg: Msg, fee?: Fee | undefined, memo?: string | undefined): Promise<number | undefined>;
    sendTokens(receivingAddress: string, amount: readonly Coin[], fee?: Fee, memo?: string | undefined): Promise<any>;
}
