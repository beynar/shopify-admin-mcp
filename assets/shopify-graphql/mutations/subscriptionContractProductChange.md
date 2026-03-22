# Mutation: `subscriptionContractProductChange`

**Returns:** `SubscriptionContractProductChangePayload`

Allows for the easy change of a Product in a Contract or a Product price change.

## Arguments

- **`subscriptionContractId`**: `ID!` — The ID of the subscription contract.
- **`lineId`**: `ID!` — The gid of the Subscription Line to update.
- **`input`**: `SubscriptionContractProductChangeInput!` — The properties of the Product changes.

## Payload Fields

- `contract`: `SubscriptionContract` — The new Subscription Contract object.
- `lineUpdated`: `SubscriptionLine` — The updated Subscription Line.
- `userErrors`: `[SubscriptionDraftUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionContract](../types/objects/SubscriptionContract.md)
- [SubscriptionContractProductChangeInput](../types/inputs/SubscriptionContractProductChangeInput.md)
- [SubscriptionContractProductChangePayload](../types/objects/SubscriptionContractProductChangePayload.md)
- [SubscriptionDraftUserError](../types/objects/SubscriptionDraftUserError.md)
- [SubscriptionLine](../types/objects/SubscriptionLine.md)

## Example Mutation

```graphql
mutation SubscriptionContractProductChange($subscriptionContractId: ID!, $lineId: ID!, $input: SubscriptionContractProductChangeInput!) {
  subscriptionContractProductChange(subscriptionContractId: $subscriptionContractId, lineId: $lineId, input: $input) {
    contract {
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
