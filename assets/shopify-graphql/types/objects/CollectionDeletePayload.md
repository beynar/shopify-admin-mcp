# Object: `CollectionDeletePayload`

Return type for `collectionDelete` mutation.

## Fields

- `deletedCollectionId`: `ID` — The ID of the collection that was deleted. Returns `null` if the collection doesn't exist.
- `shop`: `Shop!` — The shop associated with the collection.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Shop](../../types/objects/Shop.md)
- [UserError](../../types/objects/UserError.md)
