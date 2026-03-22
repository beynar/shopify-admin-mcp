# Mutation: `productFeedDelete`

**Returns:** `ProductFeedDeletePayload`

Deletes a product feed for a specific publication.

## Arguments

- **`id`**: `ID!` — The ID of the product feed to be deleted.

## Payload Fields

- `deletedId`: `ID` — The ID of the product feed that was deleted.
- `userErrors`: `[ProductFeedDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductFeedDeletePayload](../types/objects/ProductFeedDeletePayload.md)
- [ProductFeedDeleteUserError](../types/objects/ProductFeedDeleteUserError.md)

## Example Mutation

```graphql
mutation ProductFeedDelete($id: ID!) {
  productFeedDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
    }
  }
}
```
