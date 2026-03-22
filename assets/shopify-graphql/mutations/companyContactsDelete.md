# Mutation: `companyContactsDelete`

**Returns:** `CompanyContactsDeletePayload`

Deletes one or more company contacts.

## Arguments

- **`companyContactIds`**: `[ID!]!` — The list of IDs of the company contacts to delete.

## Payload Fields

- `deletedCompanyContactIds`: `[ID!]` — The list of IDs of the deleted company contacts.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContactsDeletePayload](../types/objects/CompanyContactsDeletePayload.md)

## Example Mutation

```graphql
mutation CompanyContactsDelete($companyContactIds: [ID!]!) {
  companyContactsDelete(companyContactIds: $companyContactIds) {
    deletedCompanyContactIds
    userErrors {
      field
      message
    }
  }
}
```
