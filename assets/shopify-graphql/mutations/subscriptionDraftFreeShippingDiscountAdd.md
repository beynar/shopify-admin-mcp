# Mutation: `subscriptionDraftFreeShippingDiscountAdd`

**Returns:** `SubscriptionDraftFreeShippingDiscountAddPayload`

Adds a subscription free shipping discount to a subscription draft.

## Arguments

- **`draftId`**: `ID!` — The ID of the subscription contract draft to add a subscription free shipping discount to.
- **`input`**: `SubscriptionFreeShippingDiscountInput!` — The properties of the new subscription free shipping discount.

## Payload Fields

- `discountAdded`: `SubscriptionManualDiscount` — The added subscription free shipping discount.
- `draft`: `SubscriptionDraft` — The subscription contract draft object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftFreeShippingDiscountAddPayload](../types/objects/SubscriptionDraftFreeShippingDiscountAddPayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)
- [SubscriptionFreeShippingDiscountInput](../types/inputs/SubscriptionFreeShippingDiscountInput.md)
- [SubscriptionManualDiscount](../types/objects/SubscriptionManualDiscount.md)

## Example Mutation

```graphql
mutation SubscriptionDraftFreeShippingDiscountAdd($draftId: ID!, $input: SubscriptionFreeShippingDiscountInput!) {
  subscriptionDraftFreeShippingDiscountAdd(draftId: $draftId, input: $input) {
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
