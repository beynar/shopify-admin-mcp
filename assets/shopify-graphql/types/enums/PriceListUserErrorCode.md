# Enum: `PriceListUserErrorCode`

Possible error codes that can be returned by `PriceListUserError`.

## Values

- `TAKEN` — The input value is already taken.
- `BLANK` — The input value is blank.
- `INCLUSION` — The input value isn't included in the list.
- `TOO_LONG` — The input value is too long.
- `PRICE_LIST_NOT_FOUND` — The specified price list doesn't exist.
- `PRICE_LIST_LOCKED` — The price list is currently being modified. Please try again later.
- `CURRENCY_MARKET_MISMATCH` — A price list’s currency must be the market currency.
- `INVALID_ADJUSTMENT_VALUE` — The adjustment value must be a positive value and not be greater than 100% for `type` `PERCENTAGE_DECREASE` and not be greater than 1000% for `type` `PERCENTAGE_INCREASE`.
- `INVALID_ADJUSTMENT_MIN_VALUE` — The adjustment value must not be greater than 100% for `type` `PERCENTAGE_DECREASE`.
- `INVALID_ADJUSTMENT_MAX_VALUE` — The adjustment value must not be greater than 1000% for `type` `PERCENTAGE_INCREASE`.
- `CATALOG_CONTEXT_DOES_NOT_SUPPORT_QUANTITY_RULES` — Quantity rules can be associated only with company location catalogs or catalogs associated with compatible markets.
- `CATALOG_CONTEXT_DOES_NOT_SUPPORT_QUANTITY_PRICE_BREAKS` — Quantity price breaks can be associated only with company location catalogs or catalogs associated with compatible markets.
- `CONTEXT_RULE_LIMIT_ONE_OPTION` — Only one context rule option may be specified.
- `CURRENCY_NOT_SUPPORTED` — The price list currency is not supported by the shop's payment gateway.
- `PRICE_LIST_NOT_ALLOWED_FOR_PRIMARY_MARKET` — Cannot create price list for a primary market.
- `CATALOG_DOES_NOT_EXIST` — The specified catalog does not exist.
- `CATALOG_MARKET_AND_PRICE_LIST_CURRENCY_MISMATCH` — The price list currency must match the market catalog currency.
- `CATALOG_TAKEN` — Catalog has a price list already assigned.
- `COUNTRY_PRICE_LIST_ASSIGNMENT` — A country catalog cannot be assigned to a price list.
- `GENERIC_ERROR` — Something went wrong when trying to save the price list. Please try again.
