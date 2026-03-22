# Mutation: `inventoryShipmentCreateInTransit`

**Returns:** `InventoryShipmentCreateInTransitPayload`

Adds an in-transit shipment to an inventory transfer.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `InventoryShipmentCreateInput!` — The input fields for the inventory shipment.

## Payload Fields

- `inventoryShipment`: `InventoryShipment` — The created inventory shipment.
- `userErrors`: `[InventoryShipmentCreateInTransitUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipment](../types/objects/InventoryShipment.md)
- [InventoryShipmentCreateInTransitPayload](../types/objects/InventoryShipmentCreateInTransitPayload.md)
- [InventoryShipmentCreateInTransitUserError](../types/objects/InventoryShipmentCreateInTransitUserError.md)
- [InventoryShipmentCreateInput](../types/inputs/InventoryShipmentCreateInput.md)

## Example Mutation

```graphql
mutation InventoryShipmentCreateInTransit($input: InventoryShipmentCreateInput!) {
  inventoryShipmentCreateInTransit(input: $input) {
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
