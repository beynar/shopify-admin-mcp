# Input Object: `RefundLineItemInput`

The input fields required to reimburse line items on a refund.

## Input Fields

- `lineItemId`: `ID!` — The ID of the line item in the refund.
- `quantity`: `Int!` — The quantity of the associated line item to be refunded.
- `restockType`: `RefundLineItemRestockType` — The type of restock for this line item.
- `locationId`: `ID` — The intended location for restocking. If the `restockType` is set to `NO_RESTOCK`, then this value is empty.

## Related Types

- [RefundLineItemRestockType](../../types/enums/RefundLineItemRestockType.md)
