# Object: `BusinessEntityAddress`

Represents the address of a merchant's Business Entity.

## Fields

- `address1`: `String` — The first line of the address. Typically the street address or PO Box number.
- `address2`: `String` — The second line of the address. Typically the number of the apartment, suite, or unit.
- `city`: `String` — The name of the city, district, village, or town.
- `countryCode`: `CountryCode!` — The country code of the merchant's Business Entity.
- `province`: `String` — The region of the address, such as the province, state, or district.
- `zip`: `String` — The zip or postal code of the address.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
