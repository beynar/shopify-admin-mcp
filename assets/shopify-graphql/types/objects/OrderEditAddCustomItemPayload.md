# Object: `OrderEditAddCustomItemPayload`

Return type for `orderEditAddCustomItem` mutation.

## Fields

- `calculatedLineItem`: `CalculatedLineItem` — The custom line item that will be added to the order based on the current edits.
- `calculatedOrder`: `CalculatedOrder` — An order with the edits applied but not saved.
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedLineItem](../../types/objects/CalculatedLineItem.md)
- [CalculatedOrder](../../types/objects/CalculatedOrder.md)
- [OrderEditSession](../../types/objects/OrderEditSession.md)
- [UserError](../../types/objects/UserError.md)
