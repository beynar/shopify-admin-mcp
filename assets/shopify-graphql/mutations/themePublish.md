# Mutation: `themePublish`

**Returns:** `ThemePublishPayload`

Publishes a theme.

## Arguments

- **`id`**: `ID!` — ID of the theme to be published.

## Payload Fields

- `theme`: `OnlineStoreTheme` — The theme that was published.
- `userErrors`: `[ThemePublishUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OnlineStoreTheme](../types/objects/OnlineStoreTheme.md)
- [ThemePublishPayload](../types/objects/ThemePublishPayload.md)
- [ThemePublishUserError](../types/objects/ThemePublishUserError.md)

## Example Mutation

```graphql
mutation ThemePublish($id: ID!) {
  themePublish(id: $id) {
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
