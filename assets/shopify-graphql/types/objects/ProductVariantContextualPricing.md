# Object: `ProductVariantContextualPricing`

The price of a product variant in a specific country.
Prices vary between countries.

## Fields

- `compareAtPrice`: `MoneyV2` — The final compare-at price after all adjustments are applied.
- `price`: `MoneyV2!` — The final price after all adjustments are applied.
- `quantityPriceBreaks` `(first, after, last, before, reverse, sortKey)`: `QuantityPriceBreakConnection!` — A list of quantity breaks for the product variant.
- `quantityRule`: `QuantityRule!` — The quantity rule applied for a given context.
- `unitPrice`: `MoneyV2` — The unit price value for the given context based on the variant measurement.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [QuantityPriceBreakSortKeys](../../types/enums/QuantityPriceBreakSortKeys.md)
- [QuantityRule](../../types/objects/QuantityRule.md)
