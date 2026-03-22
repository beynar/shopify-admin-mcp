# Input Object: `InventoryChangeInput`

The input fields for the change to be made to an inventory item at a location.

## Input Fields

- `delta`: `Int!` — The amount by which the inventory quantity will be changed.
- `changeFromQuantity`: `Int` — The quantity to compare against before applying the delta. For more information, refer to the [Compare and Swap documentation](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#compare-and-swap).
- `inventoryItemId`: `ID!` — Specifies the inventory item to which the change will be applied.
- `locationId`: `ID!` — Specifies the location at which the change will be applied.
- `ledgerDocumentUri`: `String` — A non-Shopify URI that identifies what specific inventory transaction or ledger entry was changed. Represents the exact inventory movement being referenced, distinct from the business reason for the change.
