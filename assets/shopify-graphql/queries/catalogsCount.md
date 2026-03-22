# Query: `catalogsCount`

**Returns:** `Count`

The count of catalogs belonging to the shop. Limited to a maximum of 10000 by default.

## Arguments

- **`type`**: `CatalogType` = `null` — The type of the catalogs to be returned.
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | app_id | id | | company_id | id | | company_location_id | id | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | managed_country_id | id | | market_id | id | | status | string | | title | string | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
- **`limit`**: `Int` = `10000` — The upper bound on count value before returning a result. Use `null` to have no limit.

## Return Type Fields

- `count`: `Int!` — The count of elements.
- `precision`: `CountPrecision!` — The count's precision, or the exactness of the value.

## Related Types

- [CatalogType](../types/enums/CatalogType.md)
- [Count](../types/objects/Count.md)
- [CountPrecision](../types/enums/CountPrecision.md)

## Example Query

```graphql
query CatalogsCount($type: CatalogType, $query: String, $limit: Int) {
  catalogsCount(type: $type, query: $query, limit: $limit) {
    count
  }
}
```
