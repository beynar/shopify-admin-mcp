# Mutation: `subscriptionContractAtomicCreate`

**Returns:** `SubscriptionContractAtomicCreatePayload`

Creates a Subscription Contract.

## Arguments

- **`input`**: `SubscriptionContractAtomicCreateInput!` — The properties of the new Subscription Contract.

## Payload Fields

- `contract`: `SubscriptionContract` — The new Subscription Contract object.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionContract](../types/objects/SubscriptionContract.md)
- [SubscriptionContractAtomicCreateInput](../types/inputs/SubscriptionContractAtomicCreateInput.md)
- [SubscriptionContractAtomicCreatePayload](../types/objects/SubscriptionContractAtomicCreatePayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)

## Example Mutation

```graphql
mutation SubscriptionContractAtomicCreate($input: SubscriptionContractAtomicCreateInput!) {
  subscriptionContractAtomicCreate(input: $input) {
    contract {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
