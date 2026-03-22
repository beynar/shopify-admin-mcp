# Input Object: `ReturnProcessInput`

The input fields for processing a return.

## Input Fields

- `returnId`: `ID!` — The ID of the return to be processed.
- `returnLineItems`: `[ReturnProcessReturnLineItemInput!]` = `[]` — The return line items list to be handled.
- `exchangeLineItems`: `[ReturnProcessExchangeLineItemInput!]` = `[]` — The exchange line items list to be handled.
- `refundDuties`: `[RefundDutyInput!]` = `[]` — The refund duties list to be handled.
- `refundShipping`: `RefundShippingInput` — The shipping cost to refund.
- `tipLineId`: `ID` — ID of the tip line item.
- `note`: `String` — The note for the return.
- `notifyCustomer`: `Boolean` = `false` — Whether to notify the customer about the return.
- `financialTransfer`: `ReturnProcessFinancialTransferInput` — The financial transfer for the return.

## Related Types

- [RefundDutyInput](../../types/inputs/RefundDutyInput.md)
- [RefundShippingInput](../../types/inputs/RefundShippingInput.md)
- [ReturnProcessExchangeLineItemInput](../../types/inputs/ReturnProcessExchangeLineItemInput.md)
- [ReturnProcessFinancialTransferInput](../../types/inputs/ReturnProcessFinancialTransferInput.md)
- [ReturnProcessReturnLineItemInput](../../types/inputs/ReturnProcessReturnLineItemInput.md)
