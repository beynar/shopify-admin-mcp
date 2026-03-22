# Query: `appInstallations`

**Returns:** `AppInstallationConnection!`

A paginated list of [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) objects across multiple stores where your app is installed. Use this query to monitor installation status, track billing and subscriptions through [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects, and review granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects.

Filter by [`AppInstallationCategory`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationCategory) to find specific types of installations (such as POS or channel apps) and by [`AppInstallationPrivacy`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationPrivacy) to scope to public or private installations.

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `AppInstallationSortKeys` = `INSTALLED_AT` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`category`**: `AppInstallationCategory` — The category of app installations to fetch.
- **`privacy`**: `AppInstallationPrivacy` = `PUBLIC` — The privacy level of app installations to fetch.

## Return Type Fields

- `edges`: `[AppInstallationEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[AppInstallation!]!` — A list of nodes that are contained in AppInstallationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [AppInstallation](../types/objects/AppInstallation.md)
- [AppInstallationCategory](../types/enums/AppInstallationCategory.md)
- [AppInstallationPrivacy](../types/enums/AppInstallationPrivacy.md)
- [AppInstallationSortKeys](../types/enums/AppInstallationSortKeys.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query AppInstallations($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: AppInstallationSortKeys, $category: AppInstallationCategory, $privacy: AppInstallationPrivacy) {
  appInstallations(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, category: $category, privacy: $privacy) {
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
