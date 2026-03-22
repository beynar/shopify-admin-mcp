# Mutation: `themeDuplicate`

**Returns:** `ThemeDuplicatePayload`

Duplicates a theme.

## Arguments

- **`id`**: `ID!` — ID of the theme to be duplicated.
- **`name`**: `String` — Name of the new theme.

## Payload Fields

- `newTheme`: `OnlineStoreTheme` — The newly duplicated theme.
- `userErrors`: `[ThemeDuplicateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OnlineStoreTheme](../types/objects/OnlineStoreTheme.md)
- [ThemeDuplicatePayload](../types/objects/ThemeDuplicatePayload.md)
- [ThemeDuplicateUserError](../types/objects/ThemeDuplicateUserError.md)

## Example Mutation

```graphql
mutation ThemeDuplicate($id: ID!, $name: String) {
  themeDuplicate(id: $id, name: $name) {
    newTheme {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
