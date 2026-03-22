# Object: `InventoryTransfer`

Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

**Implements:** `CommentEventSubject`, `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `Node`

## Fields

- `dateCreated`: `DateTime` — The date and time the inventory transfer was created in UTC format.
- `destination`: `LocationSnapshot` — Snapshot of the destination location (name, address, when snapped) with an optional link to the live Location object. If the original location is deleted, the snapshot data will still be available but the location link will be nil.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The list of events associated with the inventory transfer.
- `hasTimelineComment`: `Boolean!` — Whether the merchant has added timeline comments to the inventory transfer.
- `id`: `ID!` — A globally-unique ID.
- `lineItems` `(first, after, last, before, reverse, query)`: `InventoryTransferLineItemConnection!` — The line items associated with the inventory transfer.
- `lineItemsCount` `(query, limit)`: `Count` — The number of line items associated with the inventory transfer. Limited to a maximum of 10000 by default.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The name of the inventory transfer.
- `note`: `String` — Additional note attached to the inventory transfer.
- `origin`: `LocationSnapshot` — Snapshot of the origin location (name, address, when snapped) with an optional link to the live Location object. If the original location is deleted, the snapshot data will still be available but the location link will be nil.
- `receivedQuantity`: `Int!` — The total quantity of items received in the transfer.
- `referenceName`: `String` — The reference name of the inventory transfer.
- `shipments` `(first, after, last, before, reverse)`: `InventoryShipmentConnection!` — The shipments associated with the inventory transfer.
- `status`: `InventoryTransferStatus!` — The current status of the transfer.
- `tags`: `[String!]!` — A list of tags that have been added to the inventory transfer.
- `totalQuantity`: `Int!` — The total quantity of items being transferred.

## Related Types

- [Count](../../types/objects/Count.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [InventoryTransferStatus](../../types/enums/InventoryTransferStatus.md)
- [LocationSnapshot](../../types/objects/LocationSnapshot.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
