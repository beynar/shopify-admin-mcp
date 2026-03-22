# Query: `companyLocation`

**Returns:** `CompanyLocation`

Returns a `CompanyLocation` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `CompanyLocation` to return.

## Return Type Fields

- `billingAddress`: `CompanyAddress` — The address used as billing address for the location.
- `buyerExperienceConfiguration`: `BuyerExperienceConfiguration` — The configuration for the buyer's B2B checkout.
- `catalogs`: `CatalogConnection!` — The list of catalogs associated with the company location.
- `catalogsCount`: `Count` — The number of catalogs associated with the company location. Limited to a maximum of 10000 by default.
- `company`: `Company!` — The company that the company location belongs to.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was created in Shopify.
- `currency`: `CurrencyCode!` — The location's currency based on the shipping address. If the shipping address is empty, then the value is the shop's primary market.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `draftOrders`: `DraftOrderConnection!` — The list of draft orders for the company location.
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `externalId`: `String` — A unique externally-supplied ID for the company location.
- `hasTimelineComment`: `Boolean!` — Whether the merchant added a timeline comment to the company location.
- `id`: `ID!` — A globally-unique ID.
- `inCatalog`: `Boolean!` — Whether the company location is assigned a specific catalog.
- `locale`: `String` — The preferred locale of the company location.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The name of the company location.
- `note`: `String` — A note about the company location.
- `orders`: `OrderConnection!` — The list of orders for the company location.
- `ordersCount`: `Count` — The total number of orders placed for the location.
- `phone`: `String` — The phone number of the company location.
- `roleAssignments`: `CompanyContactRoleAssignmentConnection!` — The list of roles assigned to the company location.
- `shippingAddress`: `CompanyAddress` — The address used as shipping address for the location.
- `staffMemberAssignments`: `CompanyLocationStaffMemberAssignmentConnection!` — The list of staff members assigned to the company location.
- `storeCreditAccounts`: `StoreCreditAccountConnection!` — Returns a list of store credit accounts that belong to the owner resource.
- `taxSettings`: `CompanyLocationTaxSettings!` — The tax settings for the company location.
- `totalSpent`: `MoneyV2!` — The total amount spent by the location.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was last modified.

## Related Types

- [BuyerExperienceConfiguration](../types/objects/BuyerExperienceConfiguration.md)
- [Company](../types/objects/Company.md)
- [CompanyAddress](../types/objects/CompanyAddress.md)
- [CompanyLocation](../types/objects/CompanyLocation.md)
- [CompanyLocationTaxSettings](../types/objects/CompanyLocationTaxSettings.md)
- [Count](../types/objects/Count.md)
- [CurrencyCode](../types/enums/CurrencyCode.md)
- [Market](../types/objects/Market.md)
- [Metafield](../types/objects/Metafield.md)
- [MoneyV2](../types/objects/MoneyV2.md)
- [TaxExemption](../types/enums/TaxExemption.md)

## Example Query

```graphql
query CompanyLocation($id: ID!) {
  companyLocation(id: $id) {
    createdAt
    defaultCursor
    externalId
    hasTimelineComment
  }
}
```
