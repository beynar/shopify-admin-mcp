# Mutation: `marketWebPresenceDelete`

**Returns:** `MarketWebPresenceDeletePayload`

Deletes a market web presence.

## Arguments

- **`webPresenceId`**: `ID!` — The ID of the web presence to delete.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted web presence.
- `market`: `Market` — The market for which the web presence was deleted.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Market](../types/objects/Market.md)
- [MarketUserError](../types/objects/MarketUserError.md)
- [MarketWebPresenceDeletePayload](../types/objects/MarketWebPresenceDeletePayload.md)

## Example Mutation

```graphql
mutation MarketWebPresenceDelete($webPresenceId: ID!) {
  marketWebPresenceDelete(webPresenceId: $webPresenceId) {
    deletedId
    market {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
