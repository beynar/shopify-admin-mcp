# Enum: `GiftCardTransactionUserErrorCode`

Possible error codes that can be returned by `GiftCardTransactionUserError`.

## Values

- `INVALID` — The input value is invalid.
- `INTERNAL_ERROR` — Unexpected internal error happened.
- `GIFT_CARD_LIMIT_EXCEEDED` — The gift card's value exceeds the allowed limits.
- `GIFT_CARD_NOT_FOUND` — The gift card could not be found.
- `NEGATIVE_OR_ZERO_AMOUNT` — A positive amount must be used.
- `INSUFFICIENT_FUNDS` — The gift card does not have sufficient funds to satisfy the request.
- `MISMATCHING_CURRENCY` — The currency provided does not match the currency of the gift card.
