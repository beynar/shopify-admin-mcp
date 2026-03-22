# Object: `InventoryTransferLineItem`

Represents a line item belonging to an inventory transfer.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `inventoryItem`: `InventoryItem` — The inventory item associated with this line item.
- `pickedForShipmentQuantity`: `Int!` — The quantity of the item that has been picked for a draft shipment but not yet shipped.
- `processableQuantity`: `Int!` — The quantity of the item that can be actioned upon, such as editing the item quantity on the transfer or adding to a shipment.
- `shippableQuantity`: `Int!` — The quantity of the item that can be shipped.
- `shippedQuantity`: `Int!` — The quantity of the item that has been shipped.
- `title`: `String` — The title of the product associated with this line item.
- `totalQuantity`: `Int!` — The total quantity of items being transferred.

## Related Types

- [InventoryItem](../../types/objects/InventoryItem.md)
