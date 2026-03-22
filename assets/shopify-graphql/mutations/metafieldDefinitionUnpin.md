# Mutation: `metafieldDefinitionUnpin`

**Returns:** `MetafieldDefinitionUnpinPayload`

You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions.
The order of your pinned metafield definitions determines the order in which your metafields are displayed
on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

## Arguments

- **`definitionId`**: `ID` — The ID of the metafield definition to unpin. Using `identifier` is preferred.
- **`identifier`**: `MetafieldDefinitionIdentifierInput` — The identifier of the metafield definition to unpin.

## Payload Fields

- `unpinnedDefinition`: `MetafieldDefinition` — The metafield definition that was unpinned.
- `userErrors`: `[MetafieldDefinitionUnpinUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetafieldDefinition](../types/objects/MetafieldDefinition.md)
- [MetafieldDefinitionIdentifierInput](../types/inputs/MetafieldDefinitionIdentifierInput.md)
- [MetafieldDefinitionUnpinPayload](../types/objects/MetafieldDefinitionUnpinPayload.md)
- [MetafieldDefinitionUnpinUserError](../types/objects/MetafieldDefinitionUnpinUserError.md)

## Example Mutation

```graphql
mutation MetafieldDefinitionUnpin($definitionId: ID, $identifier: MetafieldDefinitionIdentifierInput) {
  metafieldDefinitionUnpin(definitionId: $definitionId, identifier: $identifier) {
    unpinnedDefinition {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
