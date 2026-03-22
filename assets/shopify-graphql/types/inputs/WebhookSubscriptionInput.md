# Input Object: `WebhookSubscriptionInput`

The input fields for a webhook subscription.

## Input Fields

- `format`: `WebhookSubscriptionFormat` — The format in which the webhook subscription should send the data.
- `includeFields`: `[String!]` — The list of fields to be included in the webhook subscription. Only the fields specified will be included in the webhook payload. If null, then all fields will be included. Learn more about [modifying webhook payloads](https://shopify.dev/docs/apps/build/webhooks/customize/modify_payloads).
- `filter`: `String` — A constraint specified using search syntax that ensures only webhooks that match the specified filter are emitted. See our [guide on filters](https://shopify.dev/docs/apps/build/webhooks/customize/filters) for more details.
- `metafieldNamespaces`: `[String!]` — The list of namespaces for any metafields that should be included in the webhook subscription.
- `metafields`: `[HasMetafieldsMetafieldIdentifierInput!]` — A list of identifiers specifying metafields to include in the webhook payload.
- `uri`: `String` — The URI where the webhook subscription should send events. Supports an HTTPS URL, a Google Pub/Sub URI (pubsub://{project-id}:{topic-id}) or an Amazon EventBridge event source ARN.

## Related Types

- [HasMetafieldsMetafieldIdentifierInput](../../types/inputs/HasMetafieldsMetafieldIdentifierInput.md)
- [WebhookSubscriptionFormat](../../types/enums/WebhookSubscriptionFormat.md)
