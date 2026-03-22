# Mutation: `customerDelete`

**Returns:** `CustomerDeletePayload`

Deletes a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) from the store. You can only delete customers who haven't placed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

Apps using protected customer data must meet Shopify's [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements).

## Arguments

- **`input`**: `CustomerDeleteInput!` — Specifies the customer to delete.

## Payload Fields

- `deletedCustomerId`: `ID` — The ID of the deleted customer.
- `shop`: `Shop!` — The shop of the deleted customer.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerDeleteInput](../types/inputs/CustomerDeleteInput.md)
- [CustomerDeletePayload](../types/objects/CustomerDeletePayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CustomerDelete($input: CustomerDeleteInput!) {
  customerDelete(input: $input) {
    deletedCustomerId
    shop {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
