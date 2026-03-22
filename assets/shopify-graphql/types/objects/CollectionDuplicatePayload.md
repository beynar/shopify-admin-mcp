# Object: `CollectionDuplicatePayload`

Return type for `collectionDuplicate` mutation.

## Fields

- `collection`: `Collection` — The newly created duplicate collection. Will contain all data if duplication completed synchronously.
- `job`: `Job` — The background job copying manually included products onto the target collection. Only returned if async processing is required, otherwise products will be copied synchronously when the collection is created.
- `userErrors`: `[CollectionDuplicateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Collection](../../types/objects/Collection.md)
- [CollectionDuplicateUserError](../../types/objects/CollectionDuplicateUserError.md)
- [Job](../../types/objects/Job.md)
