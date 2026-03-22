# Object: `MoneyV2`

A precise monetary value and its associated currency. Combines a decimal amount with a three-letter currency code to express prices, costs, and other financial values throughout the API. For example, 12.99 USD.

## Fields

- `amount`: `Decimal!` — A monetary value in decimal format, allowing for precise representation of cents or fractional
- `currencyCode`: `CurrencyCode!` — The three-letter currency code that represents a world currency used in a store. Currency codes

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
