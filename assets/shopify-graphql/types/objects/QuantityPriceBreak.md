# Object: `QuantityPriceBreak`

Quantity price breaks lets you offer different rates that are based on the
amount of a specific variant being ordered.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `minimumQuantity`: `Int!` — Minimum quantity required to reach new quantity break price.
- `price`: `MoneyV2!` — The price of variant after reaching the minimum quanity.
- `priceList`: `PriceList!` — The price list associated with this quantity break.
- `variant`: `ProductVariant!` — The product variant associated with this quantity break.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [PriceList](../../types/objects/PriceList.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
