# Enum: `MarketCurrencySettingsUserErrorCode`

Possible error codes that can be returned by `MarketCurrencySettingsUserError`.

## Values

- `MARKET_NOT_FOUND` — The specified market wasn't found.
- `MANAGED_MARKET` — The currency settings of the given market cannot be changed because the market manager has exclusive control of pricing.
- `UNIFIED_MARKETS_ENABLED` — This action is restricted if unified markets is enabled.
- `MULTIPLE_CURRENCIES_NOT_SUPPORTED` — The shop's payment gateway does not support enabling more than one currency.
- `NO_LOCAL_CURRENCIES_ON_SINGLE_COUNTRY_MARKET` — Can't enable or disable local currencies on a single country market.
- `UNSUPPORTED_CURRENCY` — The specified currency is not supported.
- `PRIMARY_MARKET_USES_SHOP_CURRENCY` — The primary market must use the shop currency.
