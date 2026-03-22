# Object: `PriceListPrice`

Pricing for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Represents the variant's price, compare-at price, and whether the price is fixed or calculated using percentage-based adjustments. The [`PriceListPriceOriginType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType) distinguishes between prices set directly on the price list (fixed) and prices calculated using the price list's adjustment configuration (relative).

Learn more about [building catalogs with different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

## Fields

- `compareAtPrice`: `MoneyV2` — The compare-at price of the product variant on this price list.
- `originType`: `PriceListPriceOriginType!` — The origin of a price, either fixed (defined on the price list) or relative (calculated using a price list adjustment configuration).
- `price`: `MoneyV2!` — The price of the product variant on this price list.
- `quantityPriceBreaks` `(first, after, last, before, reverse, sortKey)`: `QuantityPriceBreakConnection!` — A list of quantity breaks for the product variant.
- `variant`: `ProductVariant!` — The product variant associated with this price.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [PriceListPriceOriginType](../../types/enums/PriceListPriceOriginType.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
- [QuantityPriceBreakSortKeys](../../types/enums/QuantityPriceBreakSortKeys.md)
