# Mutation: `marketWebPresenceUpdate`

**Returns:** `MarketWebPresenceUpdatePayload`

Updates a market web presence.

## Arguments

- **`webPresenceId`**: `ID!` — The ID of the web presence to update.
- **`webPresence`**: `MarketWebPresenceUpdateInput!` — The web_presence fields used to update the market's web presence.

## Payload Fields

- `market`: `Market` — The market object.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Market](../types/objects/Market.md)
- [MarketUserError](../types/objects/MarketUserError.md)
- [MarketWebPresenceUpdateInput](../types/inputs/MarketWebPresenceUpdateInput.md)
- [MarketWebPresenceUpdatePayload](../types/objects/MarketWebPresenceUpdatePayload.md)

## Example Mutation

```graphql
mutation MarketWebPresenceUpdate($webPresenceId: ID!, $webPresence: MarketWebPresenceUpdateInput!) {
  marketWebPresenceUpdate(webPresenceId: $webPresenceId, webPresence: $webPresence) {
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
