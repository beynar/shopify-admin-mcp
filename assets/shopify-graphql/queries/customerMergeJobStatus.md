# Query: `customerMergeJobStatus`

**Returns:** `CustomerMergeRequest`

Returns the status of a customer merge request job.

## Arguments

- **`jobId`**: `ID!` — The ID of the job performing the customer merge request.

## Return Type Fields

- `customerMergeErrors`: `[CustomerMergeError!]!` — The merge errors that occurred during the customer merge request.
- `jobId`: `ID` — The UUID of the merge job.
- `resultingCustomerId`: `ID!` — The ID of the customer resulting from the merge.
- `status`: `CustomerMergeRequestStatus!` — The status of the customer merge request.

## Related Types

- [CustomerMergeError](../types/objects/CustomerMergeError.md)
- [CustomerMergeRequest](../types/objects/CustomerMergeRequest.md)
- [CustomerMergeRequestStatus](../types/enums/CustomerMergeRequestStatus.md)

## Example Query

```graphql
query CustomerMergeJobStatus($jobId: ID!) {
  customerMergeJobStatus(jobId: $jobId) {
    jobId
    resultingCustomerId
  }
}
```
