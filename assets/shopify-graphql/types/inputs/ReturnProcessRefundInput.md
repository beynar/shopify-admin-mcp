# Input Object: `ReturnProcessRefundInput`

The input fields for the refund for the return.

## Input Fields

- `allowOverRefunding`: `Boolean` = `false` — Whether to allow the total refunded amount to surpass the amount paid for the order.
- `orderTransactions`: `[ReturnRefundOrderTransactionInput!]!` — The order transactions for the refund.
- `refundMethods`: `[RefundMethodInput!]` = `[]` — A list of instructions to process the financial outcome of the refund.

## Related Types

- [RefundMethodInput](../../types/inputs/RefundMethodInput.md)
- [ReturnRefundOrderTransactionInput](../../types/inputs/ReturnRefundOrderTransactionInput.md)
