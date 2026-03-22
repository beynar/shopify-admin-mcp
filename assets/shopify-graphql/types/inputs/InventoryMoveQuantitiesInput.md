# Input Object: `InventoryMoveQuantitiesInput`

The input fields required to move inventory quantities.

## Input Fields

- `reason`: `String!` — The reason for the quantity changes. The value must be one of the [possible
- `referenceDocumentUri`: `String!` — A URI that represents why the inventory change happened, identifying the source system and document that caused this adjustment. Enables complete audit trails and brand visibility in Shopify admin inventory history.
- `changes`: `[InventoryMoveQuantityChange!]!` — The quantity changes of items at locations to be made.

## Related Types

- [InventoryMoveQuantityChange](../../types/inputs/InventoryMoveQuantityChange.md)
