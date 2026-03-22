# Query: `webhookSubscription`

**Returns:** `WebhookSubscription`

Returns a webhook subscription by ID.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

## Arguments

- **`id`**: `ID!` — The ID of the `WebhookSubscription` to return.

## Return Type Fields

- `apiVersion`: `ApiVersion!` — The Admin API version that Shopify uses to serialize webhook events. This value is inherited from the app that created the webhook subscription.
- `createdAt`: `DateTime!` — The date and time when the webhook subscription was created.
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

- [ApiVersion](../types/objects/ApiVersion.md)
- [WebhookSubscription](../types/objects/WebhookSubscription.md)
- [WebhookSubscriptionEndpoint](../types/unions/WebhookSubscriptionEndpoint.md)
- [WebhookSubscriptionFormat](../types/enums/WebhookSubscriptionFormat.md)
- [WebhookSubscriptionMetafieldIdentifier](../types/objects/WebhookSubscriptionMetafieldIdentifier.md)
- [WebhookSubscriptionTopic](../types/enums/WebhookSubscriptionTopic.md)

## Example Query

```graphql
query WebhookSubscription($id: ID!) {
  webhookSubscription(id: $id) {
    createdAt
    filter
    includeFields
    legacyResourceId
  }
}
```
