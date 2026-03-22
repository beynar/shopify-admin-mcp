# Object: `RefundReturnOutcome`

The financial transfer details for a return outcome that results in a refund.

## Fields

- `amount`: `MoneyBag!` — The total monetary value to be refunded in shop and presentment currencies.
- `suggestedRefundMethods`: `[SuggestedRefundMethod!]!` — A list of suggested refund methods.
- `suggestedTransactions`: `[SuggestedOrderTransaction!]!` — A list of suggested order transactions.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [SuggestedOrderTransaction](../../types/objects/SuggestedOrderTransaction.md)
- [SuggestedRefundMethod](../../types/interfaces/SuggestedRefundMethod.md)
