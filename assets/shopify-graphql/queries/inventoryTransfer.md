# Query: `inventoryTransfer`

**Returns:** `InventoryTransfer`

Returns an [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer) by ID. Inventory transfers track the movement of inventory between locations, including origin and destination details, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects, quantities, and [`InventoryTransferStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus) values.

## Arguments

- **`id`**: `ID!` — The ID of the inventory transfer.

## Return Type Fields

- `dateCreated`: `DateTime` — The date and time the inventory transfer was created in UTC format.
- `destination`: `LocationSnapshot` — Snapshot of the destination location (name, address, when snapped) with an optional link to the live Location object. If the original location is deleted, the snapshot data will still be available but the location link will be nil.
- `events`: `EventConnection!` — The list of events associated with the inventory transfer.
- `hasTimelineComment`: `Boolean!` — Whether the merchant has added timeline comments to the inventory transfer.
- `id`: `ID!` — A globally-unique ID.
- `lineItems`: `InventoryTransferLineItemConnection!` — The line items associated with the inventory transfer.
- `lineItemsCount`: `Count` — The number of line items associated with the inventory transfer. Limited to a maximum of 10000 by default.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The name of the inventory transfer.
- `note`: `String` — Additional note attached to the inventory transfer.
- `origin`: `LocationSnapshot` — Snapshot of the origin location (name, address, when snapped) with an optional link to the live Location object. If the original location is deleted, the snapshot data will still be available but the location link will be nil.
- `receivedQuantity`: `Int!` — The total quantity of items received in the transfer.
- `referenceName`: `String` — The reference name of the inventory transfer.
- `shipments`: `InventoryShipmentConnection!` — The shipments associated with the inventory transfer.
- `status`: `InventoryTransferStatus!` — The current status of the transfer.
- `tags`: `[String!]!` — A list of tags that have been added to the inventory transfer.
- `totalQuantity`: `Int!` — The total quantity of items being transferred.

## Related Types

- [Count](../types/objects/Count.md)
- [InventoryTransfer](../types/objects/InventoryTransfer.md)
- [InventoryTransferStatus](../types/enums/InventoryTransferStatus.md)
- [LocationSnapshot](../types/objects/LocationSnapshot.md)
- [Metafield](../types/objects/Metafield.md)

## Example Query

```graphql
query InventoryTransfer($id: ID!) {
  inventoryTransfer(id: $id) {
    dateCreated
    hasTimelineComment
    name
    note
  }
}
```
