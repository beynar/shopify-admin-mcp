# Object: `CashRoundingAdjustment`

The rounding adjustment applied to total payment or refund received for an Order involving cash payments.

## Fields

- `paymentSet`: `MoneyBag!` — The rounding adjustment that can be applied to totalReceived for an Order involving cash payments in shop and presentment currencies. Could be a positive or negative value. Value is 0 if there's no rounding, or for non-cash payments.
- `refundSet`: `MoneyBag!` — The rounding adjustment that can be applied to totalRefunded for an Order involving cash payments in shop and presentment currencies. Could be a positive or negative value. Value is 0 if there's no rounding, or for non-cash refunds.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
