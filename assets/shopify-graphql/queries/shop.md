# Query: `shop`

**Returns:** `Shop!`

Returns the Shop resource corresponding to the access token used in the request. The Shop resource contains
business and store management settings for the shop.

## Return Type Fields

- `accountOwner`: `StaffMember!` — Account owner information.
- `alerts`: `[ShopAlert!]!` — A list of the shop's active alert messages that appear in the Shopify admin.
- `allProductCategoriesList`: `[TaxonomyCategory!]!` — A list of the shop's product categories. Limit: 1000 product categories.
- `availableChannelApps`: `AppConnection!` — The list of sales channels not currently installed on the shop.
- `channelDefinitionsForInstalledChannels`: `[AvailableChannelDefinitionsByChannel!]!` — List of all channel definitions associated with a shop.
- `checkoutApiSupported`: `Boolean!` — Specifies whether the shop supports checkouts via Checkout API.
- `contactEmail`: `String!` — The public-facing contact email address for the shop.
- `countriesInShippingZones`: `CountriesInShippingZones!` — Countries that have been defined in shipping zones for the shop.
- `createdAt`: `DateTime!` — The date and time when the shop was created.
- `currencyCode`: `CurrencyCode!` — The three letter code for the currency that the shop sells in.
- `currencyFormats`: `CurrencyFormats!` — How currencies are displayed on your store.
- `currencySettings`: `CurrencySettingConnection!` — The presentment currency settings for the shop excluding the shop's own currency.
- `customerAccounts`: `ShopCustomerAccountsSetting!` — Whether customer accounts are required, optional, or disabled for the shop.
- `customerAccountsV2`: `CustomerAccountsV2!` — Information about the shop's customer accounts.
- `customerTags`: `StringConnection!` — A list of tags that have been added to customer accounts.
- `description`: `String` — The shop's meta description used in search engine results.
- `draftOrderTags`: `StringConnection!` — A list of tags that have been added to draft orders.
- `email`: `String!` — The shop owner's email address.
- `enabledPresentmentCurrencies`: `[CurrencyCode!]!` — The presentment currencies enabled for the shop.
- `entitlements`: `EntitlementsType!` — The entitlements for a shop.
- `features`: `ShopFeatures!` — The set of features enabled for the shop.
- `fulfillmentServices`: `[FulfillmentService!]!` — List of the shop's installed fulfillment services.
- `ianaTimezone`: `String!` — The shop's time zone as defined by the IANA.
- `id`: `ID!` — A globally-unique ID.
- `marketingSmsConsentEnabledAtCheckout`: `Boolean!` — Whether SMS marketing has been enabled on the shop's checkout configuration settings.
- `merchantApprovalSignals`: `MerchantApprovalSignals` — The approval signals for a shop to support onboarding to channel apps.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `myshopifyDomain`: `String!` — The shop's .myshopify.com domain name.
- `name`: `String!` — The shop's name.
- `navigationSettings`: `[NavigationItem!]!` — The shop's settings related to navigation.
- `orderNumberFormatPrefix`: `String!` — The prefix that appears before order numbers.
- `orderNumberFormatSuffix`: `String!` — The suffix that appears after order numbers.
- `orderTags`: `StringConnection!` — A list of tags that have been added to orders.
- `paymentSettings`: `PaymentSettings!` — The shop's settings related to payments.
- `plan`: `ShopPlan!` — The shop's billing plan.
- `primaryDomain`: `Domain!` — The primary domain of the shop's online store.
- `resourceLimits`: `ShopResourceLimits!` — The shop's limits for specific resources. For example, the maximum number ofvariants allowed per product, or the maximum number of locations allowed.
- `richTextEditorUrl`: `URL!` — The URL of the rich text editor that can be used for mobile devices.
- `search`: `SearchResultConnection!` — Fetches a list of admin search results by a specified query.
- `searchFilters`: `SearchFilterOptions!` — The list of search filter options for the shop. These can be used to filter productvisibility for the shop.
- `setupRequired`: `Boolean!` — Whether the shop has outstanding setup steps.
- `shipsToCountries`: `[CountryCode!]!` — The list of countries that the shop ships to.
- `shopAddress`: `ShopAddress!` — The shop's address information as it will appear to buyers.
- `shopOwnerName`: `String!` — The name of the shop owner.
- `shopPolicies`: `[ShopPolicy!]!` — The list of all legal policies associated with a shop.
- `storefrontAccessTokens`: `StorefrontAccessTokenConnection!` — The storefront access token of a private application. These are scoped per-application.
- `taxShipping`: `Boolean!` — Whether the shop charges taxes for shipping.
- `taxesIncluded`: `Boolean!` — Whether applicable taxes are included in the shop's product prices.
- `timezoneAbbreviation`: `String!` — The shop's time zone abbreviation.
- `timezoneOffset`: `String!` — The shop's time zone offset.
- `timezoneOffsetMinutes`: `Int!` — The shop's time zone offset expressed as a number of minutes.
- `transactionalSmsDisabled`: `Boolean!` — Whether transactional SMS sent by Shopify have been disabled for a shop.
- `translations`: `[Translation!]!` — The published translations associated with the resource.
- `unitSystem`: `UnitSystem!` — The shop's unit system for weights and measures.
- `updatedAt`: `DateTime!` — The date and time when the shop was last updated.
- `url`: `URL!` — The URL of the shop's online store.
- `weightUnit`: `WeightUnit!` — The shop's primary unit of weight for products and shipping.

## Related Types

- [AvailableChannelDefinitionsByChannel](../types/objects/AvailableChannelDefinitionsByChannel.md)
- [CountriesInShippingZones](../types/objects/CountriesInShippingZones.md)
- [CountryCode](../types/enums/CountryCode.md)
- [CurrencyCode](../types/enums/CurrencyCode.md)
- [CurrencyFormats](../types/objects/CurrencyFormats.md)
- [CustomerAccountsV2](../types/objects/CustomerAccountsV2.md)
- [Domain](../types/objects/Domain.md)
- [EntitlementsType](../types/objects/EntitlementsType.md)
- [FulfillmentService](../types/objects/FulfillmentService.md)
- [LimitedPendingOrderCount](../types/objects/LimitedPendingOrderCount.md)
- [MerchantApprovalSignals](../types/objects/MerchantApprovalSignals.md)
- [Metafield](../types/objects/Metafield.md)
- [NavigationItem](../types/objects/NavigationItem.md)
- [PaymentSettings](../types/objects/PaymentSettings.md)
- [ProductCategory](../types/objects/ProductCategory.md)
- [SearchFilterOptions](../types/objects/SearchFilterOptions.md)
- [Shop](../types/objects/Shop.md)
- [ShopAddress](../types/objects/ShopAddress.md)
- [ShopAlert](../types/objects/ShopAlert.md)
- [ShopCustomerAccountsSetting](../types/enums/ShopCustomerAccountsSetting.md)
- [ShopFeatures](../types/objects/ShopFeatures.md)
- [ShopPlan](../types/objects/ShopPlan.md)
- [ShopPolicy](../types/objects/ShopPolicy.md)
- [ShopResourceLimits](../types/objects/ShopResourceLimits.md)
- [StaffMember](../types/objects/StaffMember.md)
- [TaxonomyCategory](../types/objects/TaxonomyCategory.md)
- [Translation](../types/objects/Translation.md)
- [UnitSystem](../types/enums/UnitSystem.md)
- [WeightUnit](../types/enums/WeightUnit.md)

## Example Query

```graphql
query {
  shop {
    id
    checkoutApiSupported
    contactEmail
    createdAt
    description
    email
  }
}
```
