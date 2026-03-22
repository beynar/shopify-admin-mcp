# Object: `CompanyLocationCatalog`

A list of products with publishing and pricing information associated with company locations.

Company location catalogs can include an optional publication to control product visibility and a price list to customize pricing. When a publication isn't associated with the catalog, product availability is determined by the sales channel.

**Implements:** `Catalog`, `Node`

## Fields

- `companyLocations` `(first, after, last, before, reverse, sortKey, query)`: `CompanyLocationConnection!` — The company locations associated with the catalog.
- `companyLocationsCount`: `Count` — The number of company locations associated with the catalog.
- `id`: `ID!` — A globally-unique ID.
- `operations`: `[ResourceOperation!]!` — Most recent catalog operations.
- `priceList`: `PriceList` — The price list associated with the catalog.
- `publication`: `Publication` — A group of products and collections that's published to a catalog.
- `status`: `CatalogStatus!` — The status of the catalog.
- `title`: `String!` — The name of the catalog.

## Related Types

- [CatalogStatus](../../types/enums/CatalogStatus.md)
- [CompanyLocationSortKeys](../../types/enums/CompanyLocationSortKeys.md)
- [Count](../../types/objects/Count.md)
- [PriceList](../../types/objects/PriceList.md)
- [Publication](../../types/objects/Publication.md)
- [ResourceOperation](../../types/interfaces/ResourceOperation.md)
