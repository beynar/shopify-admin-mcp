# Mutation: `subscriptionBillingCycleContractEdit`

**Returns:** `SubscriptionBillingCycleContractEditPayload`

Edit the contents of a subscription contract for the specified billing cycle.

## Arguments

- **`billingCycleInput`**: `SubscriptionBillingCycleInput!` — Input object for selecting and using billing cycles.

## Payload Fields

- `draft`: `SubscriptionDraft` — The draft subscription contract object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionBillingCycleContractEditPayload](../types/objects/SubscriptionBillingCycleContractEditPayload.md)
- [SubscriptionBillingCycleInput](../types/inputs/SubscriptionBillingCycleInput.md)
- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)

## Example Mutation

```graphql
mutation SubscriptionBillingCycleContractEdit($billingCycleInput: SubscriptionBillingCycleInput!) {
  subscriptionBillingCycleContractEdit(billingCycleInput: $billingCycleInput) {
    draft {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
