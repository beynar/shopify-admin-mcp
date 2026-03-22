# Query: `inventoryShipment`

**Returns:** `InventoryShipment`

Retrieves an [`InventoryShipment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment) by ID. Returns tracking details, [`InventoryShipmentLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem) objects with quantities, and the shipment's current [`InventoryShipmentStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentStatus).

## Arguments

- **`id`**: `ID!` — The ID of the inventory shipment.

## Return Type Fields

- `dateCreated`: `DateTime` — The date the shipment was created in UTC.
- `dateReceived`: `DateTime` — The date the shipment was initially received in UTC.
- `dateShipped`: `DateTime` — The date the shipment was shipped in UTC.
- `id`: `ID!` — A globally-unique ID.
- `lineItemTotalQuantity`: `Int!` — The total quantity of all items in the shipment.
- `lineItems`: `InventoryShipmentLineItemConnection` — The line items included in this shipment.
- `lineItemsCount`: `Count` — The number of line items associated with the inventory shipment. Limited to a maximum of 10000 by default.
- `name`: `String!` — The name of the inventory shipment.
- `status`: `InventoryShipmentStatus!` — The current status of the shipment.
- `totalAcceptedQuantity`: `Int!` — The total quantity of items accepted across all line items in this shipment.
- `totalReceivedQuantity`: `Int!` — The total quantity of items received (both accepted and rejected) across all line items in this shipment.
- `totalRejectedQuantity`: `Int!` — The total quantity of items rejected across all line items in this shipment.
- `tracking`: `InventoryShipmentTracking` — The tracking information for the shipment.

## Related Types

- [Count](../types/objects/Count.md)
- [InventoryShipment](../types/objects/InventoryShipment.md)
- [InventoryShipmentStatus](../types/enums/InventoryShipmentStatus.md)
- [InventoryShipmentTracking](../types/objects/InventoryShipmentTracking.md)

## Example Query

```graphql
query InventoryShipment($id: ID!) {
  inventoryShipment(id: $id) {
    dateCreated
    dateReceived
    dateShipped
    lineItemTotalQuantity
  }
}
```
