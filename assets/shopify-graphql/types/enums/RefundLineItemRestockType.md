# Enum: `RefundLineItemRestockType`

The type of restock performed for a particular refund line item.

## Values

- `RETURN` — The refund line item was returned. Use this when restocking line items that were fulfilled.
- `CANCEL` — The refund line item was canceled. Use this when restocking unfulfilled line items.
- `LEGACY_RESTOCK` — Deprecated. The refund line item was restocked, without specifically beingidentified as a return or cancelation. This value is not accepted when creating new refunds.
- `NO_RESTOCK` — Refund line item was not restocked.
