# Mutation: `subscriptionContractActivate`

**Returns:** `SubscriptionContractActivatePayload`

Activates a Subscription Contract. Contract status must be either active, paused, or failed.

## Arguments

- **`subscriptionContractId`**: `ID!` — The ID of the Subscription Contract.

## Payload Fields

- `contract`: `SubscriptionContract` — The new Subscription Contract object.
- `userErrors`: `[SubscriptionContractStatusUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionContract](../types/objects/SubscriptionContract.md)
- [SubscriptionContractActivatePayload](../types/objects/SubscriptionContractActivatePayload.md)
- [SubscriptionContractStatusUpdateUserError](../types/objects/SubscriptionContractStatusUpdateUserError.md)

## Example Mutation

```graphql
mutation SubscriptionContractActivate($subscriptionContractId: ID!) {
  subscriptionContractActivate(subscriptionContractId: $subscriptionContractId) {
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
