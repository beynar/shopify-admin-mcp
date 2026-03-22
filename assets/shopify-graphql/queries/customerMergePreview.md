# Query: `customerMergePreview`

**Returns:** `CustomerMergePreview!`

Returns a preview of a customer merge request.

## Arguments

- **`customerOneId`**: `ID!` — The ID of the first customer that will be merged.
- **`customerTwoId`**: `ID!` — The ID of the second customer that will be merged.
- **`overrideFields`**: `CustomerMergeOverrideFields` — The fields to override the default customer merge rules.

## Return Type Fields

- `alternateFields`: `CustomerMergePreviewAlternateFields` — The fields that can be used to override the default fields.
- `blockingFields`: `CustomerMergePreviewBlockingFields` — The fields that will block the merge if the two customers are merged.
- `customerMergeErrors`: `[CustomerMergeError!]` — The errors blocking the customer merge.
- `defaultFields`: `CustomerMergePreviewDefaultFields` — The fields that will be kept if the two customers are merged.
- `resultingCustomerId`: `ID` — The resulting customer ID if the two customers are merged.

## Related Types

- [CustomerMergeError](../types/objects/CustomerMergeError.md)
- [CustomerMergeOverrideFields](../types/inputs/CustomerMergeOverrideFields.md)
- [CustomerMergePreview](../types/objects/CustomerMergePreview.md)
- [CustomerMergePreviewAlternateFields](../types/objects/CustomerMergePreviewAlternateFields.md)
- [CustomerMergePreviewBlockingFields](../types/objects/CustomerMergePreviewBlockingFields.md)
- [CustomerMergePreviewDefaultFields](../types/objects/CustomerMergePreviewDefaultFields.md)

## Example Query

```graphql
query CustomerMergePreview($customerOneId: ID!, $customerTwoId: ID!, $overrideFields: CustomerMergeOverrideFields) {
  customerMergePreview(customerOneId: $customerOneId, customerTwoId: $customerTwoId, overrideFields: $overrideFields) {
    resultingCustomerId
  }
}
```
