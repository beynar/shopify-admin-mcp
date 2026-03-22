# Mutation: `marketRegionsDelete`

**Returns:** `MarketRegionsDeletePayload`

Deletes a list of market regions.

## Arguments

- **`ids`**: `[ID!]!` — A list of IDs of the market regions to delete.

## Payload Fields

- `deletedIds`: `[ID!]` — The ID of the deleted market region.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketRegionsDeletePayload](../types/objects/MarketRegionsDeletePayload.md)
- [MarketUserError](../types/objects/MarketUserError.md)

## Example Mutation

```graphql
mutation MarketRegionsDelete($ids: [ID!]!) {
  marketRegionsDelete(ids: $ids) {
    deletedIds
    userErrors {
      field
      message
    }
  }
}
```
