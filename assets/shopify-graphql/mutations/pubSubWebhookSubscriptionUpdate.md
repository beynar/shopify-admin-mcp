# Mutation: `pubSubWebhookSubscriptionUpdate`

**Returns:** `PubSubWebhookSubscriptionUpdatePayload`

Updates a Google Cloud Pub/Sub webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

## Arguments

- **`id`**: `ID!` — The ID of the webhook subscription to update.
- **`webhookSubscription`**: `PubSubWebhookSubscriptionInput!` — Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

## Payload Fields

- `userErrors`: `[PubSubWebhookSubscriptionUpdateUserError!]!` — The list of errors that occurred from executing the mutation.
- `webhookSubscription`: `WebhookSubscription` — The webhook subscription that was updated.

## Related Types

- [PubSubWebhookSubscriptionInput](../types/inputs/PubSubWebhookSubscriptionInput.md)
- [PubSubWebhookSubscriptionUpdatePayload](../types/objects/PubSubWebhookSubscriptionUpdatePayload.md)
- [PubSubWebhookSubscriptionUpdateUserError](../types/objects/PubSubWebhookSubscriptionUpdateUserError.md)
- [WebhookSubscription](../types/objects/WebhookSubscription.md)

## Example Mutation

```graphql
mutation PubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
  pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
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
