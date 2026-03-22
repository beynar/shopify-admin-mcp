# Mutation: `companyAddressDelete`

**Returns:** `CompanyAddressDeletePayload`

Deletes a company address.

## Arguments

- **`addressId`**: `ID!` — The ID of the address to delete.

## Payload Fields

- `deletedAddressId`: `ID` — The ID of the deleted address.
- `userErrors`: `[BusinessCustomerUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BusinessCustomerUserError](../types/objects/BusinessCustomerUserError.md)
- [CompanyAddressDeletePayload](../types/objects/CompanyAddressDeletePayload.md)

## Example Mutation

```graphql
mutation CompanyAddressDelete($addressId: ID!) {
  companyAddressDelete(addressId: $addressId) {
    deletedAddressId
    userErrors {
      field
      message
    }
  }
}
```
