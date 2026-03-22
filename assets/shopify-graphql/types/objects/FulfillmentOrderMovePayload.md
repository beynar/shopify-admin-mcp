# Object: `FulfillmentOrderMovePayload`

Return type for `fulfillmentOrderMove` mutation.

## Fields

- `movedFulfillmentOrder`: `FulfillmentOrder` — The fulfillment order which now contains the moved line items and is assigned to the destination location.
- `originalFulfillmentOrder`: `FulfillmentOrder` — The final state of the original fulfillment order.
- `remainingFulfillmentOrder`: `FulfillmentOrder` — This field is deprecated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentOrder](../../types/objects/FulfillmentOrder.md)
- [UserError](../../types/objects/UserError.md)
