# Mutation: `inventorySetQuantities`

**Returns:** `InventorySetQuantitiesPayload`

Set quantities of specified name using absolute values. This mutation supports compare-and-set functionality to handle
concurrent requests properly. If `ignoreCompareQuantity` is not set to true,
the mutation will only update the quantity if the persisted quantity matches the `compareQuantity` value.
If the `compareQuantity` value does not match the persisted value, the mutation will return an error. In order to opt out
of the `compareQuantity` check, the `ignoreCompareQuantity` argument can be set to true.

> Note:
> Only use this mutation if calling on behalf of a system that acts as the source of truth for inventory quantities,
> otherwise please consider using the [inventoryAdjustQuantities](https://shopify.dev/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) mutation.
>
>
> Opting out of the `compareQuantity` check can lead to inaccurate inventory quantities if multiple requests are made concurrently.
> It is recommended to always include the `compareQuantity` value to ensure the accuracy of the inventory quantities and to opt out
> of the check using `ignoreCompareQuantity` only when necessary.

> Caution:
> As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

## Arguments

- **`input`**: `InventorySetQuantitiesInput!` — The information required to set inventory quantities.

## Payload Fields

- `inventoryAdjustmentGroup`: `InventoryAdjustmentGroup` — The group of changes made by the operation.
- `userErrors`: `[InventorySetQuantitiesUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryAdjustmentGroup](../types/objects/InventoryAdjustmentGroup.md)
- [InventorySetQuantitiesInput](../types/inputs/InventorySetQuantitiesInput.md)
- [InventorySetQuantitiesPayload](../types/objects/InventorySetQuantitiesPayload.md)
- [InventorySetQuantitiesUserError](../types/objects/InventorySetQuantitiesUserError.md)

## Example Mutation

```graphql
mutation InventorySetQuantities($input: InventorySetQuantitiesInput!) {
  inventorySetQuantities(input: $input) {
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
