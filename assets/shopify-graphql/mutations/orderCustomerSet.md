# Mutation: `orderCustomerSet`

**Returns:** `OrderCustomerSetPayload`

Sets a customer on an order.

## Arguments

- **`orderId`**: `ID!` — The ID of the order having a customer set.
- **`customerId`**: `ID!` — The ID of the customer being set on the order.

## Payload Fields

- `order`: `Order` — The order that had a customer set.
- `userErrors`: `[OrderCustomerSetUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../types/objects/Order.md)
- [OrderCustomerSetPayload](../types/objects/OrderCustomerSetPayload.md)
- [OrderCustomerSetUserError](../types/objects/OrderCustomerSetUserError.md)

## Example Mutation

```graphql
mutation OrderCustomerSet($orderId: ID!, $customerId: ID!) {
  orderCustomerSet(orderId: $orderId, customerId: $customerId) {
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
