# Query: `returnReasonDefinitions`

**Returns:** `ReturnReasonDefinitionConnection!`

Returns the full library of available return reason definitions.

Use this query to retrieve the standardized return reasons available for creating returns.
Filter by IDs or handles to get specific definitions.

Only non-deleted reasons should be shown to customers when creating new returns.
Deleted reasons have been replaced with better alternatives and are no longer recommended.
However, they remain valid options and may still appear on existing returns.

## Arguments

- **`ids`**: `[ID!]` — A list of return reason definition IDs to filter by.
- **`handles`**: `[String!]` — A list of return reason definition handles to filter by.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `ReturnReasonDefinitionSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | deleted | boolean | Filter by whether the return reason has been removed from taxonomy. | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | name | string | Filter by name. | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

## Return Type Fields

- `edges`: `[ReturnReasonDefinitionEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[ReturnReasonDefinition!]!` — A list of nodes that are contained in ReturnReasonDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [ReturnReasonDefinition](../types/objects/ReturnReasonDefinition.md)
- [ReturnReasonDefinitionSortKeys](../types/enums/ReturnReasonDefinitionSortKeys.md)

## Example Query

```graphql
query ReturnReasonDefinitions($ids: [ID!], $handles: [String!], $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: ReturnReasonDefinitionSortKeys, $query: String) {
  returnReasonDefinitions(ids: $ids, handles: $handles, first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query) {
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
