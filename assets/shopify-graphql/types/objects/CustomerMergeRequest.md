# Object: `CustomerMergeRequest`

A merge request for merging two customers.

## Fields

- `customerMergeErrors`: `[CustomerMergeError!]!` — The merge errors that occurred during the customer merge request.
- `jobId`: `ID` — The UUID of the merge job.
- `resultingCustomerId`: `ID!` — The ID of the customer resulting from the merge.
- `status`: `CustomerMergeRequestStatus!` — The status of the customer merge request.

## Related Types

- [CustomerMergeError](../../types/objects/CustomerMergeError.md)
- [CustomerMergeRequestStatus](../../types/enums/CustomerMergeRequestStatus.md)
