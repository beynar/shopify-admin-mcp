# Object: `MarketCatalog`

A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets. The catalog can optionally include a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) to control which [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see, and a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments. When a publication isn't associated with the catalog, product availability is determined by the sales channel.

Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.

Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).

**Implements:** `Catalog`, `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `markets` `(type, status, first, after, last, before, reverse)`: `MarketConnection!` — The markets associated with the catalog.
- `marketsCount` `(type, status, query, limit)`: `Count` — The number of markets associated with the catalog.
- `operations`: `[ResourceOperation!]!` — Most recent catalog operations.
- `priceList`: `PriceList` — The price list associated with the catalog.
- `publication`: `Publication` — A group of products and collections that's published to a catalog.
- `status`: `CatalogStatus!` — The status of the catalog.
- `title`: `String!` — The name of the catalog.

## Related Types

- [CatalogStatus](../../types/enums/CatalogStatus.md)
- [Count](../../types/objects/Count.md)
- [MarketStatus](../../types/enums/MarketStatus.md)
- [MarketType](../../types/enums/MarketType.md)
- [PriceList](../../types/objects/PriceList.md)
- [Publication](../../types/objects/Publication.md)
- [ResourceOperation](../../types/interfaces/ResourceOperation.md)
