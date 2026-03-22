# Mutation: `inventoryMoveQuantities`

**Returns:** `InventoryMoveQuantitiesPayload`

Moves inventory quantities for a single inventory item between different states at a single location. Use this mutation to reallocate inventory across quantity states without moving it between locations.

Each change specifies the quantity to move, the source state and location, and the destination state and location. The mutation returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that tracks all changes made in a single operation, providing an audit trail with the reason and reference document URI.

> Caution:
> As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `InventoryMoveQuantitiesInput!` — The information required to move inventory quantities.

## Payload Fields

- `inventoryAdjustmentGroup`: `InventoryAdjustmentGroup` — The group of changes made by the operation.
- `userErrors`: `[InventoryMoveQuantitiesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryAdjustmentGroup](../types/objects/InventoryAdjustmentGroup.md)
- [InventoryMoveQuantitiesInput](../types/inputs/InventoryMoveQuantitiesInput.md)
- [InventoryMoveQuantitiesPayload](../types/objects/InventoryMoveQuantitiesPayload.md)
- [InventoryMoveQuantitiesUserError](../types/objects/InventoryMoveQuantitiesUserError.md)

## Example Mutation

```graphql
mutation InventoryMoveQuantities($input: InventoryMoveQuantitiesInput!) {
  inventoryMoveQuantities(input: $input) {
    inventoryAdjustmentGroup {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
