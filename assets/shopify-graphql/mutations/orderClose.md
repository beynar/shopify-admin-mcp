# Mutation: `orderClose`

**Returns:** `OrderClosePayload`

Marks an open [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) as closed. A closed order is one where merchants fulfill or cancel all [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and complete all financial transactions.

Once closed, the order indicates that no further work is required. The order's [`closedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-closedAt) timestamp is set when this mutation completes successfully.

## Arguments

- **`input`**: `OrderCloseInput!` — The input for the mutation.

## Payload Fields

- `order`: `Order` — The closed order.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../types/objects/Order.md)
- [OrderCloseInput](../types/inputs/OrderCloseInput.md)
- [OrderClosePayload](../types/objects/OrderClosePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderClose($input: OrderCloseInput!) {
  orderClose(input: $input) {
    order {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
