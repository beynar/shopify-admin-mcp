# Mutation: `inventoryTransferDuplicate`

**Returns:** `InventoryTransferDuplicatePayload`

This mutation allows duplicating an existing inventory transfer. The duplicated transfer will have the same
line items and quantities as the original transfer, but will be in a draft state with no shipments.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`id`**: `ID!` — The ID of the inventory transfer to duplicate.

## Payload Fields

- `inventoryTransfer`: `InventoryTransfer` — The duplicated inventory transfer.
- `userErrors`: `[InventoryTransferDuplicateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransfer](../types/objects/InventoryTransfer.md)
- [InventoryTransferDuplicatePayload](../types/objects/InventoryTransferDuplicatePayload.md)
- [InventoryTransferDuplicateUserError](../types/objects/InventoryTransferDuplicateUserError.md)

## Example Mutation

```graphql
mutation InventoryTransferDuplicate($id: ID!) {
  inventoryTransferDuplicate(id: $id) {
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
