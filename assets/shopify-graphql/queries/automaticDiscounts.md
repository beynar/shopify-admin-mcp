# Query: `automaticDiscounts`

**Returns:** `DiscountAutomaticConnection!`

Returns a list of automatic discounts that are applied in the cart and at checkout without requiring a discount code.

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `AutomaticDiscountSortKeys` = `CREATED_AT` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | status | string | Filter by the discount status. | - `active`<br/> - `expired`<br/> - `scheduled` | | - `status:scheduled` | | type | string | Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types). | - `all`<br/> - `all_with_app`<br/> - `app`<br/> - `bxgy`<br/> - `fixed_amount`<br/> - `percentage` | | - `type:bxgy` | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
- **`savedSearchId`**: `ID` — The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

## Return Type Fields

- `edges`: `[DiscountAutomaticEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[DiscountAutomatic!]!` — A list of nodes that are contained in DiscountAutomaticEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [AutomaticDiscountSortKeys](../types/enums/AutomaticDiscountSortKeys.md)
- [DiscountAutomatic](../types/unions/DiscountAutomatic.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query AutomaticDiscounts($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: AutomaticDiscountSortKeys, $query: String, $savedSearchId: ID) {
  automaticDiscounts(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query, savedSearchId: $savedSearchId) {
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
