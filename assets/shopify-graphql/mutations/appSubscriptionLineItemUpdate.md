# Mutation: `appSubscriptionLineItemUpdate`

**Returns:** `AppSubscriptionLineItemUpdatePayload`

Updates the capped amount on usage-based billing for an [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem). Enables you to modify the maximum charge limit that prevents merchants from exceeding a specified threshold during their billing period.

The mutation returns a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) where the merchant must approve the new pricing limit before it takes effect. Use this when adjusting usage limits based on merchant needs or changing pricing models.

Learn more about [updating the maximum charge for a subscription](https://shopify.dev/docs/apps/launch/billing/subscription-billing/update-max-charge).

## Arguments

- **`id`**: `ID!` — The ID of the app subscription line item to be updated.
- **`cappedAmount`**: `MoneyInput!` — The new maximum amount of usage charges that can be incurred within a subscription billing interval.

## Payload Fields

- `appSubscription`: `AppSubscription` — The updated app subscription.
- `confirmationUrl`: `URL` — The URL where the merchant approves or declines the updated app subscription line item.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [AppSubscription](../types/objects/AppSubscription.md)
- [AppSubscriptionLineItemUpdatePayload](../types/objects/AppSubscriptionLineItemUpdatePayload.md)
- [MoneyInput](../types/inputs/MoneyInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation AppSubscriptionLineItemUpdate($id: ID!, $cappedAmount: MoneyInput!) {
  appSubscriptionLineItemUpdate(id: $id, cappedAmount: $cappedAmount) {
    appSubscription {
      id
    }
    confirmationUrl
    userErrors {
      field
      message
    }
  }
}
```
