# Object: `OrderEditAddLineItemDiscountPayload`

Return type for `orderEditAddLineItemDiscount` mutation.

## Fields

- `addedDiscountStagedChange`: `OrderStagedChangeAddLineItemDiscount` — The discount applied to a line item during this order edit.
- `calculatedLineItem`: `CalculatedLineItem` — The line item with the edits applied but not saved.
- `calculatedOrder`: `CalculatedOrder` — An order with the edits applied but not saved.
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedLineItem](../../types/objects/CalculatedLineItem.md)
- [CalculatedOrder](../../types/objects/CalculatedOrder.md)
- [OrderEditSession](../../types/objects/OrderEditSession.md)
- [OrderStagedChangeAddLineItemDiscount](../../types/objects/OrderStagedChangeAddLineItemDiscount.md)
- [UserError](../../types/objects/UserError.md)
