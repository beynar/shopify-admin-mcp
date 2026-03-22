# Query: `shopifyFunctions`

**Returns:** `ShopifyFunctionConnection!`

Returns Shopify Functions owned by the querying API client installed on the shop. [Functions](https://shopify.dev/docs/apps/build/functions) enable you to customize
Shopify's backend logic at specific points in the commerce loop, such as discounts,
checkout validation, and fulfillment.

You can filter the results by API type to find specific function implementations,
or by whether they provide a merchant configuration interface in the Shopify Admin.

The response includes details about each function's configuration, including its
title, description, API version, and the input query used to provide data to the function logic.

Learn more about [building functions](https://shopify.dev/docs/api/functions).

## Arguments

- **`apiType`**: `String` — Filter the functions by the API type.
- **`useCreationUi`**: `Boolean` — Filter the functions by whether or not the function uses the creation UI in the Admin.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.

## Return Type Fields

- `edges`: `[ShopifyFunctionEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[ShopifyFunction!]!` — A list of nodes that are contained in ShopifyFunctionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [ShopifyFunction](../types/objects/ShopifyFunction.md)

## Example Query

```graphql
query ShopifyFunctions($apiType: String, $useCreationUi: Boolean, $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean) {
  shopifyFunctions(apiType: $apiType, useCreationUi: $useCreationUi, first: $first, after: $after, last: $last, before: $before, reverse: $reverse) {
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
