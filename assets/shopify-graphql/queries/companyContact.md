# Query: `companyContact`

**Returns:** `CompanyContact`

Returns a `CompanyContact` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `CompanyContact` to return.

## Return Type Fields

- `company`: `Company!` — The company to which the contact belongs.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was created at Shopify.
- `customer`: `Customer!` — The customer associated to this contact.
- `draftOrders`: `DraftOrderConnection!` — The list of draft orders for the company contact.
- `id`: `ID!` — A globally-unique ID.
- `isMainContact`: `Boolean!` — Whether the contact is the main contact of the company.
- `lifetimeDuration`: `String!` — The lifetime duration of the company contact, since its creation date on Shopify. Examples: `1 year`, `2 months`, `3 days`.
- `locale`: `String` — The company contact's locale (language).
- `orders`: `OrderConnection!` — The list of orders for the company contact.
- `roleAssignments`: `CompanyContactRoleAssignmentConnection!` — The list of roles assigned to this company contact.
- `title`: `String` — The company contact's job title.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was last updated.

## Related Types

- [Company](../types/objects/Company.md)
- [CompanyContact](../types/objects/CompanyContact.md)
- [Customer](../types/objects/Customer.md)

## Example Query

```graphql
query CompanyContact($id: ID!) {
  companyContact(id: $id) {
    createdAt
    isMainContact
    lifetimeDuration
    locale
  }
}
```
