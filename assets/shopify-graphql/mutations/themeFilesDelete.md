# Mutation: `themeFilesDelete`

**Returns:** `ThemeFilesDeletePayload`

Deletes a theme's files.

## Arguments

- **`themeId`**: `ID!` — Specifies the theme to deleted.
- **`files`**: `[String!]!` — The files to delete.

## Payload Fields

- `deletedThemeFiles`: `[OnlineStoreThemeFileOperationResult!]` — The resulting theme files.
- `userErrors`: `[OnlineStoreThemeFilesUserErrors!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OnlineStoreThemeFileOperationResult](../types/objects/OnlineStoreThemeFileOperationResult.md)
- [OnlineStoreThemeFilesUserErrors](../types/objects/OnlineStoreThemeFilesUserErrors.md)
- [ThemeFilesDeletePayload](../types/objects/ThemeFilesDeletePayload.md)

## Example Mutation

```graphql
mutation ThemeFilesDelete($themeId: ID!, $files: [String!]!) {
  themeFilesDelete(themeId: $themeId, files: $files) {
    deletedThemeFiles {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
