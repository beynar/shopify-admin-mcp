# Mutation: `inventorySetOnHandQuantities`

**Returns:** `InventorySetOnHandQuantitiesPayload`

Sets an inventory item's on-hand quantities to specific absolute values at designated locations. The mutation takes a reason for tracking purposes and a reference document URI for audit trails.

Returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that tracks all changes made in this operation, including the delta values calculated from the previous quantities.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `InventorySetOnHandQuantitiesInput!` — The information required to set inventory on hand quantities.

## Payload Fields

- `inventoryAdjustmentGroup`: `InventoryAdjustmentGroup` — The group of changes made by the operation.
- `userErrors`: `[InventorySetOnHandQuantitiesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryAdjustmentGroup](../types/objects/InventoryAdjustmentGroup.md)
- [InventorySetOnHandQuantitiesInput](../types/inputs/InventorySetOnHandQuantitiesInput.md)
- [InventorySetOnHandQuantitiesPayload](../types/objects/InventorySetOnHandQuantitiesPayload.md)
- [InventorySetOnHandQuantitiesUserError](../types/objects/InventorySetOnHandQuantitiesUserError.md)

## Example Mutation

```graphql
mutation InventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) {
  inventorySetOnHandQuantities(input: $input) {
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
