# Query: `deliveryCustomizations`

**Returns:** `DeliveryCustomizationConnection!`

The delivery customizations.

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | enabled | boolean | | function_id | string | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

## Return Type Fields

- `edges`: `[DeliveryCustomizationEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[DeliveryCustomization!]!` — A list of nodes that are contained in DeliveryCustomizationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [DeliveryCustomization](../types/objects/DeliveryCustomization.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query DeliveryCustomizations($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $query: String) {
  deliveryCustomizations(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, query: $query) {
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
