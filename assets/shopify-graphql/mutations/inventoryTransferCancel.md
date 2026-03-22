# Mutation: `inventoryTransferCancel`

**Returns:** `InventoryTransferCancelPayload`

Cancels an inventory transfer.

## Arguments

- **`id`**: `ID!` — The ID of the inventory transfer to cancel.

## Payload Fields

- `inventoryTransfer`: `InventoryTransfer` — The cancelled inventory transfer.
- `userErrors`: `[InventoryTransferCancelUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransfer](../types/objects/InventoryTransfer.md)
- [InventoryTransferCancelPayload](../types/objects/InventoryTransferCancelPayload.md)
- [InventoryTransferCancelUserError](../types/objects/InventoryTransferCancelUserError.md)

## Example Mutation

```graphql
mutation InventoryTransferCancel($id: ID!) {
  inventoryTransferCancel(id: $id) {
    inventoryTransfer {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
