# Mutation: `inventoryShipmentReceive`

**Returns:** `InventoryShipmentReceivePayload`

Receive an inventory shipment.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`id`**: `ID!` — The ID of the inventory shipment to receive.
- **`lineItems`**: `[InventoryShipmentReceiveItemInput!]` — The list of receive line items for the inventory shipment.
- **`dateReceived`**: `DateTime` — The date the inventory shipment was initially received.
- **`bulkReceiveAction`**: `InventoryShipmentReceiveLineItemReason` — The bulk receive action for the inventory shipment.

## Payload Fields

- `inventoryShipment`: `InventoryShipment` — The inventory shipment with received items.
- `userErrors`: `[InventoryShipmentReceiveUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipment](../types/objects/InventoryShipment.md)
- [InventoryShipmentReceiveItemInput](../types/inputs/InventoryShipmentReceiveItemInput.md)
- [InventoryShipmentReceiveLineItemReason](../types/enums/InventoryShipmentReceiveLineItemReason.md)
- [InventoryShipmentReceivePayload](../types/objects/InventoryShipmentReceivePayload.md)
- [InventoryShipmentReceiveUserError](../types/objects/InventoryShipmentReceiveUserError.md)

## Example Mutation

```graphql
mutation InventoryShipmentReceive($id: ID!, $lineItems: [InventoryShipmentReceiveItemInput!], $dateReceived: DateTime, $bulkReceiveAction: InventoryShipmentReceiveLineItemReason) {
  inventoryShipmentReceive(id: $id, lineItems: $lineItems, dateReceived: $dateReceived, bulkReceiveAction: $bulkReceiveAction) {
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
