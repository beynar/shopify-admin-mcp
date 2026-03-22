# Query: `customerSegmentMembers`

**Returns:** `CustomerSegmentMemberConnection!`

A paginated list of customers that belong to an individual [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment). Segments group customers based on criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference). Access segment members with their profile information and purchase summary data. The connection includes statistics for analyzing segment attributes (such as average and sum calculations) and a total count of all members.
The maximum page size is 1000.

## Arguments

- **`segmentId`**: `ID` — The ID of the segment.
- **`query`**: `String` — The query that's used to filter the members. The query is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).
- **`queryId`**: `ID` — The ID of the segment members query.
- **`timezone`**: `String` — The timezone that's used to interpret relative date arguments. The timezone defaults to UTC if the timezone isn't provided.
- **`reverse`**: `Boolean` = `false` — Reverse the order of the list. The sorting behaviour defaults to ascending order.
- **`sortKey`**: `String` — Sort the list by a given key. Valid values: • `created_at` - Sort by customer creation date • `first_order_date` - Sort by the date of the customer's first order • `last_abandoned_order_date` - Sort by the date of the customer's last abandoned checkout • `last_order_date` - Sort by the date of the customer's most recent order • `number_of_orders` - Sort by the total number of orders placed by the customer • `amount_spent` - Sort by the total amount the customer has spent across all orders  Use with the `reverse` parameter to control sort direction (ascending by default, descending when reverse=true).
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

## Return Type Fields

- `edges`: `[CustomerSegmentMemberEdge!]!` — A list of edges.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.
- `statistics`: `SegmentStatistics!` — The statistics for a given segment.
- `totalCount`: `Int!` — The total number of members in a given segment.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [SegmentStatistics](../types/objects/SegmentStatistics.md)

## Example Query

```graphql
query CustomerSegmentMembers($segmentId: ID, $query: String, $queryId: ID, $timezone: String, $reverse: Boolean, $sortKey: String, $first: Int, $after: String, $last: Int, $before: String) {
  customerSegmentMembers(segmentId: $segmentId, query: $query, queryId: $queryId, timezone: $timezone, reverse: $reverse, sortKey: $sortKey, first: $first, after: $after, last: $last, before: $before) {
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```
