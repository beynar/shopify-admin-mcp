# Object: `CompanyLocation`

A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

**Implements:** `CommentEventSubject`, `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `HasStoreCreditAccounts`, `Navigable`, `Node`

## Fields

- `billingAddress`: `CompanyAddress` — The address used as billing address for the location.
- `buyerExperienceConfiguration`: `BuyerExperienceConfiguration` — The configuration for the buyer's B2B checkout.
- `catalogs` `(first, after, last, before, reverse)`: `CatalogConnection!` — The list of catalogs associated with the company location.
- `catalogsCount` `(limit)`: `Count` — The number of catalogs associated with the company location. Limited to a maximum of 10000 by default.
- `company`: `Company!` — The company that the company location belongs to.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was created in Shopify.
- `currency`: `CurrencyCode!` — The location's currency based on the shipping address. If the shipping address is empty, then the value is the shop's primary market.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `draftOrders` `(first, after, last, before, reverse, sortKey, query)`: `DraftOrderConnection!` — The list of draft orders for the company location.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `externalId`: `String` — A unique externally-supplied ID for the company location.
- `hasTimelineComment`: `Boolean!` — Whether the merchant added a timeline comment to the company location.
- `id`: `ID!` — A globally-unique ID.
- `inCatalog` `(catalogId)`: `Boolean!` — Whether the company location is assigned a specific catalog.
- `locale`: `String` — The preferred locale of the company location.
- `market`: `Market!` *(deprecated)* — The market that includes the location's shipping address. If the shipping address is empty, then the value is the shop's primary market.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The name of the company location.
- `note`: `String` — A note about the company location.
- `orderCount`: `Int!` *(deprecated)* — The total number of orders placed for the location.
- `orders` `(first, after, last, before, reverse, sortKey)`: `OrderConnection!` — The list of orders for the company location.
- `ordersCount`: `Count` — The total number of orders placed for the location.
- `phone`: `String` — The phone number of the company location.
- `roleAssignments` `(first, after, last, before, reverse, sortKey, query)`: `CompanyContactRoleAssignmentConnection!` — The list of roles assigned to the company location.
- `shippingAddress`: `CompanyAddress` — The address used as shipping address for the location.
- `staffMemberAssignments` `(first, after, last, before, reverse, sortKey, query)`: `CompanyLocationStaffMemberAssignmentConnection!` — The list of staff members assigned to the company location.
- `storeCreditAccounts` `(first, after, last, before, query)`: `StoreCreditAccountConnection!` — Returns a list of store credit accounts that belong to the owner resource.
- `taxExemptions`: `[TaxExemption!]!` *(deprecated)* — The list of tax exemptions applied to the location.
- `taxRegistrationId`: `String` *(deprecated)* — The tax registration ID for the company location.
- `taxSettings`: `CompanyLocationTaxSettings!` — The tax settings for the company location.
- `totalSpent`: `MoneyV2!` — The total amount spent by the location.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was last modified.

## Related Types

- [BuyerExperienceConfiguration](../../types/objects/BuyerExperienceConfiguration.md)
- [Company](../../types/objects/Company.md)
- [CompanyAddress](../../types/objects/CompanyAddress.md)
- [CompanyContactRoleAssignmentSortKeys](../../types/enums/CompanyContactRoleAssignmentSortKeys.md)
- [CompanyLocationStaffMemberAssignmentSortKeys](../../types/enums/CompanyLocationStaffMemberAssignmentSortKeys.md)
- [CompanyLocationTaxSettings](../../types/objects/CompanyLocationTaxSettings.md)
- [Count](../../types/objects/Count.md)
- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [DraftOrderSortKeys](../../types/enums/DraftOrderSortKeys.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Market](../../types/objects/Market.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [OrderSortKeys](../../types/enums/OrderSortKeys.md)
- [TaxExemption](../../types/enums/TaxExemption.md)
