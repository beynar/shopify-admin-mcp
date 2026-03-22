# Mutation: `collectionDuplicate`

**Returns:** `CollectionDuplicatePayload`

Duplicates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

An existing collection ID and new title are required.

## Publication Duplication

Publications may be excluded by passing `copyPublications: false` in the input.

## Metafields
Metafield values are not duplicated if the unique values capability is enabled.

## Arguments

- **`input`**: `CollectionDuplicateInput!` — The input for duplicating a collection.

## Payload Fields

- `collection`: `Collection` — The newly created duplicate collection. Will contain all data if duplication completed synchronously.
- `job`: `Job` — The background job copying manually included products onto the target collection. Only returned if async processing is required, otherwise products will be copied synchronously when the collection is created.
- `userErrors`: `[CollectionDuplicateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Collection](../types/objects/Collection.md)
- [CollectionDuplicateInput](../types/inputs/CollectionDuplicateInput.md)
- [CollectionDuplicatePayload](../types/objects/CollectionDuplicatePayload.md)
- [CollectionDuplicateUserError](../types/objects/CollectionDuplicateUserError.md)
- [Job](../types/objects/Job.md)

## Example Mutation

```graphql
mutation CollectionDuplicate($input: CollectionDuplicateInput!) {
  collectionDuplicate(input: $input) {
    collection {
      id
    }
    job {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
