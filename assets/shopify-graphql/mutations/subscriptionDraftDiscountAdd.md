# Mutation: `subscriptionDraftDiscountAdd`

**Returns:** `SubscriptionDraftDiscountAddPayload`

Adds a subscription discount to a subscription draft.

## Arguments

- **`draftId`**: `ID!` — The ID of the Subscription Contract draft to add a subscription discount to.
- **`input`**: `SubscriptionManualDiscountInput!` — The properties of the new Subscription Discount.

## Payload Fields

- `discountAdded`: `SubscriptionManualDiscount` — The added Subscription Discount.
- `draft`: `SubscriptionDraft` — The Subscription Contract draft object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftDiscountAddPayload](../types/objects/SubscriptionDraftDiscountAddPayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)
- [SubscriptionManualDiscount](../types/objects/SubscriptionManualDiscount.md)
- [SubscriptionManualDiscountInput](../types/inputs/SubscriptionManualDiscountInput.md)

## Example Mutation

```graphql
mutation SubscriptionDraftDiscountAdd($draftId: ID!, $input: SubscriptionManualDiscountInput!) {
  subscriptionDraftDiscountAdd(draftId: $draftId, input: $input) {
    discountAdded {
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
