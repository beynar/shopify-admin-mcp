# Object: `CurrencyExchangeAdjustment`

Represents a currency exchange adjustment applied to an order transaction.

**Implements:** `Node`

## Fields

- `adjustment`: `MoneyV2!` — The adjustment amount in both shop and presentment currencies.
- `finalAmountSet`: `MoneyV2!` — The final amount in both shop and presentment currencies after the adjustment.
- `id`: `ID!` — A globally-unique ID.
- `originalAmountSet`: `MoneyV2!` — The original amount in both shop and presentment currencies before the adjustment.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
