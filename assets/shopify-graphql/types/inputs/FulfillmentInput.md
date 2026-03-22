# Input Object: `FulfillmentInput`

The input fields used to create a fulfillment from fulfillment orders.

## Input Fields

- `trackingInfo`: `FulfillmentTrackingInput` — The fulfillment's tracking information, including a tracking URL, a tracking number,
- `notifyCustomer`: `Boolean` = `false` — Whether the customer is notified.
- `lineItemsByFulfillmentOrder`: `[FulfillmentOrderLineItemsInput!]!` — Pairs of `fulfillment_order_id` and `fulfillment_order_line_items` that represent the fulfillment
- `originAddress`: `FulfillmentOriginAddressInput` — Address information about the location from which the order was fulfilled.

## Related Types

- [FulfillmentOrderLineItemsInput](../../types/inputs/FulfillmentOrderLineItemsInput.md)
- [FulfillmentOriginAddressInput](../../types/inputs/FulfillmentOriginAddressInput.md)
- [FulfillmentTrackingInput](../../types/inputs/FulfillmentTrackingInput.md)
