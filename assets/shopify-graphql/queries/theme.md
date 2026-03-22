# Query: `theme`

**Returns:** `OnlineStoreTheme`

Returns an [`OnlineStoreTheme`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme) by its ID. Use this query to retrieve theme metadata and access the theme's [`files`](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme#returns-OnlineStoreTheme.fields.files), which include templates, assets, [translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-published_translations), and configuration files.

## Arguments

- **`id`**: `ID!` — The ID of the theme.

## Return Type Fields

- `createdAt`: `DateTime!` — The date and time when the theme was created.
- `files`: `OnlineStoreThemeFileConnection` — The files in the theme.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the theme, set by the merchant.
- `prefix`: `String!` — The prefix of the theme.
- `processing`: `Boolean!` — Whether the theme is processing.
- `processingFailed`: `Boolean!` — Whether the theme processing failed.
- `role`: `ThemeRole!` — The role of the theme.
- `themeStoreId`: `Int` — The theme store ID.
- `translations`: `[Translation!]!` — The published translations associated with the resource.
- `updatedAt`: `DateTime!` — The date and time when the theme was last updated.

## Related Types

- [OnlineStoreTheme](../types/objects/OnlineStoreTheme.md)
- [ThemeRole](../types/enums/ThemeRole.md)
- [Translation](../types/objects/Translation.md)

## Example Query

```graphql
query Theme($id: ID!) {
  theme(id: $id) {
    createdAt
    name
    prefix
    processing
  }
}
```
