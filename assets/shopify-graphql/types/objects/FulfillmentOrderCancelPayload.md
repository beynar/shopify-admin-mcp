# Object: `FulfillmentOrderCancelPayload`

Return type for `fulfillmentOrderCancel` mutation.

## Fields

- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order that was marked as canceled.
- `replacementFulfillmentOrder`: `FulfillmentOrder` — The fulfillment order that was created to replace the canceled fulfillment order.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../../types/objects/FulfillmentOrder.md)
- [UserError](../../types/objects/UserError.md)
