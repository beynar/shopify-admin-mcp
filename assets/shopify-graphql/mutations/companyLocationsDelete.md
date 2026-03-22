# Mutation: `companyLocationsDelete`

**Returns:** `CompanyLocationsDeletePayload`

Deletes a list of company locations.

## Arguments

- **`companyLocationIds`**: `[ID!]!` — A list of IDs of company locations to delete.

## Payload Fields

- `deletedCompanyLocationIds`: `[ID!]` — A list of IDs of the deleted company locations.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyLocationsDeletePayload](../types/objects/CompanyLocationsDeletePayload.md)

## Example Mutation

```graphql
mutation CompanyLocationsDelete($companyLocationIds: [ID!]!) {
  companyLocationsDelete(companyLocationIds: $companyLocationIds) {
    deletedCompanyLocationIds
    userErrors {
      field
      message
    }
  }
}
```
