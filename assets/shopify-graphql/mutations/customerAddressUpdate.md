# Mutation: `customerAddressUpdate`

**Returns:** `CustomerAddressUpdatePayload`

Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress). You can modify any field of the address and optionally set it as the customer's default address.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer whose address is being updated.
- **`addressId`**: `ID!` — The ID of the address to update.
- **`address`**: `MailingAddressInput!` — Specifies the fields to use when updating the address.
- **`setAsDefault`**: `Boolean` — Whether to set the address as the customer's default address.

## Payload Fields

- `address`: `MailingAddress` — The updated address.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerAddressUpdatePayload](../types/objects/CustomerAddressUpdatePayload.md)
- [MailingAddress](../types/objects/MailingAddress.md)
- [MailingAddressInput](../types/inputs/MailingAddressInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerAddressUpdate($customerId: ID!, $addressId: ID!, $address: MailingAddressInput!, $setAsDefault: Boolean) {
  customerAddressUpdate(customerId: $customerId, addressId: $addressId, address: $address, setAsDefault: $setAsDefault) {
    address {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
