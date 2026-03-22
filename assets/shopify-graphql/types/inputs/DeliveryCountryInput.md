# Input Object: `DeliveryCountryInput`

The input fields to specify a country.

## Input Fields

- `code`: `CountryCode` — The country code of the country in the ISO 3166-1 alpha-2 format.
- `restOfWorld`: `Boolean` — Whether the country is a part of the 'Rest of World' shipping zone.
- `provinces`: `[DeliveryProvinceInput!]` — The regions associated with this country.
- `includeAllProvinces`: `Boolean` — Associate all available provinces with this country.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
- [DeliveryProvinceInput](../../types/inputs/DeliveryProvinceInput.md)
