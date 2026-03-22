# Input Object: `ReverseFulfillmentOrderDisposeInput`

The input fields to dispose a reverse fulfillment order line item.

## Input Fields

- `reverseFulfillmentOrderLineItemId`: `ID!` — The ID of the reverse fulfillment order line item.
- `quantity`: `Int!` — The quantity of the reverse fulfillment order line item to dispose.
- `locationId`: `ID` — The ID of the location where the reverse fulfillment order line item is to be disposed.
- `dispositionType`: `ReverseFulfillmentOrderDispositionType!` — The final arrangement for the reverse fulfillment order line item.

## Related Types

- [ReverseFulfillmentOrderDispositionType](../../types/enums/ReverseFulfillmentOrderDispositionType.md)
