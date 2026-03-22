# Mutation: `collectionPublish`

**Returns:** `CollectionPublishPayload`

Publishes a collection to a channel.

## Arguments

- **`input`**: `CollectionPublishInput!` — Specify a collection to publish and the sales channels to publish it to.

## Payload Fields

- `collection`: `Collection` — The published collection.
- `collectionPublications`: `[CollectionPublication!]` — The channels where the collection has been published.
- `shop`: `Shop!` — The shop associated with the collection.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Collection](../types/objects/Collection.md)
- [CollectionPublication](../types/objects/CollectionPublication.md)
- [CollectionPublishInput](../types/inputs/CollectionPublishInput.md)
- [CollectionPublishPayload](../types/objects/CollectionPublishPayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CollectionPublish($input: CollectionPublishInput!) {
  collectionPublish(input: $input) {
    collection {
      id
    }
    collectionPublications {
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
