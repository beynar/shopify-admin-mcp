# Mutation: `collectionDelete`

**Returns:** `CollectionDeletePayload`

Deletes a collection and removes it permanently from the store. This operation cannot be undone and will remove the collection from all sales channels where it was published.

For example, when merchants discontinue seasonal promotions or reorganize their catalog structure, they can delete outdated collections like "Back to School 2023" to keep their store organized.

Use `CollectionDelete` to:
- Remove outdated or unused collections from stores
- Clean up collection structures during catalog reorganization
- Implement collection management tools with deletion capabilities

Products within the deleted collection remain in the store but are no longer grouped under that collection.

Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

## Arguments

- **`input`**: `CollectionDeleteInput!` — The collection to delete.

## Payload Fields

- `deletedCollectionId`: `ID` — The ID of the collection that was deleted. Returns `null` if the collection doesn't exist.
- `shop`: `Shop!` — The shop associated with the collection.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CollectionDeleteInput](../types/inputs/CollectionDeleteInput.md)
- [CollectionDeletePayload](../types/objects/CollectionDeletePayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation CollectionDelete($input: CollectionDeleteInput!) {
  collectionDelete(input: $input) {
    deletedCollectionId
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
