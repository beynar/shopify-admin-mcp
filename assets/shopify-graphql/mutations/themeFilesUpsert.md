# Mutation: `themeFilesUpsert`

**Returns:** `ThemeFilesUpsertPayload`

Creates or updates theme files in an online store theme. This mutation allows batch operations on multiple theme files, either creating new files or overwriting existing ones with the same filename.

> Note: You can process a maximum of 50 files in a single request.

Each file requires a filename and body content. The body must specify a [`type`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#arguments-files.fields.body.type) with the corresponding [`value`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#arguments-files.fields.body.value). The mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#returns-job) field for tracking asynchronous operations and an [`upsertedThemeFiles`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert#returns-upsertedThemeFiles) field with details about the processed files.

## Arguments

- **`themeId`**: `ID!` — The theme to update.
- **`files`**: `[OnlineStoreThemeFilesUpsertFileInput!]!` — The files to update.

## Payload Fields

- `job`: `Job` — The theme files write job triggered by the mutation.
- `upsertedThemeFiles`: `[OnlineStoreThemeFileOperationResult!]` — The resulting theme files.
- `userErrors`: `[OnlineStoreThemeFilesUserErrors!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [OnlineStoreThemeFileOperationResult](../types/objects/OnlineStoreThemeFileOperationResult.md)
- [OnlineStoreThemeFilesUpsertFileInput](../types/inputs/OnlineStoreThemeFilesUpsertFileInput.md)
- [OnlineStoreThemeFilesUserErrors](../types/objects/OnlineStoreThemeFilesUserErrors.md)
- [ThemeFilesUpsertPayload](../types/objects/ThemeFilesUpsertPayload.md)

## Example Mutation

```graphql
mutation ThemeFilesUpsert($themeId: ID!, $files: [OnlineStoreThemeFilesUpsertFileInput!]!) {
  themeFilesUpsert(themeId: $themeId, files: $files) {
    job {
      id
    }
    upsertedThemeFiles {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
