# Object: `AppCatalog`

A catalog that defines the publication associated with an app.

**Implements:** `Catalog`, `Node`

## Fields

- `apps` `(first, after, last, before, reverse)`: `AppConnection!` — The apps associated with the catalog.
- `id`: `ID!` — A globally-unique ID.
- `operations`: `[ResourceOperation!]!` — Most recent catalog operations.
- `priceList`: `PriceList` — The price list associated with the catalog.
- `publication`: `Publication` — A group of products and collections that's published to a catalog.
- `status`: `CatalogStatus!` — The status of the catalog.
- `title`: `String!` — The name of the catalog.

## Related Types

- [CatalogStatus](../../types/enums/CatalogStatus.md)
- [PriceList](../../types/objects/PriceList.md)
- [Publication](../../types/objects/Publication.md)
- [ResourceOperation](../../types/interfaces/ResourceOperation.md)
