# Mutation: `bulkOperationRunMutation`

**Returns:** `BulkOperationRunMutationPayload`

Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to import data asynchronously. This mutation executes a specified GraphQL mutation multiple times using input data from a [JSONL](http://jsonlines.org/) file that you've uploaded to Shopify.

The operation processes each line in your JSONL file as a separate mutation execution. The operation delivers results in a JSONL file when it completes. You can run one bulk mutation operation at a time per shop, though a [`bulkOperationRunQuery`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery) operation can run simultaneously.

Learn more about [bulk importing data](https://shopify.dev/docs/api/usage/bulk-operations/imports).

## Arguments

- **`mutation`**: `String!` — The mutation to be executed in bulk.
- **`stagedUploadPath`**: `String!` — The staged upload path of the file containing mutation variables.
- **`clientIdentifier`**: `String` — An optional identifier which may be used for querying.

## Payload Fields

- `bulkOperation`: `BulkOperation` — The newly created bulk operation.
- `userErrors`: `[BulkMutationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BulkMutationUserError](../types/objects/BulkMutationUserError.md)
- [BulkOperation](../types/objects/BulkOperation.md)
- [BulkOperationRunMutationPayload](../types/objects/BulkOperationRunMutationPayload.md)

## Example Mutation

```graphql
mutation BulkOperationRunMutation($mutation: String!, $stagedUploadPath: String!, $clientIdentifier: String) {
  bulkOperationRunMutation(mutation: $mutation, stagedUploadPath: $stagedUploadPath, clientIdentifier: $clientIdentifier) {
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
