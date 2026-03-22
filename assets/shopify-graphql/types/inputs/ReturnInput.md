# Input Object: `ReturnInput`

The input fields for a return.

## Input Fields

- `exchangeLineItems`: `[ExchangeLineItemInput!]` — The new line items to be added to the order.
- `requestedAt`: `DateTime` — The UTC date and time when the return was first solicited by the customer.
- `orderId`: `ID!` — The ID of the order to be returned.
- `returnLineItems`: `[ReturnLineItemInput!]!` — The return line items list to be handled.
- `returnShippingFee`: `ReturnShippingFeeInput` — The return shipping fee to capture.

## Related Types

- [ExchangeLineItemInput](../../types/inputs/ExchangeLineItemInput.md)
- [ReturnLineItemInput](../../types/inputs/ReturnLineItemInput.md)
- [ReturnShippingFeeInput](../../types/inputs/ReturnShippingFeeInput.md)
