# Query: `catalog`

**Returns:** `Catalog`

Retrieves a [catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) by its ID.
A catalog represents a list of products with publishing and pricing information,
and can be associated with a context, such as a market, company location, or app.

Use the `catalog` query to retrieve information associated with the following workflows:

- Managing product publications across different contexts
- Setting up contextual pricing with price lists
- Managing market-specific product availability
- Configuring B2B customer catalogs

There are several types of catalogs:

- [`MarketCatalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog)
- [`AppCatalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog)
- [`CompanyLocationCatalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog)

Learn more about [catalogs for different markets](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

## Arguments

- **`id`**: `ID!` — The ID of the `Catalog` to return.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.
- `operations`: `[ResourceOperation!]!` — Most recent catalog operations.
- `priceList`: `PriceList` — The price list associated with the catalog.
- `publication`: `Publication` — A group of products and collections that's published to a catalog.
- `status`: `CatalogStatus!` — The status of the catalog.
- `title`: `String!` — The name of the catalog.

## Related Types

- [Catalog](../types/interfaces/Catalog.md)
- [CatalogStatus](../types/enums/CatalogStatus.md)
- [PriceList](../types/objects/PriceList.md)
- [Publication](../types/objects/Publication.md)
- [ResourceOperation](../types/interfaces/ResourceOperation.md)

## Example Query

```graphql
query Catalog($id: ID!) {
  catalog(id: $id) {
    title
  }
}
```
