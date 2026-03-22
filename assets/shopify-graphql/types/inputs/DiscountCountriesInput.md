# Input Object: `DiscountCountriesInput`

The input fields for a list of countries to add or remove from the free shipping discount.

## Input Fields

- `add`: `[CountryCode!]` — The country codes to add to the list of countries where the discount applies.
- `remove`: `[CountryCode!]` — The country codes to remove from the list of countries where the discount applies.
- `includeRestOfWorld`: `Boolean` = `false` — Whether the discount code is applicable to countries that haven't been defined in the shop's shipping zones.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
