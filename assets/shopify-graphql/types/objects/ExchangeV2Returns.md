# Object: `ExchangeV2Returns`

Return items associated to the exchange.

## Fields

- `lineItems`: `[ExchangeV2LineItem!]!` — The list of return items for the exchange.
- `orderDiscountAmountSet`: `MoneyBag!` — The amount of the order-level discount for the items and shipping being returned, which doesn't contain any line item discounts.
- `shippingRefundAmountSet`: `MoneyBag!` — The amount of money to be refunded for shipping.
- `subtotalPriceSet`: `MoneyBag!` — The subtotal of the items being returned.
- `taxLines`: `[TaxLine!]!` — The summary of all taxes of the items being returned.
- `tipRefundAmountSet`: `MoneyBag!` — The amount of money to be refunded for tip.
- `totalPriceSet`: `MoneyBag!` — The total value of the items being returned.

## Related Types

- [ExchangeV2LineItem](../../types/objects/ExchangeV2LineItem.md)
- [MoneyBag](../../types/objects/MoneyBag.md)
- [TaxLine](../../types/objects/TaxLine.md)
