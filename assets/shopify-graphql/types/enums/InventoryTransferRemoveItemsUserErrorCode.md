# Enum: `InventoryTransferRemoveItemsUserErrorCode`

Possible error codes that can be returned by `InventoryTransferRemoveItemsUserError`.

## Values

- `TRANSFER_NOT_FOUND` — The transfer was not found.
- `CANT_REMOVE_ALL_ITEMS_FROM_READY_TO_SHIP_TRANSFER` — A ready to ship transfer must have at least one item.
- `ITEM_NOT_FOUND` — The item was not found.
- `ALL_QUANTITY_SHIPPED` — The item cannot have its shippable quantity removed if all of its quantity is fully allocated in one or more shipments.
- `ITEM_PRESENT_ON_DRAFT_SHIPMENT_WITH_ZERO_QUANTITY` — The item cannot be removed because it exists in a draft shipment with zero quantity.
- `INVALID_TRANSFER_STATUS` — Current transfer status does not support this operation.
- `LOCATION_NOT_FOUND` — The location selected can't be found.
