# Enum: `InventorySetScheduledChangesUserErrorCode`

Possible error codes that can be returned by `InventorySetScheduledChangesUserError`.

## Values

- `ERROR_UPDATING_SCHEDULED` — There was an error updating the scheduled changes.
- `SAME_FROM_TO_NAMES` — The from_name and to_name can't be the same.
- `INVALID_FROM_NAME` — The specified fromName is invalid.
- `INVALID_TO_NAME` — The specified toName is invalid.
- `DUPLICATE_TO_NAME` — The item can only have one scheduled change for quantity name as the toName.
- `INVALID_REASON` — The specified reason is invalid.
- `DUPLICATE_FROM_NAME` — The item can only have one scheduled change for quantity name as the fromName.
- `LOCATION_NOT_FOUND` — The location couldn't be found.
- `INVENTORY_STATE_NOT_FOUND` — The inventory item was not found at the location specified.
- `ITEMS_EMPTY` — At least 1 item must be provided.
- `INVENTORY_ITEM_NOT_FOUND` — The inventory item was not found.
- `INCLUSION` — The specified field is invalid.
- `LEDGER_DOCUMENT_INVALID` — The ledger document URI is invalid.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
