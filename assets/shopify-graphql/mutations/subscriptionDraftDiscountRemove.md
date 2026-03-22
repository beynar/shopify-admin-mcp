# Mutation: `subscriptionDraftDiscountRemove`

**Returns:** `SubscriptionDraftDiscountRemovePayload`

Removes a subscription discount from a subscription draft.

## Arguments

- **`draftId`**: `ID!` — The gid of the subscription contract draft to remove a subscription discount from.
- **`discountId`**: `ID!` — The gid of the subscription draft discount to remove.

## Payload Fields

- `discountRemoved`: `SubscriptionDiscount` — The removed subscription draft discount.
- `draft`: `SubscriptionDraft` — The subscription contract draft object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionDiscount](../types/unions/SubscriptionDiscount.md)
- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftDiscountRemovePayload](../types/objects/SubscriptionDraftDiscountRemovePayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)

## Example Mutation

```graphql
mutation SubscriptionDraftDiscountRemove($draftId: ID!, $discountId: ID!) {
  subscriptionDraftDiscountRemove(draftId: $draftId, discountId: $discountId) {
    discountRemoved {
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
