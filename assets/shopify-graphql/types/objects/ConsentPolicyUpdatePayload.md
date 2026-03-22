# Object: `ConsentPolicyUpdatePayload`

Return type for `consentPolicyUpdate` mutation.

## Fields

- `updatedPolicies`: `[ConsentPolicy!]` — All updated and created consent policies. The consent policies that haven't been modified as part of the mutation aren't returned.
- `userErrors`: `[ConsentPolicyError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ConsentPolicy](../../types/objects/ConsentPolicy.md)
- [ConsentPolicyError](../../types/objects/ConsentPolicyError.md)
