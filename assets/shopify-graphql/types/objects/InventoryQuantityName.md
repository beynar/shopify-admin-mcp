# Object: `InventoryQuantityName`

Details about an individual quantity name.

## Fields

- `belongsTo`: `[String!]!` — List of quantity names that this quantity name belongs to.
- `comprises`: `[String!]!` — List of quantity names that comprise this quantity name.
- `displayName`: `String` — The display name for quantity names translated into applicable language.
- `isInUse`: `Boolean!` — Whether the quantity name has been used by the merchant.
- `name`: `String!` — The [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states) of
