# Object: `InventoryShipmentAddItemsPayload`

Return type for `inventoryShipmentAddItems` mutation.

## Fields

- `addedItems`: `[InventoryShipmentLineItem!]` — The list of added line items.
- `inventoryShipment`: `InventoryShipment` — The inventory shipment with the added items.
- `userErrors`: `[InventoryShipmentAddItemsUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipment](../../types/objects/InventoryShipment.md)
- [InventoryShipmentAddItemsUserError](../../types/objects/InventoryShipmentAddItemsUserError.md)
- [InventoryShipmentLineItem](../../types/objects/InventoryShipmentLineItem.md)
