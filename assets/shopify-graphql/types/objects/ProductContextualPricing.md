# Object: `ProductContextualPricing`

The price of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a specific country. Shows the minimum and maximum variant prices through the price range and the count of fixed quantity rules that apply to the product's variants in the given pricing context.

## Fields

- `fixedQuantityRulesCount`: `Int!` — The number of fixed quantity rules for the product's variants on the price list.
- `maxVariantPricing`: `ProductVariantContextualPricing` — The pricing of the variant with the highest price in the given context.
- `minVariantPricing`: `ProductVariantContextualPricing` — The pricing of the variant with the lowest price in the given context.
- `priceRange`: `ProductPriceRangeV2!` — The minimum and maximum prices of a product, expressed in decimal numbers.

## Related Types

- [ProductPriceRangeV2](../../types/objects/ProductPriceRangeV2.md)
- [ProductVariantContextualPricing](../../types/objects/ProductVariantContextualPricing.md)
