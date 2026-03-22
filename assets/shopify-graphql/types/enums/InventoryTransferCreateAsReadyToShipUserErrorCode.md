# Enum: `InventoryTransferCreateAsReadyToShipUserErrorCode`

Possible error codes that can be returned by `InventoryTransferCreateAsReadyToShipUserError`.

## Values

- `TRANSFER_NOT_FOUND` — The transfer was not found.
- `ITEMS_EMPTY` — The list of line items is empty.
- `INVALID_TRANSFER_STATUS` — Current transfer status does not support this operation.
- `LOCATION_NOT_ACTIVE` — The location selected is not active.
- `LOCATION_NOT_FOUND` — The location selected can't be found.
- `TRANSFER_ORIGIN_CANNOT_BE_THE_SAME_AS_DESTINATION` — The origin location cannot be the same as the destination location.
- `TAG_EXCEEDS_MAX_LENGTH` — The tag exceeds the maximum length.
- `LOCATION_REQUIRED` — A location is required for this operation.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
- `BUNDLED_ITEM` — Bundled items cannot be used for this operation.
- `UNTRACKED_ITEM` — The item does not track inventory.
- `ITEM_NOT_FOUND` — The item was not found.
- `INVALID_QUANTITY` — The quantity is invalid.
- `DUPLICATE_ITEM` — A single item can't be listed twice.
- `INVENTORY_STATE_NOT_ACTIVE` — The item is not stocked at the intended location.
