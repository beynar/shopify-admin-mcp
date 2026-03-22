# Query: `manualHoldsFulfillmentOrders`

**Returns:** `FulfillmentOrderConnection!`

Returns a list of fulfillment orders that are on hold.

## Arguments

- **`query`**: `String` — The query conditions used to filter fulfillment orders. Only fulfillment orders corresponding to orders matching the query will be counted. Supported filter parameters:  - `order_financial_status`  - `order_risk_level`  - `shipping_address_coordinates_validated`  See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.

## Return Type Fields

- `edges`: `[FulfillmentOrderEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[FulfillmentOrder!]!` — A list of nodes that are contained in FulfillmentOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [FulfillmentOrder](../types/objects/FulfillmentOrder.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query ManualHoldsFulfillmentOrders($query: String, $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean) {
  manualHoldsFulfillmentOrders(query: $query, first: $first, after: $after, last: $last, before: $before, reverse: $reverse) {
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
