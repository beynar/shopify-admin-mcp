# Object: `InventoryShipmentLineItem`

Represents a single line item within an inventory shipment.

**Implements:** `Node`

## Fields

- `acceptedQuantity`: `Int!` — The quantity of items that were accepted in this shipment line item.
- `id`: `ID!` — A globally-unique ID.
- `inventoryItem`: `InventoryItem` — The inventory item associated with this line item.
- `quantity`: `Int!` — The quantity of items in this shipment line item.
- `rejectedQuantity`: `Int!` — The quantity of items that were rejected in this shipment line item.
- `unreceivedQuantity`: `Int!` — The total quantity of units that haven't been received (neither accepted or rejected) in this shipment line item.

## Related Types

- [InventoryItem](../../types/objects/InventoryItem.md)
