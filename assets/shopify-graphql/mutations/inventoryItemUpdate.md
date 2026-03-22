# Mutation: `inventoryItemUpdate`

**Returns:** `InventoryItemUpdatePayload`

Updates an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)'s properties including whether inventory is tracked, cost, SKU, and whether shipping is required. Inventory items represent the goods available to be shipped to customers.

## Arguments

- **`id`**: `ID!` — The ID of the inventory item to update.
- **`input`**: `InventoryItemInput!` — The input fields that update an [`inventoryItem`](https://shopify.dev/api/admin-graphql/latest/queries/inventoryitem).

## Payload Fields

- `inventoryItem`: `InventoryItem` — The inventory item that was updated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [InventoryItem](../types/objects/InventoryItem.md)
- [InventoryItemInput](../types/inputs/InventoryItemInput.md)
- [InventoryItemUpdatePayload](../types/objects/InventoryItemUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation InventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
  inventoryItemUpdate(id: $id, input: $input) {
    inventoryItem {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
