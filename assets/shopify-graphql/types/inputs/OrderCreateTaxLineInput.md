# Input Object: `OrderCreateTaxLineInput`

The input fields for a tax line to create for an order.

## Input Fields

- `channelLiable`: `Boolean` = `false` — Whether the channel that submitted the tax line is liable for remitting. A value of `null` indicates unknown liability for the tax line.
- `priceSet`: `MoneyBagInput` — The amount added to the order for this tax in shop and presentment currencies after discounts are applied.
- `rate`: `Decimal!` — The proportion of the item price that the tax represents as a decimal.
- `title`: `String!` — The name of the tax line to create.

## Related Types

- [MoneyBagInput](../../types/inputs/MoneyBagInput.md)
