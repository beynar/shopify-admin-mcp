# Object: `DiscountCountries`

Defines the geographic scope where a shipping discount can be applied based on customer shipping destinations. This configuration determines which countries are eligible for the promotional offer.

For example, a "Free Shipping to EU" promotion would specify European Union countries, while a domestic-only sale might target just the store's home country.

The object includes both specific country selections and an option to include all remaining countries not explicitly listed, providing flexible geographic targeting for international merchants.

## Fields

- `countries`: `[CountryCode!]!` — The codes for the countries where the discount can be applied.
- `includeRestOfWorld`: `Boolean!` — Whether the discount is applicable to countries that haven't been defined in the shop's shipping zones.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
