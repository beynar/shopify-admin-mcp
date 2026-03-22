# Enum: `PriceCalculationType`

How to calculate the parent product variant's price while bulk updating variant relationships.

## Values

- `COMPONENTS_SUM` — The price of the parent will be the sum of the components price times their quantity.
- `FIXED` — The price of the parent will be set to the price provided.
- `NONE` — The price of the parent will not be adjusted.
