# Enum: `InventorySetOnHandQuantitiesUserErrorCode`

Possible error codes that can be returned by `InventorySetOnHandQuantitiesUserError`.

## Values

- `INVALID_INVENTORY_ITEM` — The specified inventory item could not be found.
- `INVALID_LOCATION` — The specified location could not be found.
- `INVALID_QUANTITY_NEGATIVE` — The quantity can't be negative.
- `INVALID_REASON` — The specified reason is invalid.
- `INVALID_REFERENCE_DOCUMENT` — The specified reference document is invalid.
- `CHANGE_FROM_QUANTITY_STALE` — The changeFromQuantity argument no longer matches the persisted quantity.
- `SET_ON_HAND_QUANTITIES_FAILED` — The on-hand quantities couldn't be set. Try again.
- `ITEM_NOT_STOCKED_AT_LOCATION` — The inventory item is not stocked at the location.
- `NON_MUTABLE_INVENTORY_ITEM` — The specified inventory item is not allowed to be adjusted via API. Example: if the inventory item is a parent bundle.
- `INVALID_QUANTITY_TOO_HIGH` — The total quantity can't be higher than 1,000,000,000.
- `COMPARE_QUANTITY_STALE` — The compareQuantity value does not match persisted value.
- `SERVICE_UNAVAILABLE` — The service is temporarily unavailable. Try again later.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
