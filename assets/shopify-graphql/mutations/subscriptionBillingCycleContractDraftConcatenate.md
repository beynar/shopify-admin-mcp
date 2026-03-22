# Mutation: `subscriptionBillingCycleContractDraftConcatenate`

**Returns:** `SubscriptionBillingCycleContractDraftConcatenatePayload`

Concatenates a contract to a Subscription Draft.

## Arguments

- **`draftId`**: `ID!` — The gid of the Subscription Contract draft to update.
- **`concatenatedBillingCycleContracts`**: `[SubscriptionBillingCycleInput!]!` — An array of Subscription Contracts with their selected billing cycles to concatenate to the subscription draft.

## Payload Fields

- `draft`: `SubscriptionDraft` — The Subscription Draft object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionBillingCycleContractDraftConcatenatePayload](../types/objects/SubscriptionBillingCycleContractDraftConcatenatePayload.md)
- [SubscriptionBillingCycleInput](../types/inputs/SubscriptionBillingCycleInput.md)
- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)

## Example Mutation

```graphql
mutation SubscriptionBillingCycleContractDraftConcatenate($draftId: ID!, $concatenatedBillingCycleContracts: [SubscriptionBillingCycleInput!]!) {
  subscriptionBillingCycleContractDraftConcatenate(draftId: $draftId, concatenatedBillingCycleContracts: $concatenatedBillingCycleContracts) {
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
