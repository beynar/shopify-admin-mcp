# Query: `inventoryLevel`

**Returns:** `InventoryLevel`

Returns an
[InventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)
object by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `InventoryLevel` to return.

## Return Type Fields

- `canDeactivate`: `Boolean!` — Whether the inventory items associated with the inventory level can be deactivated.
- `createdAt`: `DateTime!` — The date and time when the inventory level was created.
- `deactivationAlert`: `String` — Describes either the impact of deactivating the inventory level, or why the inventory level can't be deactivated.
- `id`: `ID!` — A globally-unique ID.
- `item`: `InventoryItem!` — Inventory item associated with the inventory level.
- `location`: `Location!` — The location associated with the inventory level.
- `quantities`: `[InventoryQuantity!]!` — The quantity of an inventory item at a specific location, for a quantity
- `updatedAt`: `DateTime!` — The date and time when the inventory level was updated.

## Related Types

- [InventoryItem](../types/objects/InventoryItem.md)
- [InventoryLevel](../types/objects/InventoryLevel.md)
- [InventoryQuantity](../types/objects/InventoryQuantity.md)
- [Location](../types/objects/Location.md)

## Example Query

```graphql
query InventoryLevel($id: ID!) {
  inventoryLevel(id: $id) {
    canDeactivate
    createdAt
    deactivationAlert
    updatedAt
  }
}
```
