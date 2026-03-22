# Object: `PriceRuleShippingLineEntitlements`

The shipping lines to which the price rule applies to.

## Fields

- `countryCodes`: `[CountryCode!]!` — The codes for the countries to which the price rule applies to.
- `includeRestOfWorld`: `Boolean!` — Whether the price rule is applicable to countries that haven't been defined in the shop's shipping zones.
- `targetAllShippingLines`: `Boolean!` — Whether the price rule applies to all shipping lines.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
