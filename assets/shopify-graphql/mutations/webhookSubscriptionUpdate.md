# Mutation: `webhookSubscriptionUpdate`

**Returns:** `WebhookSubscriptionUpdatePayload`

Updates a webhook subscription's configuration. Modify the endpoint URL, event filters, included fields, or metafield namespaces without recreating the subscription.

The mutation accepts a [`WebhookSubscriptionInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput) that specifies the new configuration. You can switch between endpoint types (HTTP, Pub/Sub, EventBridge) by providing a different URI format. Updates apply atomically without interrupting webhook delivery.


Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

## Arguments

- **`id`**: `ID!` — The ID of the webhook subscription to update.
- **`webhookSubscription`**: `WebhookSubscriptionInput!` — Specifies the input fields for a webhook subscription.

## Payload Fields

- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.
- `webhookSubscription`: `WebhookSubscription` — The webhook subscription that was updated.

## Related Types

- [UserError](../types/objects/UserError.md)
- [WebhookSubscription](../types/objects/WebhookSubscription.md)
- [WebhookSubscriptionInput](../types/inputs/WebhookSubscriptionInput.md)
- [WebhookSubscriptionUpdatePayload](../types/objects/WebhookSubscriptionUpdatePayload.md)

## Example Mutation

```graphql
mutation WebhookSubscriptionUpdate($id: ID!, $webhookSubscription: WebhookSubscriptionInput!) {
  webhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
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
