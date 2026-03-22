# Mutation: `subscriptionDraftFreeShippingDiscountUpdate`

**Returns:** `SubscriptionDraftFreeShippingDiscountUpdatePayload`

Updates a subscription free shipping discount on a subscription draft.

## Arguments

- **`draftId`**: `ID!` — The ID of the Subscription Contract draft to update a subscription discount on.
- **`discountId`**: `ID!` — The gid of the Subscription Discount to update.
- **`input`**: `SubscriptionFreeShippingDiscountInput!` — The properties to update on the Subscription Free Shipping Discount.

## Payload Fields

- `discountUpdated`: `SubscriptionManualDiscount` — The updated Subscription Discount.
- `draft`: `SubscriptionDraft` — The Subscription Contract draft object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftFreeShippingDiscountUpdatePayload](../types/objects/SubscriptionDraftFreeShippingDiscountUpdatePayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)
- [SubscriptionFreeShippingDiscountInput](../types/inputs/SubscriptionFreeShippingDiscountInput.md)
- [SubscriptionManualDiscount](../types/objects/SubscriptionManualDiscount.md)

## Example Mutation

```graphql
mutation SubscriptionDraftFreeShippingDiscountUpdate($draftId: ID!, $discountId: ID!, $input: SubscriptionFreeShippingDiscountInput!) {
  subscriptionDraftFreeShippingDiscountUpdate(draftId: $draftId, discountId: $discountId, input: $input) {
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
