# Mutation: `inventoryTransferCreate`

**Returns:** `InventoryTransferCreatePayload`

Creates a draft inventory transfer to move inventory items between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects in your store. The transfer tracks which items to move, their quantities, and the origin and destination locations.

Use [`inventoryTransferMarkAsReadyToShip`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip) to mark the transfer as ready to ship.

> Caution:
> As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `InventoryTransferCreateInput!` — The input fields for the inventory transfer.

## Payload Fields

- `inventoryTransfer`: `InventoryTransfer` — The created inventory transfer.
- `userErrors`: `[InventoryTransferCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransfer](../types/objects/InventoryTransfer.md)
- [InventoryTransferCreateInput](../types/inputs/InventoryTransferCreateInput.md)
- [InventoryTransferCreatePayload](../types/objects/InventoryTransferCreatePayload.md)
- [InventoryTransferCreateUserError](../types/objects/InventoryTransferCreateUserError.md)

## Example Mutation

```graphql
mutation InventoryTransferCreate($input: InventoryTransferCreateInput!) {
  inventoryTransferCreate(input: $input) {
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
