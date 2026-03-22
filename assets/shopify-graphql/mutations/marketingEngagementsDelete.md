# Mutation: `marketingEngagementsDelete`

**Returns:** `MarketingEngagementsDeletePayload`

Marks channel-level engagement data such that it no longer appears in reports.
          Activity-level data cannot be deleted directly, instead the MarketingActivity itself should be deleted to
          hide it from reports.

## Arguments

- **`channelHandle`**: `String` — The handle of the channel for which engagement data should be deleted.
- **`deleteEngagementsForAllChannels`**: `Boolean` = `false` — When true, engagements for all channels that belong to the api client will be deleted.

## Payload Fields

- `result`: `String` — Informational message about the engagement data that has been marked for deletion.
- `userErrors`: `[MarketingActivityUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketingActivityUserError](../types/objects/MarketingActivityUserError.md)
- [MarketingEngagementsDeletePayload](../types/objects/MarketingEngagementsDeletePayload.md)

## Example Mutation

```graphql
mutation MarketingEngagementsDelete($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
  marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
    result
    userErrors {
      field
      message
    }
  }
}
```
