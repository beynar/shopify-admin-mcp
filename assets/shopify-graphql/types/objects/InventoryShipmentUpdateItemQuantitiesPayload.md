# Object: `InventoryShipmentUpdateItemQuantitiesPayload`

Return type for `inventoryShipmentUpdateItemQuantities` mutation.

## Fields

- `shipment`: `InventoryShipment` — The inventory shipment with updated item quantities.
- `updatedLineItems`: `[InventoryShipmentLineItem!]` — The updated item quantities.
- `userErrors`: `[InventoryShipmentUpdateItemQuantitiesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipment](../../types/objects/InventoryShipment.md)
- [InventoryShipmentLineItem](../../types/objects/InventoryShipmentLineItem.md)
- [InventoryShipmentUpdateItemQuantitiesUserError](../../types/objects/InventoryShipmentUpdateItemQuantitiesUserError.md)
