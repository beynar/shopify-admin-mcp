# Enum: `CustomerMergeErrorCode`

Possible error codes that can be returned by `CustomerMergeUserError`.

## Values

- `INTERNAL_ERROR` — An internal error occurred.
- `INVALID_CUSTOMER` — The customer cannot be merged.
- `INVALID_CUSTOMER_ID` — The customer ID is invalid.
- `CUSTOMER_HAS_GIFT_CARDS` — The customer cannot be merged because it has associated gift cards.
- `MISSING_OVERRIDE_ATTRIBUTE` — The customer is missing the attribute requested for override.
- `OVERRIDE_ATTRIBUTE_INVALID` — The override attribute is invalid.
