# Mutation: `appSubscriptionCancel`

**Returns:** `AppSubscriptionCancelPayload`

Cancels an active app subscription, stopping future billing cycles. The cancellation behavior depends on the `replacementBehavior` setting - it can either disable auto-renewal (allowing the subscription to continue until the end of the current billing period) or immediately cancel with prorated refunds.

When a merchant decides to discontinue using subscription features, this mutation provides a clean cancellation workflow that respects billing periods and merchant expectations.

Use the `AppSubscriptionCancel` mutation to:
- Process merchant-initiated subscription cancellations
- Terminate subscriptions due to policy violations or account issues
- Handle subscription cancellations during app uninstallation workflows

The cancellation timing and merchant access depends on the `replacementBehavior` setting and the app's specific implementation of subscription management.

For subscription lifecycle management and cancellation best practices, consult the [subscription management guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

## Arguments

- **`id`**: `ID!` — The ID of the app subscription to be cancelled.
- **`prorate`**: `Boolean` = `false` — Whether to issue prorated credits for the unused portion of the app subscription.  There will be a corresponding deduction (based on revenue share) to your Partner account. For example, if a $10.00 app subscription (with 0% revenue share) is cancelled and prorated half way through the billing cycle, then the merchant will be credited $5.00 and that amount will be deducted from your Partner account.

## Payload Fields

- `appSubscription`: `AppSubscription` — The cancelled app subscription.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [AppSubscription](../types/objects/AppSubscription.md)
- [AppSubscriptionCancelPayload](../types/objects/AppSubscriptionCancelPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) {
  appSubscriptionCancel(id: $id, prorate: $prorate) {
    appSubscription {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
