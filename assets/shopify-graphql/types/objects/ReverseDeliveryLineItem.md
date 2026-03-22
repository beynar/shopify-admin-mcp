# Object: `ReverseDeliveryLineItem`

The details about a reverse delivery line item.

**Implements:** `Node`

## Fields

- `dispositions`: `[ReverseFulfillmentOrderDisposition!]!` — The dispositions of the item.
- `id`: `ID!` — A globally-unique ID.
- `quantity`: `Int!` — The expected number of units.
- `reverseFulfillmentOrderLineItem`: `ReverseFulfillmentOrderLineItem!` — The corresponding reverse fulfillment order line item.

## Related Types

- [ReverseFulfillmentOrderDisposition](../../types/objects/ReverseFulfillmentOrderDisposition.md)
- [ReverseFulfillmentOrderLineItem](../../types/objects/ReverseFulfillmentOrderLineItem.md)
