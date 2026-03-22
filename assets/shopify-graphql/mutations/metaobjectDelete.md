# Mutation: `metaobjectDelete`

**Returns:** `MetaobjectDeletePayload`

Deletes the specified metaobject and its associated metafields.

## Arguments

- **`id`**: `ID!` — The ID of the metaobject to delete.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted metaobject.
- `userErrors`: `[MetaobjectUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MetaobjectDeletePayload](../types/objects/MetaobjectDeletePayload.md)
- [MetaobjectUserError](../types/objects/MetaobjectUserError.md)

## Example Mutation

```graphql
mutation MetaobjectDelete($id: ID!) {
  metaobjectDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
