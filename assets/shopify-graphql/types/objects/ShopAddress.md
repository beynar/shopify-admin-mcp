# Object: `ShopAddress`

An address for a shop.

**Implements:** `Node`

## Fields

- `address1`: `String` — The first line of the address. Typically the street address or PO Box number.
- `address2`: `String` — The second line of the address. Typically the number of the apartment, suite, or unit.
- `city`: `String` — The name of the city, district, village, or town.
- `company`: `String` — The name of the company or organization.
- `coordinatesValidated`: `Boolean!` — Whether the address coordinates are valid.
- `country`: `String` — The name of the country.
- `countryCode`: `String` *(deprecated)* — The two-letter code for the country of the address.
- `countryCodeV2`: `CountryCode` — The two-letter code for the country of the address.
- `firstName`: `String` *(deprecated)* — The first name.
- `formatted` `(withCompany)`: `[String!]!` — A formatted version of the address, customized by the provided arguments.
- `formattedArea`: `String` — A comma-separated list of the values for city, province, and country.
- `id`: `ID!` — A globally-unique ID.
- `lastName`: `String` *(deprecated)* — The last name.
- `latitude`: `Float` — The latitude coordinate of the address.
- `longitude`: `Float` — The longitude coordinate of the address.
- `name`: `String` *(deprecated)* — The full name, based on firstName and lastName.
- `phone`: `String` — A phone number associated with the address.
- `province`: `String` — The region of the address, such as the province, state, or district.
- `provinceCode`: `String` — The alphanumeric code for the region.
- `zip`: `String` — The zip or postal code of the address.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
