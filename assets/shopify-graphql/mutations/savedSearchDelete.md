# Mutation: `savedSearchDelete`

**Returns:** `SavedSearchDeletePayload`

Delete a saved search.

## Arguments

- **`input`**: `SavedSearchDeleteInput!` — The input fields to delete a saved search.

## Payload Fields

- `deletedSavedSearchId`: `ID` — The ID of the saved search that was deleted.
- `shop`: `Shop!` — The shop of the saved search that was deleted.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SavedSearchDeleteInput](../types/inputs/SavedSearchDeleteInput.md)
- [SavedSearchDeletePayload](../types/objects/SavedSearchDeletePayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation SavedSearchDelete($input: SavedSearchDeleteInput!) {
  savedSearchDelete(input: $input) {
    deletedSavedSearchId
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
