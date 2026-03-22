# Object: `InventoryQuantity`

The `InventoryQuantity` object lets you manage and track inventory quantities for specific [states](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states).
Inventory quantities represent different states of items such as available for purchase, committed to orders, reserved for drafts, incoming from suppliers, or set aside for quality control or safety stock.

You can use [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel) to manage where inventory items are stocked. You can also [make inventory adjustments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) to apply changes to inventory quantities.

Inventory quantities can be managed by a merchant or by [fulfillment services](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice) that handle inventory tracking.
Learn more about working with [Shopify's inventory management system](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps).

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The inventory state [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states)
- `quantity`: `Int!` — The quantity of an inventory item at a specific location, for a quantity
- `updatedAt`: `DateTime` — When the inventory quantity was last updated.
