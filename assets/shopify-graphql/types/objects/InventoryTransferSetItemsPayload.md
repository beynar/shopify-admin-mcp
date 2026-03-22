# Object: `InventoryTransferSetItemsPayload`

Return type for `inventoryTransferSetItems` mutation.

## Fields

- `inventoryTransfer`: `InventoryTransfer` — The Transfer with its line items updated.
- `updatedLineItems`: `[InventoryTransferLineItemUpdate!]` — The updated line items.
- `userErrors`: `[InventoryTransferSetItemsUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransfer](../../types/objects/InventoryTransfer.md)
- [InventoryTransferLineItemUpdate](../../types/objects/InventoryTransferLineItemUpdate.md)
- [InventoryTransferSetItemsUserError](../../types/objects/InventoryTransferSetItemsUserError.md)
