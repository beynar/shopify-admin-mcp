# Object: `FulfillmentOrderDestination`

Represents the destination where the items should be sent upon fulfillment.

**Implements:** `Node`

## Fields

- `address1`: `String` — The first line of the address of the destination.
- `address2`: `String` — The second line of the address of the destination.
- `city`: `String` — The city of the destination.
- `company`: `String` — The company of the destination.
- `countryCode`: `CountryCode` — The two-letter country code of the destination.
- `email`: `String` — The email of the customer at the destination.
- `firstName`: `String` — The first name of the customer at the destination.
- `id`: `ID!` — A globally-unique ID.
- `lastName`: `String` — The last name of the customer at the destination.
- `location`: `Location` — The location designated for the pick-up of the fulfillment order.
- `phone`: `String` — The phone number of the customer at the destination.
- `province`: `String` — The province of the destination.
- `zip`: `String` — The ZIP code of the destination.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
- [Location](../../types/objects/Location.md)
