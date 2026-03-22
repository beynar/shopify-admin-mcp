# Input Object: `InventoryMoveQuantityChange`

Represents the change to be made to an inventory item at a location.
The change can either involve the same quantity name between different locations,
or involve different quantity names between the same location.

## Input Fields

- `inventoryItemId`: `ID!` — Specifies the inventory item to which the change will be applied.
- `quantity`: `Int!` — The amount by which the inventory quantity will be changed.
- `from`: `InventoryMoveQuantityTerminalInput!` — Details about where the move will be made from.
- `to`: `InventoryMoveQuantityTerminalInput!` — Details about where the move will be made to.

## Related Types

- [InventoryMoveQuantityTerminalInput](../../types/inputs/InventoryMoveQuantityTerminalInput.md)
