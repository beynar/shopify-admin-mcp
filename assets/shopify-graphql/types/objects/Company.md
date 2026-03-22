# Object: `Company`

A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

**Implements:** `CommentEventSubject`, `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `Navigable`, `Node`

## Fields

- `contactCount`: `Int!` *(deprecated)* — The number of contacts that belong to the company.
- `contactRoles` `(first, after, last, before, reverse, sortKey)`: `CompanyContactRoleConnection!` — The list of roles for the company contacts.
- `contacts` `(first, after, last, before, reverse, sortKey, query)`: `CompanyContactConnection!` — The list of contacts in the company.
- `contactsCount`: `Count` — The number of contacts that belong to the company.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was created in Shopify.
- `customerSince`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company became the customer.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `defaultRole`: `CompanyContactRole` — The role proposed by default for a contact at the company.
- `draftOrders` `(first, after, last, before, reverse, sortKey, query)`: `DraftOrderConnection!` — The list of the company's draft orders.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `externalId`: `String` — A unique externally-supplied ID for the company.
- `hasTimelineComment`: `Boolean!` — Whether the merchant added a timeline comment to the company.
- `id`: `ID!` — A globally-unique ID.
- `lifetimeDuration`: `String!` — The lifetime duration of the company, since it became a customer of the shop. Examples: `2 days`, `3 months`, `1 year`.
- `locations` `(first, after, last, before, reverse, sortKey, query)`: `CompanyLocationConnection!` — The list of locations in the company.
- `locationsCount`: `Count` — The number of locations that belong to the company.
- `mainContact`: `CompanyContact` — The main contact for the company.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The name of the company.
- `note`: `String` — A note about the company.
- `orders` `(first, after, last, before, reverse, sortKey)`: `OrderConnection!` — The list of the company's orders.
- `ordersCount`: `Count` — The total number of orders placed for this company, across all its locations.
- `totalSpent`: `MoneyV2!` — The total amount spent by this company, across all its locations.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was last modified.

## Related Types

- [CompanyContact](../../types/objects/CompanyContact.md)
- [CompanyContactRole](../../types/objects/CompanyContactRole.md)
- [CompanyContactRoleSortKeys](../../types/enums/CompanyContactRoleSortKeys.md)
- [CompanyContactSortKeys](../../types/enums/CompanyContactSortKeys.md)
- [CompanyLocationSortKeys](../../types/enums/CompanyLocationSortKeys.md)
- [Count](../../types/objects/Count.md)
- [DraftOrderSortKeys](../../types/enums/DraftOrderSortKeys.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [OrderSortKeys](../../types/enums/OrderSortKeys.md)
