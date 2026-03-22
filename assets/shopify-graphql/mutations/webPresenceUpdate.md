# Mutation: `webPresenceUpdate`

**Returns:** `WebPresenceUpdatePayload`

Updates a web presence.

## Arguments

- **`id`**: `ID!` — The ID of the web presence to update.
- **`input`**: `WebPresenceUpdateInput!` — The web presence properties to update.

## Payload Fields

- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.
- `webPresence`: `MarketWebPresence` — The web presence object.

## Related Types

- [MarketUserError](../types/objects/MarketUserError.md)
- [MarketWebPresence](../types/objects/MarketWebPresence.md)
- [WebPresenceUpdateInput](../types/inputs/WebPresenceUpdateInput.md)
- [WebPresenceUpdatePayload](../types/objects/WebPresenceUpdatePayload.md)

## Example Mutation

```graphql
mutation WebPresenceUpdate($id: ID!, $input: WebPresenceUpdateInput!) {
  webPresenceUpdate(id: $id, input: $input) {
    userErrors {
      field
      message
    }
    webPresence {
      id
    }
  }
}
```
