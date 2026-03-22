# Mutation: `bulkOperationCancel`

**Returns:** `BulkOperationCancelPayload`

Starts the cancelation process of a running bulk operation.

There may be a short delay from when a cancelation starts until the operation is actually canceled.

## Arguments

- **`id`**: `ID!` — The ID of the bulk operation to cancel.

## Payload Fields

- `bulkOperation`: `BulkOperation` — The bulk operation to be canceled.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BulkOperation](../types/objects/BulkOperation.md)
- [BulkOperationCancelPayload](../types/objects/BulkOperationCancelPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation BulkOperationCancel($id: ID!) {
  bulkOperationCancel(id: $id) {
    bulkOperation {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
