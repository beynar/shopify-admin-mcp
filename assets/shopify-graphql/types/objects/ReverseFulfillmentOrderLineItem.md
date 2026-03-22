# Object: `ReverseFulfillmentOrderLineItem`

The details about a reverse fulfillment order line item.

**Implements:** `Node`

## Fields

- `dispositions`: `[ReverseFulfillmentOrderDisposition!]!` — The dispositions of the item.
- `fulfillmentLineItem`: `FulfillmentLineItem` — The corresponding fulfillment line item for a reverse fulfillment order line item.
- `id`: `ID!` — A globally-unique ID.
- `totalQuantity`: `Int!` — The total number of units to be processed.

## Related Types

- [FulfillmentLineItem](../../types/objects/FulfillmentLineItem.md)
- [ReverseFulfillmentOrderDisposition](../../types/objects/ReverseFulfillmentOrderDisposition.md)
