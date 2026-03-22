# Input Object: `ProductVariantsBulkInput`

The input fields for specifying a product variant to create as part of a variant bulk mutation.

## Input Fields

- `barcode`: `String` — The value of the barcode associated with the product variant.
- `compareAtPrice`: `Money` — The compare-at price of the variant.
- `id`: `ID` — Specifies the product variant to update or delete.
- `mediaSrc`: `[String!]` — The URL of the media to associate with the variant.
- `inventoryPolicy`: `ProductVariantInventoryPolicy` — Whether customers are allowed to place an order for the variant when it's out of stock. Defaults to `DENY`.
- `inventoryQuantities`: `[InventoryLevelInput!]` — The inventory quantities at each location where the variant is stocked. The number of elements
- `quantityAdjustments`: `[InventoryAdjustmentInput!]` — Adjust inventory quantities with deltas.
- `inventoryItem`: `InventoryItemInput` — The inventory item associated with the variant, used for unit cost.
- `mediaId`: `ID` — The ID of the media that's associated with the variant.
- `metafields`: `[MetafieldInput!]` — The additional customizable information about the product variant.
- `optionValues`: `[VariantOptionValueInput!]` — The custom properties that a shop owner uses to define product variants.
- `price`: `Money` — The price of the variant.
- `taxable`: `Boolean` — Whether the variant is taxable.
- `taxCode`: `String` — The tax code associated with the variant.
- `unitPriceMeasurement`: `UnitPriceMeasurementInput` — The unit price measurement for the product variant.
- `showUnitPrice`: `Boolean` — Whether the unit price should be shown for this product variant.
- `requiresComponents`: `Boolean` — Whether a product variant requires components. The default value is `false`.

## Related Types

- [InventoryAdjustmentInput](../../types/inputs/InventoryAdjustmentInput.md)
- [InventoryItemInput](../../types/inputs/InventoryItemInput.md)
- [InventoryLevelInput](../../types/inputs/InventoryLevelInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
- [ProductVariantInventoryPolicy](../../types/enums/ProductVariantInventoryPolicy.md)
- [UnitPriceMeasurementInput](../../types/inputs/UnitPriceMeasurementInput.md)
- [VariantOptionValueInput](../../types/inputs/VariantOptionValueInput.md)
