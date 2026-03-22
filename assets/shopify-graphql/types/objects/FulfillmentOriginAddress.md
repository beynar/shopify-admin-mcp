# Object: `FulfillmentOriginAddress`

The address at which the fulfillment occurred. This object is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead.

## Fields

- `address1`: `String` — The street address of the fulfillment location.
- `address2`: `String` — The second line of the address. Typically the number of the apartment, suite, or unit.
- `city`: `String` — The city in which the fulfillment location is located.
- `countryCode`: `String!` — The country code of the fulfillment location.
- `provinceCode`: `String` — The province code of the fulfillment location.
- `zip`: `String` — The zip code of the fulfillment location.
