# Enum: `TransactionVoidUserErrorCode`

Possible error codes that can be returned by `TransactionVoidUserError`.

## Values

- `TRANSACTION_NOT_FOUND` — Transaction does not exist.
- `AUTH_NOT_SUCCESSFUL` — Transaction must be a successful authorization.
- `AUTH_NOT_VOIDABLE` — Transaction must be voidable.
- `GENERIC_ERROR` — A generic error occurred while attempting to void the transaction.
