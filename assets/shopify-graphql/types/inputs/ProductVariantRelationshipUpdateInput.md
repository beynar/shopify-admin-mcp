# Input Object: `ProductVariantRelationshipUpdateInput`

The input fields for updating a composite product variant.

## Input Fields

- `parentProductVariantId`: `ID` — The product variant ID representing that which contains the relationships with other variants.
- `parentProductId`: `ID` — A product ID which contains product variants that have relationships with other variants.
- `productVariantRelationshipsToCreate`: `[ProductVariantGroupRelationshipInput!]` = `null` — The product variants and associated quantitites to add to the product variant.
- `productVariantRelationshipsToUpdate`: `[ProductVariantGroupRelationshipInput!]` = `null` — The product variants and associated quantitites to update in specified product variant.
- `productVariantRelationshipsToRemove`: `[ID!]` = `null` — The bundle component product variants to be removed from the product variant.
- `removeAllProductVariantRelationships`: `Boolean` = `false` — Whether to remove all components from the product variant. The default value is `false`.
- `priceInput`: `PriceInput` = `null` — Method in which to update the price of the parent product variant.

## Related Types

- [PriceInput](../../types/inputs/PriceInput.md)
- [ProductVariantGroupRelationshipInput](../../types/inputs/ProductVariantGroupRelationshipInput.md)
