# Mutation: `orderOpen`

**Returns:** `OrderOpenPayload`

Opens a closed order.

## Arguments

- **`input`**: `OrderOpenInput!` — The input for the mutation.

## Payload Fields

- `order`: `Order` — The opened order.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../types/objects/Order.md)
- [OrderOpenInput](../types/inputs/OrderOpenInput.md)
- [OrderOpenPayload](../types/objects/OrderOpenPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation OrderOpen($input: OrderOpenInput!) {
  orderOpen(input: $input) {
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
