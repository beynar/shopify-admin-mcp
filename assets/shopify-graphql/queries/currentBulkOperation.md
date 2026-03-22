# Query: `currentBulkOperation`

**Returns:** `BulkOperation`

Returns the current app's most recent [`BulkOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation). Apps can run one bulk query and one bulk mutation operation at a time per shop.

The operation type parameter determines whether to retrieve the most recent query or mutation bulk operation. Use this query to check the operation's status, track its progress, and retrieve the result URL when it completes.

## Arguments

- **`type`**: `BulkOperationType` = `QUERY` — The current bulk operation's type.

## Return Type Fields

- `completedAt`: `DateTime` — When the bulk operation was successfully completed.
- `createdAt`: `DateTime!` — When the bulk operation was created.
- `errorCode`: `BulkOperationErrorCode` — Error code for failed operations.
- `fileSize`: `UnsignedInt64` — File size in bytes of the file in the `url` field.
- `id`: `ID!` — A globally-unique ID.
- `objectCount`: `UnsignedInt64!` — A running count of all the objects processed.
- `partialDataUrl`: `URL` — The URL that points to the partial or incomplete response data (in [JSONL](http://jsonlines.org/) format) that was returned by a failed operation.
- `query`: `String!` — GraphQL query document specified in `bulkOperationRunQuery`.
- `rootObjectCount`: `UnsignedInt64!` — A running count of all the objects that are processed at the root of the query.
- `status`: `BulkOperationStatus!` — Status of the bulk operation.
- `type`: `BulkOperationType!` — The bulk operation's type.
- `url`: `URL` — The URL that points to the response data in [JSONL](http://jsonlines.org/) format.

## Related Types

- [BulkOperation](../types/objects/BulkOperation.md)
- [BulkOperationErrorCode](../types/enums/BulkOperationErrorCode.md)
- [BulkOperationStatus](../types/enums/BulkOperationStatus.md)
- [BulkOperationType](../types/enums/BulkOperationType.md)

## Example Query

```graphql
query CurrentBulkOperation($type: BulkOperationType) {
  currentBulkOperation(type: $type) {
    completedAt
    createdAt
    fileSize
    objectCount
  }
}
```
