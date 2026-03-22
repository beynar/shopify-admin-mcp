# Input Object: `CalculateReturnInput`

The input fields to calculate return amounts associated with an order.

## Input Fields

- `orderId`: `ID!` — The ID of the order that will be returned.
- `returnLineItems`: `[CalculateReturnLineItemInput!]` = `[]` — The line items from the order to include in the return.
- `exchangeLineItems`: `[CalculateExchangeLineItemInput!]` = `[]` — The exchange line items to add to the order.
- `returnShippingFee`: `ReturnShippingFeeInput` — The return shipping fee associated with the return.

## Related Types

- [CalculateExchangeLineItemInput](../../types/inputs/CalculateExchangeLineItemInput.md)
- [CalculateReturnLineItemInput](../../types/inputs/CalculateReturnLineItemInput.md)
- [ReturnShippingFeeInput](../../types/inputs/ReturnShippingFeeInput.md)
