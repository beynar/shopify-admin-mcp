# Object: `ThemeFilesUpsertPayload`

Return type for `themeFilesUpsert` mutation.

## Fields

- `job`: `Job` — The theme files write job triggered by the mutation.
- `upsertedThemeFiles`: `[OnlineStoreThemeFileOperationResult!]` — The resulting theme files.
- `userErrors`: `[OnlineStoreThemeFilesUserErrors!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../../types/objects/Job.md)
- [OnlineStoreThemeFileOperationResult](../../types/objects/OnlineStoreThemeFileOperationResult.md)
- [OnlineStoreThemeFilesUserErrors](../../types/objects/OnlineStoreThemeFilesUserErrors.md)
