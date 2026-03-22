# Mutation: `inventoryTransferCreateAsReadyToShip`

**Returns:** `InventoryTransferCreateAsReadyToShipPayload`

Creates an inventory transfer in ready to ship.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `InventoryTransferCreateAsReadyToShipInput!` — The input fields for the inventory transfer.

## Payload Fields

- `inventoryTransfer`: `InventoryTransfer` — The created inventory transfer.
- `userErrors`: `[InventoryTransferCreateAsReadyToShipUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransfer](../types/objects/InventoryTransfer.md)
- [InventoryTransferCreateAsReadyToShipInput](../types/inputs/InventoryTransferCreateAsReadyToShipInput.md)
- [InventoryTransferCreateAsReadyToShipPayload](../types/objects/InventoryTransferCreateAsReadyToShipPayload.md)
- [InventoryTransferCreateAsReadyToShipUserError](../types/objects/InventoryTransferCreateAsReadyToShipUserError.md)

## Example Mutation

```graphql
mutation InventoryTransferCreateAsReadyToShip($input: InventoryTransferCreateAsReadyToShipInput!) {
  inventoryTransferCreateAsReadyToShip(input: $input) {
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
