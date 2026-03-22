# Mutation: `companyContactDelete`

**Returns:** `CompanyContactDeletePayload`

Deletes a company contact.

## Arguments

- **`companyContactId`**: `ID!` — The ID of the company contact to delete.

## Payload Fields

- `deletedCompanyContactId`: `ID` — The ID of the deleted company contact.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyContactDeletePayload](../types/objects/CompanyContactDeletePayload.md)

## Example Mutation

```graphql
mutation CompanyContactDelete($companyContactId: ID!) {
  companyContactDelete(companyContactId: $companyContactId) {
    deletedCompanyContactId
    userErrors {
      field
      message
    }
  }
}
```
