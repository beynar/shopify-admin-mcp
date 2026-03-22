# Object: `OrderEditAddShippingLinePayload`

Return type for `orderEditAddShippingLine` mutation.

## Fields

- `calculatedOrder`: `CalculatedOrder` — The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder)
- `calculatedShippingLine`: `CalculatedShippingLine` — The [calculated shipping line](https://shopify.dev/api/admin-graphql/latest/objects/calculatedshippingline)
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[OrderEditAddShippingLineUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedOrder](../../types/objects/CalculatedOrder.md)
- [CalculatedShippingLine](../../types/objects/CalculatedShippingLine.md)
- [OrderEditAddShippingLineUserError](../../types/objects/OrderEditAddShippingLineUserError.md)
- [OrderEditSession](../../types/objects/OrderEditSession.md)
