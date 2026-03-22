# Object: `DeliveryZone`

A zone is a group of countries that have the same shipping rates. Customers can order products from a store only if they choose a shipping destination that's included in one of the store's zones.

**Implements:** `Node`

## Fields

- `countries`: `[DeliveryCountry!]!` — The list of countries within the zone.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the zone.

## Related Types

- [DeliveryCountry](../../types/objects/DeliveryCountry.md)
