# Object: `OrderAdjustment`

An order adjustment accounts for the difference between a calculated and actual refund amount.

**Implements:** `Node`

## Fields

- `amountSet`: `MoneyBag!` — The amount of the order adjustment in shop and presentment currencies.
- `id`: `ID!` — A globally-unique ID.
- `reason`: `OrderAdjustmentDiscrepancyReason` — An optional reason that explains a discrepancy between calculated and actual refund amounts.
- `taxAmountSet`: `MoneyBag!` — The tax amount of the order adjustment in shop and presentment currencies.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [OrderAdjustmentDiscrepancyReason](../../types/enums/OrderAdjustmentDiscrepancyReason.md)
