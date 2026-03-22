# Mutation: `inventoryTransferDelete`

**Returns:** `InventoryTransferDeletePayload`

Deletes an inventory transfer.

## Arguments

- **`id`**: `ID!` — The ID of the inventory transfer to delete.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted inventory transfer.
- `userErrors`: `[InventoryTransferDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransferDeletePayload](../types/objects/InventoryTransferDeletePayload.md)
- [InventoryTransferDeleteUserError](../types/objects/InventoryTransferDeleteUserError.md)

## Example Mutation

```graphql
mutation InventoryTransferDelete($id: ID!) {
  inventoryTransferDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
