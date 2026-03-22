# Query: `translatableResources`

**Returns:** `TranslatableResourceConnection!`

Returns a paginated list of [`TranslatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource) objects for a specific resource type. Each resource provides translatable content and digest values needed for the [`translationsRegister`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister) mutation.

Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

        Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

## Arguments

- **`resourceType`**: `TranslatableResourceType!` — Return only resources of a type.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.

## Return Type Fields

- `edges`: `[TranslatableResourceEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[TranslatableResource!]!` — A list of nodes that are contained in TranslatableResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [TranslatableResource](../types/objects/TranslatableResource.md)
- [TranslatableResourceType](../types/enums/TranslatableResourceType.md)

## Example Query

```graphql
query TranslatableResources($resourceType: TranslatableResourceType!, $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean) {
  translatableResources(resourceType: $resourceType, first: $first, after: $after, last: $last, before: $before, reverse: $reverse) {
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
