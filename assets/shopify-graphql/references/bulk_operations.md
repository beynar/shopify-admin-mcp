# Bulk Operations: Bulk operations, file uploads, staged uploads

## Queries (4)

- **[bulkOperation](../queries/bulkOperation.md)** → `BulkOperation` `(id)`
  Returns a `BulkOperation` resource by ID.
- **[bulkOperations](../queries/bulkOperations.md)** → `BulkOperationConnection!` `(first, after, last, before, reverse, sortKey, query)`
  Returns the app's bulk operations meeting the specified filters. Defaults to sorting by created_at, with newest operations first.
- **[fileSavedSearches](../queries/fileSavedSearches.md)** → `SavedSearchConnection!` `(first, after, last, before, reverse)`
  A list of the shop's file saved searches.
- **[files](../queries/files.md)** → `FileConnection!` `(first, after, last, before, reverse, sortKey, query, savedSearchId)`
  Retrieves a paginated list of files that have been uploaded to a Shopify store. Files represent digital assets

## Mutations (11)

- **[bulkOperationCancel](../mutations/bulkOperationCancel.md)** → `BulkOperationCancelPayload` `(id)`
  Starts the cancelation process of a running bulk operation.
- **[bulkOperationRunMutation](../mutations/bulkOperationRunMutation.md)** → `BulkOperationRunMutationPayload` `(mutation, stagedUploadPath, clientIdentifier)`
  Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to import data asynchronously. This mutat
- **[bulkOperationRunQuery](../mutations/bulkOperationRunQuery.md)** → `BulkOperationRunQueryPayload` `(query, groupObjects)`
  Creates and runs a [bulk operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to fetch data asynchronously. The operati
- **[dataSaleOptOut](../mutations/dataSaleOptOut.md)** → `DataSaleOptOutPayload` `(email)`
  Opt out a customer from data sale.
- **[fileAcknowledgeUpdateFailed](../mutations/fileAcknowledgeUpdateFailed.md)** → `FileAcknowledgeUpdateFailedPayload` `(fileIds)`
  Acknowledges file update failure by resetting FAILED status to READY and clearing any media errors.
- **[fileCreate](../mutations/fileCreate.md)** → `FileCreatePayload` `(files)`
  Creates file assets for a store from external URLs or files that were previously uploaded using the
- **[fileDelete](../mutations/fileDelete.md)** → `FileDeletePayload` `(fileIds)`
  Deletes file assets that were previously uploaded to your store.
- **[fileUpdate](../mutations/fileUpdate.md)** → `FileUpdatePayload` `(files)`
  Updates properties, content, and metadata associated with an existing file asset that has already been uploaded to Shopify.
- **[stagedUploadTargetGenerate](../mutations/stagedUploadTargetGenerate.md)** → `StagedUploadTargetGeneratePayload` `(input)`
  Generates the URL and signed paramaters needed to upload an asset to Shopify.
- **[stagedUploadTargetsGenerate](../mutations/stagedUploadTargetsGenerate.md)** → `StagedUploadTargetsGeneratePayload` `(input)`
  Uploads multiple images.
- **[stagedUploadsCreate](../mutations/stagedUploadsCreate.md)** → `StagedUploadsCreatePayload` `(input)`
  Creates staged upload targets for file uploads such as images, videos, and 3D models.
