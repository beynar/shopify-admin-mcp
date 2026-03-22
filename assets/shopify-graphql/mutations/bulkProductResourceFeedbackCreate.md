# Mutation: `bulkProductResourceFeedbackCreate`

**Returns:** `BulkProductResourceFeedbackCreatePayload`

Creates product feedback for multiple products.

## Arguments

- **`feedbackInput`**: `[ProductResourceFeedbackInput!]!` — An array of inputs to create the feedback. Limited to 50.

## Payload Fields

- `feedback`: `[ProductResourceFeedback!]` — The feedback that's created.
- `userErrors`: `[BulkProductResourceFeedbackCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BulkProductResourceFeedbackCreatePayload](../types/objects/BulkProductResourceFeedbackCreatePayload.md)
- [BulkProductResourceFeedbackCreateUserError](../types/objects/BulkProductResourceFeedbackCreateUserError.md)
- [ProductResourceFeedback](../types/objects/ProductResourceFeedback.md)
- [ProductResourceFeedbackInput](../types/inputs/ProductResourceFeedbackInput.md)

## Example Mutation

```graphql
mutation BulkProductResourceFeedbackCreate($feedbackInput: [ProductResourceFeedbackInput!]!) {
  bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
    feedback {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
