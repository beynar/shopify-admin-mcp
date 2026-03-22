# Mutation: `inventorySetScheduledChanges`

**Returns:** `InventorySetScheduledChangesPayload`

Set up scheduled changes of inventory items.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `InventorySetScheduledChangesInput!` — The input fields for setting up scheduled changes of inventory items.

## Payload Fields

- `scheduledChanges`: `[InventoryScheduledChange!]` — The scheduled changes that were created.
- `userErrors`: `[InventorySetScheduledChangesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryScheduledChange](../types/objects/InventoryScheduledChange.md)
- [InventorySetScheduledChangesInput](../types/inputs/InventorySetScheduledChangesInput.md)
- [InventorySetScheduledChangesPayload](../types/objects/InventorySetScheduledChangesPayload.md)
- [InventorySetScheduledChangesUserError](../types/objects/InventorySetScheduledChangesUserError.md)

## Example Mutation

```graphql
mutation InventorySetScheduledChanges($input: InventorySetScheduledChangesInput!) {
  inventorySetScheduledChanges(input: $input) {
    scheduledChanges {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
