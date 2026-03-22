# Object: `CustomerMergePreview`

A preview of the results of a customer merge request.

## Fields

- `alternateFields`: `CustomerMergePreviewAlternateFields` — The fields that can be used to override the default fields.
- `blockingFields`: `CustomerMergePreviewBlockingFields` — The fields that will block the merge if the two customers are merged.
- `customerMergeErrors`: `[CustomerMergeError!]` — The errors blocking the customer merge.
- `defaultFields`: `CustomerMergePreviewDefaultFields` — The fields that will be kept if the two customers are merged.
- `resultingCustomerId`: `ID` — The resulting customer ID if the two customers are merged.

## Related Types

- [CustomerMergeError](../../types/objects/CustomerMergeError.md)
- [CustomerMergePreviewAlternateFields](../../types/objects/CustomerMergePreviewAlternateFields.md)
- [CustomerMergePreviewBlockingFields](../../types/objects/CustomerMergePreviewBlockingFields.md)
- [CustomerMergePreviewDefaultFields](../../types/objects/CustomerMergePreviewDefaultFields.md)
