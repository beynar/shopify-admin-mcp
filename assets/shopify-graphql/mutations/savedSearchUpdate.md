# Mutation: `savedSearchUpdate`

**Returns:** `SavedSearchUpdatePayload`

Updates a saved search.

## Arguments

- **`input`**: `SavedSearchUpdateInput!` — The input fields to update a saved search.

## Payload Fields

- `savedSearch`: `SavedSearch` — The saved search that was updated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SavedSearch](../types/objects/SavedSearch.md)
- [SavedSearchUpdateInput](../types/inputs/SavedSearchUpdateInput.md)
- [SavedSearchUpdatePayload](../types/objects/SavedSearchUpdatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation SavedSearchUpdate($input: SavedSearchUpdateInput!) {
  savedSearchUpdate(input: $input) {
    savedSearch {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
