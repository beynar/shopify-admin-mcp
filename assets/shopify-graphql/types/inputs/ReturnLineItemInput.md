# Input Object: `ReturnLineItemInput`

The input fields for a return line item.

## Input Fields

- `quantity`: `Int!` — The quantity of the item to be returned.
- `returnReasonDefinitionId`: `ID` — The ID of a [`ReturnReasonDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition). Accepts any ID from the full library of reasons available via [`returnReasonDefinitions`](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions), not limited to the suggested reasons for the line item.
- `returnReasonNote`: `String` = `""` — A note about the reason that the item is being returned.
- `fulfillmentLineItemId`: `ID!` — The ID of the fulfillment line item to be returned.
- `restockingFee`: `RestockingFeeInput` — The restocking fee to capture.

## Related Types

- [RestockingFeeInput](../../types/inputs/RestockingFeeInput.md)
