# Mutation: `marketRegionsCreate`

**Returns:** `MarketRegionsCreatePayload`

Creates regions that belong to an existing market.

## Arguments

- **`marketId`**: `ID!` — The ID of the market to add the regions to.
- **`regions`**: `[MarketRegionCreateInput!]!` — The regions to be created.

## Payload Fields

- `market`: `Market` — The market object.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Market](../types/objects/Market.md)
- [MarketRegionCreateInput](../types/inputs/MarketRegionCreateInput.md)
- [MarketRegionsCreatePayload](../types/objects/MarketRegionsCreatePayload.md)
- [MarketUserError](../types/objects/MarketUserError.md)

## Example Mutation

```graphql
mutation MarketRegionsCreate($marketId: ID!, $regions: [MarketRegionCreateInput!]!) {
  marketRegionsCreate(marketId: $marketId, regions: $regions) {
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
