# Input Object: `ProductVariantSetInput`

The input fields for specifying a product variant to create or update.

## Input Fields

- `id`: `ID` — Specifies the product variant to update or create a new variant if absent.
- `optionValues`: `[VariantOptionValueInput!]!` — The custom properties that a shop owner uses to define product variants.
- `price`: `Money` — The price of the variant.
- `compareAtPrice`: `Money` — The compare-at price of the variant.
- `sku`: `String` — The SKU for the variant. Case-sensitive string.
- `barcode`: `String` — The value of the barcode associated with the product.
- `position`: `Int` — The order of the product variant in the list of product variants. The first position in the list is 1.
- `file`: `FileSetInput` — The file to associate with the variant.
- `metafields`: `[MetafieldInput!]` — Additional customizable information about the product variant.
- `requiresComponents`: `Boolean` — Whether a product variant requires components. The default value is `false`.
- `inventoryPolicy`: `ProductVariantInventoryPolicy` — Whether customers are allowed to place an order for the product variant when it's out of stock. Defaults to `DENY`.
- `inventoryQuantities`: `[ProductSetInventoryInput!]` — The inventory quantities at each location where the variant is stocked.
- `inventoryItem`: `InventoryItemInput` — The inventory item associated with the variant, used for unit cost.
- `taxable`: `Boolean` — Whether the variant is taxable.
- `taxCode`: `String` — The tax code associated with the variant.
- `unitPriceMeasurement`: `UnitPriceMeasurementInput` — The unit price measurement for the product variant.
- `showUnitPrice`: `Boolean` — Whether or not unit price should be shown for this product variant.

## Related Types

- [FileSetInput](../../types/inputs/FileSetInput.md)
- [InventoryItemInput](../../types/inputs/InventoryItemInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
- [ProductSetInventoryInput](../../types/inputs/ProductSetInventoryInput.md)
- [ProductVariantInventoryPolicy](../../types/enums/ProductVariantInventoryPolicy.md)
- [UnitPriceMeasurementInput](../../types/inputs/UnitPriceMeasurementInput.md)
- [VariantOptionValueInput](../../types/inputs/VariantOptionValueInput.md)
