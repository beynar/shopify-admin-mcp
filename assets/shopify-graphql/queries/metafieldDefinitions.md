# Query: `metafieldDefinitions`

**Returns:** `MetafieldDefinitionConnection!`

Returns a list of metafield definitions.

## Arguments

- **`key`**: `String` — Filter metafield definition by key.
- **`namespace`**: `String` — Filter metafield definition by namespace.
- **`ownerType`**: `MetafieldOwnerType!` — Filter the metafield definition by the specific owner type.
- **`pinnedStatus`**: `MetafieldDefinitionPinnedStatus` = `ANY` — Filter the metafield definition by the pinned status.
- **`constraintSubtype`**: `MetafieldDefinitionConstraintSubtypeIdentifier` — Filter metafield definitions based on whether they apply to a given resource subtype.
- **`constraintStatus`**: `MetafieldDefinitionConstraintStatus` — Filter metafield definitions based on whether they are constrained.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `MetafieldDefinitionSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | created_at | time | Filter by the date and time when the metafield definition was created. | | | - `created_at:>2020-10-21T23:39:20Z`<br/> - `created_at:<now`<br/> - `created_at:<=2024` | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | key | string | Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field. | | | - `key:some-key` | | namespace | string | Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field. | | | - `namespace:some-namespace` | | owner_type | string | Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field. | | | - `owner_type:PRODUCT` | | type | string | Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field. | | | - `type:single_line_text_field` | | updated_at | time | Filter by the date and time when the metafield definition was last updated. | | | - `updated_at:>2020-10-21T23:39:20Z`<br/> - `updated_at:<now`<br/> - `updated_at:<=2024` | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

## Return Type Fields

- `edges`: `[MetafieldDefinitionEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[MetafieldDefinition!]!` — A list of nodes that are contained in MetafieldDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [MetafieldDefinition](../types/objects/MetafieldDefinition.md)
- [MetafieldDefinitionConstraintStatus](../types/enums/MetafieldDefinitionConstraintStatus.md)
- [MetafieldDefinitionConstraintSubtypeIdentifier](../types/inputs/MetafieldDefinitionConstraintSubtypeIdentifier.md)
- [MetafieldDefinitionPinnedStatus](../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../types/enums/MetafieldDefinitionSortKeys.md)
- [MetafieldOwnerType](../types/enums/MetafieldOwnerType.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query MetafieldDefinitions($key: String, $namespace: String, $ownerType: MetafieldOwnerType!, $pinnedStatus: MetafieldDefinitionPinnedStatus, $constraintSubtype: MetafieldDefinitionConstraintSubtypeIdentifier, $constraintStatus: MetafieldDefinitionConstraintStatus, $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: MetafieldDefinitionSortKeys, $query: String) {
  metafieldDefinitions(key: $key, namespace: $namespace, ownerType: $ownerType, pinnedStatus: $pinnedStatus, constraintSubtype: $constraintSubtype, constraintStatus: $constraintStatus, first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query) {
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
