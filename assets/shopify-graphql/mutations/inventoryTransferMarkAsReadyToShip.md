# Mutation: `inventoryTransferMarkAsReadyToShip`

**Returns:** `InventoryTransferMarkAsReadyToShipPayload`

Sets an inventory transfer to ready to ship.

## Arguments

- **`id`**: `ID!` — The ID of the inventory transfer to mark as ready to ship.

## Payload Fields

- `inventoryTransfer`: `InventoryTransfer` — The ready to ship inventory transfer.
- `userErrors`: `[InventoryTransferMarkAsReadyToShipUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransfer](../types/objects/InventoryTransfer.md)
- [InventoryTransferMarkAsReadyToShipPayload](../types/objects/InventoryTransferMarkAsReadyToShipPayload.md)
- [InventoryTransferMarkAsReadyToShipUserError](../types/objects/InventoryTransferMarkAsReadyToShipUserError.md)

## Example Mutation

```graphql
mutation InventoryTransferMarkAsReadyToShip($id: ID!) {
  inventoryTransferMarkAsReadyToShip(id: $id) {
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
