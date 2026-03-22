# Object: `Customer`

Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

> Caution:
> Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

**Implements:** `CommentEventSubject`, `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `HasStoreCreditAccounts`, `LegacyInteroperability`, `Node`

## Fields

- `addresses` `(first)`: `[MailingAddress!]!` *(deprecated)* — A list of addresses associated with the customer. Limited to 250 addresses. Use `addressesV2` for paginated access to all addresses.
- `addressesV2` `(first, after, last, before, reverse)`: `MailingAddressConnection!` — The addresses associated with the customer.
- `amountSpent`: `MoneyV2!` — The total amount that the customer has spent on orders in their lifetime.
- `canDelete`: `Boolean!` — Whether the merchant can delete the customer from their store.
- `companyContactProfiles`: `[CompanyContact!]!` — A list of the customer's company contact profiles.
- `createdAt`: `DateTime!` — The date and time when the customer was added to the store.
- `dataSaleOptOut`: `Boolean!` — Whether the customer has opted out of having their data sold.
- `defaultAddress`: `MailingAddress` — The default address associated with the customer.
- `defaultEmailAddress`: `CustomerEmailAddress` — The customer's default email address.
- `defaultPhoneNumber`: `CustomerPhoneNumber` — The customer's default phone number.
- `displayName`: `String!` — The full name of the customer, based on the values for first_name and last_name. If the first_name and
- `email`: `String` *(deprecated)* — The customer's email address.
- `emailMarketingConsent`: `CustomerEmailMarketingConsentState` *(deprecated)* — The current email marketing state for the customer.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — A list of events associated with the customer.
- `firstName`: `String` — The customer's first name.
- `hasTimelineComment`: `Boolean!` *(deprecated)* — Whether the merchant has added timeline comments about the customer on the customer's page.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image!` — The image associated with the customer.
- `lastName`: `String` — The customer's last name.
- `lastOrder`: `Order` — The customer's last order.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `lifetimeDuration`: `String!` — The amount of time since the customer was first added to the store.
- `locale`: `String!` — The customer's locale.
- `market`: `Market` *(deprecated)* — The market that includes the customer’s default address.
- `mergeable`: `CustomerMergeable!` — Whether the customer can be merged with another customer.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `multipassIdentifier`: `String` — A unique identifier for the customer that's used with Multipass login.
- `note`: `String` — A note about the customer.
- `numberOfOrders`: `UnsignedInt64!` — The number of orders that the customer has made at the store in their lifetime.
- `orders` `(first, after, last, before, reverse, sortKey, query)`: `OrderConnection!` — A list of the customer's orders.
- `paymentMethods` `(showRevoked, first, after, last, before, reverse)`: `CustomerPaymentMethodConnection!` — A list of the customer's payment methods.
- `phone`: `String` *(deprecated)* — The customer's phone number.
- `productSubscriberStatus`: `CustomerProductSubscriberStatus!` — Possible subscriber states of a customer defined by their subscription contracts.
- `smsMarketingConsent`: `CustomerSmsMarketingConsentState` *(deprecated)* — The current SMS marketing state for the customer's phone number.
- `state`: `CustomerState!` — The state of the customer's account with the shop.
- `statistics`: `CustomerStatistics!` — The statistics for a given customer.
- `storeCreditAccounts` `(first, after, last, before, query)`: `StoreCreditAccountConnection!` — Returns a list of store credit accounts that belong to the owner resource.
- `subscriptionContracts` `(first, after, last, before, reverse)`: `SubscriptionContractConnection!` — A list of the customer's subscription contracts.
- `tags`: `[String!]!` — A comma separated list of tags that have been added to the customer.
- `taxExempt`: `Boolean!` — Whether the customer is exempt from being charged taxes on their orders.
- `taxExemptions`: `[TaxExemption!]!` — The list of tax exemptions applied to the customer.
- `unsubscribeUrl`: `URL!` *(deprecated)* — The URL to unsubscribe the customer from the mailing list.
- `updatedAt`: `DateTime!` — The date and time when the customer was last updated.
- `validEmailAddress`: `Boolean!` *(deprecated)* — Whether the email address is formatted correctly.
- `verifiedEmail`: `Boolean!` — Whether the customer has verified their email address. Defaults to `true` if the customer is created through the Shopify admin or API.

## Related Types

- [CompanyContact](../../types/objects/CompanyContact.md)
- [CustomerEmailAddress](../../types/objects/CustomerEmailAddress.md)
- [CustomerEmailMarketingConsentState](../../types/objects/CustomerEmailMarketingConsentState.md)
- [CustomerMergeable](../../types/objects/CustomerMergeable.md)
- [CustomerPhoneNumber](../../types/objects/CustomerPhoneNumber.md)
- [CustomerProductSubscriberStatus](../../types/enums/CustomerProductSubscriberStatus.md)
- [CustomerSmsMarketingConsentState](../../types/objects/CustomerSmsMarketingConsentState.md)
- [CustomerState](../../types/enums/CustomerState.md)
- [CustomerStatistics](../../types/objects/CustomerStatistics.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Image](../../types/objects/Image.md)
- [MailingAddress](../../types/objects/MailingAddress.md)
- [Market](../../types/objects/Market.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [Order](../../types/objects/Order.md)
- [OrderSortKeys](../../types/enums/OrderSortKeys.md)
- [TaxExemption](../../types/enums/TaxExemption.md)
