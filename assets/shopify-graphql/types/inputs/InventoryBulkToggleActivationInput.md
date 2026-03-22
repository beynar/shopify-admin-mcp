# Input Object: `InventoryBulkToggleActivationInput`

The input fields to specify whether the inventory item should be activated or not at the specified location.

## Input Fields

- `locationId`: `ID!` — The ID of the location to modify the inventory item's stocked status.
- `activate`: `Boolean!` — Whether the inventory item can be stocked at the specified location. To deactivate, set the value to false which removes an inventory item's quantities from that location, and turns off inventory at that location.
