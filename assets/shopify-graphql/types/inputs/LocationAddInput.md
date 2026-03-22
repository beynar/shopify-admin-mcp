# Input Object: `LocationAddInput`

The input fields to use to add a location.

## Input Fields

- `name`: `String!` — The name of the location.
- `address`: `LocationAddAddressInput!` — The address of the location.
- `fulfillsOnlineOrders`: `Boolean` = `true` — Whether inventory at this location is available for sale online.
- `metafields`: `[MetafieldInput!]` — Additional customizable information to associate with the location.

## Related Types

- [LocationAddAddressInput](../../types/inputs/LocationAddAddressInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
