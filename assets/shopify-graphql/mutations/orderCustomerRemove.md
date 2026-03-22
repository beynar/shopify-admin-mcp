# Mutation: `orderCustomerRemove`

**Returns:** `OrderCustomerRemovePayload`

Removes customer from an order.

## Arguments

- **`orderId`**: `ID!` — The ID of the order having its customer removed.

## Payload Fields

- `order`: `Order` — The order that had its customer removed.
- `userErrors`: `[OrderCustomerRemoveUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../types/objects/Order.md)
- [OrderCustomerRemovePayload](../types/objects/OrderCustomerRemovePayload.md)
- [OrderCustomerRemoveUserError](../types/objects/OrderCustomerRemoveUserError.md)

## Example Mutation

```graphql
mutation OrderCustomerRemove($orderId: ID!) {
  orderCustomerRemove(orderId: $orderId) {
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
