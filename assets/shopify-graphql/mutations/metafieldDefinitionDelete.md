# Mutation: `metafieldDefinitionDelete`

**Returns:** `MetafieldDefinitionDeletePayload`

Deletes a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/current/objects/MetafieldDefinition). You can identify the definition by providing either its owner type, namespace, and key, or its global ID.

When you set [`deleteAllAssociatedMetafields`](https://shopify.dev/docs/api/admin-graphql/current/mutations/metafieldDefinitionDelete#arguments-deleteAllAssociatedMetafields) to `true`, the mutation asynchronously deletes all [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects that use this definition. This option must be `true` when deleting definitions under the `$app` namespace.

Learn more about [deleting metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

## Arguments

- **`id`**: `ID` — The id of the metafield definition to delete. Using `identifier` is preferred.
- **`identifier`**: `MetafieldDefinitionIdentifierInput` — The identifier of the metafield definition to delete.
- **`deleteAllAssociatedMetafields`**: `Boolean` = `false` — Whether to delete all associated metafields.

## Payload Fields

- `deletedDefinition`: `MetafieldDefinitionIdentifier` — The metafield definition that was deleted.
- `deletedDefinitionId`: `ID` — The ID of the deleted metafield definition.
- `userErrors`: `[MetafieldDefinitionDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetafieldDefinitionDeletePayload](../types/objects/MetafieldDefinitionDeletePayload.md)
- [MetafieldDefinitionDeleteUserError](../types/objects/MetafieldDefinitionDeleteUserError.md)
- [MetafieldDefinitionIdentifier](../types/objects/MetafieldDefinitionIdentifier.md)
- [MetafieldDefinitionIdentifierInput](../types/inputs/MetafieldDefinitionIdentifierInput.md)

## Example Mutation

```graphql
mutation MetafieldDefinitionDelete($id: ID, $identifier: MetafieldDefinitionIdentifierInput, $deleteAllAssociatedMetafields: Boolean) {
  metafieldDefinitionDelete(id: $id, identifier: $identifier, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) {
    deletedDefinition {
      id
    }
    deletedDefinitionId
    userErrors {
      field
      message
    }
  }
}
```
