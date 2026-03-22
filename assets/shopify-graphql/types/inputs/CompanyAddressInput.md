# Input Object: `CompanyAddressInput`

The input fields to create or update the address of a company location.

## Input Fields

- `address1`: `String` — The first line of the address. Typically the street address or PO Box number.
- `address2`: `String` — The second line of the address. Typically the number of the apartment, suite, or unit.
- `city`: `String` — The name of the city, district, village, or town.
- `zip`: `String` — The zip or postal code of the address.
- `recipient`: `String` — The identity of the recipient e.g. 'Receiving Department'.
- `firstName`: `String` — The first name of the recipient.
- `lastName`: `String` — The last name of the recipient.
- `phone`: `String` — A phone number for the recipient. Formatted using E.164 standard. For example, _+16135551111_.
- `zoneCode`: `String` — The alphanumeric code for the region of the address, such as the province, state, or district. For example, `ON` for Ontario, Canada.
- `countryCode`: `CountryCode` — The two-letter code ([ISO 3166-1 alpha-2]](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format) for the country of the address. For example, `US`` for the United States.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
