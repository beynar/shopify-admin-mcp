# Query: `codeDiscountNodes`

**Returns:** `DiscountCodeNodeConnection!`

Returns a list of [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes).

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `CodeDiscountSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | combines_with | string | Filter by the [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types). | - `order_discounts`<br/> - `product_discounts`<br/> - `shipping_discounts` | | - `combines_with:product_discounts` | | created_at | time | Filter by the date and time when the discount was created. | | | - `created_at:>'2020-10-21T23:39:20Z'`<br/> - `created_at:<now`<br/> - `created_at:<='2024'` | | discount_type | string | Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types). | - `app`<br/> - `bogo`<br/> - `fixed_amount`<br/> - `free_shipping`<br/> - `percentage` | | - `discount_type:fixed_amount` | | ends_at | time | Filter by the date and time when the discount expires and is no longer available for customer use. | | | - `ends_at:>'2020-10-21T23:39:20Z'`<br/> - `ends_at:<now`<br/> - `ends_at:<='2024'` | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | starts_at | time | Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use. | | | - `starts_at:>'2020-10-21T23:39:20Z'`<br/> - `starts_at:<now`<br/> - `starts_at:<='2024'` | | status | string | Filter by the status of the discount. | - `active`<br/> - `expired`<br/> - `scheduled` | | - `status:scheduled` | | times_used | integer | Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. <br><br> This value is updated asynchronously. As a result, it might be different than the actual usage count. | | | - `times_used:0`<br/> - `times_used:>150`<br/> - `times_used:>=200` | | title | string | Filter by the discount name that displays to customers. | | | - `title:Black Friday Sale` | | type | string | Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types). | - `all`<br/> - `all_with_app`<br/> - `app`<br/> - `bxgy`<br/> - `fixed_amount`<br/> - `free_shipping`<br/> - `percentage` | | - `type:percentage` | | updated_at | time | Filter by the date and time when the discount was last updated. | | | - `updated_at:>'2020-10-21T23:39:20Z'`<br/> - `updated_at:<now`<br/> - `updated_at:<='2024'` | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
- **`savedSearchId`**: `ID` — The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

## Return Type Fields

- `edges`: `[DiscountCodeNodeEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[DiscountCodeNode!]!` — A list of nodes that are contained in DiscountCodeNodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [CodeDiscountSortKeys](../types/enums/CodeDiscountSortKeys.md)
- [DiscountCodeNode](../types/objects/DiscountCodeNode.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query CodeDiscountNodes($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: CodeDiscountSortKeys, $query: String, $savedSearchId: ID) {
  codeDiscountNodes(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query, savedSearchId: $savedSearchId) {
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
