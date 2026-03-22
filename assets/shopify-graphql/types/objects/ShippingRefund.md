# Object: `ShippingRefund`

Represents the shipping costs refunded on the Refund.

## Fields

- `amount`: `Money!` *(deprecated)* — The monetary value of the shipping fees to be refunded.
- `amountSet`: `MoneyBag!` — The monetary value of the shipping fees to be refunded in shop and presentment currencies.
- `maximumRefundable`: `Money!` *(deprecated)* — The maximum amount of shipping fees currently refundable.
- `maximumRefundableSet`: `MoneyBag!` — The maximum amount of shipping fees currently refundable in shop and presentment currencies.
- `tax`: `Money!` *(deprecated)* — The monetary value of the tax allocated to shipping fees to be refunded.
- `taxSet`: `MoneyBag!` — The monetary value of the tax allocated to shipping fees to be refunded in shop and presentment currencies.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
