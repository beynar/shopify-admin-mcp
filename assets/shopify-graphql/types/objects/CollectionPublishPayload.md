# Object: `CollectionPublishPayload`

Return type for `collectionPublish` mutation.

## Fields

- `collection`: `Collection` — The published collection.
- `collectionPublications`: `[CollectionPublication!]` — The channels where the collection has been published.
- `shop`: `Shop!` — The shop associated with the collection.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Collection](../../types/objects/Collection.md)
- [CollectionPublication](../../types/objects/CollectionPublication.md)
- [Shop](../../types/objects/Shop.md)
- [UserError](../../types/objects/UserError.md)
