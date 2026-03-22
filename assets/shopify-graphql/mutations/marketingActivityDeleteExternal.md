# Mutation: `marketingActivityDeleteExternal`

**Returns:** `MarketingActivityDeleteExternalPayload`

Deletes an external marketing activity.

## Arguments

- **`marketingActivityId`**: `ID` — The ID of the marketing activity. A marketing activity ID or remote ID must be provided.
- **`remoteId`**: `String` — A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. A marketing activity ID or remote ID must be provided.

## Payload Fields

- `deletedMarketingActivityId`: `ID` — The ID of the marketing activity that was deleted, if one was deleted.
- `userErrors`: `[MarketingActivityUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketingActivityDeleteExternalPayload](../types/objects/MarketingActivityDeleteExternalPayload.md)
- [MarketingActivityUserError](../types/objects/MarketingActivityUserError.md)

## Example Mutation

```graphql
mutation MarketingActivityDeleteExternal($marketingActivityId: ID, $remoteId: String) {
  marketingActivityDeleteExternal(marketingActivityId: $marketingActivityId, remoteId: $remoteId) {
    deletedMarketingActivityId
    userErrors {
      field
      message
    }
  }
}
```
