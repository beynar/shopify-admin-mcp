# Object: `MarketRegionCountry`

A country which comprises a market.

**Implements:** `MarketRegion`, `Node`

## Fields

- `code`: `CountryCode!` — The ISO code identifying the country.
- `currency`: `CurrencySetting!` — The currency which this country uses given its market settings.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the region.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
- [CurrencySetting](../../types/objects/CurrencySetting.md)
