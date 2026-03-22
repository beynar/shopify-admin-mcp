# Object: `SavedSearch`

A representation of a search query in the Shopify admin used on resource index views. Preserves complex queries with search terms and filters, enabling merchants to quickly access frequently used data views. For example, a saved search can be applied to the product index table to filter products. The query string combines free-text search terms with structured filters to narrow results based on resource attributes.

The search applies to a specific resource type such as [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), or [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects.

**Implements:** `LegacyInteroperability`, `Node`

## Fields

- `filters`: `[SearchFilter!]!` — The filters of a saved search.
- `id`: `ID!` — A globally-unique ID.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `name`: `String!` — The name of a saved search.
- `query`: `String!` — The query string of a saved search. This includes search terms and filters.
- `resourceType`: `SearchResultType!` — The type of resource this saved search is searching in.
- `searchTerms`: `String!` — The search terms of a saved search.

## Related Types

- [SearchFilter](../../types/objects/SearchFilter.md)
- [SearchResultType](../../types/enums/SearchResultType.md)
