# Mutation: `translationsRegister`

**Returns:** `TranslationsRegisterPayload`

Creates or updates translations for a resource's [translatable content](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent).

Each translation requires a digest value from the resource's translatable content. Use the [`translatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResource) query to get a resource's translatable content and digest values before creating translations. You can optionally scope translations to specific markets using the `marketId` field in each translation input.

Learn more about [managing translations](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

## Arguments

- **`resourceId`**: `ID!` — ID of the resource that is being translated.
- **`translations`**: `[TranslationInput!]!` — Specifies the input fields for a translation.

## Payload Fields

- `translations`: `[Translation!]` — The translations that were created or updated.
- `userErrors`: `[TranslationUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Translation](../types/objects/Translation.md)
- [TranslationInput](../types/inputs/TranslationInput.md)
- [TranslationUserError](../types/objects/TranslationUserError.md)
- [TranslationsRegisterPayload](../types/objects/TranslationsRegisterPayload.md)

## Example Mutation

```graphql
mutation TranslationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
  translationsRegister(resourceId: $resourceId, translations: $translations) {
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
