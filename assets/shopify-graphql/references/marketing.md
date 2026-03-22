# Marketing: Marketing activities, events, campaigns

## Queries (7)

- **[event](../queries/event.md)** → `Event` `(id)`
  Retrieves a single event by ID. Events chronicle activities in your store such as resource creation, updates, or staff comments. The query returns an 
- **[events](../queries/events.md)** → `EventConnection` `(first, after, last, before, reverse, sortKey, query)`
  A paginated list of events that chronicle activities in the store. [`Event`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event) is an
- **[eventsCount](../queries/eventsCount.md)** → `Count` `(query)`
  Count of events. Limited to a maximum of 10000.
- **[marketingActivities](../queries/marketingActivities.md)** → `MarketingActivityConnection!` `(marketingActivityIds, remoteIds, utm, first, after, last, before, reverse, sortKey, query, savedSearchId)`
  A list of marketing activities associated with the marketing app.
- **[marketingActivity](../queries/marketingActivity.md)** → `MarketingActivity` `(id)`
  Returns a `MarketingActivity` resource by ID.
- **[marketingEvent](../queries/marketingEvent.md)** → `MarketingEvent` `(id)`
  Returns a `MarketingEvent` resource by ID.
- **[marketingEvents](../queries/marketingEvents.md)** → `MarketingEventConnection!` `(first, after, last, before, reverse, sortKey, query)`
  A list of marketing events associated with the marketing app.

## Mutations (12)

- **[eventBridgeServerPixelUpdate](../mutations/eventBridgeServerPixelUpdate.md)** → `EventBridgeServerPixelUpdatePayload` `(arn)`
  Updates the server pixel to connect to an EventBridge endpoint.
- **[eventBridgeWebhookSubscriptionCreate](../mutations/eventBridgeWebhookSubscriptionCreate.md)** → `EventBridgeWebhookSubscriptionCreatePayload` `(topic, webhookSubscription)`
  Creates a webhook subscription that notifies your [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) when specific events occur in
- **[eventBridgeWebhookSubscriptionUpdate](../mutations/eventBridgeWebhookSubscriptionUpdate.md)** → `EventBridgeWebhookSubscriptionUpdatePayload` `(id, webhookSubscription)`
  Updates an Amazon EventBridge webhook subscription.
- **[marketingActivitiesDeleteAllExternal](../mutations/marketingActivitiesDeleteAllExternal.md)** → `MarketingActivitiesDeleteAllExternalPayload`
  Deletes all external marketing activities. Deletion is performed by a background job, as it may take a bit of time to complete if a large number of ac
- **[marketingActivityCreate](../mutations/marketingActivityCreate.md)** → `MarketingActivityCreatePayload` `(input)`
  Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.
- **[marketingActivityCreateExternal](../mutations/marketingActivityCreateExternal.md)** → `MarketingActivityCreateExternalPayload` `(input)`
  Creates a new external marketing activity.
- **[marketingActivityDeleteExternal](../mutations/marketingActivityDeleteExternal.md)** → `MarketingActivityDeleteExternalPayload` `(marketingActivityId, remoteId)`
  Deletes an external marketing activity.
- **[marketingActivityUpdate](../mutations/marketingActivityUpdate.md)** → `MarketingActivityUpdatePayload` `(input)`
  Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.
- **[marketingActivityUpdateExternal](../mutations/marketingActivityUpdateExternal.md)** → `MarketingActivityUpdateExternalPayload` `(input, marketingActivityId, remoteId, utm)`
  Update an external marketing activity.
- **[marketingActivityUpsertExternal](../mutations/marketingActivityUpsertExternal.md)** → `MarketingActivityUpsertExternalPayload` `(input)`
  Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed 
- **[marketingEngagementCreate](../mutations/marketingEngagementCreate.md)** → `MarketingEngagementCreatePayload` `(marketingActivityId, remoteId, channelHandle, marketingEngagement)`
  Creates a new marketing engagement for a marketing activity or a marketing channel.
- **[marketingEngagementsDelete](../mutations/marketingEngagementsDelete.md)** → `MarketingEngagementsDeletePayload` `(channelHandle, deleteEngagementsForAllChannels)`
  Marks channel-level engagement data such that it no longer appears in reports.
