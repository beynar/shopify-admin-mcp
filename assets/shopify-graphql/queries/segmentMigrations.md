# Query: `segmentMigrations`

**Returns:** `SegmentMigrationConnection!`

A list of a shop's segment migrations.

## Arguments

- **`savedSearchId`**: `ID` — Search a segment migration by its saved search ID.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

## Return Type Fields

- `edges`: `[SegmentMigrationEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[SegmentMigration!]!` — A list of nodes that are contained in SegmentMigrationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [SegmentMigration](../types/objects/SegmentMigration.md)

## Example Query

```graphql
query SegmentMigrations($savedSearchId: ID, $first: Int, $after: String, $last: Int, $before: String) {
  segmentMigrations(savedSearchId: $savedSearchId, first: $first, after: $after, last: $last, before: $before) {
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
