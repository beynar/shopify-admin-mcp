# Object: `CompanyContact`

A person who acts on behalf of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) to make B2B purchases. Company contacts are associated with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts and can place orders on behalf of their company.

Each contact can be assigned to one or more [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects with specific roles that determine their permissions and access to catalogs, pricing, and payment terms configured for those locations.

**Implements:** `Node`

## Fields

- `company`: `Company!` — The company to which the contact belongs.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was created at Shopify.
- `customer`: `Customer!` — The customer associated to this contact.
- `draftOrders` `(first, after, last, before, reverse, sortKey, query)`: `DraftOrderConnection!` — The list of draft orders for the company contact.
- `id`: `ID!` — A globally-unique ID.
- `isMainContact`: `Boolean!` — Whether the contact is the main contact of the company.
- `lifetimeDuration`: `String!` — The lifetime duration of the company contact, since its creation date on Shopify. Examples: `1 year`, `2 months`, `3 days`.
- `locale`: `String` — The company contact's locale (language).
- `orders` `(first, after, last, before, reverse, sortKey)`: `OrderConnection!` — The list of orders for the company contact.
- `roleAssignments` `(first, after, last, before, reverse, sortKey, query)`: `CompanyContactRoleAssignmentConnection!` — The list of roles assigned to this company contact.
- `title`: `String` — The company contact's job title.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was last updated.

## Related Types

- [Company](../../types/objects/Company.md)
- [CompanyContactRoleAssignmentSortKeys](../../types/enums/CompanyContactRoleAssignmentSortKeys.md)
- [Customer](../../types/objects/Customer.md)
- [DraftOrderSortKeys](../../types/enums/DraftOrderSortKeys.md)
- [OrderSortKeys](../../types/enums/OrderSortKeys.md)
