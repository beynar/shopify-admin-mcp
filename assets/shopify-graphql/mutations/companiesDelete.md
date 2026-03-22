# Mutation: `companiesDelete`

**Returns:** `CompaniesDeletePayload`

Deletes a list of companies.

## Arguments

- **`companyIds`**: `[ID!]!` — A list of IDs of companies to delete.

## Payload Fields

- `deletedCompanyIds`: `[ID!]` — A list of IDs of the deleted companies.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompaniesDeletePayload](../types/objects/CompaniesDeletePayload.md)

## Example Mutation

```graphql
mutation CompaniesDelete($companyIds: [ID!]!) {
  companiesDelete(companyIds: $companyIds) {
    deletedCompanyIds
    userErrors {
      field
      message
    }
  }
}
```
