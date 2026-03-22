# Mutation: `consentPolicyUpdate`

**Returns:** `ConsentPolicyUpdatePayload`

Update or create consent policies in bulk.

## Arguments

- **`consentPolicies`**: `[ConsentPolicyInput!]!` — The consent policies to update or create. If the country and region matches an existing consent policy, then the consent policy is updated. Otherwise, a new consent policy is created.

## Payload Fields

- `updatedPolicies`: `[ConsentPolicy!]` — All updated and created consent policies. The consent policies that haven't been modified as part of the mutation aren't returned.
- `userErrors`: `[ConsentPolicyError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ConsentPolicy](../types/objects/ConsentPolicy.md)
- [ConsentPolicyError](../types/objects/ConsentPolicyError.md)
- [ConsentPolicyInput](../types/inputs/ConsentPolicyInput.md)
- [ConsentPolicyUpdatePayload](../types/objects/ConsentPolicyUpdatePayload.md)

## Example Mutation

```graphql
mutation ConsentPolicyUpdate($consentPolicies: [ConsentPolicyInput!]!) {
  consentPolicyUpdate(consentPolicies: $consentPolicies) {
    updatedPolicies {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
