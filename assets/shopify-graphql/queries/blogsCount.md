# Query: `blogsCount`

**Returns:** `Count`

Count of blogs. Limited to a maximum of 10000 by default.

## Arguments

- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | created_at | time | | handle | string | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | title | string | | updated_at | time | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
- **`limit`**: `Int` = `10000` — The upper bound on count value before returning a result. Use `null` to have no limit.

## Return Type Fields

- `count`: `Int!` — The count of elements.
- `precision`: `CountPrecision!` — The count's precision, or the exactness of the value.

## Related Types

- [Count](../types/objects/Count.md)
- [CountPrecision](../types/enums/CountPrecision.md)

## Example Query

```graphql
query BlogsCount($query: String, $limit: Int) {
  blogsCount(query: $query, limit: $limit) {
    count
  }
}
```
