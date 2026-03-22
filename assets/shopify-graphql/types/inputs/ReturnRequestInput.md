# Input Object: `ReturnRequestInput`

The input fields for requesting a return.

## Input Fields

- `orderId`: `ID!` — The ID of the order that's being returned.
- `returnLineItems`: `[ReturnRequestLineItemInput!]!` — The line items that are being handled in the return.
- `returnShippingFee`: `ReturnShippingFeeInput` — The return shipping fee to capture.

## Related Types

- [ReturnRequestLineItemInput](../../types/inputs/ReturnRequestLineItemInput.md)
- [ReturnShippingFeeInput](../../types/inputs/ReturnShippingFeeInput.md)
