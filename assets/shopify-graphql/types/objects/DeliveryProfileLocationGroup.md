# Object: `DeliveryProfileLocationGroup`

Links a location group with zones. Both are associated to a delivery profile.

## Fields

- `countriesInAnyZone`: `[DeliveryCountryAndZone!]!` — The countries already selected in any zone for the specified location group.
- `locationGroup`: `DeliveryLocationGroup!` — The collection of locations that make up the specified location group.
- `locationGroupZones` `(first, after, last, before, reverse)`: `DeliveryLocationGroupZoneConnection!` — The applicable zones associated to the specified location group.

## Related Types

- [DeliveryCountryAndZone](../../types/objects/DeliveryCountryAndZone.md)
- [DeliveryLocationGroup](../../types/objects/DeliveryLocationGroup.md)
