# Object: `InventoryItem`

A [product variant's](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) inventory information across all locations. The inventory item connects the product variant to its [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) at different locations, tracking stock keeping unit (SKU), whether quantities are tracked, shipping requirements, and customs information for the product.

Learn more about [inventory object relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

**Implements:** `LegacyInteroperability`, `Node`

## Fields

- `countryCodeOfOrigin`: `CountryCode` — The ISO 3166-1 alpha-2 country code of where the item originated from.
- `countryHarmonizedSystemCodes` `(first, after, last, before, reverse)`: `CountryHarmonizedSystemCodeConnection!` — A list of country specific harmonized system codes.
- `createdAt`: `DateTime!` — The date and time when the inventory item was created.
- `duplicateSkuCount`: `Int!` — The number of inventory items that share the same SKU with this item.
- `harmonizedSystemCode`: `String` — The harmonized system code of the item. This must be a number between 6 and 13 digits.
- `id`: `ID!` — A globally-unique ID.
- `inventoryHistoryUrl`: `URL` — The URL that points to the inventory history for the item.
- `inventoryLevel` `(locationId)`: `InventoryLevel` — The inventory item's quantities at the specified location.
- `inventoryLevels` `(first, after, last, before, reverse, query)`: `InventoryLevelConnection!` — A list of the inventory item's quantities for each location that the inventory item can be stocked at.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `locationsCount`: `Count` — The number of locations where this inventory item is stocked.
- `measurement`: `InventoryItemMeasurement!` — The packaging dimensions of the inventory item.
- `provinceCodeOfOrigin`: `String` — The ISO 3166-2 alpha-2 province code of where the item originated from.
- `requiresShipping`: `Boolean!` — Whether the inventory item requires shipping.
- `sku`: `String` — Inventory item SKU. Case-sensitive string.
- `tracked`: `Boolean!` — Whether inventory levels are tracked for the item.
- `trackedEditable`: `EditableProperty!` — Whether the value of the `tracked` field for the inventory item can be changed.
- `unitCost`: `MoneyV2` — Unit cost associated with the inventory item. Note: the user must have "View product costs" permission granted in order to access this field once product granular permissions are enabled.
- `updatedAt`: `DateTime!` — The date and time when the inventory item was updated.
- `variant`: `ProductVariant!` *(deprecated)* — The variant that owns this inventory item.
- `variants` `(first, after, last, before)`: `ProductVariantConnection` — A paginated list of the variants that reference this inventory item.

## Related Types

- [Count](../../types/objects/Count.md)
- [CountryCode](../../types/enums/CountryCode.md)
- [EditableProperty](../../types/objects/EditableProperty.md)
- [InventoryItemMeasurement](../../types/objects/InventoryItemMeasurement.md)
- [InventoryLevel](../../types/objects/InventoryLevel.md)
- [MoneyV2](../../types/objects/MoneyV2.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
