# Input Object: `RefundInput`

The input fields to create a refund.

## Input Fields

- `currency`: `CurrencyCode` — The currency that is used to refund the order. This must be the presentment currency, which is the currency used by the customer. This is a required field for orders where the currency and presentment currency differ.
- `orderId`: `ID!` — The ID of the order that's being refunded.
- `note`: `String` — An optional note that's attached to the refund.
- `notify`: `Boolean` — Whether to send a refund notification to the customer.
- `shipping`: `ShippingRefundInput` — The input fields that are required to reimburse shipping costs.
- `processedAt`: `DateTime` — The date and time when the refund is being processed. If not provided, it will be set to the current time.
- `refundLineItems`: `[RefundLineItemInput!]` — A list of line items to refund.
- `refundDuties`: `[RefundDutyInput!]` — A list of duties to refund.
- `transactions`: `[OrderTransactionInput!]` — A list of transactions involved in the refund.
- `refundMethods`: `[RefundMethodInput!]` = `[]` — A list of instructions to process the financial outcome of the refund.
- `discrepancyReason`: `OrderAdjustmentInputDiscrepancyReason` — An optional reason for a discrepancy between calculated and actual refund amounts.
- `allowOverRefunding`: `Boolean` = `false` — Whether to allow the total refunded amount to surpass the amount paid for the order.

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [OrderAdjustmentInputDiscrepancyReason](../../types/enums/OrderAdjustmentInputDiscrepancyReason.md)
- [OrderTransactionInput](../../types/inputs/OrderTransactionInput.md)
- [RefundDutyInput](../../types/inputs/RefundDutyInput.md)
- [RefundLineItemInput](../../types/inputs/RefundLineItemInput.md)
- [RefundMethodInput](../../types/inputs/RefundMethodInput.md)
- [ShippingRefundInput](../../types/inputs/ShippingRefundInput.md)
