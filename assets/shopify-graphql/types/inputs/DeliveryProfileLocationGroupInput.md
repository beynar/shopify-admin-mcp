# Input Object: `DeliveryProfileLocationGroupInput`

The input fields for a location group associated to a delivery profile.

## Input Fields

- `id`: `ID` — The globally-unique ID of the delivery profile location group.
- `locations`: `[ID!]` — The list of location IDs to be moved to this location group.
- `locationsToAdd`: `[ID!]` — The list of location IDs to be added to this location group.
- `locationsToRemove`: `[ID!]` — The list of location IDs to be removed from this location group.
- `zonesToCreate`: `[DeliveryLocationGroupZoneInput!]` — The list of location group zones to create.
- `zonesToUpdate`: `[DeliveryLocationGroupZoneInput!]` — The list of location group zones to update.

## Related Types

- [DeliveryLocationGroupZoneInput](../../types/inputs/DeliveryLocationGroupZoneInput.md)
