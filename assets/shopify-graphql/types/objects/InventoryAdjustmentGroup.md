# Object: `InventoryAdjustmentGroup`

Records a batch of inventory changes made together in a single operation. Tracks which [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) or [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) initiated the changes, when they occurred, and why they were made.

Provides an audit trail through its reason and reference document URI. The reference document URI links to the source that triggered the adjustment, such as an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer), or external system event. Use the [`changes`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-InventoryAdjustmentGroup.fields.changes) field to retrieve the specific quantity adjustments for each inventory state at affected [locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).

**Implements:** `Node`

## Fields

- `app`: `App` — The app that triggered the inventory event, if one exists.
- `changes` `(inventoryItemIds, locationIds, quantityNames)`: `[InventoryChange!]!` — The set of inventory quantity changes that occurred in the inventory event.
- `createdAt`: `DateTime!` — The date and time the inventory adjustment group was created.
- `id`: `ID!` — A globally-unique ID.
- `reason`: `String!` — The reason for the group of adjustments.
- `referenceDocumentUri`: `String` — A freeform URI that represents why the inventory change happened. This can be the entity adjusting inventory
- `staffMember`: `StaffMember` — The staff member associated with the inventory event.

## Related Types

- [App](../../types/objects/App.md)
- [InventoryChange](../../types/objects/InventoryChange.md)
- [StaffMember](../../types/objects/StaffMember.md)
