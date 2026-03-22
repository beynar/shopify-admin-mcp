# Mutation: `subscriptionBillingCycleScheduleEdit`

**Returns:** `SubscriptionBillingCycleScheduleEditPayload`

Modify the schedule of a specific billing cycle.

## Arguments

- **`billingCycleInput`**: `SubscriptionBillingCycleInput!` — Input object for selecting and using billing cycles.
- **`input`**: `SubscriptionBillingCycleScheduleEditInput!` — Data used to create or modify billing cycle schedule edit.

## Payload Fields

- `billingCycle`: `SubscriptionBillingCycle` — The updated billing cycle.
- `userErrors`: `[SubscriptionBillingCycleUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionBillingCycle](../types/objects/SubscriptionBillingCycle.md)
- [SubscriptionBillingCycleInput](../types/inputs/SubscriptionBillingCycleInput.md)
- [SubscriptionBillingCycleScheduleEditInput](../types/inputs/SubscriptionBillingCycleScheduleEditInput.md)
- [SubscriptionBillingCycleScheduleEditPayload](../types/objects/SubscriptionBillingCycleScheduleEditPayload.md)
- [SubscriptionBillingCycleUserError](../types/objects/SubscriptionBillingCycleUserError.md)

## Example Mutation

```graphql
mutation SubscriptionBillingCycleScheduleEdit($billingCycleInput: SubscriptionBillingCycleInput!, $input: SubscriptionBillingCycleScheduleEditInput!) {
  subscriptionBillingCycleScheduleEdit(billingCycleInput: $billingCycleInput, input: $input) {
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
