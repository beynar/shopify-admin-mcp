# Input Object: `InventorySetQuantityInput`

The input fields for the quantity to be set for an inventory item at a location.

## Input Fields

- `inventoryItemId`: `ID!` — Specifies the inventory item to which the quantity will be set.
- `locationId`: `ID!` — Specifies the location at which the quantity will be set.
- `quantity`: `Int!` — The quantity to which the inventory quantity will be set.
- `changeFromQuantity`: `Int` — The current quantity to be compared against the persisted quantity. For more information, refer to the [Compare and Swap documentation](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#compare-and-swap).
