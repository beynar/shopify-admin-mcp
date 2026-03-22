# Mutation: `subscriptionBillingCycleUnskip`

**Returns:** `SubscriptionBillingCycleUnskipPayload`

Unskips a Subscription Billing Cycle.

## Arguments

- **`billingCycleInput`**: `SubscriptionBillingCycleInput!` — Input object for selecting and using billing cycles.

## Payload Fields

- `billingCycle`: `SubscriptionBillingCycle` — The updated billing cycle.
- `userErrors`: `[SubscriptionBillingCycleUnskipUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionBillingCycle](../types/objects/SubscriptionBillingCycle.md)
- [SubscriptionBillingCycleInput](../types/inputs/SubscriptionBillingCycleInput.md)
- [SubscriptionBillingCycleUnskipPayload](../types/objects/SubscriptionBillingCycleUnskipPayload.md)
- [SubscriptionBillingCycleUnskipUserError](../types/objects/SubscriptionBillingCycleUnskipUserError.md)

## Example Mutation

```graphql
mutation SubscriptionBillingCycleUnskip($billingCycleInput: SubscriptionBillingCycleInput!) {
  subscriptionBillingCycleUnskip(billingCycleInput: $billingCycleInput) {
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
