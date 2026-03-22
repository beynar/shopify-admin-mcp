# Object: `OrderStagedChangeDecrementItem`

An removal of items from an existing line item on the order.

## Fields

- `delta`: `Int!` — The number of items removed.
- `lineItem`: `LineItem!` — The original line item.
- `restock`: `Boolean!` — The intention to restock the removed items.

## Related Types

- [LineItem](../../types/objects/LineItem.md)
