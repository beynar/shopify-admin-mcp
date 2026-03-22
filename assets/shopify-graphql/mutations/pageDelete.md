# Mutation: `pageDelete`

**Returns:** `PageDeletePayload`

Permanently deletes a page from the online store.

For example, merchants might delete seasonal landing pages after campaigns end, or remove outdated policy pages when terms change.

Use the `pageDelete` mutation to:
- Remove outdated or unnecessary pages
- Clean up seasonal landing pages
- Delete duplicate pages

The deletion is permanent and returns the deleted page's ID for confirmation.

## Arguments

- **`id`**: `ID!` — The ID of the page to be deleted.

## Payload Fields

- `deletedPageId`: `ID` — The ID of the deleted page.
- `userErrors`: `[PageDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [PageDeletePayload](../types/objects/PageDeletePayload.md)
- [PageDeleteUserError](../types/objects/PageDeleteUserError.md)

## Example Mutation

```graphql
mutation PageDelete($id: ID!) {
  pageDelete(id: $id) {
    deletedPageId
    userErrors {
      field
      message
    }
  }
}
```
