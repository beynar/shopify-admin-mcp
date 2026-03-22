# Object: `MarketsResolvedValues`

The resolved values based on the markets configuration for a buyer signal. Resolved values include the resolved catalogs, web presences, currency, and price inclusivity.

## Fields

- `catalogs` `(first, after, last, before, reverse)`: `MarketCatalogConnection!` — The resolved catalogs.
- `currencyCode`: `CurrencyCode!` — The resolved currency code.
- `priceInclusivity`: `ResolvedPriceInclusivity!` — The resolved price inclusivity attributes.
- `webPresences` `(first, after, last, before, reverse)`: `MarketWebPresenceConnection!` — The resolved web presences ordered by priority.

## Related Types

- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [ResolvedPriceInclusivity](../../types/objects/ResolvedPriceInclusivity.md)
