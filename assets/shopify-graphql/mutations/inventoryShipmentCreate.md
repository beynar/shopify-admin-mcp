# Mutation: `inventoryShipmentCreate`

**Returns:** `InventoryShipmentCreatePayload`

Adds a draft shipment to an inventory transfer.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `InventoryShipmentCreateInput!` — The input fields for the inventory shipment.

## Payload Fields

- `inventoryShipment`: `InventoryShipment` — The created inventory shipment.
- `userErrors`: `[InventoryShipmentCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryShipment](../types/objects/InventoryShipment.md)
- [InventoryShipmentCreateInput](../types/inputs/InventoryShipmentCreateInput.md)
- [InventoryShipmentCreatePayload](../types/objects/InventoryShipmentCreatePayload.md)
- [InventoryShipmentCreateUserError](../types/objects/InventoryShipmentCreateUserError.md)

## Example Mutation

```graphql
mutation InventoryShipmentCreate($input: InventoryShipmentCreateInput!) {
  inventoryShipmentCreate(input: $input) {
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
