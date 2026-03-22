# Object: `SuggestedReturnFinancialOutcome`

Represents a return financial outcome suggested by Shopify based on the items being reimbursed. You can then use the suggested outcome object to generate an actual refund or invoice for the return.

## Fields

- `discountedSubtotal`: `MoneyBag!` — The sum of all the discounted prices of the line items being refunded.
- `financialTransfer`: `ReturnOutcomeFinancialTransfer` — The financial transfer details for the return outcome.
- `maximumRefundable`: `MoneyBag!` — The total monetary value available to refund in shop and presentment currencies.
- `refundDuties`: `[RefundDuty!]!` — A list of duties to be refunded from the order.
- `shipping`: `ShippingRefund!` — The shipping costs to be refunded from the order.
- `totalAdditionalFees`: `MoneyBag!` — The sum of all the additional fees being refunded in shop and presentment currencies. The value must be positive.
- `totalCartDiscountAmount`: `MoneyBag!` — The total cart discount amount that was applied to all line items in this refund.
- `totalDuties`: `MoneyBag!` — The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive.
- `totalTax`: `MoneyBag!` — The sum of the taxes being refunded in shop and presentment currencies. The value must be positive.

## Related Types

- [MoneyBag](../../types/objects/MoneyBag.md)
- [RefundDuty](../../types/objects/RefundDuty.md)
- [ReturnOutcomeFinancialTransfer](../../types/unions/ReturnOutcomeFinancialTransfer.md)
- [ShippingRefund](../../types/objects/ShippingRefund.md)
