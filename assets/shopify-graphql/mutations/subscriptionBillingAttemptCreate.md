# Mutation: `subscriptionBillingAttemptCreate`

**Returns:** `SubscriptionBillingAttemptCreatePayload`

Creates a billing attempt to charge for a [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The mutation processes either the payment for the current billing cycle or for a specific cycle, if selected.

The mutation creates an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) when successful. Failed billing attempts include a [`processingError`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#returns-subscriptionBillingAttempt.fields.processingError) field with error details.

> Tip:
> Use the [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#arguments-subscriptionBillingAttemptInput.fields.idempotencyKey) to ensure the billing attempt executes only once, preventing duplicate charges if the request is retried.

You can target a specific billing cycle using the [`billingCycleSelector`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector) to bill past or future cycles. The [`originTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.originTime) parameter adjusts fulfillment scheduling for attempts completed after the expected billing date.

Learn more about [creating billing attempts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract#step-4-create-a-billing-attempt).

## Arguments

- **`subscriptionContractId`**: `ID!` — The ID of the subscription contract.
- **`subscriptionBillingAttemptInput`**: `SubscriptionBillingAttemptInput!` — The information to apply as a billing attempt.

## Payload Fields

- `subscriptionBillingAttempt`: `SubscriptionBillingAttempt` — The subscription billing attempt.
- `userErrors`: `[BillingAttemptUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BillingAttemptUserError](../types/objects/BillingAttemptUserError.md)
- [SubscriptionBillingAttempt](../types/objects/SubscriptionBillingAttempt.md)
- [SubscriptionBillingAttemptCreatePayload](../types/objects/SubscriptionBillingAttemptCreatePayload.md)
- [SubscriptionBillingAttemptInput](../types/inputs/SubscriptionBillingAttemptInput.md)

## Example Mutation

```graphql
mutation SubscriptionBillingAttemptCreate($subscriptionContractId: ID!, $subscriptionBillingAttemptInput: SubscriptionBillingAttemptInput!) {
  subscriptionBillingAttemptCreate(subscriptionContractId: $subscriptionContractId, subscriptionBillingAttemptInput: $subscriptionBillingAttemptInput) {
    subscriptionBillingAttempt {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
