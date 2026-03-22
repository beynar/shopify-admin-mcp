# Object: `FulfillmentOrderSplitResult`

The result of splitting a fulfillment order.

## Fields

- `fulfillmentOrder`: `FulfillmentOrder!` — The original fulfillment order as a result of the split.
- `remainingFulfillmentOrder`: `FulfillmentOrder!` — The remaining fulfillment order as a result of the split.
- `replacementFulfillmentOrder`: `FulfillmentOrder` — The replacement fulfillment order if the original fulfillment order wasn't in a state to be split.

## Related Types

- [FulfillmentOrder](../../types/objects/FulfillmentOrder.md)
