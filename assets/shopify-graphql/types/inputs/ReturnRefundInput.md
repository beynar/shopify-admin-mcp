# Input Object: `ReturnRefundInput`

The input fields to refund a return.

## Input Fields

- `returnId`: `ID!` — The ID of the return.
- `returnRefundLineItems`: `[ReturnRefundLineItemInput!]!` — A list of return line items to refund.
- `refundShipping`: `RefundShippingInput` — The shipping amount to refund.
- `refundDuties`: `[RefundDutyInput!]` — A list of duties to refund.
- `orderTransactions`: `[ReturnRefundOrderTransactionInput!]` = `[]` — A list of transactions involved in refunding the return.
- `notifyCustomer`: `Boolean` = `false` — Whether to send a refund notification to the customer.

## Related Types

- [RefundDutyInput](../../types/inputs/RefundDutyInput.md)
- [RefundShippingInput](../../types/inputs/RefundShippingInput.md)
- [ReturnRefundLineItemInput](../../types/inputs/ReturnRefundLineItemInput.md)
- [ReturnRefundOrderTransactionInput](../../types/inputs/ReturnRefundOrderTransactionInput.md)
