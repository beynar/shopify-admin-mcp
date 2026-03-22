# Mutation: `subscriptionDraftUpdate`

**Returns:** `SubscriptionDraftUpdatePayload`

Updates a Subscription Draft.

## Arguments

- **`draftId`**: `ID!` — The gid of the Subscription Draft to update.
- **`input`**: `SubscriptionDraftInput!` — The properties of the new Subscription Contract.

## Payload Fields

- `draft`: `SubscriptionDraft` — The Subscription Draft object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionDraft](../types/objects/SubscriptionDraft.md)
- [SubscriptionDraftInput](../types/inputs/SubscriptionDraftInput.md)
- [SubscriptionDraftUpdatePayload](../types/objects/SubscriptionDraftUpdatePayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)

## Example Mutation

```graphql
mutation SubscriptionDraftUpdate($draftId: ID!, $input: SubscriptionDraftInput!) {
  subscriptionDraftUpdate(draftId: $draftId, input: $input) {
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
