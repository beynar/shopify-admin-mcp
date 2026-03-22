# Mutation: `subscriptionBillingCycleSkip`

**Returns:** `SubscriptionBillingCycleSkipPayload`

Skips a Subscription Billing Cycle.

## Arguments

- **`billingCycleInput`**: `SubscriptionBillingCycleInput!` — Input object for selecting and using billing cycles.

## Payload Fields

- `billingCycle`: `SubscriptionBillingCycle` — The updated billing cycle.
- `userErrors`: `[SubscriptionBillingCycleSkipUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionBillingCycle](../types/objects/SubscriptionBillingCycle.md)
- [SubscriptionBillingCycleInput](../types/inputs/SubscriptionBillingCycleInput.md)
- [SubscriptionBillingCycleSkipPayload](../types/objects/SubscriptionBillingCycleSkipPayload.md)
- [SubscriptionBillingCycleSkipUserError](../types/objects/SubscriptionBillingCycleSkipUserError.md)

## Example Mutation

```graphql
mutation SubscriptionBillingCycleSkip($billingCycleInput: SubscriptionBillingCycleInput!) {
  subscriptionBillingCycleSkip(billingCycleInput: $billingCycleInput) {
    billingCycle {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
