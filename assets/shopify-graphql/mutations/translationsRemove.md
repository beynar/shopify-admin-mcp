# Mutation: `translationsRemove`

**Returns:** `TranslationsRemovePayload`

Deletes translations.

## Arguments

- **`resourceId`**: `ID!` — ID of the translatable resource for which translations are being deleted.
- **`translationKeys`**: `[String!]!` — The list of translation keys.
- **`locales`**: `[String!]!` — The list of translation locales. Only locales returned in `shopLocales` are valid.
- **`marketIds`**: `[ID!]` — The list of market IDs.

## Payload Fields

- `translations`: `[Translation!]` — The translations that were deleted.
- `userErrors`: `[TranslationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Translation](../types/objects/Translation.md)
- [TranslationUserError](../types/objects/TranslationUserError.md)
- [TranslationsRemovePayload](../types/objects/TranslationsRemovePayload.md)

## Example Mutation

```graphql
mutation TranslationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) {
  translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) {
    translations {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
