# Object: `SubscriptionDraftLineRemovePayload`

Return type for `subscriptionDraftLineRemove` mutation.

## Fields

- `discountsUpdated`: `[SubscriptionManualDiscount!]` — The list of updated subscription discounts impacted by the removed line.
- `draft`: `SubscriptionDraft` — The Subscription Contract draft object.
- `lineRemoved`: `SubscriptionLine` — The removed Subscription Line.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionDraft](../../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftUserError](../../types/objects/SubscriptionDraftUserError.md)
- [SubscriptionLine](../../types/objects/SubscriptionLine.md)
- [SubscriptionManualDiscount](../../types/objects/SubscriptionManualDiscount.md)
