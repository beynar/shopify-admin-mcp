# Enum: `StoreCreditAccountDebitUserErrorCode`

Possible error codes that can be returned by `StoreCreditAccountDebitUserError`.

## Values

- `ACCOUNT_NOT_FOUND` — The store credit account could not be found.
- `NEGATIVE_OR_ZERO_AMOUNT` — A positive amount must be used to debit a store credit account.
- `INSUFFICIENT_FUNDS` — The store credit account does not have sufficient funds to satisfy the request.
- `MISMATCHING_CURRENCY` — The currency provided does not match the currency of the store credit account.
