# Enum: `InventoryShipmentCreateUserErrorCode`

Possible error codes that can be returned by `InventoryShipmentCreateUserError`.

## Values

- `BARCODE_DUPLICATE` — This barcode is already assigned to another shipment.
- `BARCODE_TOO_LONG` — Barcode must be 255 characters or less.
- `EMPTY_SHIPMENT_INPUT` — The shipment input cannot be empty.
- `ITEM_NOT_FOUND` — The item was not found.
- `TRANSFER_NOT_FOUND` — The transfer was not found.
- `INVALID_TRANSFER_STATUS` — Current transfer status does not support this operation.
- `BUNDLED_ITEM` — Bundled items cannot be used for this operation.
- `INVALID_QUANTITY` — The quantity is invalid.
- `UNTRACKED_ITEM` — The item does not track inventory.
- `DUPLICATE_ITEM` — A single item can't be listed twice.
- `INVALID_SHIPMENT_INPUT` — The shipment input is invalid.
- `INVALID_ITEM` — One or more items are not valid.
- `INVALID_URL` — The URL is invalid.
- `LOCATION_NOT_ACTIVE` — The location selected is not active.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
- `IDEMPOTENCY_RECORD_NOT_FOUND` — The idempotency record was found but the associated scheduled changes no longer exist.
