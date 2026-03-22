# Mutation: `inventoryShipmentRemoveItems`

**Returns:** `InventoryShipmentRemoveItemsPayload`

Remove items from an inventory shipment.

## Arguments

- **`id`**: `ID!` — The ID of the inventory shipment to remove items from.
- **`lineItems`**: `[ID!]!` — A list of inventory shipment line item ids representing the items to be removed from the shipment.

## Payload Fields

- `inventoryShipment`: `InventoryShipment` — The inventory shipment with items removed.
- `userErrors`: `[InventoryShipmentRemoveItemsUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipment](../types/objects/InventoryShipment.md)
- [InventoryShipmentRemoveItemsPayload](../types/objects/InventoryShipmentRemoveItemsPayload.md)
- [InventoryShipmentRemoveItemsUserError](../types/objects/InventoryShipmentRemoveItemsUserError.md)

## Example Mutation

```graphql
mutation InventoryShipmentRemoveItems($id: ID!, $lineItems: [ID!]!) {
  inventoryShipmentRemoveItems(id: $id, lineItems: $lineItems) {
    inventoryShipment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
