# Enum: `FulfillmentOrderSplitUserErrorCode`

Possible error codes that can be returned by `FulfillmentOrderSplitUserError`.

## Values

- `FULFILLMENT_ORDER_NOT_FOUND` — The fulfillment order could not be found.
- `GREATER_THAN` — The fulfillment order line item quantity must be greater than 0.
- `INVALID_LINE_ITEM_QUANTITY` — The fulfillment order line item quantity is invalid.
- `NO_LINE_ITEMS_PROVIDED_TO_SPLIT` — The fulfillment order must have at least one line item input to split.
