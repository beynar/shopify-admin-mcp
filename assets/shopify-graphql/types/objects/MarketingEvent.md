# Object: `MarketingEvent`

Represents actions that market a merchant's store or products.

**Implements:** `LegacyInteroperability`, `Node`

## Fields

- `app`: `App!` — The app that the marketing event is attributed to.
- `channel`: `MarketingChannel` *(deprecated)* — The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.
- `channelHandle`: `String` — The unique string identifier of the channel to which this activity belongs. For the correct handle for your channel, contact your partner manager.
- `description`: `String` — A human-readable description of the marketing event.
- `endedAt`: `DateTime` — The date and time when the marketing event ended.
- `id`: `ID!` — A globally-unique ID.
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `manageUrl`: `URL` — The URL where the marketing event can be managed.
- `marketingChannelType`: `MarketingChannel` — The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.
- `previewUrl`: `URL` — The URL where the marketing event can be previewed.
- `remoteId`: `String` — An optional ID that helps Shopify validate engagement data.
- `scheduledToEndAt`: `DateTime` — The date and time when the marketing event is scheduled to end.
- `sourceAndMedium`: `String!` — Where the `MarketingEvent` occurred and what kind of content was used.
- `startedAt`: `DateTime!` — The date and time when the marketing event started.
- `targetTypeDisplayText`: `String!` *(deprecated)* — The display text for the marketing event type.
- `type`: `MarketingTactic!` — The marketing event type.
- `utmCampaign`: `String` — The name of the marketing campaign.
- `utmMedium`: `String` — The medium that the marketing campaign is using. Example values: `cpc`, `banner`.
- `utmSource`: `String` — The referrer of the marketing event. Example values: `google`, `newsletter`.

## Related Types

- [App](../../types/objects/App.md)
- [MarketingChannel](../../types/enums/MarketingChannel.md)
- [MarketingTactic](../../types/enums/MarketingTactic.md)
