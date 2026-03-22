# Object: `InventoryChange`

A change in an inventory quantity of an inventory item at a location. Each change tracks how inventory moves between different states like available, committed, reserved, or damaged.

The change captures the [amount changed](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.delta), the resulting [quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.quantityAfterChange), and links to the associated [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) and [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location).

The [`name`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.name) field indicates which inventory state changed, such as `available`, `reserved`, or `damaged`. The [`ledgerDocumentUri`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-InventoryChange.fields.ledgerDocumentUri) field provides an audit trail by referencing the source document or system that triggered the change.

## Fields

- `delta`: `Int!` — The amount by which the inventory quantity was changed.
- `item`: `InventoryItem` — The inventory item associated with this inventory change.
- `ledgerDocumentUri`: `String` — A URI that represents what the inventory quantity change was applied to.
- `location`: `Location` — The location associated with this inventory change.
- `name`: `String!` — The [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states)
- `quantityAfterChange`: `Int` — The quantity of named inventory after the change.

## Related Types

- [InventoryItem](../../types/objects/InventoryItem.md)
- [Location](../../types/objects/Location.md)
