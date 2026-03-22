# Mutation: `inventoryShipmentUpdateItemQuantities`

**Returns:** `InventoryShipmentUpdateItemQuantitiesPayload`

Updates items on an inventory shipment.

## Arguments

- **`id`**: `ID!` — The ID of the inventory shipment to update item quantities.
- **`items`**: `[InventoryShipmentUpdateItemQuantitiesInput!]` = `[]` — The list of line items to be updated to the shipment.

## Payload Fields

- `shipment`: `InventoryShipment` — The inventory shipment with updated item quantities.
- `updatedLineItems`: `[InventoryShipmentLineItem!]` — The updated item quantities.
- `userErrors`: `[InventoryShipmentUpdateItemQuantitiesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipment](../types/objects/InventoryShipment.md)
- [InventoryShipmentLineItem](../types/objects/InventoryShipmentLineItem.md)
- [InventoryShipmentUpdateItemQuantitiesInput](../types/inputs/InventoryShipmentUpdateItemQuantitiesInput.md)
- [InventoryShipmentUpdateItemQuantitiesPayload](../types/objects/InventoryShipmentUpdateItemQuantitiesPayload.md)
- [InventoryShipmentUpdateItemQuantitiesUserError](../types/objects/InventoryShipmentUpdateItemQuantitiesUserError.md)

## Example Mutation

```graphql
mutation InventoryShipmentUpdateItemQuantities($id: ID!, $items: [InventoryShipmentUpdateItemQuantitiesInput!]) {
  inventoryShipmentUpdateItemQuantities(id: $id, items: $items) {
    shipment {
      id
    }
    updatedLineItems {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
