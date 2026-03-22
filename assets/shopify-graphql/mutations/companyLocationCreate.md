# Mutation: `companyLocationCreate`

**Returns:** `CompanyLocationCreatePayload`

Creates a new location for a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company). Company locations are branches or offices where B2B customers can place orders with specific pricing, catalogs, and payment terms.

Creates a company location. Each location can have its own billing and shipping addresses, tax settings, and [`buyer experience configuration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration). You can assign [staff members](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) and [`CompanyContact`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact) objects to manage the location.

## Arguments

- **`companyId`**: `ID!` — The ID of the company that the company location belongs to.
- **`input`**: `CompanyLocationInput!` — The fields to use to create the company location.

## Payload Fields

- `companyLocation`: `CompanyLocation` — The created company location.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocation](../types/objects/CompanyLocation.md)
- [CompanyLocationCreatePayload](../types/objects/CompanyLocationCreatePayload.md)
- [CompanyLocationInput](../types/inputs/CompanyLocationInput.md)

## Example Mutation

```graphql
mutation CompanyLocationCreate($companyId: ID!, $input: CompanyLocationInput!) {
  companyLocationCreate(companyId: $companyId, input: $input) {
    companyLocation {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
