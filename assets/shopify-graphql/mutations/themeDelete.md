# Mutation: `themeDelete`

**Returns:** `ThemeDeletePayload`

Deletes a theme.

## Arguments

- **`id`**: `ID!` — The ID of the theme to be deleted.

## Payload Fields

- `deletedThemeId`: `ID` — The ID of the deleted theme.
- `userErrors`: `[ThemeDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ThemeDeletePayload](../types/objects/ThemeDeletePayload.md)
- [ThemeDeleteUserError](../types/objects/ThemeDeleteUserError.md)

## Example Mutation

```graphql
mutation ThemeDelete($id: ID!) {
  themeDelete(id: $id) {
    deletedThemeId
    userErrors {
      field
      message
    }
  }
}
```
