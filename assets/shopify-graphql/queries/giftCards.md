# Query: `giftCards`

**Returns:** `GiftCardConnection!`

Returns a paginated list of [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) objects issued for the shop.

You can filter gift cards by attributes such as status, last characters of the code, balance status, and other values using the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards#arguments-query) parameter. You can also apply [`SavedSearch`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch) objects to filter results.

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `GiftCardSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document, including gift card codes. | | | - `query=a5bh6h64b329j4k7`<br/> - `query=Bob Norman` | | balance_status | string | | - `full`<br/> - `partial`<br/> - `empty`<br/> - `full_or_partial` | | - `balance_status:full` | | created_at | time | | | | - `created_at:>=2020-01-01T12:00:00Z` | | expires_on | date | | | | - `expires_on:>=2020-01-01` | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | initial_value | string | | | | - `initial_value:>=100` | | source | string | | - `manual`<br/> - `purchased`<br/> - `api_client` | | - `source:manual` | | status | string | | - `disabled`<br/> - `enabled`<br/> - `expired`<br/> - `expiring` | | - `status:disabled OR status:expired` | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
- **`savedSearchId`**: `ID` — The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

## Return Type Fields

- `edges`: `[GiftCardEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[GiftCard!]!` — A list of nodes that are contained in GiftCardEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [GiftCard](../types/objects/GiftCard.md)
- [GiftCardSortKeys](../types/enums/GiftCardSortKeys.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query GiftCards($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: GiftCardSortKeys, $query: String, $savedSearchId: ID) {
  giftCards(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query, savedSearchId: $savedSearchId) {
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
