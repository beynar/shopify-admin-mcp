# Input Object: `DeliveryLocationGroupZoneInput`

The input fields for a delivery zone associated to a location group and profile.

## Input Fields

- `id`: `ID` — A globally-unique ID of the zone.
- `name`: `String` — The name of the zone.
- `countries`: `[DeliveryCountryInput!]` — A list of countries to associate with the zone.
- `methodDefinitionsToCreate`: `[DeliveryMethodDefinitionInput!]` — A list of method definitions to create.
- `methodDefinitionsToUpdate`: `[DeliveryMethodDefinitionInput!]` — A list of method definitions to update.

## Related Types

- [DeliveryCountryInput](../../types/inputs/DeliveryCountryInput.md)
- [DeliveryMethodDefinitionInput](../../types/inputs/DeliveryMethodDefinitionInput.md)
