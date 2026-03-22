# Enum: `InventoryTransferDuplicateUserErrorCode`

Possible error codes that can be returned by `InventoryTransferDuplicateUserError`.

## Values

- `TRANSFER_NOT_FOUND` — The transfer was not found.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
