# Input Object: `InventoryMoveQuantityTerminalInput`

The input fields representing the change to be made to an inventory item at a location.

## Input Fields

- `locationId`: `ID!` — Specifies the location at which the change will be applied.
- `name`: `String!` — The quantity
- `ledgerDocumentUri`: `String` — A non-Shopify URI that identifies what specific inventory transaction or ledger entry was changed. Represents the exact inventory movement being referenced, distinct from the business reason for the change.
- `changeFromQuantity`: `Int` — The quantity to compare against before applying the move. For more information, refer to the [Compare and Swap documentation](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#compare-and-swap).
