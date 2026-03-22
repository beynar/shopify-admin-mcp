# Mutation: `marketingEngagementCreate`

**Returns:** `MarketingEngagementCreatePayload`

Creates a new marketing engagement for a marketing activity or a marketing channel.

## Arguments

- **`marketingActivityId`**: `ID` — The identifier of the marketing activity for which the engagement metrics are being provided. This or the remoteId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.
- **`remoteId`**: `String` — A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. This or the marketingActivityId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.
- **`channelHandle`**: `String` — The unique string identifier of the channel to which the engagement metrics are being provided. This should be set when and only when providing channel-level engagements. This should be nil when providing activity-level engagements. For the correct handle for your channel, contact your partner manager.
- **`marketingEngagement`**: `MarketingEngagementInput!` — The marketing engagement's attributes.

## Payload Fields

- `marketingEngagement`: `MarketingEngagement` — The marketing engagement that was created. This represents customer activity taken on a marketing activity or a marketing channel.
- `userErrors`: `[MarketingActivityUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MarketingActivityUserError](../types/objects/MarketingActivityUserError.md)
- [MarketingEngagement](../types/objects/MarketingEngagement.md)
- [MarketingEngagementCreatePayload](../types/objects/MarketingEngagementCreatePayload.md)
- [MarketingEngagementInput](../types/inputs/MarketingEngagementInput.md)

## Example Mutation

```graphql
mutation MarketingEngagementCreate($marketingActivityId: ID, $remoteId: String, $channelHandle: String, $marketingEngagement: MarketingEngagementInput!) {
  marketingEngagementCreate(marketingActivityId: $marketingActivityId, remoteId: $remoteId, channelHandle: $channelHandle, marketingEngagement: $marketingEngagement) {
    marketingEngagement {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
