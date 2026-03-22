# Mutation: `subscriptionDraftLineRemove`

**Returns:** `SubscriptionDraftLineRemovePayload`

Removes a subscription line from a subscription draft.

## Arguments

- **`draftId`**: `ID!` — The gid of the Subscription Contract draft to remove a subscription line from.
- **`lineId`**: `ID!` — The gid of the Subscription Line to remove.

## Payload Fields

- `discountsUpdated`: `[SubscriptionManualDiscount!]` — The list of updated subscription discounts impacted by the removed line.
- `draft`: `SubscriptionDraft` — The Subscription Contract draft object.
- `lineRemoved`: `SubscriptionLine` — The removed Subscription Line.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftLineRemovePayload](../types/objects/SubscriptionDraftLineRemovePayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)
- [SubscriptionLine](../types/objects/SubscriptionLine.md)
- [SubscriptionManualDiscount](../types/objects/SubscriptionManualDiscount.md)

## Example Mutation

```graphql
mutation SubscriptionDraftLineRemove($draftId: ID!, $lineId: ID!) {
  subscriptionDraftLineRemove(draftId: $draftId, lineId: $lineId) {
    discountsUpdated {
      id
    }
    draft {
      id
    }
    lineRemoved {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
