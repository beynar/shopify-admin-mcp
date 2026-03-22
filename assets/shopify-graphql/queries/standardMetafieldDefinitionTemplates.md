# Query: `standardMetafieldDefinitionTemplates`

**Returns:** `StandardMetafieldDefinitionTemplateConnection!`

Retrieves preset metafield definition templates for common use cases. Each template provides a reserved namespace and key combination for specific purposes like product subtitles, care guides, or ISBN numbers. Use these templates to create standardized metafields across your store. Filter templates by constraint status or exclude those you've already activated.

See the [list of standard metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions) for available templates.

## Arguments

- **`constraintSubtype`**: `MetafieldDefinitionConstraintSubtypeIdentifier` — Filter standard metafield definitions based on whether they apply to a given resource subtype.
- **`constraintStatus`**: `MetafieldDefinitionConstraintStatus` — Filter standard metafield definitions based on whether they are constrained.
- **`excludeActivated`**: `Boolean` = `false` — Filter standard metafield definitions that have already been activated.
- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.

## Return Type Fields

- `edges`: `[StandardMetafieldDefinitionTemplateEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[StandardMetafieldDefinitionTemplate!]!` — A list of nodes that are contained in StandardMetafieldDefinitionTemplateEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [MetafieldDefinitionConstraintStatus](../types/enums/MetafieldDefinitionConstraintStatus.md)
- [MetafieldDefinitionConstraintSubtypeIdentifier](../types/inputs/MetafieldDefinitionConstraintSubtypeIdentifier.md)
- [PageInfo](../types/objects/PageInfo.md)
- [StandardMetafieldDefinitionTemplate](../types/objects/StandardMetafieldDefinitionTemplate.md)

## Example Query

```graphql
query StandardMetafieldDefinitionTemplates($constraintSubtype: MetafieldDefinitionConstraintSubtypeIdentifier, $constraintStatus: MetafieldDefinitionConstraintStatus, $excludeActivated: Boolean, $first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean) {
  standardMetafieldDefinitionTemplates(constraintSubtype: $constraintSubtype, constraintStatus: $constraintStatus, excludeActivated: $excludeActivated, first: $first, after: $after, last: $last, before: $before, reverse: $reverse) {
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
