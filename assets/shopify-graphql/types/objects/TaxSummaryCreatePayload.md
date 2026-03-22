# Object: `TaxSummaryCreatePayload`

Return type for `taxSummaryCreate` mutation.

## Fields

- `enqueuedOrders`: `[Order!]` — A list of orders that were successfully enqueued to create a tax summary.
- `userErrors`: `[TaxSummaryCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Order](../../types/objects/Order.md)
- [TaxSummaryCreateUserError](../../types/objects/TaxSummaryCreateUserError.md)
