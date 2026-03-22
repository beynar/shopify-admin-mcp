# Enum: `LocationActivateUserErrorCode`

Possible error codes that can be returned by `LocationActivateUserError`.

## Values

- `GENERIC_ERROR` — An error occurred while activating the location.
- `LOCATION_LIMIT` — Shop has reached its location limit.
- `HAS_ONGOING_RELOCATION` — This location currently cannot be activated as inventory, pending orders or transfers are being relocated from this location.
- `LOCATION_NOT_FOUND` — Location not found.
- `HAS_NON_UNIQUE_NAME` — There is already an active location with this name.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
