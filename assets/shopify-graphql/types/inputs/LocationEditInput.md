# Input Object: `LocationEditInput`

The input fields to use to edit a location.

## Input Fields

- `name`: `String` — The name of the location.
- `address`: `LocationEditAddressInput` — The address of the location.
- `fulfillsOnlineOrders`: `Boolean` — Whether inventory at this location is available for sale online.
- `metafields`: `[MetafieldInput!]` — Additional customizable information to associate with the location.

## Related Types

- [LocationEditAddressInput](../../types/inputs/LocationEditAddressInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
