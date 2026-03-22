# Input Object: `OrderCreateShippingLineInput`

The input fields for a shipping line to create for an order.

## Input Fields

- `code`: `String` — A reference to the shipping method.
- `priceSet`: `MoneyBagInput!` — The price of this shipping method in the shop currency. Can't be negative.
- `source`: `String` — The source of the shipping method.
- `taxLines`: `[OrderCreateTaxLineInput!]` — A list of tax line objects, each of which details a tax applicable to this shipping line.
- `title`: `String!` — The title of the shipping method.

## Related Types

- [MoneyBagInput](../../types/inputs/MoneyBagInput.md)
- [OrderCreateTaxLineInput](../../types/inputs/OrderCreateTaxLineInput.md)
