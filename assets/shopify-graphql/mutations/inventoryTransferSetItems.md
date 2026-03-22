# Mutation: `inventoryTransferSetItems`

**Returns:** `InventoryTransferSetItemsPayload`

This mutation allows for the setting of line items on a Transfer. Will replace the items already set, if any.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `InventoryTransferSetItemsInput!` — The input fields for the InventoryTransferSetItems mutation.

## Payload Fields

- `inventoryTransfer`: `InventoryTransfer` — The Transfer with its line items updated.
- `updatedLineItems`: `[InventoryTransferLineItemUpdate!]` — The updated line items.
- `userErrors`: `[InventoryTransferSetItemsUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryTransfer](../types/objects/InventoryTransfer.md)
- [InventoryTransferLineItemUpdate](../types/objects/InventoryTransferLineItemUpdate.md)
- [InventoryTransferSetItemsInput](../types/inputs/InventoryTransferSetItemsInput.md)
- [InventoryTransferSetItemsPayload](../types/objects/InventoryTransferSetItemsPayload.md)
- [InventoryTransferSetItemsUserError](../types/objects/InventoryTransferSetItemsUserError.md)

## Example Mutation

```graphql
mutation InventoryTransferSetItems($input: InventoryTransferSetItemsInput!) {
  inventoryTransferSetItems(input: $input) {
    inventoryTransfer {
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
