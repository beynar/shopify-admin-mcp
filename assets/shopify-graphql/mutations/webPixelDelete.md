# Mutation: `webPixelDelete`

**Returns:** `WebPixelDeletePayload`

Deletes the web pixel shop settings.

## Arguments

- **`id`**: `ID!` — The ID of the web pixel to delete.

## Payload Fields

- `deletedWebPixelId`: `ID` — The ID of the web pixel settings that was deleted.
- `userErrors`: `[ErrorsWebPixelUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ErrorsWebPixelUserError](../types/objects/ErrorsWebPixelUserError.md)
- [WebPixelDeletePayload](../types/objects/WebPixelDeletePayload.md)

## Example Mutation

```graphql
mutation WebPixelDelete($id: ID!) {
  webPixelDelete(id: $id) {
    deletedWebPixelId
    userErrors {
      field
      message
    }
  }
}
```
