# Mutation: `inventoryShipmentMarkInTransit`

**Returns:** `InventoryShipmentMarkInTransitPayload`

Marks a draft inventory shipment as in transit.

## Arguments

- **`id`**: `ID!` — The ID of the inventory shipment to mark in transit.
- **`dateShipped`**: `DateTime` — The date the shipment was shipped.

## Payload Fields

- `inventoryShipment`: `InventoryShipment` — The marked in transit inventory shipment.
- `userErrors`: `[InventoryShipmentMarkInTransitUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipment](../types/objects/InventoryShipment.md)
- [InventoryShipmentMarkInTransitPayload](../types/objects/InventoryShipmentMarkInTransitPayload.md)
- [InventoryShipmentMarkInTransitUserError](../types/objects/InventoryShipmentMarkInTransitUserError.md)

## Example Mutation

```graphql
mutation InventoryShipmentMarkInTransit($id: ID!, $dateShipped: DateTime) {
  inventoryShipmentMarkInTransit(id: $id, dateShipped: $dateShipped) {
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
