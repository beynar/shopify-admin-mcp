# Query: `inventoryProperties`

**Returns:** `InventoryProperties!`

Returns the shop's inventory configuration, including all inventory quantity names. Quantity names represent different [inventory states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) that merchants use to track inventory.

## Return Type Fields

- `quantityNames`: `[InventoryQuantityName!]!` — All the quantity names.

## Related Types

- [InventoryProperties](../types/objects/InventoryProperties.md)
- [InventoryQuantityName](../types/objects/InventoryQuantityName.md)

## Example Query

```graphql
query {
  inventoryProperties {
  }
}
```
