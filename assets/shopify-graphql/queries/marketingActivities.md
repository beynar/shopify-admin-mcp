# Query: `marketingActivities`

**Returns:** `MarketingActivityConnection!`

A list of marketing activities associated with the marketing app.

## Arguments

- **`marketingActivityIds`**: `[ID!]` = `[]` — The list of marketing activity IDs to filter by.
- **`remoteIds`**: `[String!]` = `[]` — The list of remote IDs associated with marketing activities to filter by.
- **`utm`**: `UTMInput` — The UTM parameters associated with marketing activities to filter by.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `MarketingActivitySortKeys` = `CREATED_AT` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | app_id | id | | app_name | string | A comma-separated list of app names. | | created_at | time | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | marketing_campaign_id | id | | scheduled_to_end_at | time | | scheduled_to_start_at | time | | tactic | string | | title | string | | updated_at | time | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
- **`savedSearchId`**: `ID` — The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

## Return Type Fields

- `edges`: `[MarketingActivityEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[MarketingActivity!]!` — A list of nodes that are contained in MarketingActivityEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [MarketingActivity](../types/objects/MarketingActivity.md)
- [MarketingActivitySortKeys](../types/enums/MarketingActivitySortKeys.md)
- [PageInfo](../types/objects/PageInfo.md)
- [UTMInput](../types/inputs/UTMInput.md)

## Example Query

```graphql
query MarketingActivities($marketingActivityIds: [ID!], $remoteIds: [String!], $utm: UTMInput, $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: MarketingActivitySortKeys, $query: String, $savedSearchId: ID) {
  marketingActivities(marketingActivityIds: $marketingActivityIds, remoteIds: $remoteIds, utm: $utm, first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query, savedSearchId: $savedSearchId) {
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
