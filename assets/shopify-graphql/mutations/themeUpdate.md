# Mutation: `themeUpdate`

**Returns:** `ThemeUpdatePayload`

Updates a theme.

## Arguments

- **`id`**: `ID!` — The ID of the theme to be updated.
- **`input`**: `OnlineStoreThemeInput!` — The attributes of the theme to be updated.

## Payload Fields

- `theme`: `OnlineStoreTheme` — The theme that was updated.
- `userErrors`: `[ThemeUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OnlineStoreTheme](../types/objects/OnlineStoreTheme.md)
- [OnlineStoreThemeInput](../types/inputs/OnlineStoreThemeInput.md)
- [ThemeUpdatePayload](../types/objects/ThemeUpdatePayload.md)
- [ThemeUpdateUserError](../types/objects/ThemeUpdateUserError.md)

## Example Mutation

```graphql
mutation ThemeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
  themeUpdate(id: $id, input: $input) {
    theme {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
