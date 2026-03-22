# Input Object: `QuantityPriceBreakInput`

The input fields and values to use when creating quantity price breaks.

## Input Fields

- `variantId`: `ID!` — The product variant ID associated with the quantity break.
- `price`: `MoneyInput!` — The price of the product variant when its quantity meets the break's minimum quantity.
- `minimumQuantity`: `Int!` — The minimum required quantity for a variant to qualify for this price.

## Related Types

- [MoneyInput](../../types/inputs/MoneyInput.md)
