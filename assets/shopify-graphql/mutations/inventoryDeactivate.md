# Mutation: `inventoryDeactivate`

**Returns:** `InventoryDeactivatePayload`

Removes an inventory item's quantities from a location, and turns off inventory at the location.

## Arguments

- **`inventoryLevelId`**: `ID!` — The ID of the inventory level to deactivate.

## Payload Fields

- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryDeactivatePayload](../types/objects/InventoryDeactivatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation InventoryDeactivate($inventoryLevelId: ID!) {
  inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
    userErrors {
      field
      message
    }
  }
}
```
