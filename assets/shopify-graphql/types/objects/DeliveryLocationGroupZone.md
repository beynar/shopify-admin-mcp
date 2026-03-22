# Object: `DeliveryLocationGroupZone`

Links a location group with a zone and the associated method definitions.

## Fields

- `methodDefinitionCounts`: `DeliveryMethodDefinitionCounts!` — The number of method definitions for the zone.
- `methodDefinitions` `(eligible, type, first, after, last, before, reverse, sortKey)`: `DeliveryMethodDefinitionConnection!` — The method definitions associated to a zone and location group.
- `zone`: `DeliveryZone!` — The zone associated to a location group.

## Related Types

- [DeliveryMethodDefinitionCounts](../../types/objects/DeliveryMethodDefinitionCounts.md)
- [DeliveryMethodDefinitionType](../../types/enums/DeliveryMethodDefinitionType.md)
- [DeliveryZone](../../types/objects/DeliveryZone.md)
- [MethodDefinitionSortKeys](../../types/enums/MethodDefinitionSortKeys.md)
