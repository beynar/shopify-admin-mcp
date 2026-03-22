# Object: `OrderEditRemoveDiscountPayload`

Return type for `orderEditRemoveDiscount` mutation.

## Fields

- `calculatedOrder`: `CalculatedOrder` — An order with the edits applied but not saved.
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[OrderEditRemoveDiscountUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedOrder](../../types/objects/CalculatedOrder.md)
- [OrderEditRemoveDiscountUserError](../../types/objects/OrderEditRemoveDiscountUserError.md)
- [OrderEditSession](../../types/objects/OrderEditSession.md)
