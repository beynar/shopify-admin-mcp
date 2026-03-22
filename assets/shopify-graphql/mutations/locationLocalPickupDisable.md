# Mutation: `locationLocalPickupDisable`

**Returns:** `LocationLocalPickupDisablePayload`

Disables local pickup for a location.

## Arguments

- **`locationId`**: `ID!` — The ID of the location to disable local pickup for.

## Payload Fields

- `locationId`: `ID` — The ID of the location for which local pickup was disabled.
- `userErrors`: `[DeliveryLocationLocalPickupSettingsError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryLocationLocalPickupSettingsError](../types/objects/DeliveryLocationLocalPickupSettingsError.md)
- [LocationLocalPickupDisablePayload](../types/objects/LocationLocalPickupDisablePayload.md)

## Example Mutation

```graphql
mutation LocationLocalPickupDisable($locationId: ID!) {
  locationLocalPickupDisable(locationId: $locationId) {
    locationId
    userErrors {
      field
      message
    }
  }
}
```
