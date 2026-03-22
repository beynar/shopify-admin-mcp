# Query: `cashTrackingSessions`

**Returns:** `CashTrackingSessionConnection!`

Returns a shop's cash tracking sessions for locations with a POS Pro subscription.

Tip: To query for cash tracking sessions in bulk, you can
[perform a bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/queries).

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `CashTrackingSessionsSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | closing_time | time | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | location_id | id | | opening_time | time | | point_of_sale_device_ids | string | | status | string | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

## Return Type Fields

- `edges`: `[CashTrackingSessionEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[CashTrackingSession!]!` — A list of nodes that are contained in CashTrackingSessionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [CashTrackingSession](../types/objects/CashTrackingSession.md)
- [CashTrackingSessionsSortKeys](../types/enums/CashTrackingSessionsSortKeys.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query CashTrackingSessions($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: CashTrackingSessionsSortKeys, $query: String) {
  cashTrackingSessions(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query) {
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
