# Object: `SuggestedReturnRefund`

Represents a return refund suggested by Shopify based on the items being reimbursed. You can then use the suggested refund object to generate an actual refund for the return.

## Fields

- `amount`: `MoneyBag!` — The total monetary value to be refunded in shop and presentment currencies.
- `discountedSubtotal`: `MoneyBag!` — The sum of all the discounted prices of the line items being refunded.
- `maximumRefundable`: `MoneyBag!` — The total monetary value available to refund in shop and presentment currencies.
- `refundDuties`: `[RefundDuty!]!` — A list of duties to be refunded from the order.
- `shipping`: `ShippingRefund!` — The shipping costs to be refunded from the order.
- `subtotal`: `MoneyBag!` — The sum of all the prices of the line items being refunded in shop and presentment currencies.
- `suggestedTransactions`: `[SuggestedOrderTransaction!]!` — A list of suggested order transactions.
- `totalCartDiscountAmount`: `MoneyBag!` — The total cart discount amount that was applied to all line items in this refund.
- `totalDuties`: `MoneyBag!` — The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive.
- `totalTax`: `MoneyBag!` — The sum of the taxes being refunded in shop and presentment currencies. The value must be positive.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [RefundDuty](../../types/objects/RefundDuty.md)
- [ShippingRefund](../../types/objects/ShippingRefund.md)
- [SuggestedOrderTransaction](../../types/objects/SuggestedOrderTransaction.md)
