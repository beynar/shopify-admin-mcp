# Query: `subscriptionBillingCycleBulkResults`

**Returns:** `SubscriptionBillingCycleConnection!`

Retrieves the results of the asynchronous job for the subscription billing cycle bulk action based on the specified job ID.
This query can be used to obtain the billing cycles that match the criteria defined in the subscriptionBillingCycleBulkSearch and subscriptionBillingCycleBulkCharge mutations.

## Arguments

- **`jobId`**: `ID!` — The ID of the billing cycle bulk operation job.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.

## Return Type Fields

- `edges`: `[SubscriptionBillingCycleEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[SubscriptionBillingCycle!]!` — A list of nodes that are contained in SubscriptionBillingCycleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [SubscriptionBillingCycle](../types/objects/SubscriptionBillingCycle.md)

## Example Query

```graphql
query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean) {
  subscriptionBillingCycleBulkResults(jobId: $jobId, first: $first, after: $after, last: $last, before: $before, reverse: $reverse) {
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
