# Input Object: `InventorySetQuantitiesInput`

The input fields required to set inventory quantities.

## Input Fields

- `reason`: `String!` — The reason for the quantity changes. The value must be one of the [possible
- `name`: `String!` — The name of quantities to be changed. The only accepted values are: `available` or `on_hand`.
- `referenceDocumentUri`: `String` — A URI that represents why the inventory change happened, identifying the source system and document that caused this adjustment. Enables complete audit trails and brand visibility in Shopify admin inventory history.
- `quantities`: `[InventoryQuantityInput!]!` — The values to which each quantities will be set.

## Related Types

- [InventoryQuantityInput](../../types/inputs/InventoryQuantityInput.md)
