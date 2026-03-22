# Query: `shopPayPaymentRequestReceipts`

**Returns:** `ShopPayPaymentRequestReceiptConnection`

Returns a list of Shop Pay payment request receipts.

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `ShopPayPaymentRequestReceiptsSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | created_at | time | Filter by the creation date of the payment request receipt. | | | - `created_at:2021-01-01`<br/> - `created_at:2021-01-01..2021-01-02`<br/> - `created_at:<now`<br/> - `created_at:<2024-01-01` | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | source_identifier | string | Filter by the source identifier of the payment request receipt. | | | - `source_identifier:1282823` | | state | string | Filter by the state of the payment request receipt. Options include: - COMPLETED - FAILED - PENDING - PROCESSING | | | - `state:COMPLETED` | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

## Return Type Fields

- `edges`: `[ShopPayPaymentRequestReceiptEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[ShopPayPaymentRequestReceipt!]!` — A list of nodes that are contained in ShopPayPaymentRequestReceiptEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [ShopPayPaymentRequestReceipt](../types/objects/ShopPayPaymentRequestReceipt.md)
- [ShopPayPaymentRequestReceiptsSortKeys](../types/enums/ShopPayPaymentRequestReceiptsSortKeys.md)

## Example Query

```graphql
query ShopPayPaymentRequestReceipts($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: ShopPayPaymentRequestReceiptsSortKeys, $query: String) {
  shopPayPaymentRequestReceipts(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query) {
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
