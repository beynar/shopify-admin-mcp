# Enum: `InventoryShipmentReceiveUserErrorCode`

Possible error codes that can be returned by `InventoryShipmentReceiveUserError`.

## Values

- `LOCATION_NOT_FOUND` — The location selected can't be found.
- `IDEMPOTENCY_CONCURRENT_REQUEST` — This request is currently in progress, please try again.
- `IDEMPOTENCY_KEY_PARAMETER_MISMATCH` — The same idempotency key cannot be used with different operation parameters.
- `INTERNAL_ERROR` — Unexpected internal error happened.
- `INVALID_SHIPMENT_STATUS` — Current shipment status does not support this operation.
- `INVENTORY_STATE_NOT_ACTIVE` — The item is not stocked at the intended location.
- `SHIPMENT_NOT_FOUND` — The shipment was not found.
- `INVALID_QUANTITY` — The quantity is invalid.
- `ITEM_NOT_FOUND` — The item was not found.
- `LOCATION_NOT_ACTIVE` — The location selected is not active.
