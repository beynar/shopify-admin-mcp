# Object: `OrderEditRemoveShippingLinePayload`

Return type for `orderEditRemoveShippingLine` mutation.

## Fields

- `calculatedOrder`: `CalculatedOrder` — The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder)
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[OrderEditRemoveShippingLineUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedOrder](../../types/objects/CalculatedOrder.md)
- [OrderEditRemoveShippingLineUserError](../../types/objects/OrderEditRemoveShippingLineUserError.md)
- [OrderEditSession](../../types/objects/OrderEditSession.md)
