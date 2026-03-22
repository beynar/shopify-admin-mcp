# Object: `CustomerMergePayload`

Return type for `customerMerge` mutation.

## Fields

- `job`: `Job` — The asynchronous job for merging the customers.
- `resultingCustomerId`: `ID` — The ID of the customer resulting from the merge.
- `userErrors`: `[CustomerMergeUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CustomerMergeUserError](../../types/objects/CustomerMergeUserError.md)
- [Job](../../types/objects/Job.md)
