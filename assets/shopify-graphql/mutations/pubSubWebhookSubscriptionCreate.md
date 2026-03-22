# Mutation: `pubSubWebhookSubscriptionCreate`

**Returns:** `PubSubWebhookSubscriptionCreatePayload`

Creates a webhook subscription that notifies your [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) when specific events occur in a shop. Webhooks push event data to your endpoint immediately when changes happen, eliminating the need for polling.

This mutation configures webhook delivery to a Google Cloud Pub/Sub topic. You can filter events using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to receive only relevant webhooks, control which data fields are included in webhook payloads, and specify metafield namespaces to include.

> Note:
> The Webhooks API version [configured in your app](https://shopify.dev/docs/apps/build/webhooks/subscribe/use-newer-api-version) determines the API version for webhook events. You can't specify it per subscription.


Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

## Arguments

- **`topic`**: `WebhookSubscriptionTopic!` — The type of event that triggers the webhook.
- **`webhookSubscription`**: `PubSubWebhookSubscriptionInput!` — Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

## Payload Fields

- `userErrors`: `[PubSubWebhookSubscriptionCreateUserError!]!` — The list of errors that occurred from executing the mutation.
- `webhookSubscription`: `WebhookSubscription` — The webhook subscription that was created.

## Related Types

- [PubSubWebhookSubscriptionCreatePayload](../types/objects/PubSubWebhookSubscriptionCreatePayload.md)
- [PubSubWebhookSubscriptionCreateUserError](../types/objects/PubSubWebhookSubscriptionCreateUserError.md)
- [PubSubWebhookSubscriptionInput](../types/inputs/PubSubWebhookSubscriptionInput.md)
- [WebhookSubscription](../types/objects/WebhookSubscription.md)
- [WebhookSubscriptionTopic](../types/enums/WebhookSubscriptionTopic.md)

## Example Mutation

```graphql
mutation PubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
  pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    userErrors {
      field
      message
    }
    webhookSubscription {
      id
    }
  }
}
```
