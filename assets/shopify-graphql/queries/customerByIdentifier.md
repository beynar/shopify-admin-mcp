# Query: `customerByIdentifier`

**Returns:** `Customer`

Return a customer by an identifier.

## Arguments

- **`identifier`**: `CustomerIdentifierInput!` — The identifier of the customer.

## Return Type Fields

- `addressesV2`: `MailingAddressConnection!` — The addresses associated with the customer.
- `amountSpent`: `MoneyV2!` — The total amount that the customer has spent on orders in their lifetime.
- `canDelete`: `Boolean!` — Whether the merchant can delete the customer from their store.
- `companyContactProfiles`: `[CompanyContact!]!` — A list of the customer's company contact profiles.
- `createdAt`: `DateTime!` — The date and time when the customer was added to the store.
- `dataSaleOptOut`: `Boolean!` — Whether the customer has opted out of having their data sold.
- `defaultAddress`: `MailingAddress` — The default address associated with the customer.
- `defaultEmailAddress`: `CustomerEmailAddress` — The customer's default email address.
- `defaultPhoneNumber`: `CustomerPhoneNumber` — The customer's default phone number.
- `displayName`: `String!` — The full name of the customer, based on the values for first_name and last_name. If the first_name and
- `events`: `EventConnection!` — A list of events associated with the customer.
- `firstName`: `String` — The customer's first name.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image!` — The image associated with the customer.
- `lastName`: `String` — The customer's last name.
- `lastOrder`: `Order` — The customer's last order.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `lifetimeDuration`: `String!` — The amount of time since the customer was first added to the store.
- `locale`: `String!` — The customer's locale.
- `mergeable`: `CustomerMergeable!` — Whether the customer can be merged with another customer.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `multipassIdentifier`: `String` — A unique identifier for the customer that's used with Multipass login.
- `note`: `String` — A note about the customer.
- `numberOfOrders`: `UnsignedInt64!` — The number of orders that the customer has made at the store in their lifetime.
- `orders`: `OrderConnection!` — A list of the customer's orders.
- `paymentMethods`: `CustomerPaymentMethodConnection!` — A list of the customer's payment methods.
- `productSubscriberStatus`: `CustomerProductSubscriberStatus!` — Possible subscriber states of a customer defined by their subscription contracts.
- `state`: `CustomerState!` — The state of the customer's account with the shop.
- `statistics`: `CustomerStatistics!` — The statistics for a given customer.
- `storeCreditAccounts`: `StoreCreditAccountConnection!` — Returns a list of store credit accounts that belong to the owner resource.
- `subscriptionContracts`: `SubscriptionContractConnection!` — A list of the customer's subscription contracts.
- `tags`: `[String!]!` — A comma separated list of tags that have been added to the customer.
- `taxExempt`: `Boolean!` — Whether the customer is exempt from being charged taxes on their orders.
- `taxExemptions`: `[TaxExemption!]!` — The list of tax exemptions applied to the customer.
- `updatedAt`: `DateTime!` — The date and time when the customer was last updated.
- `verifiedEmail`: `Boolean!` — Whether the customer has verified their email address. Defaults to `true` if the customer is created through the Shopify admin or API.

## Related Types

- [CompanyContact](../types/objects/CompanyContact.md)
- [Customer](../types/objects/Customer.md)
- [CustomerEmailAddress](../types/objects/CustomerEmailAddress.md)
- [CustomerEmailMarketingConsentState](../types/objects/CustomerEmailMarketingConsentState.md)
- [CustomerIdentifierInput](../types/inputs/CustomerIdentifierInput.md)
- [CustomerMergeable](../types/objects/CustomerMergeable.md)
- [CustomerPhoneNumber](../types/objects/CustomerPhoneNumber.md)
- [CustomerProductSubscriberStatus](../types/enums/CustomerProductSubscriberStatus.md)
- [CustomerSmsMarketingConsentState](../types/objects/CustomerSmsMarketingConsentState.md)
- [CustomerState](../types/enums/CustomerState.md)
- [CustomerStatistics](../types/objects/CustomerStatistics.md)
- [Image](../types/objects/Image.md)
- [MailingAddress](../types/objects/MailingAddress.md)
- [Market](../types/objects/Market.md)
- [Metafield](../types/objects/Metafield.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [Order](../types/objects/Order.md)
- [TaxExemption](../types/enums/TaxExemption.md)

## Example Query

```graphql
query CustomerByIdentifier($identifier: CustomerIdentifierInput!) {
  customerByIdentifier(identifier: $identifier) {
    id
    canDelete
    createdAt
    dataSaleOptOut
    displayName
    firstName
  }
}
```
