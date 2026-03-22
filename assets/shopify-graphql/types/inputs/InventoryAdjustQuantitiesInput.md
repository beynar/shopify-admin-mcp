# Input Object: `InventoryAdjustQuantitiesInput`

The input fields required to adjust inventory quantities.

## Input Fields

- `reason`: `String!` — The reason for the quantity changes. The value must be one of the [possible
- `name`: `String!` — The quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states)
- `referenceDocumentUri`: `String` — A URI that represents why the inventory change happened, identifying the source system and document that caused this adjustment. Enables complete audit trails and brand visibility in Shopify admin inventory history.
- `changes`: `[InventoryChangeInput!]!` — The quantity changes of items at locations to be made.

## Related Types

- [InventoryChangeInput](../../types/inputs/InventoryChangeInput.md)
