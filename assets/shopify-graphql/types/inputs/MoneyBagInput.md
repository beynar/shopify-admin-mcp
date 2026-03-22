# Input Object: `MoneyBagInput`

An input collection of monetary values in their respective currencies.
Represents an amount in the shop's currency and the amount as converted to the customer's currency of choice (the presentment currency).

## Input Fields

- `shopMoney`: `MoneyInput!` — Amount in shop currency.
- `presentmentMoney`: `MoneyInput` — Amount in presentment currency. If this isn't given then we assume that the presentment currency is the same as the shop's currency.

## Related Types

- [MoneyInput](../../types/inputs/MoneyInput.md)
