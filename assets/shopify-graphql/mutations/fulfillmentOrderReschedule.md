# Mutation: `fulfillmentOrderReschedule`

**Returns:** `FulfillmentOrderReschedulePayload`

Reschedules a scheduled fulfillment order.

Updates the value of the `fulfillAt` field on a scheduled fulfillment order.

The fulfillment order will be marked as ready for fulfillment at this date and time.

## Arguments

- **`id`**: `ID!` — The ID of the fulfillment order to reschedule.
- **`fulfillAt`**: `DateTime!` — A future date and time when the fulfillment order will be marked as ready for fulfillment.

## Payload Fields

- `fulfillmentOrder`: `FulfillmentOrder` — A fulfillment order with the rescheduled line items.
- `userErrors`: `[FulfillmentOrderRescheduleUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderReschedulePayload](../types/objects/FulfillmentOrderReschedulePayload.md)
- [FulfillmentOrderRescheduleUserError](../types/objects/FulfillmentOrderRescheduleUserError.md)

## Example Mutation

```graphql
mutation FulfillmentOrderReschedule($id: ID!, $fulfillAt: DateTime!) {
  fulfillmentOrderReschedule(id: $id, fulfillAt: $fulfillAt) {
    fulfillmentOrder {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
