# Enum: `InventoryShipmentMarkInTransitUserErrorCode`

Possible error codes that can be returned by `InventoryShipmentMarkInTransitUserError`.

## Values

- `SHIPMENT_NOT_FOUND` — The shipment was not found.
- `INVALID_SHIPMENT_STATUS` — Current shipment status does not support this operation.
- `ITEM_NOT_FOUND` — The item was not found.
- `INVENTORY_STATE_NOT_ACTIVE` — The item is not stocked at the intended location.
- `UNTRACKED_ITEM` — The item does not track inventory.
- `INVALID_QUANTITY` — The quantity is invalid.
- `ITEMS_EMPTY` — The list of line items is empty.
- `LOCATION_NOT_ACTIVE` — The location selected is not active.
- `ACTIVATION_FAILED` — Failed to activate inventory at location.
