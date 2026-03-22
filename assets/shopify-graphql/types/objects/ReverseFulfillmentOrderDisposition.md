# Object: `ReverseFulfillmentOrderDisposition`

The details of the arrangement of an item.

**Implements:** `Node`

## Fields

- `createdAt`: `DateTime!` — The date and time when the disposition was created.
- `id`: `ID!` — A globally-unique ID.
- `location`: `Location` — The location where the disposition occurred.
- `quantity`: `Int!` — The number of disposed units.
- `type`: `ReverseFulfillmentOrderDispositionType!` — The final arrangement of an item.

## Related Types

- [Location](../../types/objects/Location.md)
- [ReverseFulfillmentOrderDispositionType](../../types/enums/ReverseFulfillmentOrderDispositionType.md)
