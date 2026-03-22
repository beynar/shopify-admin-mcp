# Mutation: `companyDelete`

**Returns:** `CompanyDeletePayload`

Deletes a company.

## Arguments

- **`id`**: `ID!` — The ID of the company to delete.

## Payload Fields

- `deletedCompanyId`: `ID` — The ID of the deleted company.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyDeletePayload](../types/objects/CompanyDeletePayload.md)

## Example Mutation

```graphql
mutation CompanyDelete($id: ID!) {
  companyDelete(id: $id) {
    deletedCompanyId
    userErrors {
      field
      message
    }
  }
}
```
