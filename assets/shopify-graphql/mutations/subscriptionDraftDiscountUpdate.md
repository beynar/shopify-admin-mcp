# Mutation: `subscriptionDraftDiscountUpdate`

**Returns:** `SubscriptionDraftDiscountUpdatePayload`

Updates a subscription discount on a subscription draft.

## Arguments

- **`draftId`**: `ID!` — The ID of the Subscription Contract draft to update a subscription discount on.
- **`discountId`**: `ID!` — The gid of the Subscription Discount to update.
- **`input`**: `SubscriptionManualDiscountInput!` — The properties to update on the Subscription Discount.

## Payload Fields

- `discountUpdated`: `SubscriptionManualDiscount` — The updated Subscription Discount.
- `draft`: `SubscriptionDraft` — The Subscription Contract draft object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftDiscountUpdatePayload](../types/objects/SubscriptionDraftDiscountUpdatePayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)
- [SubscriptionManualDiscount](../types/objects/SubscriptionManualDiscount.md)
- [SubscriptionManualDiscountInput](../types/inputs/SubscriptionManualDiscountInput.md)

## Example Mutation

```graphql
mutation SubscriptionDraftDiscountUpdate($draftId: ID!, $discountId: ID!, $input: SubscriptionManualDiscountInput!) {
  subscriptionDraftDiscountUpdate(draftId: $draftId, discountId: $discountId, input: $input) {
    discountUpdated {
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
