# Mutation: `inventoryActivate`

**Returns:** `InventoryActivatePayload`

Activates an inventory item at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) by creating an [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) that tracks stock quantities. This enables you to manage inventory for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) at the specified location.

When you activate an inventory item, you can set its initial quantities. The [`available`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate#arguments-available) argument sets the quantity that's available for sale. [`onHand`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate#arguments-onHand) argument sets the total physical quantity at the location. If you don't specify quantities, then `available` and `onHand` default to zero.

> Caution:
> As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive.
> As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive.
> For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

## Arguments

- **`inventoryItemId`**: `ID!` — The ID of the inventory item to activate.
- **`locationId`**: `ID!` — The ID of the location of the inventory item being activated.
- **`available`**: `Int` — The initial available quantity of the inventory item being activated at the location.
- **`onHand`**: `Int` — The initial on_hand quantity of the inventory item being activated at the location.
- **`stockAtLegacyLocation`**: `Boolean` = `false` — Allow activation at or away from fulfillment service location with sku sharing off. This will deactivate inventory at all other locations.

## Payload Fields

- `inventoryLevel`: `InventoryLevel` — The inventory level that was activated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryActivatePayload](../types/objects/InventoryActivatePayload.md)
- [InventoryLevel](../types/objects/InventoryLevel.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation InventoryActivate($inventoryItemId: ID!, $locationId: ID!, $available: Int, $onHand: Int, $stockAtLegacyLocation: Boolean) {
  inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available, onHand: $onHand, stockAtLegacyLocation: $stockAtLegacyLocation) {
    inventoryLevel {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
