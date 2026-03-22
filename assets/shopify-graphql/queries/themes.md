# Query: `themes`

**Returns:** `OnlineStoreThemeConnection`

Returns a paginated list of [`OnlineStoreTheme`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme) objects for the online store. Themes control the appearance and layout of the storefront.

You can filter themes by [`role`](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-roles) to find specific theme types, such as `MAIN` for the published theme and `UNPUBLISHED` for draft themes.

## Arguments

- **`roles`**: `[ThemeRole!]` — The theme roles to filter by.
- **`names`**: `[String!]` — The theme names to filter by. Use '*' to match zero or more characters.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.

## Return Type Fields

- `edges`: `[OnlineStoreThemeEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[OnlineStoreTheme!]!` — A list of nodes that are contained in OnlineStoreThemeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [OnlineStoreTheme](../types/objects/OnlineStoreTheme.md)
- [PageInfo](../types/objects/PageInfo.md)
- [ThemeRole](../types/enums/ThemeRole.md)

## Example Query

```graphql
query Themes($roles: [ThemeRole!], $names: [String!], $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean) {
  themes(roles: $roles, names: $names, first: $first, after: $after, last: $last, before: $before, reverse: $reverse) {
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
