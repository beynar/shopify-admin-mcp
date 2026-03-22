# Mutation: `inventoryBulkToggleActivation`

**Returns:** `InventoryBulkToggleActivationPayload`

Activates or deactivates an inventory item at multiple locations. When you activate an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) at a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), that location can stock and track quantities for that item. When you deactivate an inventory item at a location, the inventory item is no longer stocked at that location.

The mutation accepts an inventory item ID and a list of location-specific activation settings. It returns the updated inventory item and any activated [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) objects.

Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

## Arguments

- **`inventoryItemId`**: `ID!` — The ID of the inventory item to modify the activation status locations for.
- **`inventoryItemUpdates`**: `[InventoryBulkToggleActivationInput!]!` — A list of pairs of locations and activate status to update for the specified inventory item.

## Payload Fields

- `inventoryItem`: `InventoryItem` — The inventory item that was updated.
- `inventoryLevels`: `[InventoryLevel!]` — The activated inventory levels.
- `userErrors`: `[InventoryBulkToggleActivationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryBulkToggleActivationInput](../types/inputs/InventoryBulkToggleActivationInput.md)
- [InventoryBulkToggleActivationPayload](../types/objects/InventoryBulkToggleActivationPayload.md)
- [InventoryBulkToggleActivationUserError](../types/objects/InventoryBulkToggleActivationUserError.md)
- [InventoryItem](../types/objects/InventoryItem.md)
- [InventoryLevel](../types/objects/InventoryLevel.md)

## Example Mutation

```graphql
mutation InventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
  inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
    inventoryItem {
      id
    }
    inventoryLevels {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
