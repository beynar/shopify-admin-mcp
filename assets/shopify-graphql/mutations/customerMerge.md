# Mutation: `customerMerge`

**Returns:** `CustomerMergePayload`

Merges two customers.

## Arguments

- **`customerOneId`**: `ID!` — The ID of the first customer that will be merged.
- **`customerTwoId`**: `ID!` — The ID of the second customer that will be merged.
- **`overrideFields`**: `CustomerMergeOverrideFields` — The fields to override the default customer merge rules.

## Payload Fields

- `job`: `Job` — The asynchronous job for merging the customers.
- `resultingCustomerId`: `ID` — The ID of the customer resulting from the merge.
- `userErrors`: `[CustomerMergeUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerMergeOverrideFields](../types/inputs/CustomerMergeOverrideFields.md)
- [CustomerMergePayload](../types/objects/CustomerMergePayload.md)
- [CustomerMergeUserError](../types/objects/CustomerMergeUserError.md)
- [Job](../types/objects/Job.md)

## Example Mutation

```graphql
mutation CustomerMerge($customerOneId: ID!, $customerTwoId: ID!, $overrideFields: CustomerMergeOverrideFields) {
  customerMerge(customerOneId: $customerOneId, customerTwoId: $customerTwoId, overrideFields: $overrideFields) {
    job {
      id
    }
    resultingCustomerId
    userErrors {
      field
      message
    }
  }
}
```
