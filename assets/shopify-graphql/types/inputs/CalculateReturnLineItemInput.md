# Input Object: `CalculateReturnLineItemInput`

The input fields for return line items on a calculated return.

## Input Fields

- `fulfillmentLineItemId`: `ID!` — The ID of the fulfillment line item to be returned.
- `restockingFee`: `RestockingFeeInput` — The restocking fee for the return line item.
- `quantity`: `Int!` — The quantity of the item to be returned.

## Related Types

- [RestockingFeeInput](../../types/inputs/RestockingFeeInput.md)
