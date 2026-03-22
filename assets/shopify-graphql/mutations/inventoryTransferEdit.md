# Mutation: `inventoryTransferEdit`

**Returns:** `InventoryTransferEditPayload`

Edits an inventory transfer.

## Arguments

- **`id`**: `ID!` — The ID of the inventory Transfer to be edited.
- **`input`**: `InventoryTransferEditInput!` — The input fields to edit the inventory transfer.

## Payload Fields

- `inventoryTransfer`: `InventoryTransfer` — The edited inventory transfer.
- `userErrors`: `[InventoryTransferEditUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransfer](../types/objects/InventoryTransfer.md)
- [InventoryTransferEditInput](../types/inputs/InventoryTransferEditInput.md)
- [InventoryTransferEditPayload](../types/objects/InventoryTransferEditPayload.md)
- [InventoryTransferEditUserError](../types/objects/InventoryTransferEditUserError.md)

## Example Mutation

```graphql
mutation InventoryTransferEdit($id: ID!, $input: InventoryTransferEditInput!) {
  inventoryTransferEdit(id: $id, input: $input) {
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
