# Mutation: `marketRegionDelete`

**Returns:** `MarketRegionDeletePayload`

Deletes a market region.

## Arguments

- **`id`**: `ID!` — The ID of the market region to delete.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted market region.
- `market`: `Market` — The parent market object of the deleted region.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Market](../types/objects/Market.md)
- [MarketRegionDeletePayload](../types/objects/MarketRegionDeletePayload.md)
- [MarketUserError](../types/objects/MarketUserError.md)

## Example Mutation

```graphql
mutation MarketRegionDelete($id: ID!) {
  marketRegionDelete(id: $id) {
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
