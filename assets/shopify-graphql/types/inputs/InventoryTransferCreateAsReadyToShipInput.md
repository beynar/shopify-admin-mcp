# Input Object: `InventoryTransferCreateAsReadyToShipInput`

The input fields to create an inventory transfer.

## Input Fields

- `originLocationId`: `ID` — The origin location for the inventory transfer.
- `destinationLocationId`: `ID` — The destination location for the inventory transfer.
- `lineItems`: `[InventoryTransferLineItemInput!]!` = `[]` — The list of line items for the inventory transfer.
- `dateCreated`: `DateTime` — The date and time the inventory transfer was created. If left blank, defaults to the current date and time in UTC format.
- `note`: `String` — A note to add to the Inventory Transfer.
- `tags`: `[String!]` — The tags to add to the inventory transfer.
- `referenceName`: `String` — The reference name to add to the inventory transfer.

## Related Types

- [InventoryTransferLineItemInput](../../types/inputs/InventoryTransferLineItemInput.md)
