# Mutation: `marketUpdate`

**Returns:** `MarketUpdatePayload`

Updates the properties of a market.

## Arguments

- **`id`**: `ID!` — The ID of the market to update.
- **`input`**: `MarketUpdateInput!` — The properties to update.

## Payload Fields

- `market`: `Market` — The market object.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Market](../types/objects/Market.md)
- [MarketUpdateInput](../types/inputs/MarketUpdateInput.md)
- [MarketUpdatePayload](../types/objects/MarketUpdatePayload.md)
- [MarketUserError](../types/objects/MarketUserError.md)

## Example Mutation

```graphql
mutation MarketUpdate($id: ID!, $input: MarketUpdateInput!) {
  marketUpdate(id: $id, input: $input) {
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
