# Mutation: `customerAddressDelete`

**Returns:** `CustomerAddressDeletePayload`

Deletes a customer's address.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer whose address is being deleted.
- **`addressId`**: `ID!` — The ID of the address to be deleted from the customer.

## Payload Fields

- `deletedAddressId`: `ID` — The ID of the address deleted from the customer.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerAddressDeletePayload](../types/objects/CustomerAddressDeletePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerAddressDelete($customerId: ID!, $addressId: ID!) {
  customerAddressDelete(customerId: $customerId, addressId: $addressId) {
    deletedAddressId
    userErrors {
      field
      message
    }
  }
}
```
