# Mutation: `inventoryShipmentDelete`

**Returns:** `InventoryShipmentDeletePayload`

Deletes an inventory shipment. Only draft shipments can be deleted.

## Arguments

- **`id`**: `ID!` — The ID of the inventory shipment to be deleted.

## Payload Fields

- `id`: `ID` — The ID of the inventory shipment that was deleted.
- `userErrors`: `[InventoryShipmentDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipmentDeletePayload](../types/objects/InventoryShipmentDeletePayload.md)
- [InventoryShipmentDeleteUserError](../types/objects/InventoryShipmentDeleteUserError.md)

## Example Mutation

```graphql
mutation InventoryShipmentDelete($id: ID!) {
  inventoryShipmentDelete(id: $id) {
    id
    userErrors {
      field
      message
    }
  }
}
```
