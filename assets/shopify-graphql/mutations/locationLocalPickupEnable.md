# Mutation: `locationLocalPickupEnable`

**Returns:** `LocationLocalPickupEnablePayload`

Enables local pickup for a location so customers can collect their orders in person. Configures the estimated pickup time that customers see at checkout and optional instructions for finding or accessing the pickup location.

## Arguments

- **`localPickupSettings`**: `DeliveryLocationLocalPickupEnableInput!` — The settings required to enable local pickup for a location.

## Payload Fields

- `localPickupSettings`: `DeliveryLocalPickupSettings` — The local pickup settings that were enabled.
- `userErrors`: `[DeliveryLocationLocalPickupSettingsError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [DeliveryLocalPickupSettings](../types/objects/DeliveryLocalPickupSettings.md)
- [DeliveryLocationLocalPickupEnableInput](../types/inputs/DeliveryLocationLocalPickupEnableInput.md)
- [DeliveryLocationLocalPickupSettingsError](../types/objects/DeliveryLocationLocalPickupSettingsError.md)
- [LocationLocalPickupEnablePayload](../types/objects/LocationLocalPickupEnablePayload.md)

## Example Mutation

```graphql
mutation LocationLocalPickupEnable($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
  locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
    localPickupSettings {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
