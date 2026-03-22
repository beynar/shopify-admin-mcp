# Object: `OnlineStoreTheme`

A theme for display on the storefront. Themes control the visual appearance and functionality of the online store through templates, stylesheets, and assets that determine how [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), and other content display to customers.

Each theme has a [role](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.role) that indicates its status. Main themes are live on the storefront, unpublished themes are inactive, demo themes require purchase before publishing, and development themes are temporary for previewing during development. The theme includes [translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.translations) for multi-language support.

**Implements:** `HasPublishedTranslations`, `Node`

## Fields

- `createdAt`: `DateTime!` — The date and time when the theme was created.
- `files` `(filenames, first, after)`: `OnlineStoreThemeFileConnection` — The files in the theme.
- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the theme, set by the merchant.
- `prefix`: `String!` — The prefix of the theme.
- `processing`: `Boolean!` — Whether the theme is processing.
- `processingFailed`: `Boolean!` — Whether the theme processing failed.
- `role`: `ThemeRole!` — The role of the theme.
- `themeStoreId`: `Int` — The theme store ID.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `updatedAt`: `DateTime!` — The date and time when the theme was last updated.

## Related Types

- [ThemeRole](../../types/enums/ThemeRole.md)
- [Translation](../../types/objects/Translation.md)
