# Object: `TaxLine`

A tax applied to a [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) or [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine). Includes the tax amount, rate, title, and whether the channel that submitted the tax is liable for remitting it.

The tax amount in both shop and presentment currencies after applying discounts. Includes information about the tax rate, whether the channel is liable for remitting the tax, and other tax-related details.

## Fields

- `channelLiable`: `Boolean` — Whether the channel that submitted the tax line is liable for remitting. A value of null indicates unknown liability for this tax line.
- `price`: `Money!` *(deprecated)* — The amount of tax, in shop currency, after discounts and before returns.
- `priceSet`: `MoneyBag!` — The amount of tax, in shop and presentment currencies, after discounts and before returns.
- `rate`: `Float` — The proportion of the line item price that the tax represents as a decimal.
- `ratePercentage`: `Float` — The proportion of the line item price that the tax represents as a percentage.
- `source`: `String` — The source of the tax.
- `title`: `String!` — The name of the tax.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
