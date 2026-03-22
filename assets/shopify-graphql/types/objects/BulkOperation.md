# Object: `BulkOperation`

An asynchronous operation that exports large datasets or imports data in bulk. Create bulk operations using [bulkOperationRunQuery](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery) to export data or [bulkOperationRunMutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) to import data.

After creation, check the [`status`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.status) field to track progress. When completed, the [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.url) field contains a link to download results in [JSONL](http://jsonlines.org/) format. The [`objectCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.objectCount) field shows the running total of processed objects, while [`rootObjectCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.rootObjectCount) tracks only root-level objects in nested queries.

If an operation fails but retrieves partial data, then the [`partialDataUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.partialDataUrl) field provides access to incomplete results.

> Note: `url` and `partialDataUrl` values expire after seven days.

Learn more about [exporting](https://shopify.dev/docs/api/usage/bulk-operations/queries) and [importing](https://shopify.dev/docs/api/usage/bulk-operations/imports) data in bulk.

**Implements:** `Node`

## Fields

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

- [BulkOperationErrorCode](../../types/enums/BulkOperationErrorCode.md)
- [BulkOperationStatus](../../types/enums/BulkOperationStatus.md)
- [BulkOperationType](../../types/enums/BulkOperationType.md)
