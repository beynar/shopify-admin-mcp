# Mutation: `marketDelete`

**Returns:** `MarketDeletePayload`

Deletes a market definition.

## Arguments

- **`id`**: `ID!` — The ID of the market to delete.

## Payload Fields

- `deletedId`: `ID` — The ID of the deleted market.
- `userErrors`: `[MarketUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketDeletePayload](../types/objects/MarketDeletePayload.md)
- [MarketUserError](../types/objects/MarketUserError.md)

## Example Mutation

```graphql
mutation MarketDelete($id: ID!) {
  marketDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
