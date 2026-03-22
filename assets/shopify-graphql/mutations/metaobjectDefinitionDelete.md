# Mutation: `metaobjectDefinitionDelete`

**Returns:** `MetaobjectDefinitionDeletePayload`

Deletes the specified metaobject definition.
Also deletes all related metafield definitions, metaobjects, and metafields asynchronously.

## Arguments

- **`id`**: `ID!` — The ID of the metaobjects definition to delete.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted metaobjects definition.
- `userErrors`: `[MetaobjectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetaobjectDefinitionDeletePayload](../types/objects/MetaobjectDefinitionDeletePayload.md)
- [MetaobjectUserError](../types/objects/MetaobjectUserError.md)

## Example Mutation

```graphql
mutation MetaobjectDefinitionDelete($id: ID!) {
  metaobjectDefinitionDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
