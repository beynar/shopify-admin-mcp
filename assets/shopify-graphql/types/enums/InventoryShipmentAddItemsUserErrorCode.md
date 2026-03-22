# Enum: `InventoryShipmentAddItemsUserErrorCode`

Possible error codes that can be returned by `InventoryShipmentAddItemsUserError`.

## Values

- `LOCATION_NOT_FOUND` — The location selected can't be found.
- `INVALID_SHIPMENT_STATUS` — Current shipment status does not support this operation.
- `DUPLICATE_ITEM` — A single item can't be listed twice.
- `INVALID_QUANTITY` — The quantity is invalid.
- `ITEM_NOT_FOUND` — The item was not found.
- `INVENTORY_STATE_NOT_ACTIVE` — The item is not stocked at the intended location.
- `UNTRACKED_ITEM` — The item does not track inventory.
- `SHIPMENT_NOT_FOUND` — The shipment was not found.
- `LOCATION_NOT_ACTIVE` — The location selected is not active.
- `ACTIVATION_FAILED` — Failed to activate inventory at location.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
