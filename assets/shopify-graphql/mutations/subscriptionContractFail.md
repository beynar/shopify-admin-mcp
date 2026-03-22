# Mutation: `subscriptionContractFail`

**Returns:** `SubscriptionContractFailPayload`

Fails a Subscription Contract.

## Arguments

- **`subscriptionContractId`**: `ID!` — The ID of the Subscription Contract.

## Payload Fields

- `contract`: `SubscriptionContract` — The new Subscription Contract object.
- `userErrors`: `[SubscriptionContractStatusUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionContract](../types/objects/SubscriptionContract.md)
- [SubscriptionContractFailPayload](../types/objects/SubscriptionContractFailPayload.md)
- [SubscriptionContractStatusUpdateUserError](../types/objects/SubscriptionContractStatusUpdateUserError.md)

## Example Mutation

```graphql
mutation SubscriptionContractFail($subscriptionContractId: ID!) {
  subscriptionContractFail(subscriptionContractId: $subscriptionContractId) {
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
