# Object: `MoneyBag`

A collection of monetary values in their respective currencies. Used throughout the API for multi-currency pricing and transactions, when an amount in the shop's currency is converted to the customer's currency of choice. The `presentmentMoney` field contains the amount in the customer's selected currency. The `shopMoney` field contains the equivalent in the shop's base currency.

## Fields

- `presentmentMoney`: `MoneyV2!` — Amount in presentment currency.
- `shopMoney`: `MoneyV2!` — Amount in shop currency.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
