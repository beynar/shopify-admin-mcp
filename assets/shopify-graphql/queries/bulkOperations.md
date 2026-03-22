# Query: `bulkOperations`

**Returns:** `BulkOperationConnection!`

Returns the app's bulk operations meeting the specified filters. Defaults to sorting by created_at, with newest operations first.

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `BulkOperationsSortKeys` = `CREATED_AT` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | created_at | time | Filter operations created after a specific date. | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | operation_type | string | Filter operations by type. | - `query`<br/> - `mutation` | | status | string | Filter operations by status. | - `canceled`<br/> - `canceling`<br/> - `completed`<br/> - `created`<br/> - `failed`<br/> - `running` | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

## Return Type Fields

- `edges`: `[BulkOperationEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[BulkOperation!]!` — A list of nodes that are contained in BulkOperationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [BulkOperation](../types/objects/BulkOperation.md)
- [BulkOperationsSortKeys](../types/enums/BulkOperationsSortKeys.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query BulkOperations($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: BulkOperationsSortKeys, $query: String) {
  bulkOperations(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query) {
    nodes {
      id
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```
