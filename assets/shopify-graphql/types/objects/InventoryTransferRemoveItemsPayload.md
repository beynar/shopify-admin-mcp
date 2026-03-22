# Object: `InventoryTransferRemoveItemsPayload`

Return type for `inventoryTransferRemoveItems` mutation.

## Fields

- `inventoryTransfer`: `InventoryTransfer` — The transfer with line items removed.
- `removedQuantities`: `[InventoryTransferLineItemUpdate!]` — The line items that have had their shippable quantity removed.
- `userErrors`: `[InventoryTransferRemoveItemsUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransfer](../../types/objects/InventoryTransfer.md)
- [InventoryTransferLineItemUpdate](../../types/objects/InventoryTransferLineItemUpdate.md)
- [InventoryTransferRemoveItemsUserError](../../types/objects/InventoryTransferRemoveItemsUserError.md)
