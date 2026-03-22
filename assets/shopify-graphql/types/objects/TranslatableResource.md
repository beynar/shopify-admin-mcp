# Object: `TranslatableResource`

A resource in Shopify that contains fields available for translation into different languages. Accesses the resource's translatable content, existing [`Translation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation) objects, and any nested resources that can also be translated.

The [`TranslatableContent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent) includes field keys, values, and digest hashes needed when [registering translations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister).

You can retrieve translations for specific [`Locale`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale) and [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) configurations. Each translation includes an `outdated` flag indicating whether the original content has changed since that translation was last updated.

Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

## Fields

- `nestedTranslatableResources` `(resourceType, first, after, last, before, reverse)`: `TranslatableResourceConnection!` — Nested translatable resources under the current resource.
- `resourceId`: `ID!` — GID of the resource.
- `translatableContent` `(marketId)`: `[TranslatableContent!]!` — Translatable content.
- `translations` `(locale, outdated, marketId)`: `[Translation!]!` — Translatable content translations (includes unpublished locales).

## Related Types

- [TranslatableContent](../../types/objects/TranslatableContent.md)
- [TranslatableResourceType](../../types/enums/TranslatableResourceType.md)
- [Translation](../../types/objects/Translation.md)
