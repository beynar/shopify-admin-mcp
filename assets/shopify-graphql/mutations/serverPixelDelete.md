# Mutation: `serverPixelDelete`

**Returns:** `ServerPixelDeletePayload`

Deletes the Server Pixel associated with the current app & shop.

## Payload Fields

- `deletedServerPixelId`: `ID` — The ID of the server pixel that was deleted, if one was deleted.
- `userErrors`: `[ErrorsServerPixelUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ErrorsServerPixelUserError](../types/objects/ErrorsServerPixelUserError.md)
- [ServerPixelDeletePayload](../types/objects/ServerPixelDeletePayload.md)

## Example Mutation

```graphql
mutation {
  serverPixelDelete {
    deletedServerPixelId
    userErrors {
      field
      message
    }
  }
}
```
