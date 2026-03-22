# Object: `PriceListParent`

Represents relative adjustments from one price list to other prices.
  You can use a `PriceListParent` to specify an adjusted relative price using a percentage-based
  adjustment. Adjusted prices work in conjunction with exchange rules and rounding.

  [Adjustment types](https://shopify.dev/api/admin-graphql/latest/enums/pricelistadjustmenttype)
  support both percentage increases and decreases.

## Fields

- `adjustment`: `PriceListAdjustment!` — A price list adjustment.
- `settings`: `PriceListAdjustmentSettings!` — A price list's settings for adjustment.

## Related Types

- [PriceListAdjustment](../../types/objects/PriceListAdjustment.md)
- [PriceListAdjustmentSettings](../../types/objects/PriceListAdjustmentSettings.md)
