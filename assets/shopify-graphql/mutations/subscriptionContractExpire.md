# Mutation: `subscriptionContractExpire`

**Returns:** `SubscriptionContractExpirePayload`

Expires a Subscription Contract.

## Arguments

- **`subscriptionContractId`**: `ID!` — The ID of the Subscription Contract.

## Payload Fields

- `contract`: `SubscriptionContract` — The new Subscription Contract object.
- `userErrors`: `[SubscriptionContractStatusUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionContract](../types/objects/SubscriptionContract.md)
- [SubscriptionContractExpirePayload](../types/objects/SubscriptionContractExpirePayload.md)
- [SubscriptionContractStatusUpdateUserError](../types/objects/SubscriptionContractStatusUpdateUserError.md)

## Example Mutation

```graphql
mutation SubscriptionContractExpire($subscriptionContractId: ID!) {
  subscriptionContractExpire(subscriptionContractId: $subscriptionContractId) {
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
