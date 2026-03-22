# Object: `DeliveryLocationGroup`

A location group is a collection of locations. They share zones and delivery methods across delivery
profiles.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `locations` `(first, after, last, before, reverse, sortKey, query, includeLegacy, includeInactive)`: `LocationConnection!` — A list of all locations that are part of this location group.
- `locationsCount`: `Count` — A count of all locations that are part of this location group.

## Related Types

- [Count](../../types/objects/Count.md)
- [LocationSortKeys](../../types/enums/LocationSortKeys.md)
