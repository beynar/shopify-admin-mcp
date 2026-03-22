# Object: `FulfillmentHold`

A fulfillment hold currently applied on a fulfillment order.

**Implements:** `Node`

## Fields

- `displayReason`: `String!` — The localized reason for the fulfillment hold for display purposes.
- `handle`: `String` — An identifier an app can use to reference one of many holds it applied to a fulfillment order.
- `heldByApp`: `App` — The app that created the fulfillment hold.
- `heldByRequestingApp`: `Boolean!` — A boolean value that indicates whether the requesting app created the fulfillment hold.
- `id`: `ID!` — A globally-unique ID.
- `reason`: `FulfillmentHoldReason!` — The reason for the fulfillment hold.
- `reasonNotes`: `String` — Additional information about the fulfillment hold reason.

## Related Types

- [App](../../types/objects/App.md)
- [FulfillmentHoldReason](../../types/enums/FulfillmentHoldReason.md)
