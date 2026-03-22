# Object: `FulfillmentOrderHoldPayload`

Return type for `fulfillmentOrderHold` mutation.

## Fields

- `fulfillmentHold`: `FulfillmentHold` — The fulfillment hold created for the fulfillment order. Null if no hold was created.
- `fulfillmentOrder`: `FulfillmentOrder` — The fulfillment order on which a fulfillment hold was applied.
- `remainingFulfillmentOrder`: `FulfillmentOrder` — The remaining fulfillment order containing the line items to which the hold wasn't applied,
- `userErrors`: `[FulfillmentOrderHoldUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [FulfillmentHold](../../types/objects/FulfillmentHold.md)
- [FulfillmentOrder](../../types/objects/FulfillmentOrder.md)
- [FulfillmentOrderHoldUserError](../../types/objects/FulfillmentOrderHoldUserError.md)
