# Mutation: `orderDelete`

**Returns:** `OrderDeletePayload`

Permanently deletes an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) from the store.

You can only delete [specific order types](https://help.shopify.com/manual/orders/cancel-delete-order#delete-an-order). Other orders you can cancel using the [`orderCancel`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel) mutation instead.

> Caution:
> This action is irreversible. You can't recover deleted orders.

## Arguments

- **`orderId`**: `ID!` — The ID of the order to be deleted.

## Payload Fields

- `deletedId`: `ID` — Deleted order ID.
- `userErrors`: `[OrderDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OrderDeletePayload](../types/objects/OrderDeletePayload.md)
- [OrderDeleteUserError](../types/objects/OrderDeleteUserError.md)

## Example Mutation

```graphql
mutation OrderDelete($orderId: ID!) {
  orderDelete(orderId: $orderId) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
