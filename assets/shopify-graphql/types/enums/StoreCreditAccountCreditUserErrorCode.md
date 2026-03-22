# Enum: `StoreCreditAccountCreditUserErrorCode`

Possible error codes that can be returned by `StoreCreditAccountCreditUserError`.

## Values

- `ACCOUNT_NOT_FOUND` — The store credit account could not be found.
- `OWNER_NOT_FOUND` — Owner does not exist.
- `NEGATIVE_OR_ZERO_AMOUNT` — A positive amount must be used to credit a store credit account.
- `MISMATCHING_CURRENCY` — The currency provided does not match the currency of the store credit account.
- `EXPIRES_AT_IN_PAST` — The expiry date must be in the future.
- `CREDIT_LIMIT_EXCEEDED` — The operation would cause the account's credit limit to be exceeded.
- `UNSUPPORTED_CURRENCY` — The currency provided is not currently supported.
