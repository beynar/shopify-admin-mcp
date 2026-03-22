# Object: `CompanyAddress`

Represents a billing or shipping address for a company location.

**Implements:** `Node`

## Fields

- `address1`: `String!` — The first line of the address. Typically the street address or PO Box number.
- `address2`: `String` — The second line of the address. Typically the number of the apartment, suite, or unit.
- `city`: `String` — The name of the city, district, village, or town.
- `companyName`: `String!` — The name of the company.
- `country`: `String` — The name of the country.
- `countryCode`: `CountryCode!` — The two-letter code for the country of the address.
- `createdAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company address was created.
- `firstName`: `String` — The first name of the recipient.
- `formattedAddress` `(withName, withCompanyName)`: `[String!]!` — The formatted version of the address.
- `formattedArea`: `String` — A comma-separated list of the values for city, province, and country.
- `id`: `ID!` — A globally-unique ID.
- `lastName`: `String` — The last name of the recipient.
- `phone`: `String` — A unique phone number for the customer.
- `province`: `String` — The region of the address, such as the province, state, or district.
- `recipient`: `String` — The identity of the recipient e.g. 'Receiving Department'.
- `updatedAt`: `DateTime!` — The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company address was last updated.
- `zip`: `String` — The zip or postal code of the address.
- `zoneCode`: `String` — The alphanumeric code for the region.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
