# Enum: `InventoryTransferMarkAsReadyToShipUserErrorCode`

Possible error codes that can be returned by `InventoryTransferMarkAsReadyToShipUserError`.

## Values

- `TRANSFER_NOT_FOUND` — The transfer was not found.
- `ITEMS_EMPTY` — The list of line items is empty.
- `INVALID_TRANSFER_STATUS` — Current transfer status does not support this operation.
- `LOCATION_REQUIRED` — A location is required for this operation.
- `INVALID_ITEM` — One or more items are not valid.
- `LOCATION_NOT_ACTIVE` — The location selected is not active.
- `LOCATION_NOT_FOUND` — The location selected can't be found.
