# Mutation: `marketWebPresenceCreate`

**Returns:** `MarketWebPresenceCreatePayload`

Creates a web presence for a market.

## Arguments

- **`marketId`**: `ID!` — The ID of the market for which to create a web presence.
- **`webPresence`**: `MarketWebPresenceCreateInput!` — The details of the web presence to be created.

## Payload Fields

- `market`: `Market` — The market object.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Market](../types/objects/Market.md)
- [MarketUserError](../types/objects/MarketUserError.md)
- [MarketWebPresenceCreateInput](../types/inputs/MarketWebPresenceCreateInput.md)
- [MarketWebPresenceCreatePayload](../types/objects/MarketWebPresenceCreatePayload.md)

## Example Mutation

```graphql
mutation MarketWebPresenceCreate($marketId: ID!, $webPresence: MarketWebPresenceCreateInput!) {
  marketWebPresenceCreate(marketId: $marketId, webPresence: $webPresence) {
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
