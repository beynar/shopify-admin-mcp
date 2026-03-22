# Object: `ExchangeV2Additions`

New items associated to the exchange.

## Fields

- `lineItems`: `[ExchangeV2LineItem!]!` — The list of new items for the exchange.
- `subtotalPriceSet`: `MoneyBag!` — The subtotal of the items being added, including discounts.
- `taxLines`: `[TaxLine!]!` — The summary of all taxes of the items being added.
- `totalPriceSet`: `MoneyBag!` — The total price of the items being added, including discounts and taxes.

## Related Types

- [ExchangeV2LineItem](../../types/objects/ExchangeV2LineItem.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [TaxLine](../../types/objects/TaxLine.md)
