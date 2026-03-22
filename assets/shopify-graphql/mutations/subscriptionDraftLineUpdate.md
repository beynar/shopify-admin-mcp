# Mutation: `subscriptionDraftLineUpdate`

**Returns:** `SubscriptionDraftLineUpdatePayload`

Updates a subscription line on a subscription draft.

## Arguments

- **`draftId`**: `ID!` — The gid of the Subscription Contract draft to update a subscription line from.
- **`lineId`**: `ID!` — The gid of the Subscription Line to update.
- **`input`**: `SubscriptionLineUpdateInput!` — The properties of the new Subscription Line.

## Payload Fields

- `draft`: `SubscriptionDraft` — The Subscription Contract draft object.
- `lineUpdated`: `SubscriptionLine` — The updated Subscription Line.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftLineUpdatePayload](../types/objects/SubscriptionDraftLineUpdatePayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)
- [SubscriptionLine](../types/objects/SubscriptionLine.md)
- [SubscriptionLineUpdateInput](../types/inputs/SubscriptionLineUpdateInput.md)

## Example Mutation

```graphql
mutation SubscriptionDraftLineUpdate($draftId: ID!, $lineId: ID!, $input: SubscriptionLineUpdateInput!) {
  subscriptionDraftLineUpdate(draftId: $draftId, lineId: $lineId, input: $input) {
    draft {
      id
    }
    lineUpdated {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
