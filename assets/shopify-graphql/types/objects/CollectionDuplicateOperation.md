# Object: `CollectionDuplicateOperation`

Represents an in-progress collection duplication operation. Collection duplication is a synchronous operation for simple collections, and an asynchronous operation for collections containing too many products to process synchronously.

## Fields

- `collectionRole`: `CollectionDuplicateOperationRole!` — Whether the collection is the source that products are being duplicated from, or the target collection that products are being duplicated onto.
- `job`: `Job!` — The background job performing the duplication.

## Related Types

- [CollectionDuplicateOperationRole](../../types/enums/CollectionDuplicateOperationRole.md)
- [Job](../../types/objects/Job.md)
