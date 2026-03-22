# Mutation: `webPresenceCreate`

**Returns:** `WebPresenceCreatePayload`

Creates a web presence.

## Arguments

- **`input`**: `WebPresenceCreateInput!` — The details of the web presence to be created.

## Payload Fields

- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.
- `webPresence`: `MarketWebPresence` — The created web presence object.

## Related Types

- [MarketUserError](../types/objects/MarketUserError.md)
- [MarketWebPresence](../types/objects/MarketWebPresence.md)
- [WebPresenceCreateInput](../types/inputs/WebPresenceCreateInput.md)
- [WebPresenceCreatePayload](../types/objects/WebPresenceCreatePayload.md)

## Example Mutation

```graphql
mutation WebPresenceCreate($input: WebPresenceCreateInput!) {
  webPresenceCreate(input: $input) {
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
