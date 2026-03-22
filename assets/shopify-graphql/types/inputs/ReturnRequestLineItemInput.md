# Input Object: `ReturnRequestLineItemInput`

The input fields for a return line item.

## Input Fields

- `fulfillmentLineItemId`: `ID!` — The ID of the fulfillment line item to be returned.
- `quantity`: `Int!` — The quantity of the item that's being returned.
- `restockingFee`: `RestockingFeeInput` — The restocking fee to capture.
- `returnReasonDefinitionId`: `ID` — The ID of a [`ReturnReasonDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition). Accepts any ID from the full library of reasons available via [`returnReasonDefinitions`](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions), not limited to the suggested reasons for the line item.
- `customerNote`: `String` — A note from the customer that describes the item to be returned.

## Related Types

- [RestockingFeeInput](../../types/inputs/RestockingFeeInput.md)
