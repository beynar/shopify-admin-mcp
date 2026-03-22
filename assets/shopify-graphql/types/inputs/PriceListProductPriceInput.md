# Input Object: `PriceListProductPriceInput`

The input fields representing the price for all variants of a product.

## Input Fields

- `productId`: `ID!` — Specifies the ID of the product to update its variants for.
- `price`: `MoneyInput!` — Specifies the price and currency to apply to the product's variants on the price list.
- `compareAtPrice`: `MoneyInput` — Specifies the compare-at price and currency to apply to the product's variants on the price list.

## Related Types

- [MoneyInput](../../types/inputs/MoneyInput.md)
