# Enum: `FulfillmentOrderHoldUserErrorCode`

Possible error codes that can be returned by `FulfillmentOrderHoldUserError`.

## Values

- `FULFILLMENT_ORDER_NOT_FOUND` — The fulfillment order could not be found.
- `TAKEN` — The input value is already taken.
- `GREATER_THAN_ZERO` — The fulfillment order line item quantity must be greater than 0.
- `FULFILLMENT_ORDER_HOLD_LIMIT_REACHED` — The maximum number of fulfillment holds for this fulfillment order has been reached for this app. An app can only have up to 10 holds on a single fulfillment order at any one time.
- `DUPLICATE_FULFILLMENT_HOLD_HANDLE` — The handle provided for the fulfillment hold is already in use by this app for another hold on this fulfillment order.
- `INVALID_LINE_ITEM_QUANTITY` — The fulfillment order line item quantity is invalid.
- `FULFILLMENT_ORDER_NOT_SPLITTABLE` — The fulfillment order is not in a splittable state.
- `DUPLICATED_FULFILLMENT_ORDER_LINE_ITEMS` — The fulfillment order line items are not unique.
