# Mutation: `subscriptionDraftDiscountCodeApply`

**Returns:** `SubscriptionDraftDiscountCodeApplyPayload`

Applies a code discount on the subscription draft.

## Arguments

- **`draftId`**: `ID!` — The gid of the subscription contract draft to apply a subscription code discount on.
- **`redeemCode`**: `String!` — Code discount redeem code.

## Payload Fields

- `appliedDiscount`: `SubscriptionAppliedCodeDiscount` — The added subscription discount.
- `draft`: `SubscriptionDraft` — The subscription contract draft object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionAppliedCodeDiscount](../types/objects/SubscriptionAppliedCodeDiscount.md)
- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftDiscountCodeApplyPayload](../types/objects/SubscriptionDraftDiscountCodeApplyPayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)

## Example Mutation

```graphql
mutation SubscriptionDraftDiscountCodeApply($draftId: ID!, $redeemCode: String!) {
  subscriptionDraftDiscountCodeApply(draftId: $draftId, redeemCode: $redeemCode) {
    appliedDiscount {
      id
    }
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
