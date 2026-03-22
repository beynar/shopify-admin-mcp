# Input Object: `InventoryScheduledChangeItemInput`

The input fields for the inventory item associated with the scheduled changes that need to be applied.

## Input Fields

- `inventoryItemId`: `ID!` — The ID of the inventory item.
- `locationId`: `ID!` — The ID of the location.
- `ledgerDocumentUri`: `URL!` — A non-Shopify URI that identifies what specific inventory transaction or ledger entry was changed. Represents the exact inventory movement being referenced, distinct from the business reason for the change.
- `scheduledChanges`: `[InventoryScheduledChangeInput!]!` — An array of all the scheduled changes for the item.

## Related Types

- [InventoryScheduledChangeInput](../../types/inputs/InventoryScheduledChangeInput.md)
