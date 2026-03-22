# Enum: `FulfillmentOrderStatus`

The status of a fulfillment order.

## Values

- `OPEN` — The fulfillment order is ready for fulfillment.
- `IN_PROGRESS` — The fulfillment order is being processed.
- `CANCELLED` — The fulfillment order has been cancelled by the merchant.
- `INCOMPLETE` — The fulfillment order cannot be completed as requested.
- `CLOSED` — The fulfillment order has been completed and closed.
- `SCHEDULED` — The fulfillment order is deferred and will be ready for fulfillment after the date and time specified in `fulfill_at`.
- `ON_HOLD` — The fulfillment order is on hold. The fulfillment process can't be initiated until the hold on the fulfillment order is released.
