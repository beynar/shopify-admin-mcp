# Object: `DeliveryPromiseProvider`

A delivery promise provider. Currently restricted to select approved delivery promise partners.

**Implements:** `Node`

## Fields

- `active`: `Boolean!` — Whether the delivery promise provider is active. Defaults to `true` when creating a provider.
- `fulfillmentDelay`: `Int` — The number of seconds to add to the current time as a buffer when looking up delivery promises. Represents how long the shop requires before releasing an order to the fulfillment provider.
- `id`: `ID!` — A globally-unique ID.
- `location`: `Location!` — The location associated with this delivery promise provider.
- `timeZone`: `String!` — The time zone to be used for interpreting day of week and cutoff times in delivery schedules when looking up delivery promises.

## Related Types

- [Location](../../types/objects/Location.md)
