# Object: `WebhookSubscription`

A webhook subscription is a persisted data object created by an app using the REST Admin API or GraphQL Admin API.
It describes the topic that the app wants to receive, and a destination where Shopify should send webhooks of the specified topic.
When an event for a given topic occurs, the webhook subscription sends a relevant payload to the destination.
Learn more about the [webhooks system](https://shopify.dev/apps/webhooks).

**Implements:** `LegacyInteroperability`, `Node`

## Fields

- `apiVersion`: `ApiVersion!` — The Admin API version that Shopify uses to serialize webhook events. This value is inherited from the app that created the webhook subscription.
- `callbackUrl`: `URL!` *(deprecated)* — The destination URI to which the webhook subscription will send a message when an event occurs.
- `createdAt`: `DateTime!` — The date and time when the webhook subscription was created.
- `endpoint`: `WebhookSubscriptionEndpoint!` *(deprecated)* — The endpoint to which the webhook subscription will send events.
- `filter`: `String` — A constraint specified using search syntax that ensures only webhooks that match the specified filter are emitted. See our [guide on filters](https://shopify.dev/docs/apps/build/webhooks/customize/filters) for more details.
- `format`: `WebhookSubscriptionFormat!` — The format in which the webhook subscription should send the data.
- `id`: `ID!` — A globally-unique ID.
- `includeFields`: `[String!]!` — The list of fields to be included in the webhook subscription. Only the fields specified will be included in the webhook payload. If null, then all fields will be included. Learn more about [modifying webhook payloads](https://shopify.dev/docs/apps/build/webhooks/customize/modify-payloads).
- `legacyResourceId`: `UnsignedInt64!` — The ID of the corresponding resource in the REST Admin API.
- `metafieldNamespaces`: `[String!]!` — The list of namespaces for any metafields that should be included in the webhook subscription.
- `metafields`: `[WebhookSubscriptionMetafieldIdentifier!]!` — The list of identifiers specifying metafields to include in the webhook subscription.
- `topic`: `WebhookSubscriptionTopic!` — The type of event that triggers the webhook. The topic determines when the webhook subscription sends a webhook, as well as what class of data object that webhook contains.
- `updatedAt`: `DateTime!` — The date and time when the webhook subscription was updated.
- `uri`: `String!` — The URI to which the webhook subscription will send events.

## Related Types

- [ApiVersion](../../types/objects/ApiVersion.md)
- [WebhookSubscriptionEndpoint](../../types/unions/WebhookSubscriptionEndpoint.md)
- [WebhookSubscriptionFormat](../../types/enums/WebhookSubscriptionFormat.md)
- [WebhookSubscriptionMetafieldIdentifier](../../types/objects/WebhookSubscriptionMetafieldIdentifier.md)
- [WebhookSubscriptionTopic](../../types/enums/WebhookSubscriptionTopic.md)
