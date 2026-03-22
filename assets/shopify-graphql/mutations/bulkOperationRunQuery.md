# Mutation: `bulkOperationRunQuery`

**Returns:** `BulkOperationRunQueryPayload`

Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to fetch data asynchronously. The operation processes your GraphQL query in the background and returns results in a [JSONL](http://jsonlines.org/) file when complete.

Apps can run one bulk query operation and one bulk mutation operation at a time per shop. The query must include at least one connection field and supports up to five connections with a maximum nesting depth of two levels.

> Note: Results remain available for seven days after completion.

For more information, see the [bulk operations guide](https://shopify.dev/docs/api/usage/bulk-operations/queries).

## Arguments

- **`query`**: `String!` — The query to be executed in bulk.
- **`groupObjects`**: `Boolean!` = `false` — Enables grouping objects directly under their corresponding parent objects in the JSONL output. Enabling grouping slows down bulk operations and increases the likelihood of timeouts. Only enable grouping if you depend on the grouped format.

## Payload Fields

- `bulkOperation`: `BulkOperation` — The newly created bulk operation.
- `userErrors`: `[BulkOperationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BulkOperation](../types/objects/BulkOperation.md)
- [BulkOperationRunQueryPayload](../types/objects/BulkOperationRunQueryPayload.md)
- [BulkOperationUserError](../types/objects/BulkOperationUserError.md)

## Example Mutation

```graphql
mutation BulkOperationRunQuery($query: String!, $groupObjects: Boolean!) {
  bulkOperationRunQuery(query: $query, groupObjects: $groupObjects) {
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
