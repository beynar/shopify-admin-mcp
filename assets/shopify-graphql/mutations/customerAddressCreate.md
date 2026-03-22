# Mutation: `customerAddressCreate`

**Returns:** `CustomerAddressCreatePayload`

Creates a new [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer). You can optionally set the address as the customer's default address.

You can only add addresses to existing customers. Each customer can have multiple addresses.

## Arguments

- **`customerId`**: `ID!` — The ID of the customer.
- **`address`**: `MailingAddressInput!` — Specifies the fields to use when creating the address.
- **`setAsDefault`**: `Boolean` — Whether to set the address as the customer's default address.

## Payload Fields

- `address`: `MailingAddress` — The created address.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerAddressCreatePayload](../types/objects/CustomerAddressCreatePayload.md)
- [MailingAddress](../types/objects/MailingAddress.md)
- [MailingAddressInput](../types/inputs/MailingAddressInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerAddressCreate($customerId: ID!, $address: MailingAddressInput!, $setAsDefault: Boolean) {
  customerAddressCreate(customerId: $customerId, address: $address, setAsDefault: $setAsDefault) {
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
