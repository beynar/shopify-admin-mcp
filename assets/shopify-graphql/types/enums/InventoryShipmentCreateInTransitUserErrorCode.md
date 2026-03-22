# Enum: `InventoryShipmentCreateInTransitUserErrorCode`

Possible error codes that can be returned by `InventoryShipmentCreateInTransitUserError`.

## Values

- `DUPLICATE_ITEM` — A single item can't be listed twice.
- `INVALID_QUANTITY` — The quantity is invalid.
- `ITEM_NOT_FOUND` — The item was not found.
- `INVALID_TRANSFER_STATUS` — Current transfer status does not support this operation.
- `UNTRACKED_ITEM` — The item does not track inventory.
- `EMPTY_SHIPMENT_INPUT` — The shipment input cannot be empty.
- `ITEMS_EMPTY` — The list of line items is empty.
- `TRANSFER_NOT_FOUND` — The transfer was not found.
- `INVALID_URL` — The URL is invalid.
- `INVALID_SHIPMENT_INPUT` — The shipment input is invalid.
- `INVALID_ITEM` — One or more items are not valid.
- `INVENTORY_STATE_NOT_ACTIVE` — The item is not stocked at the intended location.
- `LOCATION_NOT_ACTIVE` — The location selected is not active.
- `SHIPMENT_NOT_FOUND` — The shipment was not found.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
