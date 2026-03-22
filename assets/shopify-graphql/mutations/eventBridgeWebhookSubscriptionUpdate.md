# Mutation: `eventBridgeWebhookSubscriptionUpdate`

**Returns:** `EventBridgeWebhookSubscriptionUpdatePayload`

Updates an Amazon EventBridge webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

## Arguments

- **`id`**: `ID!` — The ID of the webhook subscription to update.
- **`webhookSubscription`**: `EventBridgeWebhookSubscriptionInput!` — Specifies the input fields for an EventBridge webhook subscription.

## Payload Fields

- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.
- `webhookSubscription`: `WebhookSubscription` — The webhook subscription that was updated.

## Related Types

- [EventBridgeWebhookSubscriptionInput](../types/inputs/EventBridgeWebhookSubscriptionInput.md)
- [EventBridgeWebhookSubscriptionUpdatePayload](../types/objects/EventBridgeWebhookSubscriptionUpdatePayload.md)
- [UserError](../types/objects/UserError.md)
- [WebhookSubscription](../types/objects/WebhookSubscription.md)

## Example Mutation

```graphql
mutation EventBridgeWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
  eventBridgeWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
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
