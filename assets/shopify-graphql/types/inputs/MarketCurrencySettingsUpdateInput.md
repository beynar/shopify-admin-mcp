# Input Object: `MarketCurrencySettingsUpdateInput`

The input fields used to update the currency settings of a market.

## Input Fields

- `baseCurrency`: `CurrencyCode` — The currency which this market’s customers must use if local currencies are disabled.
- `baseCurrencyManualRate`: `Decimal` — The manual exchange rate that will be used to convert shop currency prices. If null, then the automatic exchange rates will be used.
- `localCurrencies`: `Boolean` — Whether or not local currencies are enabled. If enabled, then prices will
- `roundingEnabled`: `Boolean` — Whether or not rounding is enabled on multi-currency prices.

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
