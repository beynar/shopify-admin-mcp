# Query: `abandonedCheckouts`

**Returns:** `AbandonedCheckoutConnection!`

Returns a list of abandoned checkouts. A checkout is considered abandoned when a customer adds contact information but doesn't complete their purchase. Includes both abandoned and recovered checkouts.

Each checkout provides [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) details, [`AbandonedCheckoutLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem) objects, pricing information, and a recovery URL for re-engaging customers who didn't complete their purchase.

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `AbandonedCheckoutSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | created_at | time | The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was created. | | email_state | string | Filter by `abandoned_email_state` value. Possible values: `sent`, `not_sent`, `scheduled` and `suppressed`. | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | recovery_state | string | Possible values: `recovered` and `not_recovered`. | | status | string | Possible values: `open` and `closed`. | | updated_at | time | The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was last updated. | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
- **`savedSearchId`**: `ID` — The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

## Return Type Fields

- `edges`: `[AbandonedCheckoutEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[AbandonedCheckout!]!` — A list of nodes that are contained in AbandonedCheckoutEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [AbandonedCheckout](../types/objects/AbandonedCheckout.md)
- [AbandonedCheckoutSortKeys](../types/enums/AbandonedCheckoutSortKeys.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query AbandonedCheckouts($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: AbandonedCheckoutSortKeys, $query: String, $savedSearchId: ID) {
  abandonedCheckouts(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query, savedSearchId: $savedSearchId) {
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
