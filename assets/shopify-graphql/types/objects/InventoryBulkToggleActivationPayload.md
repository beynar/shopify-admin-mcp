# Object: `InventoryBulkToggleActivationPayload`

Return type for `inventoryBulkToggleActivation` mutation.

## Fields

- `inventoryItem`: `InventoryItem` — The inventory item that was updated.
- `inventoryLevels`: `[InventoryLevel!]` — The activated inventory levels.
- `userErrors`: `[InventoryBulkToggleActivationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryBulkToggleActivationUserError](../../types/objects/InventoryBulkToggleActivationUserError.md)
- [InventoryItem](../../types/objects/InventoryItem.md)
- [InventoryLevel](../../types/objects/InventoryLevel.md)
