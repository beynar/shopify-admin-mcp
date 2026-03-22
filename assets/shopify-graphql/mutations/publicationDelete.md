# Mutation: `publicationDelete`

**Returns:** `PublicationDeletePayload`

Deletes a publication.

## Arguments

- **`id`**: `ID!` — The ID of the publication to delete.

## Payload Fields

- `deletedId`: `ID` — The ID of the publication that was deleted.
- `userErrors`: `[PublicationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PublicationDeletePayload](../types/objects/PublicationDeletePayload.md)
- [PublicationUserError](../types/objects/PublicationUserError.md)

## Example Mutation

```graphql
mutation PublicationDelete($id: ID!) {
  publicationDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
