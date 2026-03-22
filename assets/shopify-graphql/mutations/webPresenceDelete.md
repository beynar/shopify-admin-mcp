# Mutation: `webPresenceDelete`

**Returns:** `WebPresenceDeletePayload`

Deletes a web presence.

## Arguments

- **`id`**: `ID!` — The ID of the web presence to delete.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted web presence.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketUserError](../types/objects/MarketUserError.md)
- [WebPresenceDeletePayload](../types/objects/WebPresenceDeletePayload.md)

## Example Mutation

```graphql
mutation WebPresenceDelete($id: ID!) {
  webPresenceDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
