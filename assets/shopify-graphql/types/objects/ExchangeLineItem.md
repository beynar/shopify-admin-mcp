# Object: `ExchangeLineItem`

An item for exchange.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `lineItem`: `LineItem` *(deprecated)* — The order line item for the exchange. If the exchange line has been processed multiple times, this will be the first associated line item and won't reflect all processed values.
- `lineItems`: `[LineItem!]` — The order line items for the exchange.
- `processableQuantity`: `Int!` — The quantity of the exchange item that can be processed.
- `processedQuantity`: `Int!` — The quantity of the exchange item that have been processed.
- `quantity`: `Int!` — The number of units ordered, including refunded and removed units.
- `unprocessedQuantity`: `Int!` — The quantity of the exchange item that haven't been processed.
- `variantId`: `ID` — The ID of the variant at time of return creation.

## Related Types

- [LineItem](../../types/objects/LineItem.md)
