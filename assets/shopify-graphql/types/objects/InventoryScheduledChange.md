# Object: `InventoryScheduledChange`

Returns the scheduled changes to inventory states related to the ledger document.

## Fields

- `expectedAt`: `DateTime!` — The date and time that the scheduled change is expected to happen.
- `fromName`: `String!` — The quantity
- `inventoryLevel`: `InventoryLevel!` — The quantities of an inventory item that are related to a specific location.
- `ledgerDocumentUri`: `URL!` — A freeform URI that represents what changed the inventory quantities.
- `quantity`: `Int!` — The quantity of the scheduled change associated with the ledger document in the `fromName` state.
- `toName`: `String!` — The quantity

## Related Types

- [InventoryLevel](../../types/objects/InventoryLevel.md)
