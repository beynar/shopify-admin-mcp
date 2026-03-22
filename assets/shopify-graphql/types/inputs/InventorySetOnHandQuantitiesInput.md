# Input Object: `InventorySetOnHandQuantitiesInput`

The input fields required to set inventory on hand quantities.

## Input Fields

- `reason`: `String!` — The reason for the quantity changes. The value must be one of the [possible
- `referenceDocumentUri`: `String` — A URI that represents why the inventory change happened, identifying the source system and document that caused this adjustment. Enables complete audit trails and brand visibility in Shopify admin inventory history.
- `setQuantities`: `[InventorySetQuantityInput!]!` — The value to which the on hand quantity will be set.

## Related Types

- [InventorySetQuantityInput](../../types/inputs/InventorySetQuantityInput.md)
