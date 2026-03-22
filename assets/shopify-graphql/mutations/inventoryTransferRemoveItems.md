# Mutation: `inventoryTransferRemoveItems`

**Returns:** `InventoryTransferRemoveItemsPayload`

This mutation allows removing the shippable quantities of line items on a Transfer.
It removes all quantities of the item from the transfer that are not associated with shipments.

## Arguments

- **`input`**: `InventoryTransferRemoveItemsInput!` — The input fields for the InventoryTransferRemoveItems mutation.

## Payload Fields

- `inventoryTransfer`: `InventoryTransfer` — The transfer with line items removed.
- `removedQuantities`: `[InventoryTransferLineItemUpdate!]` — The line items that have had their shippable quantity removed.
- `userErrors`: `[InventoryTransferRemoveItemsUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransfer](../types/objects/InventoryTransfer.md)
- [InventoryTransferLineItemUpdate](../types/objects/InventoryTransferLineItemUpdate.md)
- [InventoryTransferRemoveItemsInput](../types/inputs/InventoryTransferRemoveItemsInput.md)
- [InventoryTransferRemoveItemsPayload](../types/objects/InventoryTransferRemoveItemsPayload.md)
- [InventoryTransferRemoveItemsUserError](../types/objects/InventoryTransferRemoveItemsUserError.md)

## Example Mutation

```graphql
mutation InventoryTransferRemoveItems($input: InventoryTransferRemoveItemsInput!) {
  inventoryTransferRemoveItems(input: $input) {
    inventoryTransfer {
      id
    }
    removedQuantities {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
