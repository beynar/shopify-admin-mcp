# Enum: `PriceListPriceUserErrorCode`

Possible error codes that can be returned by `PriceListPriceUserError`.

## Values

- `BLANK` — The input value is blank.
- `PRICE_LIST_NOT_FOUND` — The price list doesn't exist.
- `PRICE_LIST_CURRENCY_MISMATCH` — The specified currency doesn't match the price list's currency.
- `LOCAL_CURRENCY_GIFT_CARD_ISSUANCE_CURRENCY_MISMATCH` — The issuance currency of a local currency gift card must match the price list currency.
- `LOCAL_CURRENCY_GIFT_CARD_LIMIT_EXCEEDED` — The price of a local currency gift card cannot exceed the maximum gift card purchase limit.
- `VARIANT_NOT_FOUND` — A fixed price for the specified product variant doesn't exist.
- `PRICE_NOT_FIXED` — Only fixed prices can be deleted.
