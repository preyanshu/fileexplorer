"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodegenGeneratedAdoAuctionLatestauctionstateDocument = exports.CodegenGeneratedAdoAuctionBidsDocument = exports.CodegenGeneratedAdoAuctionBidsBidsDocument = exports.CodegenGeneratedAdoAuctionAuctionstateDocument = exports.CodegenGeneratedAdoAuctionAuctioninfosforaddressDocument = exports.CodegenGeneratedAdoAuctionAuctionidsDocument = exports.CodegenGeneratedAdoAuctionAndrDocument = exports.CodegenGeneratedAdoAppDocument = exports.CodegenGeneratedAdoAppGetaddressDocument = exports.CodegenGeneratedAdoAppConfigDocument = exports.CodegenGeneratedAdoAppComponentsDocument = exports.CodegenGeneratedAdoAppComponentexistsDocument = exports.CodegenGeneratedAdoAppAndrDocument = exports.CodegenGeneratedAdoAppAddressesDocument = exports.CodegenGeneratedAdoAdosmartDocument = exports.CodegenGeneratedAdoAdoDocument = exports.CodegenGeneratedAdoAdoAndrDocument = exports.CodegenGeneratedAdoAddressListDocument = exports.CodegenGeneratedAdoAddressListIncludesaddressDocument = exports.CodegenGeneratedAdoAddressListAndrDocument = exports.AllKeplrConfigDocument = exports.KeplrConfigDocument = exports.AllStoredChainConfigDocument = exports.AllChainConfigDocument = exports.ChainConfigDocument = exports.Cw721InfoDocument = exports.Cw20Document = exports.Cw20TokenInfoDocument = exports.CrowdfundStateDocument = exports.CrowdfundConfigDocument = exports.CrowdfundIsTokenAvailableDocument = exports.CrowdfundAvailableTokensDocument = exports.MiniBaseAdoDocument = exports.BaseAdoDocument = exports.AssetsDocument = exports.AppConfigAndComponentsDocument = exports.AppComponentsDocument = exports.AppConfigDocument = exports.AddressListContainsAddressDocument = exports.TxInfoFragmentDoc = exports.ChainConfigFragmentDoc = exports.KeplrConfigFragmentDoc = exports.CurrencyFragmentDoc = exports.Bech32configFragmentDoc = exports.AppComponentFragmentDoc = exports.ComponentFragmentDoc = exports.AndrFragmentFragmentDoc = exports.IAndrStrategyType = exports.IAndrOrderBy = exports.IAdoType = void 0;
exports.CodegenGeneratedAdoCw721NftinfoDocument = exports.CodegenGeneratedAdoCw721NftinfoMetadataDocument = exports.CodegenGeneratedAdoCw721NftinfoMetadataAttributesDocument = exports.CodegenGeneratedAdoCw721NftinfoExtensionDocument = exports.CodegenGeneratedAdoCw721IsarchivedDocument = exports.CodegenGeneratedAdoCw721ContractinfoDocument = exports.CodegenGeneratedAdoCw721ApprovalsDocument = exports.CodegenGeneratedAdoCw721ApprovalDocument = exports.CodegenGeneratedAdoCw721AndrDocument = exports.CodegenGeneratedAdoCw721AlltokensDocument = exports.CodegenGeneratedAdoCw721AlloperatorsDocument = exports.CodegenGeneratedAdoCw721AllnftinfoDocument = exports.CodegenGeneratedAdoCw721AllnftinfoInfoDocument = exports.CodegenGeneratedAdoCw721AllnftinfoInfoMetadataDocument = exports.CodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesDocument = exports.CodegenGeneratedAdoCw721AllnftinfoInfoExtensionDocument = exports.CodegenGeneratedAdoCw721AllnftinfoAccessDocument = exports.CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsDocument = exports.CodegenGeneratedAdoCw20StakingDocument = exports.CodegenGeneratedAdoCw20StakingStateDocument = exports.CodegenGeneratedAdoCw20StakingStakersDocument = exports.CodegenGeneratedAdoCw20StakingStakerDocument = exports.CodegenGeneratedAdoCw20StakingConfigDocument = exports.CodegenGeneratedAdoCw20StakingConfigStakingTokenDocument = exports.CodegenGeneratedAdoCw20StakingAndrDocument = exports.CodegenGeneratedAdoCw20ExchangeDocument = exports.CodegenGeneratedAdoCw20ExchangeSaleassetsDocument = exports.CodegenGeneratedAdoCw20ExchangeSaleDocument = exports.CodegenGeneratedAdoCw20ExchangeAndrDocument = exports.CodegenGeneratedAdoCw20Document = exports.CodegenGeneratedAdoCw20TokeninfoDocument = exports.CodegenGeneratedAdoCw20MinterDocument = exports.CodegenGeneratedAdoCw20MarketinginfoDocument = exports.CodegenGeneratedAdoCw20DownloadlogoDocument = exports.CodegenGeneratedAdoCw20BalanceDocument = exports.CodegenGeneratedAdoCw20AndrDocument = exports.CodegenGeneratedAdoCw20AllowanceDocument = exports.CodegenGeneratedAdoCw20AllspenderallowancesDocument = exports.CodegenGeneratedAdoCw20AllallowancesDocument = exports.CodegenGeneratedAdoCw20AllaccountsDocument = exports.CodegenGeneratedAdoCrowdfundDocument = exports.CodegenGeneratedAdoCrowdfundStateDocument = exports.CodegenGeneratedAdoCrowdfundStateRecipientDocument = exports.CodegenGeneratedAdoCrowdfundStatePriceDocument = exports.CodegenGeneratedAdoCrowdfundIstokenavailableDocument = exports.CodegenGeneratedAdoCrowdfundConfigDocument = exports.CodegenGeneratedAdoCrowdfundAndrDocument = exports.CodegenGeneratedAdoChainidDocument = exports.CodegenGeneratedAdoAuctionDocument = exports.CodegenGeneratedAdoAuctionSummaryfieldsDocument = void 0;
exports.CodegenGeneratedAdoSplitterConfigRecipientsDocument = exports.CodegenGeneratedAdoSplitterAndrDocument = exports.CodegenGeneratedAdoRatesDocument = exports.CodegenGeneratedAdoRatesPaymentsDocument = exports.CodegenGeneratedAdoRatesPaymentsRateDocument = exports.CodegenGeneratedAdoRatesPaymentsRatePercentDocument = exports.CodegenGeneratedAdoRatesPaymentsRateFlatDocument = exports.CodegenGeneratedAdoRatesPaymentsRateExternalDocument = exports.CodegenGeneratedAdoRatesAndrDocument = exports.CodegenGeneratedAdoRateLimitingWithdrawalsDocument = exports.CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsDocument = exports.CodegenGeneratedAdoRateLimitingWithdrawalsAndrDocument = exports.CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsDocument = exports.CodegenGeneratedAdoPrimitiveDocument = exports.CodegenGeneratedAdoPrimitiveGetvalueDocument = exports.CodegenGeneratedAdoPrimitiveAndrDocument = exports.CodegenGeneratedAdoMerkleAirdropDocument = exports.CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument = exports.CodegenGeneratedAdoMerkleAirdropMerklerootDocument = exports.CodegenGeneratedAdoMerkleAirdropIsclaimedDocument = exports.CodegenGeneratedAdoMerkleAirdropConfigDocument = exports.CodegenGeneratedAdoMerkleAirdropAndrDocument = exports.CodegenGeneratedAdoMarketplaceDocument = exports.CodegenGeneratedAdoMarketplaceSalestateDocument = exports.CodegenGeneratedAdoMarketplaceSaleinfosforaddressDocument = exports.CodegenGeneratedAdoMarketplaceSaleidsDocument = exports.CodegenGeneratedAdoMarketplaceLatestsalestateDocument = exports.CodegenGeneratedAdoMarketplaceAndrDocument = exports.CodegenGeneratedAdoLockdropDocument = exports.CodegenGeneratedAdoLockdropWithdrawalpercentallowedDocument = exports.CodegenGeneratedAdoLockdropUserinfoDocument = exports.CodegenGeneratedAdoLockdropStateDocument = exports.CodegenGeneratedAdoLockdropConfigDocument = exports.CodegenGeneratedAdoLockdropAndrDocument = exports.CodegenGeneratedAdoFactoryDocument = exports.CodegenGeneratedAdoFactoryCodeIdDocument = exports.CodegenGeneratedAdoFactoryAndrDocument = exports.CodegenGeneratedAdoCw721Document = exports.CodegenGeneratedAdoCw721TransferagreementDocument = exports.CodegenGeneratedAdoCw721TransferagreementAgreementDocument = exports.CodegenGeneratedAdoCw721TransferagreementAgreementAmountDocument = exports.CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawDocument = exports.CodegenGeneratedAdoCw721TokensDocument = exports.CodegenGeneratedAdoCw721SearchtokensDocument = exports.CodegenGeneratedAdoCw721SearchtokensMetadataDocument = exports.CodegenGeneratedAdoCw721SearchtokensMetadataAttributesDocument = exports.CodegenGeneratedAdoCw721SearchtokensExtensionDocument = exports.CodegenGeneratedAdoCw721OwnerofDocument = exports.CodegenGeneratedAdoCw721OwnerofApprovalsDocument = exports.CodegenGeneratedAdoCw721NumownersDocument = void 0;
exports.CodegenGeneratedKeplrconfigsConfigBip44Document = exports.CodegenGeneratedKeplrconfigsConfigBech32ConfigDocument = exports.CodegenGeneratedKeplrconfigsAllconfigsDocument = exports.CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyDocument = exports.CodegenGeneratedKeplrconfigsAllconfigsGaspricestepDocument = exports.CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesDocument = exports.CodegenGeneratedKeplrconfigsAllconfigsCurrenciesDocument = exports.CodegenGeneratedKeplrconfigsAllconfigsBip44Document = exports.CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigDocument = exports.CodegenGeneratedChainconfigsDocument = exports.CodegenGeneratedChainconfigsConfigDocument = exports.CodegenGeneratedChainconfigsConfigIconurlsDocument = exports.CodegenGeneratedChainconfigsAllstoredconfigsDocument = exports.CodegenGeneratedChainconfigsAllstoredconfigsIconurlsDocument = exports.CodegenGeneratedChainconfigsAllconfigsDocument = exports.CodegenGeneratedChainconfigsAllconfigsIconurlsDocument = exports.CodegenGeneratedAccountsDocument = exports.CodegenGeneratedAccountsAssetsDocument = exports.CodegenGeneratedAccountsAssetsComponentsDocument = exports.CodegenGeneratedAdopDocument = exports.CodegenGeneratedAdopPackageDocument = exports.CodegenGeneratedAdopPackageSchemasDocument = exports.CodegenGeneratedAdopPackageSchemasReceiveDocument = exports.CodegenGeneratedAdoDocument = exports.CodegenGeneratedAdoWeightedDistributionSplitterDocument = exports.CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightDocument = exports.CodegenGeneratedAdoWeightedDistributionSplitterConfigDocument = exports.CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsDocument = exports.CodegenGeneratedAdoWeightedDistributionSplitterAndrDocument = exports.CodegenGeneratedAdoVestingDocument = exports.CodegenGeneratedAdoVestingConfigDocument = exports.CodegenGeneratedAdoVestingBatchesDocument = exports.CodegenGeneratedAdoVestingBatchDocument = exports.CodegenGeneratedAdoVestingAndrDocument = exports.CodegenGeneratedAdoVaultDocument = exports.CodegenGeneratedAdoVaultStrategyaddressDocument = exports.CodegenGeneratedAdoVaultBalanceDocument = exports.CodegenGeneratedAdoVaultAndrDocument = exports.CodegenGeneratedAdoTimelockDocument = exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientDocument = exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionDocument = exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsDocument = exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsDocument = exports.CodegenGeneratedAdoTimelockGetlockedfundsDocument = exports.CodegenGeneratedAdoTimelockGetlockedfundsConditionDocument = exports.CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsDocument = exports.CodegenGeneratedAdoTimelockGetlockedfundsCoinsDocument = exports.CodegenGeneratedAdoTimelockAndrDocument = exports.CodegenGeneratedAdoSplitterDocument = exports.CodegenGeneratedAdoSplitterConfigDocument = void 0;
exports.CodegenGeneratedTxBytagEventsDocument = exports.CodegenGeneratedTxBytagEventsAttributesDocument = exports.CodegenGeneratedTxByrawstringDocument = exports.CodegenGeneratedTxByrawstringTxlogDocument = exports.CodegenGeneratedTxByrawstringTxlogEventsDocument = exports.CodegenGeneratedTxByrawstringTxlogEventsAttributesDocument = exports.CodegenGeneratedTxByrawstringMsgresponsesDocument = exports.CodegenGeneratedTxByrawstringEventsDocument = exports.CodegenGeneratedTxByrawstringEventsAttributesDocument = exports.CodegenGeneratedTxByownerDocument = exports.CodegenGeneratedTxByownerTxlogDocument = exports.CodegenGeneratedTxByownerTxlogEventsDocument = exports.CodegenGeneratedTxByownerTxlogEventsAttributesDocument = exports.CodegenGeneratedTxByownerMsgresponsesDocument = exports.CodegenGeneratedTxByownerEventsDocument = exports.CodegenGeneratedTxByownerEventsAttributesDocument = exports.CodegenGeneratedTxByheightDocument = exports.CodegenGeneratedTxByheightTxlogDocument = exports.CodegenGeneratedTxByheightTxlogEventsDocument = exports.CodegenGeneratedTxByheightTxlogEventsAttributesDocument = exports.CodegenGeneratedTxByheightMsgresponsesDocument = exports.CodegenGeneratedTxByheightEventsDocument = exports.CodegenGeneratedTxByheightEventsAttributesDocument = exports.CodegenGeneratedTxByhashDocument = exports.CodegenGeneratedTxByhashTxlogDocument = exports.CodegenGeneratedTxByhashTxlogEventsDocument = exports.CodegenGeneratedTxByhashTxlogEventsAttributesDocument = exports.CodegenGeneratedTxByhashMsgresponsesDocument = exports.CodegenGeneratedTxByhashEventsDocument = exports.CodegenGeneratedTxByhashEventsAttributesDocument = exports.CodegenGeneratedTxBycontractDocument = exports.CodegenGeneratedTxBycontractTxlogDocument = exports.CodegenGeneratedTxBycontractTxlogEventsDocument = exports.CodegenGeneratedTxBycontractTxlogEventsAttributesDocument = exports.CodegenGeneratedTxBycontractMsgresponsesDocument = exports.CodegenGeneratedTxBycontractEventsDocument = exports.CodegenGeneratedTxBycontractEventsAttributesDocument = exports.CodegenGeneratedTxByaccountDocument = exports.CodegenGeneratedTxByaccountTxlogDocument = exports.CodegenGeneratedTxByaccountTxlogEventsDocument = exports.CodegenGeneratedTxByaccountTxlogEventsAttributesDocument = exports.CodegenGeneratedTxByaccountMsgresponsesDocument = exports.CodegenGeneratedTxByaccountEventsDocument = exports.CodegenGeneratedTxByaccountEventsAttributesDocument = exports.CodegenGeneratedKeplrconfigsDocument = exports.CodegenGeneratedKeplrconfigsConfigDocument = exports.CodegenGeneratedKeplrconfigsConfigStakecurrencyDocument = exports.CodegenGeneratedKeplrconfigsConfigGaspricestepDocument = exports.CodegenGeneratedKeplrconfigsConfigFeecurrenciesDocument = exports.CodegenGeneratedKeplrconfigsConfigCurrenciesDocument = void 0;
exports.getSdk = exports.TxByHashDocument = exports.TxByHeightDocument = exports.TxByContractDocument = exports.TxByAccountDocument = exports.CodegenGeneratedAdoownerupdatedDocument = exports.CodegenGeneratedAdoaddedDocument = exports.CodegenGeneratedTxDocument = exports.CodegenGeneratedTxBytagDocument = exports.CodegenGeneratedTxBytagTxlogDocument = exports.CodegenGeneratedTxBytagTxlogEventsDocument = exports.CodegenGeneratedTxBytagTxlogEventsAttributesDocument = exports.CodegenGeneratedTxBytagMsgresponsesDocument = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var IAdoType;
(function (IAdoType) {
    IAdoType["ADDRESSLIST"] = "AddressList";
    IAdoType["ADO"] = "Ado";
    IAdoType["APP"] = "App";
    IAdoType["AUCTION"] = "Auction";
    IAdoType["CW20"] = "CW20";
    IAdoType["CW20EXCHANGE"] = "CW20Exchange";
    IAdoType["CW20STAKING"] = "CW20Staking";
    IAdoType["CW721"] = "CW721";
    IAdoType["CW721BIDS"] = "CW721Bids";
    IAdoType["CW721TIMELOCK"] = "CW721Timelock";
    IAdoType["CROWDFUND"] = "Crowdfund";
    IAdoType["FACTORY"] = "Factory";
    IAdoType["GUMBALL"] = "Gumball";
    IAdoType["LOCKDROP"] = "Lockdrop";
    IAdoType["MARKETPLACE"] = "Marketplace";
    IAdoType["MERKLEAIRDROP"] = "MerkleAirdrop";
    IAdoType["NFTSTAKING"] = "NftStaking";
    IAdoType["PRIMITIVE"] = "Primitive";
    IAdoType["RATELIMITINGWITHDRAWALS"] = "RateLimitingWithdrawals";
    IAdoType["RATES"] = "Rates";
    IAdoType["RECEIPT"] = "Receipt";
    IAdoType["SPLITTER"] = "Splitter";
    IAdoType["TIMELOCK"] = "Timelock";
    IAdoType["UNKNOWN"] = "Unknown";
    IAdoType["VAULT"] = "Vault";
    IAdoType["VESTING"] = "Vesting";
    IAdoType["WEIGHTEDDISTRIBUTIONSPLITTER"] = "WeightedDistributionSplitter";
    IAdoType["WEIGHTEDSPLITTER"] = "WeightedSplitter";
    IAdoType["WRAPPEDCW721"] = "WrappedCW721";
})(IAdoType || (exports.IAdoType = IAdoType = {}));
var IAndrOrderBy;
(function (IAndrOrderBy) {
    IAndrOrderBy["ASC"] = "Asc";
    IAndrOrderBy["DESC"] = "Desc";
})(IAndrOrderBy || (exports.IAndrOrderBy = IAndrOrderBy = {}));
var IAndrStrategyType;
(function (IAndrStrategyType) {
    IAndrStrategyType["ANCHOR"] = "Anchor";
})(IAndrStrategyType || (exports.IAndrStrategyType = IAndrStrategyType = {}));
exports.AndrFragmentFragmentDoc = (0, graphql_tag_1.default) `
    fragment andrFragment on AndrQuery {
  address
  admin
  appContract
  blockHeightUponCreation
  codeId
  creator
  ibcPortId
  kernelAddress
  label
  originalPublisher
  owner
  ownershipRequest
  permissionedActions
  type
  version
}
    `;
exports.ComponentFragmentDoc = (0, graphql_tag_1.default) `
    fragment component on Component {
  address
  ado_type
  instantiate_msg
  name
}
    `;
exports.AppComponentFragmentDoc = (0, graphql_tag_1.default) `
    fragment appComponent on AppComponent {
  address
  ado_type
  instantiate_msg
  name
  type
}
    `;
exports.Bech32configFragmentDoc = (0, graphql_tag_1.default) `
    fragment bech32config on Bech32Config {
  bech32PrefixAccPub
  bech32PrefixValPub
  bech32PrefixAccAddr
  bech32PrefixConsPub
  bech32PrefixValAddr
  bech32PrefixConsAddr
}
    `;
exports.CurrencyFragmentDoc = (0, graphql_tag_1.default) `
    fragment currency on Currency {
  coinDenom
  coinGeckoId
  coinDecimals
  coinMinimalDenom
}
    `;
exports.KeplrConfigFragmentDoc = (0, graphql_tag_1.default) `
    fragment keplrConfig on KeplrConfig {
  bip44 {
    coinType
  }
  bech32Config {
    ...bech32config
  }
  chainId
  coinType
  chainName
  currencies {
    ...currency
  }
  feeCurrencies {
    ...currency
  }
  gasPriceStep {
    average
    low
    high
  }
  rpc
  rest
  stakeCurrency {
    ...currency
  }
}
    ${exports.Bech32configFragmentDoc}
${exports.CurrencyFragmentDoc}`;
exports.ChainConfigFragmentDoc = (0, graphql_tag_1.default) `
    fragment chainConfig on ChainConfig {
  addressPrefix
  blockExplorerTxPages
  blockExplorerAddressPages
  chainId
  chainUrl
  chainName
  chainType
  defaultFee
  iconUrls {
    sm
    lg
  }
  kernelAddress
  name
  registryAddress
  enabled
}
    `;
exports.TxInfoFragmentDoc = (0, graphql_tag_1.default) `
    fragment txInfo on TxInfo {
  code
  gasUsed
  gasWanted
  hash
  height
  rawLog
  tx
}
    `;
exports.AddressListContainsAddressDocument = (0, graphql_tag_1.default) `
    query ADDRESS_LIST_CONTAINS_ADDRESS($contractAddress: String!, $address: String!) {
  ADO {
    address_list(address: $contractAddress) {
      includesAddress(address: $address) {
        included
      }
    }
  }
}
    `;
exports.AppConfigDocument = (0, graphql_tag_1.default) `
    query APP_CONFIG($contractAddress: String!) {
  ADO {
    app(address: $contractAddress) {
      address
      config {
        name
        owner
      }
    }
  }
}
    `;
exports.AppComponentsDocument = (0, graphql_tag_1.default) `
    query APP_COMPONENTS($contractAddress: String!) {
  ADO {
    app(address: $contractAddress) {
      address
      components {
        ...appComponent
      }
    }
  }
}
    ${exports.AppComponentFragmentDoc}`;
exports.AppConfigAndComponentsDocument = (0, graphql_tag_1.default) `
    query APP_CONFIG_AND_COMPONENTS($contractAddress: String!) {
  ADO {
    app(address: $contractAddress) {
      address
      config {
        name
        owner
      }
      components {
        ...appComponent
      }
    }
  }
}
    ${exports.AppComponentFragmentDoc}`;
exports.AssetsDocument = (0, graphql_tag_1.default) `
    query ASSETS($walletAddress: String!, $adoType: String, $appContract: String, $instantiateOwner: String, $kernel: String, $limit: Int!, $memo: String, $offset: Int!, $orderBy: AndrOrderBy, $owner: String, $ownershipRequest: String, $search: String) {
  accounts {
    assets(
      adoType: $adoType
      appContract: $appContract
      instantiateOwner: $instantiateOwner
      kernel: $kernel
      limit: $limit
      memo: $memo
      offset: $offset
      orderBy: $orderBy
      owner: $owner
      ownershipRequest: $ownershipRequest
      search: $search
      walletAddress: $walletAddress
    ) {
      address
      adoType
      appContract
      chainId
      disowned
      instantiateHash
      instantiateHeight
      instantiateOwner
      kernel
      lastUpdatedHash
      lastUpdatedHeight
      memo
      minter
      name
      owner
      ownershipRequest
    }
  }
}
    `;
exports.BaseAdoDocument = (0, graphql_tag_1.default) `
    query BASE_ADO($contractAddress: String!) {
  ADO {
    ado(address: $contractAddress) {
      address
      chainId
      andr {
        ...andrFragment
      }
    }
  }
}
    ${exports.AndrFragmentFragmentDoc}`;
exports.MiniBaseAdoDocument = (0, graphql_tag_1.default) `
    query MINI_BASE_ADO($contractAddress: String!) {
  ADO {
    ado(address: $contractAddress) {
      address
      chainId
      andr {
        type
        version
      }
    }
  }
}
    `;
exports.CrowdfundAvailableTokensDocument = (0, graphql_tag_1.default) `
    query CROWDFUND_AVAILABLE_TOKENS($contractAddress: String!) {
  ADO {
    crowdfund(address: $contractAddress) {
      availableTokens
    }
  }
}
    `;
exports.CrowdfundIsTokenAvailableDocument = (0, graphql_tag_1.default) `
    query CROWDFUND_IS_TOKEN_AVAILABLE($contractAddress: String!, $tokenId: String!) {
  ADO {
    crowdfund(address: $contractAddress) {
      isTokenAvailable(tokenId: $tokenId)
    }
  }
}
    `;
exports.CrowdfundConfigDocument = (0, graphql_tag_1.default) `
    query CROWDFUND_CONFIG($contractAddress: String!) {
  ADO {
    crowdfund(address: $contractAddress) {
      address
      config {
        can_mint_after_sale
        token_address
      }
    }
  }
}
    `;
exports.CrowdfundStateDocument = (0, graphql_tag_1.default) `
    query CROWDFUND_STATE($contractAddress: String!) {
  ADO {
    crowdfund(address: $contractAddress) {
      state {
        amount_sold
        amount_to_send
        amount_transferred
        end_time
        max_amount_per_wallet
        min_tokens_sold
        price {
          amount
          denom
        }
        recipient {
          address
          ibc_recovery_address
          msg
        }
      }
    }
  }
}
    `;
exports.Cw20TokenInfoDocument = (0, graphql_tag_1.default) `
    query CW20_TOKEN_INFO($contractAddress: String!) {
  ADO {
    cw20(address: $contractAddress) {
      address
      tokenInfo {
        decimals
        name
        symbol
        total_supply
      }
    }
  }
}
    `;
exports.Cw20Document = (0, graphql_tag_1.default) `
    query CW20($contractAddress: String!) {
  ADO {
    cw20(address: $contractAddress) {
      address
      marketingInfo {
        description
        logo
        marketing
        project
      }
      minter {
        cap
        minter
      }
    }
  }
}
    `;
exports.Cw721InfoDocument = (0, graphql_tag_1.default) `
    query CW721_INFO($contractAddress: String!) {
  ADO {
    cw721(address: $contractAddress) {
      address
      contractInfo {
        name
        symbol
      }
      minter
      numTokens
    }
  }
}
    `;
exports.ChainConfigDocument = (0, graphql_tag_1.default) `
    query CHAIN_CONFIG($identifier: String!) {
  chainConfigs {
    config(identifier: $identifier) {
      ...chainConfig
    }
  }
}
    ${exports.ChainConfigFragmentDoc}`;
exports.AllChainConfigDocument = (0, graphql_tag_1.default) `
    query ALL_CHAIN_CONFIG {
  chainConfigs {
    allConfigs {
      ...chainConfig
    }
  }
}
    ${exports.ChainConfigFragmentDoc}`;
exports.AllStoredChainConfigDocument = (0, graphql_tag_1.default) `
    query ALL_STORED_CHAIN_CONFIG {
  chainConfigs {
    allStoredConfigs {
      ...chainConfig
    }
  }
}
    ${exports.ChainConfigFragmentDoc}`;
exports.KeplrConfigDocument = (0, graphql_tag_1.default) `
    query KEPLR_CONFIG($identifier: String!) {
  keplrConfigs {
    config(identifier: $identifier) {
      ...keplrConfig
    }
  }
}
    ${exports.KeplrConfigFragmentDoc}`;
exports.AllKeplrConfigDocument = (0, graphql_tag_1.default) `
    query ALL_KEPLR_CONFIG {
  keplrConfigs {
    allConfigs {
      ...keplrConfig
    }
  }
}
    ${exports.KeplrConfigFragmentDoc}`;
exports.CodegenGeneratedAdoAddressListAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_ADDRESS_LIST_ANDR($ADO_address_list_address: String!) {
  ADO {
    address_list(address: $ADO_address_list_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAddressListIncludesaddressDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_ADDRESS_LIST_INCLUDESADDRESS($ADO_address_list_address: String!, $ADO_address_list_address_list_includesAddress_address: String!) {
  ADO {
    address_list(address: $ADO_address_list_address) {
      includesAddress(address: $ADO_address_list_address_list_includesAddress_address) {
        included
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAddressListDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_ADDRESS_LIST($ADO_address_list_address: String!) {
  ADO {
    address_list(address: $ADO_address_list_address) {
      address
      chainId
    }
  }
}
    `;
exports.CodegenGeneratedAdoAdoAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_ADO_ANDR($ADO_ado_address: String!) {
  ADO {
    ado(address: $ADO_ado_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAdoDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_ADO($ADO_ado_address: String!) {
  ADO {
    ado(address: $ADO_ado_address) {
      address
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
      chainId
    }
  }
}
    `;
exports.CodegenGeneratedAdoAdosmartDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_ADOSMART($ADO_adoSmart_address: String!, $ADO_adoSmart_query: String!) {
  ADO {
    adoSmart(address: $ADO_adoSmart_address, query: $ADO_adoSmart_query) {
      address
      adoType
      query
      queryResult
    }
  }
}
    `;
exports.CodegenGeneratedAdoAppAddressesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_APP_ADDRESSES($ADO_app_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      addresses {
        address
        name
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAppAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_APP_ANDR($ADO_app_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAppComponentexistsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_APP_COMPONENTEXISTS($ADO_app_address: String!, $ADO_app_app_componentExists_name: String!) {
  ADO {
    app(address: $ADO_app_address) {
      componentExists(name: $ADO_app_app_componentExists_name)
    }
  }
}
    `;
exports.CodegenGeneratedAdoAppComponentsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_APP_COMPONENTS($ADO_app_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      components {
        address
        ado_type
        instantiate_msg
        name
        type
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAppConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_APP_CONFIG($ADO_app_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      config {
        name
        owner
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAppGetaddressDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_APP_GETADDRESS($ADO_app_address: String!, $ADO_app_app_getAddress_name: String!) {
  ADO {
    app(address: $ADO_app_address) {
      getAddress(name: $ADO_app_app_getAddress_name)
    }
  }
}
    `;
exports.CodegenGeneratedAdoAppDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_APP($ADO_app_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      address
      addresses {
        address
        name
      }
      chainId
      components {
        address
        ado_type
        instantiate_msg
        name
        type
      }
      config {
        name
        owner
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAuctionAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_AUCTION_ANDR($ADO_auction_address: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAuctionAuctionidsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_AUCTION_AUCTIONIDS($ADO_auction_address: String!, $ADO_auction_auction_auctionIDs_tokenAddress: String!, $ADO_auction_auction_auctionIDs_tokenId: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      auctionIDs(
        tokenAddress: $ADO_auction_auction_auctionIDs_tokenAddress
        tokenId: $ADO_auction_auction_auctionIDs_tokenId
      ) {
        auction_ids
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAuctionAuctioninfosforaddressDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_AUCTION_AUCTIONINFOSFORADDRESS($ADO_auction_address: String!, $ADO_auction_auction_auctionInfosForAddress_tokenAddress: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      auctionInfosForAddress(
        tokenAddress: $ADO_auction_auction_auctionInfosForAddress_tokenAddress
      ) {
        auction_ids
        token_address
        token_id
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAuctionAuctionstateDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_AUCTION_AUCTIONSTATE($ADO_auction_address: String!, $ADO_auction_auction_auctionState_auctionId: Float!) {
  ADO {
    auction(address: $ADO_auction_address) {
      auctionState(auctionId: $ADO_auction_auction_auctionState_auctionId) {
        auction_id
        coin_denom
        end_time
        high_bidder_addr
        high_bidder_amount
        is_cancelled
        min_bid
        start_time
        whitelist
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAuctionBidsBidsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_AUCTION_BIDS_BIDS($ADO_auction_address: String!, $ADO_auction_auction_bids_auctionId: Float!, $ADO_auction_auction_bids_options: AndrSearchOptions) {
  ADO {
    auction(address: $ADO_auction_address) {
      bids(
        auctionId: $ADO_auction_auction_bids_auctionId
        options: $ADO_auction_auction_bids_options
      ) {
        bids {
          amount
          bidder
          timestamp
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAuctionBidsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_AUCTION_BIDS($ADO_auction_address: String!, $ADO_auction_auction_bids_auctionId: Float!, $ADO_auction_auction_bids_options: AndrSearchOptions) {
  ADO {
    auction(address: $ADO_auction_address) {
      bids(
        auctionId: $ADO_auction_auction_bids_auctionId
        options: $ADO_auction_auction_bids_options
      ) {
        bids {
          amount
          bidder
          timestamp
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAuctionLatestauctionstateDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_AUCTION_LATESTAUCTIONSTATE($ADO_auction_address: String!, $ADO_auction_auction_latestAuctionState_tokenAddress: String!, $ADO_auction_auction_latestAuctionState_tokenId: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      latestAuctionState(
        tokenAddress: $ADO_auction_auction_latestAuctionState_tokenAddress
        tokenId: $ADO_auction_auction_latestAuctionState_tokenId
      ) {
        auction_id
        coin_denom
        end_time
        high_bidder_addr
        high_bidder_amount
        is_cancelled
        min_bid
        start_time
        whitelist
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAuctionSummaryfieldsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_AUCTION_SUMMARYFIELDS($ADO_auction_address: String!, $ADO_auction_auction_summaryFields_tokenAddress: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      summaryFields(tokenAddress: $ADO_auction_auction_summaryFields_tokenAddress) {
        coin_denom
        high_bidder_amount
        min_bid
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoAuctionDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_AUCTION($ADO_auction_address: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      address
      chainId
    }
  }
}
    `;
exports.CodegenGeneratedAdoChainidDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CHAINID($ADO_chainId_address: String!) {
  ADO {
    chainId(address: $ADO_chainId_address)
  }
}
    `;
exports.CodegenGeneratedAdoCrowdfundAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CROWDFUND_ANDR($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCrowdfundConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CROWDFUND_CONFIG($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      config {
        can_mint_after_sale
        token_address
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCrowdfundIstokenavailableDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CROWDFUND_ISTOKENAVAILABLE($ADO_crowdfund_address: String!, $ADO_crowdfund_crowdfund_isTokenAvailable_tokenId: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      isTokenAvailable(tokenId: $ADO_crowdfund_crowdfund_isTokenAvailable_tokenId)
    }
  }
}
    `;
exports.CodegenGeneratedAdoCrowdfundStatePriceDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CROWDFUND_STATE_PRICE($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      state {
        price {
          amount
          denom
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCrowdfundStateRecipientDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CROWDFUND_STATE_RECIPIENT($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      state {
        recipient {
          address
          ibc_recovery_address
          msg
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCrowdfundStateDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CROWDFUND_STATE($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      state {
        amount_sold
        amount_to_send
        amount_transferred
        end_time
        max_amount_per_wallet
        min_tokens_sold
        price {
          amount
          denom
        }
        recipient {
          address
          ibc_recovery_address
          msg
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCrowdfundDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CROWDFUND($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      address
      availableTokens
      chainId
      config {
        can_mint_after_sale
        token_address
      }
      state {
        amount_sold
        amount_to_send
        amount_transferred
        end_time
        max_amount_per_wallet
        min_tokens_sold
        price {
          amount
          denom
        }
        recipient {
          address
          ibc_recovery_address
          msg
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20AllaccountsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_ALLACCOUNTS($ADO_cw20_address: String!, $ADO_cw20_cw20_allAccounts_options: AndrSearchOptions) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      allAccounts(options: $ADO_cw20_cw20_allAccounts_options)
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20AllallowancesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_ALLALLOWANCES($ADO_cw20_address: String!, $ADO_cw20_cw20_allAllowances_options: AndrSearchOptions, $ADO_cw20_cw20_allAllowances_owner: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      allAllowances(
        options: $ADO_cw20_cw20_allAllowances_options
        owner: $ADO_cw20_cw20_allAllowances_owner
      ) {
        allowance
        expires
        owner
        spender
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20AllspenderallowancesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_ALLSPENDERALLOWANCES($ADO_cw20_address: String!, $ADO_cw20_cw20_allSpenderAllowances_options: AndrSearchOptions, $ADO_cw20_cw20_allSpenderAllowances_spender: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      allSpenderAllowances(
        options: $ADO_cw20_cw20_allSpenderAllowances_options
        spender: $ADO_cw20_cw20_allSpenderAllowances_spender
      ) {
        allowance
        expires
        owner
        spender
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20AllowanceDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_ALLOWANCE($ADO_cw20_address: String!, $ADO_cw20_cw20_allowance_owner: String!, $ADO_cw20_cw20_allowance_spender: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      allowance(
        owner: $ADO_cw20_cw20_allowance_owner
        spender: $ADO_cw20_cw20_allowance_spender
      ) {
        allowance
        expires
        owner
        spender
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20AndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_ANDR($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20BalanceDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_BALANCE($ADO_cw20_address: String!, $ADO_cw20_cw20_balance_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      balance(address: $ADO_cw20_cw20_balance_address)
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20DownloadlogoDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_DOWNLOADLOGO($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      downloadLogo {
        data
        mime_type
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20MarketinginfoDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_MARKETINGINFO($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      marketingInfo {
        description
        logo
        marketing
        project
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20MinterDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_MINTER($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      minter {
        cap
        minter
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20TokeninfoDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_TOKENINFO($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      tokenInfo {
        decimals
        name
        symbol
        total_supply
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20Document = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      address
      chainId
      downloadLogo {
        data
        mime_type
      }
      marketingInfo {
        description
        logo
        marketing
        project
      }
      minter {
        cap
        minter
      }
      tokenInfo {
        decimals
        name
        symbol
        total_supply
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20ExchangeAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_EXCHANGE_ANDR($ADO_cw20_exchange_address: String!) {
  ADO {
    cw20_exchange(address: $ADO_cw20_exchange_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20ExchangeSaleDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALE($ADO_cw20_exchange_address: String!, $ADO_cw20_exchange_cw20_exchange_sale_cw20: String, $ADO_cw20_exchange_cw20_exchange_sale_native: String) {
  ADO {
    cw20_exchange(address: $ADO_cw20_exchange_address) {
      sale(
        cw20: $ADO_cw20_exchange_cw20_exchange_sale_cw20
        native: $ADO_cw20_exchange_cw20_exchange_sale_native
      ) {
        amount
        end_time
        exchange_rate
        recipient
        start_amount
        start_time
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20ExchangeSaleassetsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALEASSETS($ADO_cw20_exchange_address: String!, $ADO_cw20_exchange_cw20_exchange_saleAssets_options: AndrSearchOptions) {
  ADO {
    cw20_exchange(address: $ADO_cw20_exchange_address) {
      saleAssets(options: $ADO_cw20_exchange_cw20_exchange_saleAssets_options)
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20ExchangeDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_EXCHANGE($ADO_cw20_exchange_address: String!) {
  ADO {
    cw20_exchange(address: $ADO_cw20_exchange_address) {
      address
      chainId
      tokenAddress
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20StakingAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_STAKING_ANDR($ADO_cw20_staking_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20StakingConfigStakingTokenDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG_STAKING_TOKEN($ADO_cw20_staking_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      config {
        staking_token {
          identifier
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20StakingConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG($ADO_cw20_staking_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      config {
        number_of_reward_tokens
        staking_token {
          identifier
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20StakingStakerDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_STAKING_STAKER($ADO_cw20_staking_address: String!, $ADO_cw20_staking_cw20_staking_staker_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      staker(address: $ADO_cw20_staking_cw20_staking_staker_address) {
        address
        pending_rewards
        share
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20StakingStakersDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_STAKING_STAKERS($ADO_cw20_staking_address: String!, $ADO_cw20_staking_cw20_staking_stakers_options: AndrSearchOptions) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      stakers(options: $ADO_cw20_staking_cw20_staking_stakers_options) {
        address
        pending_rewards
        share
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20StakingStateDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_STAKING_STATE($ADO_cw20_staking_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      state {
        total_share
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw20StakingDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW20_STAKING($ADO_cw20_staking_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      address
      chainId
      config {
        number_of_reward_tokens
        staking_token {
          identifier
        }
      }
      state {
        total_share
      }
      timestamp
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS_APPROVALS($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        access {
          approvals {
            expires
            spender
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721AllnftinfoAccessDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        access {
          approvals {
            expires
            spender
          }
          owner
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721AllnftinfoInfoExtensionDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_EXTENSION($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        info {
          extension {
            publisher
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_METADATA_ATTRIBUTES($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        info {
          metadata {
            attributes {
              display_type
              trait_type
              value
            }
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721AllnftinfoInfoMetadataDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_METADATA($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        info {
          metadata {
            animation_url
            attributes {
              display_type
              trait_type
              value
            }
            background_color
            description
            external_url
            image
            image_data
            name
            youtube_url
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721AllnftinfoInfoDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        info {
          extension {
            publisher
          }
          metadata {
            animation_url
            attributes {
              display_type
              trait_type
              value
            }
            background_color
            description
            external_url
            image
            image_data
            name
            youtube_url
          }
          tokenId
          token_uri
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721AllnftinfoDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        access {
          approvals {
            expires
            spender
          }
          owner
        }
        info {
          extension {
            publisher
          }
          metadata {
            animation_url
            attributes {
              display_type
              trait_type
              value
            }
            background_color
            description
            external_url
            image
            image_data
            name
            youtube_url
          }
          tokenId
          token_uri
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721AlloperatorsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ALLOPERATORS($ADO_cw721_address: String!, $ADO_cw721_cw721_allOperators_includeExpired: Boolean!, $ADO_cw721_cw721_allOperators_options: AndrSearchOptions, $ADO_cw721_cw721_allOperators_owner: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allOperators(
        includeExpired: $ADO_cw721_cw721_allOperators_includeExpired
        options: $ADO_cw721_cw721_allOperators_options
        owner: $ADO_cw721_cw721_allOperators_owner
      ) {
        expires
        spender
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721AlltokensDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ALLTOKENS($ADO_cw721_address: String!, $ADO_cw721_cw721_allTokens_options: AndrSearchOptions) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allTokens(options: $ADO_cw721_cw721_allTokens_options)
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721AndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ANDR($ADO_cw721_address: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721ApprovalDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_APPROVAL($ADO_cw721_address: String!, $ADO_cw721_cw721_approval_includeExpired: Boolean!, $ADO_cw721_cw721_approval_spender: String!, $ADO_cw721_cw721_approval_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      approval(
        includeExpired: $ADO_cw721_cw721_approval_includeExpired
        spender: $ADO_cw721_cw721_approval_spender
        tokenId: $ADO_cw721_cw721_approval_tokenId
      ) {
        expires
        spender
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721ApprovalsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_APPROVALS($ADO_cw721_address: String!, $ADO_cw721_cw721_approvals_includeExpired: Boolean!, $ADO_cw721_cw721_approvals_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      approvals(
        includeExpired: $ADO_cw721_cw721_approvals_includeExpired
        tokenId: $ADO_cw721_cw721_approvals_tokenId
      ) {
        expires
        spender
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721ContractinfoDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_CONTRACTINFO($ADO_cw721_address: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      contractInfo {
        name
        symbol
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721IsarchivedDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_ISARCHIVED($ADO_cw721_address: String!, $ADO_cw721_cw721_isArchived_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      isArchived(tokenId: $ADO_cw721_cw721_isArchived_tokenId)
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721NftinfoExtensionDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_NFTINFO_EXTENSION($ADO_cw721_address: String!, $ADO_cw721_cw721_nftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      nftInfo(tokenId: $ADO_cw721_cw721_nftInfo_tokenId) {
        extension {
          publisher
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721NftinfoMetadataAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_NFTINFO_METADATA_ATTRIBUTES($ADO_cw721_address: String!, $ADO_cw721_cw721_nftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      nftInfo(tokenId: $ADO_cw721_cw721_nftInfo_tokenId) {
        metadata {
          attributes {
            display_type
            trait_type
            value
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721NftinfoMetadataDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_NFTINFO_METADATA($ADO_cw721_address: String!, $ADO_cw721_cw721_nftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      nftInfo(tokenId: $ADO_cw721_cw721_nftInfo_tokenId) {
        metadata {
          animation_url
          attributes {
            display_type
            trait_type
            value
          }
          background_color
          description
          external_url
          image
          image_data
          name
          youtube_url
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721NftinfoDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_NFTINFO($ADO_cw721_address: String!, $ADO_cw721_cw721_nftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      nftInfo(tokenId: $ADO_cw721_cw721_nftInfo_tokenId) {
        extension {
          publisher
        }
        metadata {
          animation_url
          attributes {
            display_type
            trait_type
            value
          }
          background_color
          description
          external_url
          image
          image_data
          name
          youtube_url
        }
        tokenId
        token_uri
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721NumownersDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_NUMOWNERS($ADO_cw721_address: String!, $ADO_cw721_cw721_numOwners_includeExpired: Boolean!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      numOwners(includeExpired: $ADO_cw721_cw721_numOwners_includeExpired)
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721OwnerofApprovalsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_OWNEROF_APPROVALS($ADO_cw721_address: String!, $ADO_cw721_cw721_ownerOf_includeExpired: Boolean!, $ADO_cw721_cw721_ownerOf_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      ownerOf(
        includeExpired: $ADO_cw721_cw721_ownerOf_includeExpired
        tokenId: $ADO_cw721_cw721_ownerOf_tokenId
      ) {
        approvals {
          expires
          spender
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721OwnerofDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_OWNEROF($ADO_cw721_address: String!, $ADO_cw721_cw721_ownerOf_includeExpired: Boolean!, $ADO_cw721_cw721_ownerOf_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      ownerOf(
        includeExpired: $ADO_cw721_cw721_ownerOf_includeExpired
        tokenId: $ADO_cw721_cw721_ownerOf_tokenId
      ) {
        approvals {
          expires
          spender
        }
        owner
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721SearchtokensExtensionDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_EXTENSION($ADO_cw721_address: String!, $ADO_cw721_cw721_searchTokens_attributes: [SearchAttribute!]) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      searchTokens(attributes: $ADO_cw721_cw721_searchTokens_attributes) {
        extension {
          publisher
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721SearchtokensMetadataAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_METADATA_ATTRIBUTES($ADO_cw721_address: String!, $ADO_cw721_cw721_searchTokens_attributes: [SearchAttribute!]) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      searchTokens(attributes: $ADO_cw721_cw721_searchTokens_attributes) {
        metadata {
          attributes {
            display_type
            trait_type
            value
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721SearchtokensMetadataDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_METADATA($ADO_cw721_address: String!, $ADO_cw721_cw721_searchTokens_attributes: [SearchAttribute!]) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      searchTokens(attributes: $ADO_cw721_cw721_searchTokens_attributes) {
        metadata {
          animation_url
          attributes {
            display_type
            trait_type
            value
          }
          background_color
          description
          external_url
          image
          image_data
          name
          youtube_url
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721SearchtokensDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS($ADO_cw721_address: String!, $ADO_cw721_cw721_searchTokens_attributes: [SearchAttribute!]) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      searchTokens(attributes: $ADO_cw721_cw721_searchTokens_attributes) {
        extension {
          publisher
        }
        metadata {
          animation_url
          attributes {
            display_type
            trait_type
            value
          }
          background_color
          description
          external_url
          image
          image_data
          name
          youtube_url
        }
        tokenId
        token_uri
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721TokensDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_TOKENS($ADO_cw721_address: String!, $ADO_cw721_cw721_tokens_options: AndrSearchOptions, $ADO_cw721_cw721_tokens_owner: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      tokens(
        options: $ADO_cw721_cw721_tokens_options
        owner: $ADO_cw721_cw721_tokens_owner
      )
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT_RAW($ADO_cw721_address: String!, $ADO_cw721_cw721_transferAgreement_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      transferAgreement(tokenId: $ADO_cw721_cw721_transferAgreement_tokenId) {
        agreement {
          amount {
            raw {
              amount
              denom
            }
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721TransferagreementAgreementAmountDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT($ADO_cw721_address: String!, $ADO_cw721_cw721_transferAgreement_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      transferAgreement(tokenId: $ADO_cw721_cw721_transferAgreement_tokenId) {
        agreement {
          amount {
            raw {
              amount
              denom
            }
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721TransferagreementAgreementDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT($ADO_cw721_address: String!, $ADO_cw721_cw721_transferAgreement_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      transferAgreement(tokenId: $ADO_cw721_cw721_transferAgreement_tokenId) {
        agreement {
          amount {
            raw {
              amount
              denom
            }
          }
          purchaser
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721TransferagreementDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT($ADO_cw721_address: String!, $ADO_cw721_cw721_transferAgreement_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      transferAgreement(tokenId: $ADO_cw721_cw721_transferAgreement_tokenId) {
        agreement {
          amount {
            raw {
              amount
              denom
            }
          }
          purchaser
        }
        tokenId
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoCw721Document = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_CW721($ADO_cw721_address: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      address
      chainId
      contractInfo {
        name
        symbol
      }
      minter
      numTokens
    }
  }
}
    `;
exports.CodegenGeneratedAdoFactoryAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_FACTORY_ANDR($ADO_factory_address: String!) {
  ADO {
    factory(address: $ADO_factory_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoFactoryCodeIdDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_FACTORY_CODE_ID($ADO_factory_address: String!, $ADO_factory_factory_code_id_key: String!) {
  ADO {
    factory(address: $ADO_factory_address) {
      code_id(key: $ADO_factory_factory_code_id_key)
    }
  }
}
    `;
exports.CodegenGeneratedAdoFactoryDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_FACTORY($ADO_factory_address: String!) {
  ADO {
    factory(address: $ADO_factory_address) {
      address
      chainId
    }
  }
}
    `;
exports.CodegenGeneratedAdoLockdropAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_LOCKDROP_ANDR($ADO_lockdrop_address: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoLockdropConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_LOCKDROP_CONFIG($ADO_lockdrop_address: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      config {
        deposit_window
        incentive_token
        init_timestamp
        lockdrop_incentives
        native_denom
        withdrawal_window
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoLockdropStateDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_LOCKDROP_STATE($ADO_lockdrop_address: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      state {
        are_claims_allowed
        total_native_locked
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoLockdropUserinfoDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_LOCKDROP_USERINFO($ADO_lockdrop_address: String!, $ADO_lockdrop_lockdrop_userInfo_user: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      userInfo(user: $ADO_lockdrop_lockdrop_userInfo_user) {
        is_lockdrop_claimed
        total_incentives
        total_native_locked
        withrawal_flag
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoLockdropWithdrawalpercentallowedDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_LOCKDROP_WITHDRAWALPERCENTALLOWED($ADO_lockdrop_address: String!, $ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp: Float!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      withdrawalPercentAllowed(
        timestamp: $ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp
      )
    }
  }
}
    `;
exports.CodegenGeneratedAdoLockdropDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_LOCKDROP($ADO_lockdrop_address: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      address
      chainId
      config {
        deposit_window
        incentive_token
        init_timestamp
        lockdrop_incentives
        native_denom
        withdrawal_window
      }
      state {
        are_claims_allowed
        total_native_locked
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoMarketplaceAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MARKETPLACE_ANDR($ADO_marketplace_address: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoMarketplaceLatestsalestateDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MARKETPLACE_LATESTSALESTATE($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_latestSaleState_tokenAddress: String!, $ADO_marketplace_marketplace_latestSaleState_tokenId: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      latestSaleState(
        tokenAddress: $ADO_marketplace_marketplace_latestSaleState_tokenAddress
        tokenId: $ADO_marketplace_marketplace_latestSaleState_tokenId
      ) {
        coin_denom
        price
        sale_id
        status
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoMarketplaceSaleidsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MARKETPLACE_SALEIDS($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_saleIds_tokenAddress: String!, $ADO_marketplace_marketplace_saleIds_tokenId: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      saleIds(
        tokenAddress: $ADO_marketplace_marketplace_saleIds_tokenAddress
        tokenId: $ADO_marketplace_marketplace_saleIds_tokenId
      ) {
        sale_ids
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoMarketplaceSaleinfosforaddressDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MARKETPLACE_SALEINFOSFORADDRESS($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_saleInfosForAddress_options: AndrSearchOptions, $ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      saleInfosForAddress(
        options: $ADO_marketplace_marketplace_saleInfosForAddress_options
        tokenAddress: $ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress
      ) {
        sale_ids
        token_address
        token_id
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoMarketplaceSalestateDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MARKETPLACE_SALESTATE($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_saleState_saleId: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      saleState(saleId: $ADO_marketplace_marketplace_saleState_saleId) {
        coin_denom
        price
        sale_id
        status
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoMarketplaceDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MARKETPLACE($ADO_marketplace_address: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      address
      chainId
    }
  }
}
    `;
exports.CodegenGeneratedAdoMerkleAirdropAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ANDR($ADO_merkle_airdrop_address: String!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoMerkleAirdropConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_CONFIG($ADO_merkle_airdrop_address: String!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      config {
        asset_info
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoMerkleAirdropIsclaimedDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ISCLAIMED($ADO_merkle_airdrop_address: String!, $ADO_merkle_airdrop_merkle_airdrop_isClaimed_address: String!, $ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage: Float!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      isClaimed(
        address: $ADO_merkle_airdrop_merkle_airdrop_isClaimed_address
        stage: $ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage
      )
    }
  }
}
    `;
exports.CodegenGeneratedAdoMerkleAirdropMerklerootDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_MERKLEROOT($ADO_merkle_airdrop_address: String!, $ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: Float!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      merkleRoot(stage: $ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage) {
        expiration
        merkle_root
        stage
        total_amount
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_TOTALCLAIMED($ADO_merkle_airdrop_address: String!, $ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage: Float!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      totalClaimed(stage: $ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage)
    }
  }
}
    `;
exports.CodegenGeneratedAdoMerkleAirdropDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP($ADO_merkle_airdrop_address: String!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      address
      chainId
      config {
        asset_info
      }
      latestStage
    }
  }
}
    `;
exports.CodegenGeneratedAdoPrimitiveAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR($ADO_primitive_address: String!) {
  ADO {
    primitive(address: $ADO_primitive_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoPrimitiveGetvalueDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_PRIMITIVE_GETVALUE($ADO_primitive_address: String!, $ADO_primitive_primitive_getValue_key: String!) {
  ADO {
    primitive(address: $ADO_primitive_address) {
      getValue(key: $ADO_primitive_primitive_getValue_key) {
        key
        value
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoPrimitiveDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_PRIMITIVE($ADO_primitive_address: String!) {
  ADO {
    primitive(address: $ADO_primitive_address) {
      address
      chainId
    }
  }
}
    `;
exports.CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ACCOUNTDETAILS($ADO_rate_limiting_withdrawals_address: String!) {
  ADO {
    rate_limiting_withdrawals(address: $ADO_rate_limiting_withdrawals_address) {
      accountDetails {
        balance
        latest_withdrawal
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoRateLimitingWithdrawalsAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ANDR($ADO_rate_limiting_withdrawals_address: String!) {
  ADO {
    rate_limiting_withdrawals(address: $ADO_rate_limiting_withdrawals_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_COINALLOWANCEDETAILS($ADO_rate_limiting_withdrawals_address: String!) {
  ADO {
    rate_limiting_withdrawals(address: $ADO_rate_limiting_withdrawals_address) {
      coinAllowanceDetails {
        coin
        limit
        minimal_withdrawal_frequency
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoRateLimitingWithdrawalsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS($ADO_rate_limiting_withdrawals_address: String!) {
  ADO {
    rate_limiting_withdrawals(address: $ADO_rate_limiting_withdrawals_address) {
      accountDetails {
        balance
        latest_withdrawal
      }
      address
      chainId
      coinAllowanceDetails {
        coin
        limit
        minimal_withdrawal_frequency
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoRatesAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATES_ANDR($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoRatesPaymentsRateExternalDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_EXTERNAL($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      payments {
        rate {
          external {
            address
            key
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoRatesPaymentsRateFlatDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_FLAT($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      payments {
        rate {
          flat {
            amount
            denom
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoRatesPaymentsRatePercentDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_PERCENT($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      payments {
        rate {
          percent {
            decimal
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoRatesPaymentsRateDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      payments {
        rate {
          external {
            address
            key
          }
          flat {
            amount
            denom
          }
          percent {
            decimal
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoRatesPaymentsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATES_PAYMENTS($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      payments {
        description
        is_additive
        rate {
          external {
            address
            key
          }
          flat {
            amount
            denom
          }
          percent {
            decimal
          }
        }
        receivers
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoRatesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_RATES($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      address
      chainId
      payments {
        description
        is_additive
        rate {
          external {
            address
            key
          }
          flat {
            amount
            denom
          }
          percent {
            decimal
          }
        }
        receivers
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoSplitterAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_SPLITTER_ANDR($ADO_splitter_address: String!) {
  ADO {
    splitter(address: $ADO_splitter_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoSplitterConfigRecipientsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_SPLITTER_CONFIG_RECIPIENTS($ADO_splitter_address: String!) {
  ADO {
    splitter(address: $ADO_splitter_address) {
      config {
        recipients {
          percent
          recipient
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoSplitterConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_SPLITTER_CONFIG($ADO_splitter_address: String!) {
  ADO {
    splitter(address: $ADO_splitter_address) {
      config {
        lock
        recipients {
          percent
          recipient
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoSplitterDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_SPLITTER($ADO_splitter_address: String!) {
  ADO {
    splitter(address: $ADO_splitter_address) {
      address
      chainId
      config {
        lock
        recipients {
          percent
          recipient
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoTimelockAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_TIMELOCK_ANDR($ADO_timelock_address: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoTimelockGetlockedfundsCoinsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_COINS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFunds_owner: String!, $ADO_timelock_timelock_getLockedFunds_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFunds(
        owner: $ADO_timelock_timelock_getLockedFunds_owner
        recipient: $ADO_timelock_timelock_getLockedFunds_recipient
      ) {
        coins {
          amount
          denom
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION_MINIUMFUNDS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFunds_owner: String!, $ADO_timelock_timelock_getLockedFunds_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFunds(
        owner: $ADO_timelock_timelock_getLockedFunds_owner
        recipient: $ADO_timelock_timelock_getLockedFunds_recipient
      ) {
        condition {
          miniumFunds {
            amount
            denom
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoTimelockGetlockedfundsConditionDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFunds_owner: String!, $ADO_timelock_timelock_getLockedFunds_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFunds(
        owner: $ADO_timelock_timelock_getLockedFunds_owner
        recipient: $ADO_timelock_timelock_getLockedFunds_recipient
      ) {
        condition {
          expiration
          miniumFunds {
            amount
            denom
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoTimelockGetlockedfundsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFunds_owner: String!, $ADO_timelock_timelock_getLockedFunds_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFunds(
        owner: $ADO_timelock_timelock_getLockedFunds_owner
        recipient: $ADO_timelock_timelock_getLockedFunds_recipient
      ) {
        coins {
          amount
          denom
        }
        condition {
          expiration
          miniumFunds {
            amount
            denom
          }
        }
        recipient
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_COINS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFundsForRecipient_options: AndrSearchOptions!, $ADO_timelock_timelock_getLockedFundsForRecipient_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFundsForRecipient(
        options: $ADO_timelock_timelock_getLockedFundsForRecipient_options
        recipient: $ADO_timelock_timelock_getLockedFundsForRecipient_recipient
      ) {
        coins {
          amount
          denom
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION_MINIUMFUNDS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFundsForRecipient_options: AndrSearchOptions!, $ADO_timelock_timelock_getLockedFundsForRecipient_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFundsForRecipient(
        options: $ADO_timelock_timelock_getLockedFundsForRecipient_options
        recipient: $ADO_timelock_timelock_getLockedFundsForRecipient_recipient
      ) {
        condition {
          miniumFunds {
            amount
            denom
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFundsForRecipient_options: AndrSearchOptions!, $ADO_timelock_timelock_getLockedFundsForRecipient_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFundsForRecipient(
        options: $ADO_timelock_timelock_getLockedFundsForRecipient_options
        recipient: $ADO_timelock_timelock_getLockedFundsForRecipient_recipient
      ) {
        condition {
          expiration
          miniumFunds {
            amount
            denom
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFundsForRecipient_options: AndrSearchOptions!, $ADO_timelock_timelock_getLockedFundsForRecipient_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFundsForRecipient(
        options: $ADO_timelock_timelock_getLockedFundsForRecipient_options
        recipient: $ADO_timelock_timelock_getLockedFundsForRecipient_recipient
      ) {
        coins {
          amount
          denom
        }
        condition {
          expiration
          miniumFunds {
            amount
            denom
          }
        }
        recipient
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoTimelockDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_TIMELOCK($ADO_timelock_address: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      address
      chainId
    }
  }
}
    `;
exports.CodegenGeneratedAdoVaultAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_VAULT_ANDR($ADO_vault_address: String!) {
  ADO {
    vault(address: $ADO_vault_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoVaultBalanceDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_VAULT_BALANCE($ADO_vault_address: String!, $ADO_vault_vault_balance_address: String!) {
  ADO {
    vault(address: $ADO_vault_address) {
      balance(address: $ADO_vault_vault_balance_address) {
        amount
        denom
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoVaultStrategyaddressDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_VAULT_STRATEGYADDRESS($ADO_vault_address: String!, $ADO_vault_vault_strategyAddress_strategy: String!) {
  ADO {
    vault(address: $ADO_vault_address) {
      strategyAddress(strategy: $ADO_vault_vault_strategyAddress_strategy) {
        address
        strategyType
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoVaultDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_VAULT($ADO_vault_address: String!) {
  ADO {
    vault(address: $ADO_vault_address) {
      address
      chainId
    }
  }
}
    `;
exports.CodegenGeneratedAdoVestingAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_VESTING_ANDR($ADO_vesting_address: String!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoVestingBatchDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_VESTING_BATCH($ADO_vesting_address: String!, $ADO_vesting_vesting_batch_id: Float!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      batch(id: $ADO_vesting_vesting_batch_id) {
        amount
        amount_available_to_claim
        amount_claimed
        id
        last_claimed_release_time
        lockup_end
        number_of_available_claims
        release_amount
        release_unit
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoVestingBatchesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_VESTING_BATCHES($ADO_vesting_address: String!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      batches {
        amount
        amount_available_to_claim
        amount_claimed
        id
        last_claimed_release_time
        lockup_end
        number_of_available_claims
        release_amount
        release_unit
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoVestingConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_VESTING_CONFIG($ADO_vesting_address: String!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      config {
        denom
        is_multi_batch_enabled
        recipient
        unbonding_duration
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoVestingDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_VESTING($ADO_vesting_address: String!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      address
      batches {
        amount
        amount_available_to_claim
        amount_claimed
        id
        last_claimed_release_time
        lockup_end
        number_of_available_claims
        release_amount
        release_unit
      }
      chainId
      config {
        denom
        is_multi_batch_enabled
        recipient
        unbonding_duration
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoWeightedDistributionSplitterAndrDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_ANDR($ADO_weighted_distribution_splitter_address: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      andr {
        address
        admin
        appContract
        blockHeightUponCreation
        codeId
        creator
        ibcPortId
        kernelAddress
        label
        originalPublisher
        owner
        ownershipRequest
        permissionedActions
        type
        version
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG_RECIPIENTS($ADO_weighted_distribution_splitter_address: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      config {
        recipients {
          percent
          recipient
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoWeightedDistributionSplitterConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG($ADO_weighted_distribution_splitter_address: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      config {
        lock
        recipients {
          percent
          recipient
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_GETUSERWEIGHT($ADO_weighted_distribution_splitter_address: String!, $ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      getUserWeight(
        user: $ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user
      ) {
        total_weight
        weight
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoWeightedDistributionSplitterDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER($ADO_weighted_distribution_splitter_address: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      address
      chainId
      config {
        lock
        recipients {
          percent
          recipient
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdoDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADO {
  ADO {
    receipt
  }
}
    `;
exports.CodegenGeneratedAdopPackageSchemasReceiveDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS_RECEIVE($ADOP_package_adoType: String!) {
  ADOP {
    package(adoType: $ADOP_package_adoType) {
      schemas {
        receive {
          cw20
          cw721
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdopPackageSchemasDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS($ADOP_package_adoType: String!) {
  ADOP {
    package(adoType: $ADOP_package_adoType) {
      schemas {
        contract_schema
        execute
        instantiate
        query
        receive {
          cw20
          cw721
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdopPackageDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADOP_PACKAGE($ADOP_package_adoType: String!) {
  ADOP {
    package(adoType: $ADOP_package_adoType) {
      name
      schemas {
        contract_schema
        execute
        instantiate
        query
        receive {
          cw20
          cw721
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedAdopDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ADOP {
  ADOP {
    adoTypes
  }
}
    `;
exports.CodegenGeneratedAccountsAssetsComponentsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ACCOUNTS_ASSETS_COMPONENTS($accounts_assets_adoType: String, $accounts_assets_appContract: String, $accounts_assets_instantiateOwner: String, $accounts_assets_kernel: String, $accounts_assets_limit: Int!, $accounts_assets_memo: String, $accounts_assets_offset: Int!, $accounts_assets_orderBy: AndrOrderBy, $accounts_assets_owner: String, $accounts_assets_ownershipRequest: String, $accounts_assets_search: String, $accounts_assets_walletAddress: String!, $accounts_assets_assets_components_componentType: AdoType, $accounts_assets_assets_components_limit: Int!, $accounts_assets_assets_components_offset: Int!) {
  accounts {
    assets(
      adoType: $accounts_assets_adoType
      appContract: $accounts_assets_appContract
      instantiateOwner: $accounts_assets_instantiateOwner
      kernel: $accounts_assets_kernel
      limit: $accounts_assets_limit
      memo: $accounts_assets_memo
      offset: $accounts_assets_offset
      orderBy: $accounts_assets_orderBy
      owner: $accounts_assets_owner
      ownershipRequest: $accounts_assets_ownershipRequest
      search: $accounts_assets_search
      walletAddress: $accounts_assets_walletAddress
    ) {
      components(
        componentType: $accounts_assets_assets_components_componentType
        limit: $accounts_assets_assets_components_limit
        offset: $accounts_assets_assets_components_offset
      ) {
        address
        ado_type
        instantiate_msg
        name
      }
    }
  }
}
    `;
exports.CodegenGeneratedAccountsAssetsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ACCOUNTS_ASSETS($accounts_assets_adoType: String, $accounts_assets_appContract: String, $accounts_assets_instantiateOwner: String, $accounts_assets_kernel: String, $accounts_assets_limit: Int!, $accounts_assets_memo: String, $accounts_assets_offset: Int!, $accounts_assets_orderBy: AndrOrderBy, $accounts_assets_owner: String, $accounts_assets_ownershipRequest: String, $accounts_assets_search: String, $accounts_assets_walletAddress: String!) {
  accounts {
    assets(
      adoType: $accounts_assets_adoType
      appContract: $accounts_assets_appContract
      instantiateOwner: $accounts_assets_instantiateOwner
      kernel: $accounts_assets_kernel
      limit: $accounts_assets_limit
      memo: $accounts_assets_memo
      offset: $accounts_assets_offset
      orderBy: $accounts_assets_orderBy
      owner: $accounts_assets_owner
      ownershipRequest: $accounts_assets_ownershipRequest
      search: $accounts_assets_search
      walletAddress: $accounts_assets_walletAddress
    ) {
      address
      adoType
      appContract
      chainId
      disowned
      instantiateHash
      instantiateHeight
      instantiateOwner
      kernel
      lastUpdatedHash
      lastUpdatedHeight
      memo
      minter
      name
      owner
      ownershipRequest
    }
  }
}
    `;
exports.CodegenGeneratedAccountsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_ACCOUNTS {
  accounts {
    wallets
  }
}
    `;
exports.CodegenGeneratedChainconfigsAllconfigsIconurlsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS_ICONURLS {
  chainConfigs {
    allConfigs {
      iconUrls {
        lg
        sm
      }
    }
  }
}
    `;
exports.CodegenGeneratedChainconfigsAllconfigsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS {
  chainConfigs {
    allConfigs {
      addressPrefix
      blockExplorerAddressPages
      blockExplorerTxPages
      chainId
      chainName
      chainType
      chainUrl
      defaultFee
      enabled
      iconUrls {
        lg
        sm
      }
      kernelAddress
      name
      registryAddress
    }
  }
}
    `;
exports.CodegenGeneratedChainconfigsAllstoredconfigsIconurlsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CHAINCONFIGS_ALLSTOREDCONFIGS_ICONURLS {
  chainConfigs {
    allStoredConfigs {
      iconUrls {
        lg
        sm
      }
    }
  }
}
    `;
exports.CodegenGeneratedChainconfigsAllstoredconfigsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CHAINCONFIGS_ALLSTOREDCONFIGS {
  chainConfigs {
    allStoredConfigs {
      addressPrefix
      blockExplorerAddressPages
      blockExplorerTxPages
      chainId
      chainName
      chainType
      chainUrl
      defaultFee
      enabled
      iconUrls {
        lg
        sm
      }
      kernelAddress
      name
      registryAddress
    }
  }
}
    `;
exports.CodegenGeneratedChainconfigsConfigIconurlsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CHAINCONFIGS_CONFIG_ICONURLS($chainConfigs_config_identifier: String!) {
  chainConfigs {
    config(identifier: $chainConfigs_config_identifier) {
      iconUrls {
        lg
        sm
      }
    }
  }
}
    `;
exports.CodegenGeneratedChainconfigsConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CHAINCONFIGS_CONFIG($chainConfigs_config_identifier: String!) {
  chainConfigs {
    config(identifier: $chainConfigs_config_identifier) {
      addressPrefix
      blockExplorerAddressPages
      blockExplorerTxPages
      chainId
      chainName
      chainType
      chainUrl
      defaultFee
      enabled
      iconUrls {
        lg
        sm
      }
      kernelAddress
      name
      registryAddress
    }
  }
}
    `;
exports.CodegenGeneratedChainconfigsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CHAINCONFIGS {
  chainConfigs {
    allConfigs {
      addressPrefix
      blockExplorerAddressPages
      blockExplorerTxPages
      chainId
      chainName
      chainType
      chainUrl
      defaultFee
      enabled
      iconUrls {
        lg
        sm
      }
      kernelAddress
      name
      registryAddress
    }
    allStoredConfigs {
      addressPrefix
      blockExplorerAddressPages
      blockExplorerTxPages
      chainId
      chainName
      chainType
      chainUrl
      defaultFee
      enabled
      iconUrls {
        lg
        sm
      }
      kernelAddress
      name
      registryAddress
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BECH32CONFIG {
  keplrConfigs {
    allConfigs {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsAllconfigsBip44Document = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BIP44 {
  keplrConfigs {
    allConfigs {
      bip44 {
        coinType
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsAllconfigsCurrenciesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_CURRENCIES {
  keplrConfigs {
    allConfigs {
      currencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_FEECURRENCIES {
  keplrConfigs {
    allConfigs {
      feeCurrencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsAllconfigsGaspricestepDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_GASPRICESTEP {
  keplrConfigs {
    allConfigs {
      gasPriceStep {
        average
        high
        low
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_STAKECURRENCY {
  keplrConfigs {
    allConfigs {
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsAllconfigsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS {
  keplrConfigs {
    allConfigs {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
      }
      bip44 {
        coinType
      }
      chainId
      chainName
      coinType
      currencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
      feeCurrencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
      gasPriceStep {
        average
        high
        low
      }
      rest
      rpc
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsConfigBech32ConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BECH32CONFIG($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsConfigBip44Document = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BIP44($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      bip44 {
        coinType
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsConfigCurrenciesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_CURRENCIES($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      currencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsConfigFeecurrenciesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_FEECURRENCIES($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      feeCurrencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsConfigGaspricestepDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_GASPRICESTEP($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      gasPriceStep {
        average
        high
        low
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsConfigStakecurrencyDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_STAKECURRENCY($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsConfigDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
      }
      bip44 {
        coinType
      }
      chainId
      chainName
      coinType
      currencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
      feeCurrencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
      gasPriceStep {
        average
        high
        low
      }
      rest
      rpc
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
exports.CodegenGeneratedKeplrconfigsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_KEPLRCONFIGS {
  keplrConfigs {
    allConfigs {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
      }
      bip44 {
        coinType
      }
      chainId
      chainName
      coinType
      currencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
      feeCurrencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
      gasPriceStep {
        average
        high
        low
      }
      rest
      rpc
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByaccountEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS_ATTRIBUTES($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByaccountEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByaccountMsgresponsesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYACCOUNT_MSGRESPONSES($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      msgResponses {
        typeUrl
        value
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByaccountTxlogEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByaccountTxlogEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByaccountTxlogDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByaccountDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYACCOUNT($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      msgResponses {
        typeUrl
        value
      }
      rawLog
      tx
      txIndex
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBycontractEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS_ATTRIBUTES($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBycontractEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBycontractMsgresponsesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYCONTRACT_MSGRESPONSES($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      msgResponses {
        typeUrl
        value
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBycontractTxlogEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBycontractTxlogEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBycontractTxlogDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBycontractDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYCONTRACT($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      msgResponses {
        typeUrl
        value
      }
      rawLog
      tx
      txIndex
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByhashEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHASH_EVENTS_ATTRIBUTES($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByhashEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHASH_EVENTS($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByhashMsgresponsesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHASH_MSGRESPONSES($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      msgResponses {
        typeUrl
        value
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByhashTxlogEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByhashTxlogEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByhashTxlogDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHASH_TXLOG($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByhashDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHASH($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      msgResponses {
        typeUrl
        value
      }
      rawLog
      tx
      txIndex
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByheightEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS_ATTRIBUTES($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByheightEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByheightMsgresponsesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHEIGHT_MSGRESPONSES($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      msgResponses {
        typeUrl
        value
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByheightTxlogEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByheightTxlogEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByheightTxlogDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByheightDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYHEIGHT($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      msgResponses {
        typeUrl
        value
      }
      rawLog
      tx
      txIndex
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByownerEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYOWNER_EVENTS_ATTRIBUTES($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByownerEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYOWNER_EVENTS($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByownerMsgresponsesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYOWNER_MSGRESPONSES($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      msgResponses {
        typeUrl
        value
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByownerTxlogEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByownerTxlogEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByownerTxlogDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYOWNER_TXLOG($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByownerDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYOWNER($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      msgResponses {
        typeUrl
        value
      }
      rawLog
      tx
      txIndex
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByrawstringEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYRAWSTRING_EVENTS_ATTRIBUTES($chainId: String!, $tx_byRawString_query: String!) {
  tx(chainId: $chainId) {
    byRawString(query: $tx_byRawString_query) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByrawstringEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYRAWSTRING_EVENTS($chainId: String!, $tx_byRawString_query: String!) {
  tx(chainId: $chainId) {
    byRawString(query: $tx_byRawString_query) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByrawstringMsgresponsesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYRAWSTRING_MSGRESPONSES($chainId: String!, $tx_byRawString_query: String!) {
  tx(chainId: $chainId) {
    byRawString(query: $tx_byRawString_query) {
      msgResponses {
        typeUrl
        value
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByrawstringTxlogEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byRawString_query: String!) {
  tx(chainId: $chainId) {
    byRawString(query: $tx_byRawString_query) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByrawstringTxlogEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG_EVENTS($chainId: String!, $tx_byRawString_query: String!) {
  tx(chainId: $chainId) {
    byRawString(query: $tx_byRawString_query) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByrawstringTxlogDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG($chainId: String!, $tx_byRawString_query: String!) {
  tx(chainId: $chainId) {
    byRawString(query: $tx_byRawString_query) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxByrawstringDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYRAWSTRING($chainId: String!, $tx_byRawString_query: String!) {
  tx(chainId: $chainId) {
    byRawString(query: $tx_byRawString_query) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      msgResponses {
        typeUrl
        value
      }
      rawLog
      tx
      txIndex
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBytagEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYTAG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBytagEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYTAG_EVENTS($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBytagMsgresponsesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYTAG_MSGRESPONSES($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      msgResponses {
        typeUrl
        value
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBytagTxlogEventsAttributesDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBytagTxlogEventsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBytagTxlogDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYTAG_TXLOG($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxBytagDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX_BYTAG($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      msgResponses {
        typeUrl
        value
      }
      rawLog
      tx
      txIndex
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedTxDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TX($chainId: String!) {
  tx(chainId: $chainId) {
    chainId
  }
}
    `;
exports.CodegenGeneratedAdoaddedDocument = (0, graphql_tag_1.default) `
    subscription CODEGEN_GENERATED_ADOADDED($filter: AdoAddedSubscriptionInput!) {
  adoAdded(filter: $filter) {
    address
    adoType
    appContract
    chainId
    instantiateHash
    instantiateHeight
    lastUpdatedHash
    lastUpdatedHeight
    minter
    name
    owner
  }
}
    `;
exports.CodegenGeneratedAdoownerupdatedDocument = (0, graphql_tag_1.default) `
    subscription CODEGEN_GENERATED_ADOOWNERUPDATED($filter: AdoOwnerUpdatedSubscriptionInput!) {
  adoOwnerUpdated(filter: $filter) {
    address
    adoType
    appContract
    chainId
    instantiateHash
    instantiateHeight
    lastUpdatedHash
    lastUpdatedHeight
    minter
    name
    owner
  }
}
    `;
exports.TxByAccountDocument = (0, graphql_tag_1.default) `
    query TX_BY_ACCOUNT($chainId: String!, $sentFromOrTo: String!, $minHeight: Int, $maxHeight: Int) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $maxHeight
      minHeight: $minHeight
      sentFromOrTo: $sentFromOrTo
    ) {
      ...txInfo
    }
  }
}
    ${exports.TxInfoFragmentDoc}`;
exports.TxByContractDocument = (0, graphql_tag_1.default) `
    query TX_BY_CONTRACT($chainId: String!, $contractAddress: String!, $minHeight: Int, $maxHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $contractAddress
      minHeight: $minHeight
      maxHeight: $maxHeight
    ) {
      ...txInfo
    }
  }
}
    ${exports.TxInfoFragmentDoc}`;
exports.TxByHeightDocument = (0, graphql_tag_1.default) `
    query TX_BY_HEIGHT($chainId: String!, $height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $height) {
      ...txInfo
    }
  }
}
    ${exports.TxInfoFragmentDoc}`;
exports.TxByHashDocument = (0, graphql_tag_1.default) `
    query TX_BY_HASH($chainId: String!, $hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $hash) {
      ...txInfo
    }
  }
}
    ${exports.TxInfoFragmentDoc}`;
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        ADDRESS_LIST_CONTAINS_ADDRESS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddressListContainsAddressDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ADDRESS_LIST_CONTAINS_ADDRESS', 'query');
        },
        APP_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AppConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'APP_CONFIG', 'query');
        },
        APP_COMPONENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AppComponentsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'APP_COMPONENTS', 'query');
        },
        APP_CONFIG_AND_COMPONENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AppConfigAndComponentsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'APP_CONFIG_AND_COMPONENTS', 'query');
        },
        ASSETS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AssetsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ASSETS', 'query');
        },
        BASE_ADO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.BaseAdoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'BASE_ADO', 'query');
        },
        MINI_BASE_ADO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.MiniBaseAdoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'MINI_BASE_ADO', 'query');
        },
        CROWDFUND_AVAILABLE_TOKENS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CrowdfundAvailableTokensDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CROWDFUND_AVAILABLE_TOKENS', 'query');
        },
        CROWDFUND_IS_TOKEN_AVAILABLE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CrowdfundIsTokenAvailableDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CROWDFUND_IS_TOKEN_AVAILABLE', 'query');
        },
        CROWDFUND_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CrowdfundConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CROWDFUND_CONFIG', 'query');
        },
        CROWDFUND_STATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CrowdfundStateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CROWDFUND_STATE', 'query');
        },
        CW20_TOKEN_INFO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.Cw20TokenInfoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CW20_TOKEN_INFO', 'query');
        },
        CW20(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.Cw20Document, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CW20', 'query');
        },
        CW721_INFO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.Cw721InfoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CW721_INFO', 'query');
        },
        CHAIN_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ChainConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CHAIN_CONFIG', 'query');
        },
        ALL_CHAIN_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AllChainConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ALL_CHAIN_CONFIG', 'query');
        },
        ALL_STORED_CHAIN_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AllStoredChainConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ALL_STORED_CHAIN_CONFIG', 'query');
        },
        KEPLR_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.KeplrConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'KEPLR_CONFIG', 'query');
        },
        ALL_KEPLR_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AllKeplrConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ALL_KEPLR_CONFIG', 'query');
        },
        CODEGEN_GENERATED_ADO_ADDRESS_LIST_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAddressListAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_ADDRESS_LIST_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_ADDRESS_LIST_INCLUDESADDRESS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAddressListIncludesaddressDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_ADDRESS_LIST_INCLUDESADDRESS', 'query');
        },
        CODEGEN_GENERATED_ADO_ADDRESS_LIST(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAddressListDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_ADDRESS_LIST', 'query');
        },
        CODEGEN_GENERATED_ADO_ADO_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAdoAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_ADO_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_ADO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAdoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_ADO', 'query');
        },
        CODEGEN_GENERATED_ADO_ADOSMART(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAdosmartDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_ADOSMART', 'query');
        },
        CODEGEN_GENERATED_ADO_APP_ADDRESSES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAppAddressesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_APP_ADDRESSES', 'query');
        },
        CODEGEN_GENERATED_ADO_APP_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAppAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_APP_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_APP_COMPONENTEXISTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAppComponentexistsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_APP_COMPONENTEXISTS', 'query');
        },
        CODEGEN_GENERATED_ADO_APP_COMPONENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAppComponentsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_APP_COMPONENTS', 'query');
        },
        CODEGEN_GENERATED_ADO_APP_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAppConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_APP_CONFIG', 'query');
        },
        CODEGEN_GENERATED_ADO_APP_GETADDRESS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAppGetaddressDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_APP_GETADDRESS', 'query');
        },
        CODEGEN_GENERATED_ADO_APP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAppDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_APP', 'query');
        },
        CODEGEN_GENERATED_ADO_AUCTION_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAuctionAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_AUCTION_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_AUCTION_AUCTIONIDS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAuctionAuctionidsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_AUCTION_AUCTIONIDS', 'query');
        },
        CODEGEN_GENERATED_ADO_AUCTION_AUCTIONINFOSFORADDRESS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAuctionAuctioninfosforaddressDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_AUCTION_AUCTIONINFOSFORADDRESS', 'query');
        },
        CODEGEN_GENERATED_ADO_AUCTION_AUCTIONSTATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAuctionAuctionstateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_AUCTION_AUCTIONSTATE', 'query');
        },
        CODEGEN_GENERATED_ADO_AUCTION_BIDS_BIDS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAuctionBidsBidsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_AUCTION_BIDS_BIDS', 'query');
        },
        CODEGEN_GENERATED_ADO_AUCTION_BIDS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAuctionBidsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_AUCTION_BIDS', 'query');
        },
        CODEGEN_GENERATED_ADO_AUCTION_LATESTAUCTIONSTATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAuctionLatestauctionstateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_AUCTION_LATESTAUCTIONSTATE', 'query');
        },
        CODEGEN_GENERATED_ADO_AUCTION_SUMMARYFIELDS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAuctionSummaryfieldsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_AUCTION_SUMMARYFIELDS', 'query');
        },
        CODEGEN_GENERATED_ADO_AUCTION(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoAuctionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_AUCTION', 'query');
        },
        CODEGEN_GENERATED_ADO_CHAINID(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoChainidDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CHAINID', 'query');
        },
        CODEGEN_GENERATED_ADO_CROWDFUND_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCrowdfundAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CROWDFUND_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_CROWDFUND_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCrowdfundConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CROWDFUND_CONFIG', 'query');
        },
        CODEGEN_GENERATED_ADO_CROWDFUND_ISTOKENAVAILABLE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCrowdfundIstokenavailableDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CROWDFUND_ISTOKENAVAILABLE', 'query');
        },
        CODEGEN_GENERATED_ADO_CROWDFUND_STATE_PRICE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCrowdfundStatePriceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CROWDFUND_STATE_PRICE', 'query');
        },
        CODEGEN_GENERATED_ADO_CROWDFUND_STATE_RECIPIENT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCrowdfundStateRecipientDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CROWDFUND_STATE_RECIPIENT', 'query');
        },
        CODEGEN_GENERATED_ADO_CROWDFUND_STATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCrowdfundStateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CROWDFUND_STATE', 'query');
        },
        CODEGEN_GENERATED_ADO_CROWDFUND(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCrowdfundDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CROWDFUND', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_ALLACCOUNTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20AllaccountsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_ALLACCOUNTS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_ALLALLOWANCES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20AllallowancesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_ALLALLOWANCES', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_ALLSPENDERALLOWANCES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20AllspenderallowancesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_ALLSPENDERALLOWANCES', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_ALLOWANCE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20AllowanceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_ALLOWANCE', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20AndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_BALANCE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20BalanceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_BALANCE', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_DOWNLOADLOGO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20DownloadlogoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_DOWNLOADLOGO', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_MARKETINGINFO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20MarketinginfoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_MARKETINGINFO', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_MINTER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20MinterDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_MINTER', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_TOKENINFO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20TokeninfoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_TOKENINFO', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20Document, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_EXCHANGE_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20ExchangeAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_EXCHANGE_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20ExchangeSaleDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALE', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALEASSETS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20ExchangeSaleassetsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALEASSETS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_EXCHANGE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20ExchangeDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_EXCHANGE', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_STAKING_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20StakingAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_STAKING_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG_STAKING_TOKEN(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20StakingConfigStakingTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG_STAKING_TOKEN', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20StakingConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_STAKING_STAKER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20StakingStakerDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_STAKING_STAKER', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_STAKING_STAKERS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20StakingStakersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_STAKING_STAKERS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_STAKING_STATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20StakingStateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_STAKING_STATE', 'query');
        },
        CODEGEN_GENERATED_ADO_CW20_STAKING(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw20StakingDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW20_STAKING', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS_APPROVALS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS_APPROVALS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721AllnftinfoAccessDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_EXTENSION(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721AllnftinfoInfoExtensionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_EXTENSION', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_METADATA_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721AllnftinfoInfoMetadataAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_METADATA_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_METADATA(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721AllnftinfoInfoMetadataDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_METADATA', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721AllnftinfoInfoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721AllnftinfoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ALLOPERATORS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721AlloperatorsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ALLOPERATORS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ALLTOKENS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721AlltokensDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ALLTOKENS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721AndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_APPROVAL(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721ApprovalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_APPROVAL', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_APPROVALS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721ApprovalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_APPROVALS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_CONTRACTINFO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721ContractinfoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_CONTRACTINFO', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_ISARCHIVED(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721IsarchivedDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_ISARCHIVED', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_NFTINFO_EXTENSION(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721NftinfoExtensionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_NFTINFO_EXTENSION', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_NFTINFO_METADATA_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721NftinfoMetadataAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_NFTINFO_METADATA_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_NFTINFO_METADATA(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721NftinfoMetadataDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_NFTINFO_METADATA', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_NFTINFO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721NftinfoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_NFTINFO', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_NUMOWNERS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721NumownersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_NUMOWNERS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_OWNEROF_APPROVALS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721OwnerofApprovalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_OWNEROF_APPROVALS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_OWNEROF(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721OwnerofDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_OWNEROF', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_EXTENSION(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721SearchtokensExtensionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_EXTENSION', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_METADATA_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721SearchtokensMetadataAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_METADATA_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_METADATA(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721SearchtokensMetadataDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_METADATA', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721SearchtokensDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_TOKENS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721TokensDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_TOKENS', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT_RAW(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT_RAW', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721TransferagreementAgreementAmountDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721TransferagreementAgreementDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721TransferagreementDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT', 'query');
        },
        CODEGEN_GENERATED_ADO_CW721(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoCw721Document, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_CW721', 'query');
        },
        CODEGEN_GENERATED_ADO_FACTORY_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoFactoryAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_FACTORY_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_FACTORY_CODE_ID(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoFactoryCodeIdDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_FACTORY_CODE_ID', 'query');
        },
        CODEGEN_GENERATED_ADO_FACTORY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoFactoryDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_FACTORY', 'query');
        },
        CODEGEN_GENERATED_ADO_LOCKDROP_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoLockdropAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_LOCKDROP_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_LOCKDROP_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoLockdropConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_LOCKDROP_CONFIG', 'query');
        },
        CODEGEN_GENERATED_ADO_LOCKDROP_STATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoLockdropStateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_LOCKDROP_STATE', 'query');
        },
        CODEGEN_GENERATED_ADO_LOCKDROP_USERINFO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoLockdropUserinfoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_LOCKDROP_USERINFO', 'query');
        },
        CODEGEN_GENERATED_ADO_LOCKDROP_WITHDRAWALPERCENTALLOWED(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoLockdropWithdrawalpercentallowedDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_LOCKDROP_WITHDRAWALPERCENTALLOWED', 'query');
        },
        CODEGEN_GENERATED_ADO_LOCKDROP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoLockdropDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_LOCKDROP', 'query');
        },
        CODEGEN_GENERATED_ADO_MARKETPLACE_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMarketplaceAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MARKETPLACE_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_MARKETPLACE_LATESTSALESTATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMarketplaceLatestsalestateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MARKETPLACE_LATESTSALESTATE', 'query');
        },
        CODEGEN_GENERATED_ADO_MARKETPLACE_SALEIDS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMarketplaceSaleidsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MARKETPLACE_SALEIDS', 'query');
        },
        CODEGEN_GENERATED_ADO_MARKETPLACE_SALEINFOSFORADDRESS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMarketplaceSaleinfosforaddressDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MARKETPLACE_SALEINFOSFORADDRESS', 'query');
        },
        CODEGEN_GENERATED_ADO_MARKETPLACE_SALESTATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMarketplaceSalestateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MARKETPLACE_SALESTATE', 'query');
        },
        CODEGEN_GENERATED_ADO_MARKETPLACE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMarketplaceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MARKETPLACE', 'query');
        },
        CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMerkleAirdropAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMerkleAirdropConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_CONFIG', 'query');
        },
        CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ISCLAIMED(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMerkleAirdropIsclaimedDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ISCLAIMED', 'query');
        },
        CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_MERKLEROOT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMerkleAirdropMerklerootDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_MERKLEROOT', 'query');
        },
        CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_TOTALCLAIMED(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_TOTALCLAIMED', 'query');
        },
        CODEGEN_GENERATED_ADO_MERKLE_AIRDROP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoMerkleAirdropDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP', 'query');
        },
        CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoPrimitiveAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_PRIMITIVE_GETVALUE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoPrimitiveGetvalueDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_PRIMITIVE_GETVALUE', 'query');
        },
        CODEGEN_GENERATED_ADO_PRIMITIVE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoPrimitiveDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_PRIMITIVE', 'query');
        },
        CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ACCOUNTDETAILS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ACCOUNTDETAILS', 'query');
        },
        CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRateLimitingWithdrawalsAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_COINALLOWANCEDETAILS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_COINALLOWANCEDETAILS', 'query');
        },
        CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRateLimitingWithdrawalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS', 'query');
        },
        CODEGEN_GENERATED_ADO_RATES_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRatesAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATES_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_EXTERNAL(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRatesPaymentsRateExternalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_EXTERNAL', 'query');
        },
        CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_FLAT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRatesPaymentsRateFlatDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_FLAT', 'query');
        },
        CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_PERCENT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRatesPaymentsRatePercentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_PERCENT', 'query');
        },
        CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRatesPaymentsRateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE', 'query');
        },
        CODEGEN_GENERATED_ADO_RATES_PAYMENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRatesPaymentsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATES_PAYMENTS', 'query');
        },
        CODEGEN_GENERATED_ADO_RATES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoRatesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_RATES', 'query');
        },
        CODEGEN_GENERATED_ADO_SPLITTER_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoSplitterAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_SPLITTER_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_SPLITTER_CONFIG_RECIPIENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoSplitterConfigRecipientsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_SPLITTER_CONFIG_RECIPIENTS', 'query');
        },
        CODEGEN_GENERATED_ADO_SPLITTER_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoSplitterConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_SPLITTER_CONFIG', 'query');
        },
        CODEGEN_GENERATED_ADO_SPLITTER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoSplitterDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_SPLITTER', 'query');
        },
        CODEGEN_GENERATED_ADO_TIMELOCK_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoTimelockAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_TIMELOCK_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_COINS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoTimelockGetlockedfundsCoinsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_COINS', 'query');
        },
        CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION_MINIUMFUNDS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION_MINIUMFUNDS', 'query');
        },
        CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoTimelockGetlockedfundsConditionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION', 'query');
        },
        CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoTimelockGetlockedfundsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS', 'query');
        },
        CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_COINS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_COINS', 'query');
        },
        CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION_MINIUMFUNDS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION_MINIUMFUNDS', 'query');
        },
        CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION', 'query');
        },
        CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoTimelockGetlockedfundsforrecipientDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT', 'query');
        },
        CODEGEN_GENERATED_ADO_TIMELOCK(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoTimelockDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_TIMELOCK', 'query');
        },
        CODEGEN_GENERATED_ADO_VAULT_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoVaultAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_VAULT_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_VAULT_BALANCE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoVaultBalanceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_VAULT_BALANCE', 'query');
        },
        CODEGEN_GENERATED_ADO_VAULT_STRATEGYADDRESS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoVaultStrategyaddressDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_VAULT_STRATEGYADDRESS', 'query');
        },
        CODEGEN_GENERATED_ADO_VAULT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoVaultDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_VAULT', 'query');
        },
        CODEGEN_GENERATED_ADO_VESTING_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoVestingAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_VESTING_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_VESTING_BATCH(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoVestingBatchDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_VESTING_BATCH', 'query');
        },
        CODEGEN_GENERATED_ADO_VESTING_BATCHES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoVestingBatchesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_VESTING_BATCHES', 'query');
        },
        CODEGEN_GENERATED_ADO_VESTING_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoVestingConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_VESTING_CONFIG', 'query');
        },
        CODEGEN_GENERATED_ADO_VESTING(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoVestingDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_VESTING', 'query');
        },
        CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_ANDR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoWeightedDistributionSplitterAndrDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_ANDR', 'query');
        },
        CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG_RECIPIENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG_RECIPIENTS', 'query');
        },
        CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoWeightedDistributionSplitterConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG', 'query');
        },
        CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_GETUSERWEIGHT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_GETUSERWEIGHT', 'query');
        },
        CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoWeightedDistributionSplitterDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER', 'query');
        },
        CODEGEN_GENERATED_ADO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADO', 'query');
        },
        CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS_RECEIVE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdopPackageSchemasReceiveDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS_RECEIVE', 'query');
        },
        CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdopPackageSchemasDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS', 'query');
        },
        CODEGEN_GENERATED_ADOP_PACKAGE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdopPackageDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADOP_PACKAGE', 'query');
        },
        CODEGEN_GENERATED_ADOP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdopDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADOP', 'query');
        },
        CODEGEN_GENERATED_ACCOUNTS_ASSETS_COMPONENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAccountsAssetsComponentsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ACCOUNTS_ASSETS_COMPONENTS', 'query');
        },
        CODEGEN_GENERATED_ACCOUNTS_ASSETS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAccountsAssetsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ACCOUNTS_ASSETS', 'query');
        },
        CODEGEN_GENERATED_ACCOUNTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAccountsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ACCOUNTS', 'query');
        },
        CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS_ICONURLS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainconfigsAllconfigsIconurlsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS_ICONURLS', 'query');
        },
        CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainconfigsAllconfigsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS', 'query');
        },
        CODEGEN_GENERATED_CHAINCONFIGS_ALLSTOREDCONFIGS_ICONURLS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainconfigsAllstoredconfigsIconurlsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINCONFIGS_ALLSTOREDCONFIGS_ICONURLS', 'query');
        },
        CODEGEN_GENERATED_CHAINCONFIGS_ALLSTOREDCONFIGS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainconfigsAllstoredconfigsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINCONFIGS_ALLSTOREDCONFIGS', 'query');
        },
        CODEGEN_GENERATED_CHAINCONFIGS_CONFIG_ICONURLS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainconfigsConfigIconurlsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINCONFIGS_CONFIG_ICONURLS', 'query');
        },
        CODEGEN_GENERATED_CHAINCONFIGS_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainconfigsConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINCONFIGS_CONFIG', 'query');
        },
        CODEGEN_GENERATED_CHAINCONFIGS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainconfigsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINCONFIGS', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BECH32CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BECH32CONFIG', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BIP44(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsAllconfigsBip44Document, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BIP44', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_CURRENCIES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsAllconfigsCurrenciesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_CURRENCIES', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_FEECURRENCIES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_FEECURRENCIES', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_GASPRICESTEP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsAllconfigsGaspricestepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_GASPRICESTEP', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_STAKECURRENCY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_STAKECURRENCY', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsAllconfigsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BECH32CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsConfigBech32ConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BECH32CONFIG', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BIP44(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsConfigBip44Document, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BIP44', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_CURRENCIES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsConfigCurrenciesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_CURRENCIES', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_FEECURRENCIES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsConfigFeecurrenciesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_FEECURRENCIES', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_GASPRICESTEP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsConfigGaspricestepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_GASPRICESTEP', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_STAKECURRENCY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsConfigStakecurrencyDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_STAKECURRENCY', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG', 'query');
        },
        CODEGEN_GENERATED_KEPLRCONFIGS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedKeplrconfigsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_KEPLRCONFIGS', 'query');
        },
        CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByaccountEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByaccountEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYACCOUNT_MSGRESPONSES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByaccountMsgresponsesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYACCOUNT_MSGRESPONSES', 'query');
        },
        CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByaccountTxlogEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByaccountTxlogEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByaccountTxlogDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG', 'query');
        },
        CODEGEN_GENERATED_TX_BYACCOUNT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByaccountDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYACCOUNT', 'query');
        },
        CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBycontractEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBycontractEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYCONTRACT_MSGRESPONSES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBycontractMsgresponsesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYCONTRACT_MSGRESPONSES', 'query');
        },
        CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBycontractTxlogEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBycontractTxlogEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBycontractTxlogDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG', 'query');
        },
        CODEGEN_GENERATED_TX_BYCONTRACT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBycontractDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYCONTRACT', 'query');
        },
        CODEGEN_GENERATED_TX_BYHASH_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByhashEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHASH_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYHASH_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByhashEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHASH_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYHASH_MSGRESPONSES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByhashMsgresponsesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHASH_MSGRESPONSES', 'query');
        },
        CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByhashTxlogEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByhashTxlogEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYHASH_TXLOG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByhashTxlogDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHASH_TXLOG', 'query');
        },
        CODEGEN_GENERATED_TX_BYHASH(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByhashDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHASH', 'query');
        },
        CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByheightEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByheightEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYHEIGHT_MSGRESPONSES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByheightMsgresponsesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHEIGHT_MSGRESPONSES', 'query');
        },
        CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByheightTxlogEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByheightTxlogEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByheightTxlogDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG', 'query');
        },
        CODEGEN_GENERATED_TX_BYHEIGHT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByheightDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYHEIGHT', 'query');
        },
        CODEGEN_GENERATED_TX_BYOWNER_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByownerEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYOWNER_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYOWNER_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByownerEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYOWNER_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYOWNER_MSGRESPONSES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByownerMsgresponsesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYOWNER_MSGRESPONSES', 'query');
        },
        CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByownerTxlogEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByownerTxlogEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYOWNER_TXLOG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByownerTxlogDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYOWNER_TXLOG', 'query');
        },
        CODEGEN_GENERATED_TX_BYOWNER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByownerDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYOWNER', 'query');
        },
        CODEGEN_GENERATED_TX_BYRAWSTRING_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByrawstringEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYRAWSTRING_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYRAWSTRING_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByrawstringEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYRAWSTRING_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYRAWSTRING_MSGRESPONSES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByrawstringMsgresponsesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYRAWSTRING_MSGRESPONSES', 'query');
        },
        CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByrawstringTxlogEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByrawstringTxlogEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByrawstringTxlogDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYRAWSTRING_TXLOG', 'query');
        },
        CODEGEN_GENERATED_TX_BYRAWSTRING(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxByrawstringDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYRAWSTRING', 'query');
        },
        CODEGEN_GENERATED_TX_BYTAG_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBytagEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYTAG_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYTAG_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBytagEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYTAG_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYTAG_MSGRESPONSES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBytagMsgresponsesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYTAG_MSGRESPONSES', 'query');
        },
        CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS_ATTRIBUTES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBytagTxlogEventsAttributesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS_ATTRIBUTES', 'query');
        },
        CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBytagTxlogEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS', 'query');
        },
        CODEGEN_GENERATED_TX_BYTAG_TXLOG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBytagTxlogDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYTAG_TXLOG', 'query');
        },
        CODEGEN_GENERATED_TX_BYTAG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxBytagDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX_BYTAG', 'query');
        },
        CODEGEN_GENERATED_TX(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTxDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TX', 'query');
        },
        CODEGEN_GENERATED_ADOADDED(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoaddedDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADOADDED', 'subscription');
        },
        CODEGEN_GENERATED_ADOOWNERUPDATED(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedAdoownerupdatedDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ADOOWNERUPDATED', 'subscription');
        },
        TX_BY_ACCOUNT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TxByAccountDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'TX_BY_ACCOUNT', 'query');
        },
        TX_BY_CONTRACT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TxByContractDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'TX_BY_CONTRACT', 'query');
        },
        TX_BY_HEIGHT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TxByHeightDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'TX_BY_HEIGHT', 'query');
        },
        TX_BY_HASH(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TxByHashDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'TX_BY_HASH', 'query');
        }
    };
}
exports.getSdk = getSdk;
