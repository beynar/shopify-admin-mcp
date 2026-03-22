# Mutation: `inventoryShipmentSetTracking`

**Returns:** `InventoryShipmentSetTrackingPayload`

Edits the tracking info on an inventory shipment.

## Arguments

- **`id`**: `ID!` — The ID of the inventory shipment whose tracking info is being edited.
- **`tracking`**: `InventoryShipmentTrackingInput!` — The tracking info to edit on the inventory shipment.

## Payload Fields

- `inventoryShipment`: `InventoryShipment` — The inventory shipment with the edited tracking info.
- `userErrors`: `[InventoryShipmentSetTrackingUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipment](../types/objects/InventoryShipment.md)
- [InventoryShipmentSetTrackingPayload](../types/objects/InventoryShipmentSetTrackingPayload.md)
- [InventoryShipmentSetTrackingUserError](../types/objects/InventoryShipmentSetTrackingUserError.md)
- [InventoryShipmentTrackingInput](../types/inputs/InventoryShipmentTrackingInput.md)

## Example Mutation

```graphql
mutation InventoryShipmentSetTracking($id: ID!, $tracking: InventoryShipmentTrackingInput!) {
  inventoryShipmentSetTracking(id: $id, tracking: $tracking) {
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
