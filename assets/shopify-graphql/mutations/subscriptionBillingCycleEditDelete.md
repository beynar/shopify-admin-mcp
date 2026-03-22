# Mutation: `subscriptionBillingCycleEditDelete`

**Returns:** `SubscriptionBillingCycleEditDeletePayload`

Delete the schedule and contract edits of the selected subscription billing cycle.

## Arguments

- **`billingCycleInput`**: `SubscriptionBillingCycleInput!` — Input object used to select and use billing cycles.

## Payload Fields

- `billingCycles`: `[SubscriptionBillingCycle!]` — The list of updated billing cycles.
- `userErrors`: `[SubscriptionBillingCycleUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionBillingCycle](../types/objects/SubscriptionBillingCycle.md)
- [SubscriptionBillingCycleEditDeletePayload](../types/objects/SubscriptionBillingCycleEditDeletePayload.md)
- [SubscriptionBillingCycleInput](../types/inputs/SubscriptionBillingCycleInput.md)
- [SubscriptionBillingCycleUserError](../types/objects/SubscriptionBillingCycleUserError.md)

## Example Mutation

```graphql
mutation SubscriptionBillingCycleEditDelete($billingCycleInput: SubscriptionBillingCycleInput!) {
  subscriptionBillingCycleEditDelete(billingCycleInput: $billingCycleInput) {
    billingCycles {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
