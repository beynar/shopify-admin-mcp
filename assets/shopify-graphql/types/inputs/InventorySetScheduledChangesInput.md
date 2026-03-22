# Input Object: `InventorySetScheduledChangesInput`

The input fields for setting up scheduled changes of inventory items.

## Input Fields

- `reason`: `String!` — The reason for setting up the scheduled changes.
- `items`: `[InventoryScheduledChangeItemInput!]!` — The list of all the items on which the scheduled changes need to be applied.
- `referenceDocumentUri`: `URL!` — A URI that represents why the inventory change happened, identifying the source system and document that caused this adjustment. Enables complete audit trails and brand visibility in Shopify admin inventory history.

## Related Types

- [InventoryScheduledChangeItemInput](../../types/inputs/InventoryScheduledChangeItemInput.md)
