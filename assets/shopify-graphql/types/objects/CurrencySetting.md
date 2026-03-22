# Object: `CurrencySetting`

A setting for a presentment currency.

## Fields

- `currencyCode`: `CurrencyCode!` — The currency's ISO code.
- `currencyName`: `String!` — The full name of the currency.
- `enabled`: `Boolean!` — Whether the currency is enabled or not. An enabled currency setting is visible to buyers and allows orders to be generated with that currency as presentment.
- `manualRate`: `Decimal` — The manual rate, if enabled, that applies to this currency when converting from shop currency. This rate is specific to the associated market's currency setting.
- `rateUpdatedAt`: `DateTime` — The date and time when the active exchange rate for the currency was last modified. It can be the automatic rate's creation date, or the manual rate's last updated at date if active.

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
