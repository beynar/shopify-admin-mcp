# Query: `validations`

**Returns:** `ValidationConnection!`

Validations available on the shop.

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `ValidationSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

## Return Type Fields

- `edges`: `[ValidationEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[Validation!]!` — A list of nodes that are contained in ValidationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [Validation](../types/objects/Validation.md)
- [ValidationSortKeys](../types/enums/ValidationSortKeys.md)

## Example Query

```graphql
query Validations($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: ValidationSortKeys) {
  validations(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey) {
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
