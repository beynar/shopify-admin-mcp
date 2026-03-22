# Interface: `Catalog`

A list of products with publishing and pricing information.
A catalog can be associated with a specific context, such as a [`Market`](https://shopify.dev/api/admin-graphql/current/objects/market), [`CompanyLocation`](https://shopify.dev/api/admin-graphql/current/objects/companylocation), or [`App`](https://shopify.dev/api/admin-graphql/current/objects/app).

Catalogs can optionally include a publication to control product visibility and a price list to customize pricing. When a publication isn't associated with a catalog, product availability is determined by the sales channel.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `operations`: `[ResourceOperation!]!` — Most recent catalog operations.
- `priceList`: `PriceList` — The price list associated with the catalog.
- `publication`: `Publication` — A group of products and collections that's published to a catalog.
- `status`: `CatalogStatus!` — The status of the catalog.
- `title`: `String!` — The name of the catalog.

## Possible Types

- [AppCatalog](../../types/objects/AppCatalog.md)
- [CompanyLocationCatalog](../../types/objects/CompanyLocationCatalog.md)
- [MarketCatalog](../../types/objects/MarketCatalog.md)

## Related Types

- [CatalogStatus](../../types/enums/CatalogStatus.md)
- [PriceList](../../types/objects/PriceList.md)
- [Publication](../../types/objects/Publication.md)
- [ResourceOperation](../../types/interfaces/ResourceOperation.md)
