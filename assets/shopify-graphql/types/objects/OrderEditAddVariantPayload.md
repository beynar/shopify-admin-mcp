# Object: `OrderEditAddVariantPayload`

Return type for `orderEditAddVariant` mutation.

## Fields

- `calculatedLineItem`: `CalculatedLineItem` — The [calculated line item](https://shopify.dev/api/admin-graphql/latest/objects/calculatedlineitem)
- `calculatedOrder`: `CalculatedOrder` — The [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder)
- `orderEditSession`: `OrderEditSession` — The order edit session with the edits applied but not saved.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CalculatedLineItem](../../types/objects/CalculatedLineItem.md)
- [CalculatedOrder](../../types/objects/CalculatedOrder.md)
- [OrderEditSession](../../types/objects/OrderEditSession.md)
- [UserError](../../types/objects/UserError.md)
