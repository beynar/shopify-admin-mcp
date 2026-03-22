# Query: `sellingPlanGroups`

**Returns:** `SellingPlanGroupConnection!`

Retrieves a paginated list of [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects that belong to the app making the API call. Selling plan groups are selling methods like subscriptions, preorders, or other purchase options that merchants offer to customers.

Each group has one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that define specific billing and delivery schedules, pricing adjustments, and policies. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups#arguments-query) argument to search by name or filter results by other criteria.

Learn more about [building selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `SellingPlanGroupSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | app_id | id | | - `CURRENT`<br/> - `ALL`<br/> - `* (numeric app ID)` | `CURRENT` | | category | string | A comma-separated list of categories. | - `SUBSCRIPTION`<br/> - `PRE_ORDER`<br/> - `TRY_BEFORE_YOU_BUY`<br/> - `OTHER` | | created_at | time | | delivery_frequency | string | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | name | string | | percentage_off | float | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

## Return Type Fields

- `edges`: `[SellingPlanGroupEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[SellingPlanGroup!]!` — A list of nodes that are contained in SellingPlanGroupEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [SellingPlanGroup](../types/objects/SellingPlanGroup.md)
- [SellingPlanGroupSortKeys](../types/enums/SellingPlanGroupSortKeys.md)

## Example Query

```graphql
query SellingPlanGroups($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: SellingPlanGroupSortKeys, $query: String) {
  sellingPlanGroups(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query) {
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
