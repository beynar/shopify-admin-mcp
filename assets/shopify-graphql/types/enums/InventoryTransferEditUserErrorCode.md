# Enum: `InventoryTransferEditUserErrorCode`

Possible error codes that can be returned by `InventoryTransferEditUserError`.

## Values

- `INTERNAL_ERROR` — Unexpected internal error happened.
- `TRANSFER_NOT_FOUND` — The transfer was not found.
- `TRANSFER_LOCATION_IMMUTABLE` — The location of a transfer cannot be updated. Only Draft Transfers can mutate their locations.
- `TRANSFER_ORIGIN_CANNOT_BE_THE_SAME_AS_DESTINATION` — The origin location cannot be the same as the destination location.
- `LOCATION_NOT_ACTIVE` — The location selected is not active.
- `LOCATION_NOT_FOUND` — The location selected can't be found.
- `INVENTORY_STATE_NOT_ACTIVE` — The item is not stocked at the intended location.
- `TAG_EXCEEDS_MAX_LENGTH` — The tag exceeds the maximum length.
