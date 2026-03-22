# Mutation: `savedSearchCreate`

**Returns:** `SavedSearchCreatePayload`

Creates a saved search.

## Arguments

- **`input`**: `SavedSearchCreateInput!` — Specifies the input fields for a saved search.

## Payload Fields

- `savedSearch`: `SavedSearch` — The saved search that was created.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SavedSearch](../types/objects/SavedSearch.md)
- [SavedSearchCreateInput](../types/inputs/SavedSearchCreateInput.md)
- [SavedSearchCreatePayload](../types/objects/SavedSearchCreatePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation SavedSearchCreate($input: SavedSearchCreateInput!) {
  savedSearchCreate(input: $input) {
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
