# Mutation: `subscriptionDraftLineAdd`

**Returns:** `SubscriptionDraftLineAddPayload`

Adds a subscription line to a subscription draft.

## Arguments

- **`draftId`**: `ID!` — The gid of the Subscription Contract draft to add a subscription line to.
- **`input`**: `SubscriptionLineInput!` — The properties of the new Subscription Line.

## Payload Fields

- `draft`: `SubscriptionDraft` — The Subscription Contract draft object.
- `lineAdded`: `SubscriptionLine` — The added Subscription Line.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftLineAddPayload](../types/objects/SubscriptionDraftLineAddPayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)
- [SubscriptionLine](../types/objects/SubscriptionLine.md)
- [SubscriptionLineInput](../types/inputs/SubscriptionLineInput.md)

## Example Mutation

```graphql
mutation SubscriptionDraftLineAdd($draftId: ID!, $input: SubscriptionLineInput!) {
  subscriptionDraftLineAdd(draftId: $draftId, input: $input) {
    draft {
      id
    }
    lineAdded {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
