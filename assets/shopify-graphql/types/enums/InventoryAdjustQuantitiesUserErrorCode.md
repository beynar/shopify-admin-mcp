# Enum: `InventoryAdjustQuantitiesUserErrorCode`

Possible error codes that can be returned by `InventoryAdjustQuantitiesUserError`.

## Values

- `INTERNAL_LEDGER_DOCUMENT` — Internal (gid://shopify/) ledger documents are not allowed to be adjusted via API.
- `INVALID_AVAILABLE_DOCUMENT` — A ledger document URI is not allowed when adjusting available.
- `INVALID_INVENTORY_ITEM` — The specified inventory item could not be found.
- `INVALID_LEDGER_DOCUMENT` — The specified ledger document is invalid.
- `INVALID_LOCATION` — The specified location could not be found.
- `INVALID_QUANTITY_DOCUMENT` — A ledger document URI is required except when adjusting available.
- `INVALID_QUANTITY_NAME` — The specified quantity name is invalid.
- `INVALID_QUANTITY_TOO_LOW` — The quantity can't be lower than -2,000,000,000.
- `INVALID_QUANTITY_TOO_HIGH` — The quantity can't be higher than 2,000,000,000.
- `INVALID_REASON` — The specified reason is invalid.
- `INVALID_REFERENCE_DOCUMENT` — The specified reference document is invalid.
- `SERVICE_UNAVAILABLE` — The service is temporarily unavailable. Try again later.
- `CHANGE_FROM_QUANTITY_STALE` — The changeFromQuantity argument no longer matches the persisted quantity.
- `ADJUST_QUANTITIES_FAILED` — The quantities couldn't be adjusted. Try again.
- `MAX_ONE_LEDGER_DOCUMENT` — All changes must have the same ledger document URI or, in the case of adjusting available, no ledger document URI.
- `ITEM_NOT_STOCKED_AT_LOCATION` — The inventory item is not stocked at the location.
- `NON_MUTABLE_INVENTORY_ITEM` — The specified inventory item is not allowed to be adjusted via API. Example: if the inventory item is a parent bundle.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
