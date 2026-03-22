# Mutation: `fulfillmentOrderCancel`

**Returns:** `FulfillmentOrderCancelPayload`

Cancels a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) and creates a replacement fulfillment order to represent the work left to be done. The original fulfillment order will be marked as closed.

This mutation works when the fulfillment order has a `SUBMITTED` or `CANCELLATION_REQUESTED` status. For `SUBMITTED` orders, cancellation happens immediately because the fulfillment service hasn't accepted the request.

> Note: Orders that have had cancellation requested but the cancellation has yet to be accepted by the fulfillment service might still have work completed despite cancellation.

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order to mark as canceled.

## Payload Fields

- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order that was marked as canceled.
- `replacementFulfillmentOrder`: `FulfillmentOrder` — The fulfillment order that was created to replace the canceled fulfillment order.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderCancelPayload](../types/objects/FulfillmentOrderCancelPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderCancel($id: ID!) {
  fulfillmentOrderCancel(id: $id) {
    fulfillmentOrder {
      id
    }
    replacementFulfillmentOrder {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
