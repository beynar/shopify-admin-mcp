# Query: `subscriptionBillingCycles`

**Returns:** `SubscriptionBillingCycleConnection!`

Returns subscription billing cycles for a contract ID.

## Arguments

- **`contractId`**: `ID!` — The ID of the subscription contract to retrieve billing cycles for.
- **`billingCyclesDateRangeSelector`**: `SubscriptionBillingCyclesDateRangeSelector` — Select subscription billing cycles within a date range.
- **`billingCyclesIndexRangeSelector`**: `SubscriptionBillingCyclesIndexRangeSelector` — Select subscription billing cycles within an index range.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `SubscriptionBillingCyclesSortKeys` = `CYCLE_INDEX` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

## Return Type Fields

- `edges`: `[SubscriptionBillingCycleEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[SubscriptionBillingCycle!]!` — A list of nodes that are contained in SubscriptionBillingCycleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [SubscriptionBillingCycle](../types/objects/SubscriptionBillingCycle.md)
- [SubscriptionBillingCyclesDateRangeSelector](../types/inputs/SubscriptionBillingCyclesDateRangeSelector.md)
- [SubscriptionBillingCyclesIndexRangeSelector](../types/inputs/SubscriptionBillingCyclesIndexRangeSelector.md)
- [SubscriptionBillingCyclesSortKeys](../types/enums/SubscriptionBillingCyclesSortKeys.md)

## Example Query

```graphql
query SubscriptionBillingCycles($contractId: ID!, $billingCyclesDateRangeSelector: SubscriptionBillingCyclesDateRangeSelector, $billingCyclesIndexRangeSelector: SubscriptionBillingCyclesIndexRangeSelector, $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: SubscriptionBillingCyclesSortKeys) {
  subscriptionBillingCycles(contractId: $contractId, billingCyclesDateRangeSelector: $billingCyclesDateRangeSelector, billingCyclesIndexRangeSelector: $billingCyclesIndexRangeSelector, first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey) {
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
