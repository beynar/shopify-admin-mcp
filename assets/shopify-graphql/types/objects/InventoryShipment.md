# Object: `InventoryShipment`

Represents an inventory shipment.

**Implements:** `Node`

## Fields

- `dateCreated`: `DateTime` — The date the shipment was created in UTC.
- `dateReceived`: `DateTime` — The date the shipment was initially received in UTC.
- `dateShipped`: `DateTime` — The date the shipment was shipped in UTC.
- `id`: `ID!` — A globally-unique ID.
- `lineItemTotalQuantity`: `Int!` — The total quantity of all items in the shipment.
- `lineItems` `(first, after, last, before, reverse, sortKey, query)`: `InventoryShipmentLineItemConnection` — The line items included in this shipment.
- `lineItemsCount` `(query, limit)`: `Count` — The number of line items associated with the inventory shipment. Limited to a maximum of 10000 by default.
- `name`: `String!` — The name of the inventory shipment.
- `status`: `InventoryShipmentStatus!` — The current status of the shipment.
- `totalAcceptedQuantity`: `Int!` — The total quantity of items accepted across all line items in this shipment.
- `totalReceivedQuantity`: `Int!` — The total quantity of items received (both accepted and rejected) across all line items in this shipment.
- `totalRejectedQuantity`: `Int!` — The total quantity of items rejected across all line items in this shipment.
- `tracking`: `InventoryShipmentTracking` — The tracking information for the shipment.

## Related Types

- [Count](../../types/objects/Count.md)
- [InventoryShipmentStatus](../../types/enums/InventoryShipmentStatus.md)
- [InventoryShipmentTracking](../../types/objects/InventoryShipmentTracking.md)
- [ShipmentLineItemSortKeys](../../types/enums/ShipmentLineItemSortKeys.md)
