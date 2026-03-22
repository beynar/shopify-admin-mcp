# Mutation: `inventoryAdjustQuantities`

**Returns:** `InventoryAdjustQuantitiesPayload`

Adjusts quantities for inventory items by applying incremental changes at specific locations. Each adjustment modifies the quantity by a delta value rather than setting an absolute amount.

The mutation tracks adjustments with a reason code and optional reference URI for audit trails. Returns an [`InventoryAdjustmentGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup) that records all changes made in the operation.

Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#adjust-inventory-quantities).

> Caution:
> As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `InventoryAdjustQuantitiesInput!` — The information required to adjust inventory quantities.

## Payload Fields

- `inventoryAdjustmentGroup`: `InventoryAdjustmentGroup` — The group of changes made by the operation.
- `userErrors`: `[InventoryAdjustQuantitiesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryAdjustQuantitiesInput](../types/inputs/InventoryAdjustQuantitiesInput.md)
- [InventoryAdjustQuantitiesPayload](../types/objects/InventoryAdjustQuantitiesPayload.md)
- [InventoryAdjustQuantitiesUserError](../types/objects/InventoryAdjustQuantitiesUserError.md)
- [InventoryAdjustmentGroup](../types/objects/InventoryAdjustmentGroup.md)

## Example Mutation

```graphql
mutation InventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
  inventoryAdjustQuantities(input: $input) {
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
