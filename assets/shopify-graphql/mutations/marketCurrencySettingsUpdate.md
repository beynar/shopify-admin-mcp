# Mutation: `marketCurrencySettingsUpdate`

**Returns:** `MarketCurrencySettingsUpdatePayload`

Updates currency settings of a market.

## Arguments

- **`marketId`**: `ID!` — The ID of the market definition to target.
- **`input`**: `MarketCurrencySettingsUpdateInput!` — Properties to update for the market currency settings.

## Payload Fields

- `market`: `Market` — The market object.
- `userErrors`: `[MarketCurrencySettingsUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Market](../types/objects/Market.md)
- [MarketCurrencySettingsUpdateInput](../types/inputs/MarketCurrencySettingsUpdateInput.md)
- [MarketCurrencySettingsUpdatePayload](../types/objects/MarketCurrencySettingsUpdatePayload.md)
- [MarketCurrencySettingsUserError](../types/objects/MarketCurrencySettingsUserError.md)

## Example Mutation

```graphql
mutation MarketCurrencySettingsUpdate($marketId: ID!, $input: MarketCurrencySettingsUpdateInput!) {
  marketCurrencySettingsUpdate(marketId: $marketId, input: $input) {
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
