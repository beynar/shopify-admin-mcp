# Query: `segmentFilterSuggestions`

**Returns:** `SegmentFilterConnection!`

A list of filter suggestions associated with a segment. A segment is a group of members (commonly customers) that meet specific criteria.

## Arguments

- **`search`**: `String!` — Returns the elements of a list by keyword or term.
- **`first`**: `Int!` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

## Return Type Fields

- `edges`: `[SegmentFilterEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[SegmentFilter!]!` — A list of nodes that are contained in SegmentFilterEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [SegmentFilter](../types/interfaces/SegmentFilter.md)

## Example Query

```graphql
query SegmentFilterSuggestions($search: String!, $first: Int!, $after: String) {
  segmentFilterSuggestions(search: $search, first: $first, after: $after) {
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
