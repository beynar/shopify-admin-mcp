# Mutation: `themeFilesCopy`

**Returns:** `ThemeFilesCopyPayload`

Copy theme files. Copying to existing theme files will overwrite them.

## Arguments

- **`themeId`**: `ID!` — The theme to update.
- **`files`**: `[ThemeFilesCopyFileInput!]!` — The files to update.

## Payload Fields

- `copiedThemeFiles`: `[OnlineStoreThemeFileOperationResult!]` — The resulting theme files.
- `userErrors`: `[OnlineStoreThemeFilesUserErrors!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OnlineStoreThemeFileOperationResult](../types/objects/OnlineStoreThemeFileOperationResult.md)
- [OnlineStoreThemeFilesUserErrors](../types/objects/OnlineStoreThemeFilesUserErrors.md)
- [ThemeFilesCopyFileInput](../types/inputs/ThemeFilesCopyFileInput.md)
- [ThemeFilesCopyPayload](../types/objects/ThemeFilesCopyPayload.md)

## Example Mutation

```graphql
mutation ThemeFilesCopy($themeId: ID!, $files: [ThemeFilesCopyFileInput!]!) {
  themeFilesCopy(themeId: $themeId, files: $files) {
    copiedThemeFiles {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
