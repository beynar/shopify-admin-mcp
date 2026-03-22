# Mutation: `webhookSubscriptionDelete`

**Returns:** `WebhookSubscriptionDeletePayload`

Deletes a [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) and stops all future webhooks to its endpoint. Returns the deleted subscription's ID for confirmation.


Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

## Arguments

- **`id`**: `ID!` — The ID of the webhook subscription to delete.

## Payload Fields

- `deletedWebhookSubscriptionId`: `ID` — The ID of the deleted webhook subscription.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [UserError](../types/objects/UserError.md)
- [WebhookSubscriptionDeletePayload](../types/objects/WebhookSubscriptionDeletePayload.md)

## Example Mutation

```graphql
mutation WebhookSubscriptionDelete($id: ID!) {
  webhookSubscriptionDelete(id: $id) {
    deletedWebhookSubscriptionId
    userErrors {
      field
      message
    }
  }
}
```
