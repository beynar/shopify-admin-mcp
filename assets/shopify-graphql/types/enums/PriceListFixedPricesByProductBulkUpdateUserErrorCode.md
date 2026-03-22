# Enum: `PriceListFixedPricesByProductBulkUpdateUserErrorCode`

Possible error codes that can be returned by `PriceListFixedPricesByProductBulkUpdateUserError`.

## Values

- `NO_UPDATE_OPERATIONS_SPECIFIED` — No update operations specified.
- `PRICES_TO_ADD_CURRENCY_MISMATCH` — The currency specified does not match the price list's currency.
- `PRICE_LIST_DOES_NOT_EXIST` — Price list does not exist.
- `DUPLICATE_ID_IN_INPUT` — Duplicate ID in input.
- `ID_MUST_BE_MUTUALLY_EXCLUSIVE` — IDs must be mutually exclusive across add or delete operations.
- `PRODUCT_DOES_NOT_EXIST` — Product does not exist.
- `PRICE_LIMIT_EXCEEDED` — Exceeded the 10000 prices to add limit.
- `LOCAL_CURRENCY_GIFT_CARD_ISSUANCE_CURRENCY_MISMATCH` — The issuance currency of a local currency gift card must match the price list currency.
- `LOCAL_CURRENCY_GIFT_CARD_LIMIT_EXCEEDED` — The price of a local currency gift card cannot exceed the maximum gift card purchase limit.
