# Mutation: `customerUpdateDefaultAddress`

**Returns:** `CustomerUpdateDefaultAddressPayload`

Updates a customer's default address.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer whose default address is being updated.
- **`addressId`**: `ID!` — The ID of the customer's new default address.

## Payload Fields

- `customer`: `Customer` — The customer whose address was updated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Customer](../types/objects/Customer.md)
- [CustomerUpdateDefaultAddressPayload](../types/objects/CustomerUpdateDefaultAddressPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerUpdateDefaultAddress($customerId: ID!, $addressId: ID!) {
  customerUpdateDefaultAddress(customerId: $customerId, addressId: $addressId) {
    customer {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
