# Mutation: `companyLocationDelete`

**Returns:** `CompanyLocationDeletePayload`

Deletes a company location.

## Arguments

- **`companyLocationId`**: `ID!` — The ID of the company location to delete.

## Payload Fields

- `deletedCompanyLocationId`: `ID` — The ID of the deleted company location.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocationDeletePayload](../types/objects/CompanyLocationDeletePayload.md)

## Example Mutation

```graphql
mutation CompanyLocationDelete($companyLocationId: ID!) {
  companyLocationDelete(companyLocationId: $companyLocationId) {
    deletedCompanyLocationId
    userErrors {
      field
      message
    }
  }
}
```
