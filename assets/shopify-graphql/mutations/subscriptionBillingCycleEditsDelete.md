# Mutation: `subscriptionBillingCycleEditsDelete`

**Returns:** `SubscriptionBillingCycleEditsDeletePayload`

Delete the current and future schedule and contract edits of a list of subscription billing cycles.

## Arguments

- **`contractId`**: `ID!` — The globally-unique identifier of the subscription contract that the billing cycle belongs to.
- **`targetSelection`**: `SubscriptionBillingCyclesTargetSelection!` — Select billing cycles to be deleted.

## Payload Fields

- `billingCycles`: `[SubscriptionBillingCycle!]` — The list of updated billing cycles.
- `userErrors`: `[SubscriptionBillingCycleUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionBillingCycle](../types/objects/SubscriptionBillingCycle.md)
- [SubscriptionBillingCycleEditsDeletePayload](../types/objects/SubscriptionBillingCycleEditsDeletePayload.md)
- [SubscriptionBillingCycleUserError](../types/objects/SubscriptionBillingCycleUserError.md)
- [SubscriptionBillingCyclesTargetSelection](../types/enums/SubscriptionBillingCyclesTargetSelection.md)

## Example Mutation

```graphql
mutation SubscriptionBillingCycleEditsDelete($contractId: ID!, $targetSelection: SubscriptionBillingCyclesTargetSelection!) {
  subscriptionBillingCycleEditsDelete(contractId: $contractId, targetSelection: $targetSelection) {
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
