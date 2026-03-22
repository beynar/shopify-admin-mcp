# Enum: `CollectionReorderProductsUserErrorCode`

Possible error codes that can be returned by `CollectionReorderProductsUserError`.

## Values

- `TOO_MANY_ATTEMPTS_TO_REORDER_PRODUCTS` — Products are currently being reordered. Please try again later.
- `COLLECTION_NOT_FOUND` — The collection was not found. Please check the collection ID and try again.
- `MANUALLY_SORTED_COLLECTION` — The collection is not manually sorted. Can't reorder products unless collection is manually sorted.
- `INVALID_MOVE` — The move is invalid.
