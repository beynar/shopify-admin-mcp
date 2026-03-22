# Shop: Shop settings, staff, domains, tax, policies

## Queries (18)

- **[businessEntities](../queries/businessEntities.md)** → `[BusinessEntity!]!`
  Returns the list of [business entities](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity) associated with the shop. Use this q
- **[businessEntity](../queries/businessEntity.md)** → `BusinessEntity` `(id)`
  Returns a Business Entity by ID.
- **[dispute](../queries/dispute.md)** → `ShopifyPaymentsDispute` `(id)`
  Returns a `ShopifyPaymentsDispute` resource by ID.
- **[disputeEvidence](../queries/disputeEvidence.md)** → `ShopifyPaymentsDisputeEvidence` `(id)`
  Returns a `ShopifyPaymentsDisputeEvidence` resource by ID.
- **[disputes](../queries/disputes.md)** → `ShopifyPaymentsDisputeConnection!` `(first, after, last, before, reverse, query)`
  All disputes related to the Shop.
- **[domain](../queries/domain.md)** → `Domain` `(id)`
  Returns a `Domain` resource by ID.
- **[primaryMarket](../queries/primaryMarket.md)** → `Market!`
  The primary market of the shop.
- **[privacySettings](../queries/privacySettings.md)** → `PrivacySettings!`
  Privacy related settings for a shop.
- **[shop](../queries/shop.md)** → `Shop!`
  Returns the Shop resource corresponding to the access token used in the request. The Shop resource contains
- **[shopBillingPreferences](../queries/shopBillingPreferences.md)** → `ShopBillingPreferences!`
  The shop's billing preferences, including the currency for paying for apps and services. Use this to create [app charges in the merchant's local billi
- **[shopLocales](../queries/shopLocales.md)** → `[ShopLocale!]!` `(published)`
  Returns the locales enabled on a shop. Each locale represents a language for translations and determines how content displays to customers in differen
- **[shopPayPaymentRequestReceipt](../queries/shopPayPaymentRequestReceipt.md)** → `ShopPayPaymentRequestReceipt` `(token)`
  Returns a Shop Pay payment request receipt.
- **[shopPayPaymentRequestReceipts](../queries/shopPayPaymentRequestReceipts.md)** → `ShopPayPaymentRequestReceiptConnection` `(first, after, last, before, reverse, sortKey, query)`
  Returns a list of Shop Pay payment request receipts.
- **[shopifyFunction](../queries/shopifyFunction.md)** → `ShopifyFunction` `(id)`
  Returns a Shopify Function by its ID.
- **[shopifyFunctions](../queries/shopifyFunctions.md)** → `ShopifyFunctionConnection!` `(apiType, useCreationUi, first, after, last, before, reverse)`
  Returns Shopify Functions owned by the querying API client installed on the shop. [Functions](https://shopify.dev/docs/apps/build/functions) enable yo
- **[shopifyqlQuery](../queries/shopifyqlQuery.md)** → `ShopifyqlQueryResponse` `(query)`
  Executes a [ShopifyQL query](https://shopify.dev/docs/apps/build/shopifyql) to analyze store data and returns results in a tabular format.
- **[staffMember](../queries/staffMember.md)** → `StaffMember` `(id)`
  Retrieves a [staff member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) by ID. If no ID is provided, the query returns the s
- **[staffMembers](../queries/staffMembers.md)** → `StaffMemberConnection` `(first, after, last, before, reverse, sortKey, query)`
  Returns a paginated list of [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) objects for the shop. Staff members

## Mutations (13)

- **[disputeEvidenceUpdate](../mutations/disputeEvidenceUpdate.md)** → `DisputeEvidenceUpdatePayload` `(id, input)`
  Updates a dispute evidence.
- **[privacyFeaturesDisable](../mutations/privacyFeaturesDisable.md)** → `PrivacyFeaturesDisablePayload` `(featuresToDisable)`
  Disable a shop's privacy features.
- **[shopLocaleDisable](../mutations/shopLocaleDisable.md)** → `ShopLocaleDisablePayload` `(locale)`
  Deletes a locale for a shop. This also deletes all translations of this locale.
- **[shopLocaleEnable](../mutations/shopLocaleEnable.md)** → `ShopLocaleEnablePayload` `(locale, marketWebPresenceIds)`
  Adds a locale for a shop. The newly added locale is in the unpublished state.
- **[shopLocaleUpdate](../mutations/shopLocaleUpdate.md)** → `ShopLocaleUpdatePayload` `(locale, shopLocale)`
  Updates a locale for a shop.
- **[shopPolicyUpdate](../mutations/shopPolicyUpdate.md)** → `ShopPolicyUpdatePayload` `(shopPolicy)`
  Updates a shop policy.
- **[shopResourceFeedbackCreate](../mutations/shopResourceFeedbackCreate.md)** → `ShopResourceFeedbackCreatePayload` `(input)`
  The `ResourceFeedback` object lets your app report the status of shops and their resources. For example, if
- **[storefrontAccessTokenCreate](../mutations/storefrontAccessTokenCreate.md)** → `StorefrontAccessTokenCreatePayload` `(input)`
  Creates a storefront access token that delegates unauthenticated access scopes to clients using the [Storefront API](https://shopify.dev/docs/api/stor
- **[storefrontAccessTokenDelete](../mutations/storefrontAccessTokenDelete.md)** → `StorefrontAccessTokenDeletePayload` `(input)`
  Deletes a storefront access token.
- **[tagsAdd](../mutations/tagsAdd.md)** → `TagsAddPayload` `(id, tags)`
  Adds tags to a resource in the store. Supported resources include [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftO
- **[tagsRemove](../mutations/tagsRemove.md)** → `TagsRemovePayload` `(id, tags)`
  Removes tags from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-gra
- **[taxAppConfigure](../mutations/taxAppConfigure.md)** → `TaxAppConfigurePayload` `(ready)`
  Allows tax app configurations for tax partners.
- **[taxSummaryCreate](../mutations/taxSummaryCreate.md)** → `TaxSummaryCreatePayload` `(orderId, startTime, endTime)`
  Creates a tax summary for a given order.
