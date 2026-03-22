# Enum: `GiftCardErrorCode`

Possible error codes that can be returned by `GiftCardUserError`.

## Values

- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
- `TAKEN` — The input value is already taken.
- `INVALID` — The input value is invalid.
- `INTERNAL_ERROR` — Unexpected internal error happened.
- `MISSING_ARGUMENT` — Missing a required argument.
- `GREATER_THAN` — The input value should be greater than the minimum allowed value.
- `GIFT_CARD_LIMIT_EXCEEDED` — The gift card's value exceeds the allowed limits.
- `CUSTOMER_NOT_FOUND` — The customer could not be found.
- `RECIPIENT_NOT_FOUND` — The recipient could not be found.
