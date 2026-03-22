# Mutation: `collectionUnpublish`

**Returns:** `CollectionUnpublishPayload`

Unpublishes a collection.

## Arguments

- **`input`**: `CollectionUnpublishInput!` — Specify a collection to unpublish and the sales channels to remove it from.

## Payload Fields

- `collection`: `Collection` — The collection that has been unpublished.
- `shop`: `Shop!` — The shop associated with the collection.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Collection](../types/objects/Collection.md)
- [CollectionUnpublishInput](../types/inputs/CollectionUnpublishInput.md)
- [CollectionUnpublishPayload](../types/objects/CollectionUnpublishPayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CollectionUnpublish($input: CollectionUnpublishInput!) {
  collectionUnpublish(input: $input) {
    collection {
      id
    }
    shop {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
