# Query: `company`

**Returns:** `Company`

Returns a `Company` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `Company` to return.

## Return Type Fields

- `contactRoles`: `CompanyContactRoleConnection!` — The list of roles for the company contacts.
- `contacts`: `CompanyContactConnection!` — The list of contacts in the company.
- `contactsCount`: `Count` — The number of contacts that belong to the company.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was created in Shopify.
- `customerSince`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company became the customer.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `defaultRole`: `CompanyContactRole` — The role proposed by default for a contact at the company.
- `draftOrders`: `DraftOrderConnection!` — The list of the company's draft orders.
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `externalId`: `String` — A unique externally-supplied ID for the company.
- `hasTimelineComment`: `Boolean!` — Whether the merchant added a timeline comment to the company.
- `id`: `ID!` — A globally-unique ID.
- `lifetimeDuration`: `String!` — The lifetime duration of the company, since it became a customer of the shop. Examples: `2 days`, `3 months`, `1 year`.
- `locations`: `CompanyLocationConnection!` — The list of locations in the company.
- `locationsCount`: `Count` — The number of locations that belong to the company.
- `mainContact`: `CompanyContact` — The main contact for the company.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The name of the company.
- `note`: `String` — A note about the company.
- `orders`: `OrderConnection!` — The list of the company's orders.
- `ordersCount`: `Count` — The total number of orders placed for this company, across all its locations.
- `totalSpent`: `MoneyV2!` — The total amount spent by this company, across all its locations.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was last modified.

## Related Types

- [Company](../types/objects/Company.md)
- [CompanyContact](../types/objects/CompanyContact.md)
- [CompanyContactRole](../types/objects/CompanyContactRole.md)
- [Count](../types/objects/Count.md)
- [Metafield](../types/objects/Metafield.md)
- [MoneyV2](../types/objects/MoneyV2.md)

## Example Query

```graphql
query Company($id: ID!) {
  company(id: $id) {
    id
    createdAt
    customerSince
    defaultCursor
    externalId
    hasTimelineComment
  }
}
```
