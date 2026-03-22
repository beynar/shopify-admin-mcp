# Mutation: `themeCreate`

**Returns:** `ThemeCreatePayload`

Creates a theme from an external URL or staged upload. The theme source can either be a ZIP file hosted at a public URL or files previously uploaded using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation. The theme displays in the [Themes page](https://admin.shopify.com/themes) in the Shopify admin.

New themes have an [`UNPUBLISHED`](https://shopify.dev//docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.UNPUBLISHED) role by default. You can optionally specify a [`DEVELOPMENT`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate#arguments-role.enums.DEVELOPMENT) role for temporary themes used during development.

## Arguments

- **`source`**: `URL!` — An external URL or a [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate) of the theme to import.
- **`name`**: `String` — The name of the theme to be created.
- **`role`**: `ThemeRole` = `UNPUBLISHED` — The role of the theme to be created. Only UNPUBLISHED and DEVELOPMENT roles are permitted.

## Payload Fields

- `theme`: `OnlineStoreTheme` — The theme that was created.
- `userErrors`: `[ThemeCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OnlineStoreTheme](../types/objects/OnlineStoreTheme.md)
- [ThemeCreatePayload](../types/objects/ThemeCreatePayload.md)
- [ThemeCreateUserError](../types/objects/ThemeCreateUserError.md)
- [ThemeRole](../types/enums/ThemeRole.md)

## Example Mutation

```graphql
mutation ThemeCreate($source: URL!, $name: String, $role: ThemeRole) {
  themeCreate(source: $source, name: $name, role: $role) {
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
