# Enum: `InventorySetQuantitiesUserErrorCode`

Possible error codes that can be returned by `InventorySetQuantitiesUserError`.

## Values

- `INVALID_INVENTORY_ITEM` — The specified inventory item could not be found.
- `INVALID_LOCATION` — The specified location could not be found.
- `INVALID_QUANTITY_NEGATIVE` — The quantity can't be negative.
- `INVALID_REASON` — The specified reason is invalid.
- `INVALID_REFERENCE_DOCUMENT` — The specified reference document is invalid.
- `ITEM_NOT_STOCKED_AT_LOCATION` — The specified inventory item is not stocked at the location.
- `INVALID_QUANTITY_TOO_HIGH` — The total quantity can't be higher than 1,000,000,000.
- `INVALID_QUANTITY_TOO_LOW` — The total quantity can't be lower than -1,000,000,000.
- `COMPARE_QUANTITY_REQUIRED` — The compareQuantity argument must be given to each quantity or ignored using ignoreCompareQuantity.
- `COMPARE_QUANTITY_STALE` — The compareQuantity value does not match persisted value.
- `CHANGE_FROM_QUANTITY_STALE` — The changeFromQuantity value does not match persisted value.
- `INVALID_NAME` — The quantity name must be either 'available' or 'on_hand'.
- `NO_DUPLICATE_INVENTORY_ITEM_ID_GROUP_ID_PAIR` — The combination of inventoryItemId and locationId must be unique.
- `NON_MUTABLE_INVENTORY_ITEM` — The specified inventory item is not allowed to be adjusted via API. Example: if the inventory item is a parent bundle.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
