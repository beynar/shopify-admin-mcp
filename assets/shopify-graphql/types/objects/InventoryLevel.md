# Object: `InventoryLevel`

The quantities of an inventory item at a specific location. Each inventory level connects one [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) to one [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), tracking multiple quantity states like available, on-hand, incoming, and committed.

The [`quantities`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.quantities) field provides access to different inventory states. Learn [more about inventory states and relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

**Implements:** `Node`

## Fields

- `canDeactivate`: `Boolean!` — Whether the inventory items associated with the inventory level can be deactivated.
- `createdAt`: `DateTime!` — The date and time when the inventory level was created.
- `deactivationAlert`: `String` — Describes either the impact of deactivating the inventory level, or why the inventory level can't be deactivated.
- `id`: `ID!` — A globally-unique ID.
- `item`: `InventoryItem!` — Inventory item associated with the inventory level.
- `location`: `Location!` — The location associated with the inventory level.
- `quantities` `(names)`: `[InventoryQuantity!]!` — The quantity of an inventory item at a specific location, for a quantity
- `scheduledChanges` `(first, after, last, before, reverse, sortKey, query)`: `InventoryScheduledChangeConnection!` *(deprecated)* — Scheduled changes for the requested quantity names.
- `updatedAt`: `DateTime!` — The date and time when the inventory level was updated.

## Related Types

- [InventoryItem](../../types/objects/InventoryItem.md)
- [InventoryQuantity](../../types/objects/InventoryQuantity.md)
- [Location](../../types/objects/Location.md)
- [ScheduledChangeSortKeys](../../types/enums/ScheduledChangeSortKeys.md)
