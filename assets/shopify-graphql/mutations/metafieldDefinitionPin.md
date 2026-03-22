# Mutation: `metafieldDefinitionPin`

**Returns:** `MetafieldDefinitionPinPayload`

You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions.
The order of your pinned metafield definitions determines the order in which your metafields are displayed
on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

## Arguments

- **`definitionId`**: `ID` — The id of the metafield definition to pin. Using `identifier` is preferred.
- **`identifier`**: `MetafieldDefinitionIdentifierInput` — The identifier of the metafield definition to pin.

## Payload Fields

- `pinnedDefinition`: `MetafieldDefinition` — The metafield definition that was pinned.
- `userErrors`: `[MetafieldDefinitionPinUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetafieldDefinition](../types/objects/MetafieldDefinition.md)
- [MetafieldDefinitionIdentifierInput](../types/inputs/MetafieldDefinitionIdentifierInput.md)
- [MetafieldDefinitionPinPayload](../types/objects/MetafieldDefinitionPinPayload.md)
- [MetafieldDefinitionPinUserError](../types/objects/MetafieldDefinitionPinUserError.md)

## Example Mutation

```graphql
mutation MetafieldDefinitionPin($definitionId: ID, $identifier: MetafieldDefinitionIdentifierInput) {
  metafieldDefinitionPin(definitionId: $definitionId, identifier: $identifier) {
    pinnedDefinition {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
