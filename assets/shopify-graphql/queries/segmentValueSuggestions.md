# Query: `segmentValueSuggestions`

**Returns:** `SegmentValueConnection!`

The list of suggested values corresponding to a particular filter for a segment. A segment is a group of members, such as customers, that meet specific criteria.

## Arguments

- **`search`**: `String!` — Returns the elements of a list by keyword or term.
- **`filterQueryName`**: `String` — Returns the elements of a list by filter handle.
- **`functionParameterQueryName`**: `String` — Returns the elements of a list by filter parameter name.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

## Return Type Fields

- `edges`: `[SegmentValueEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[SegmentValue!]!` — A list of nodes that are contained in SegmentValueEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [SegmentValue](../types/objects/SegmentValue.md)

## Example Query

```graphql
query SegmentValueSuggestions($search: String!, $filterQueryName: String, $functionParameterQueryName: String, $first: Int, $after: String, $last: Int, $before: String) {
  segmentValueSuggestions(search: $search, filterQueryName: $filterQueryName, functionParameterQueryName: $functionParameterQueryName, first: $first, after: $after, last: $last, before: $before) {
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
