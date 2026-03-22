# Query: `translatableResource`

**Returns:** `TranslatableResource`

Retrieves a resource that has translatable fields. Returns the resource's [`Translation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation) objects for different locales and markets, along with the original [`TranslatableContent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent) and digest values needed to register new translations. Provides access to existing translations, translatable content with digest hashes for translation registration, and nested translatable resources like [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects or [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

## Arguments

- **`resourceId`**: `ID!` — Find a translatable resource by ID.

## Return Type Fields

- `nestedTranslatableResources`: `TranslatableResourceConnection!` — Nested translatable resources under the current resource.
- `resourceId`: `ID!` — GID of the resource.
- `translatableContent`: `[TranslatableContent!]!` — Translatable content.
- `translations`: `[Translation!]!` — Translatable content translations (includes unpublished locales).

## Related Types

- [TranslatableContent](../types/objects/TranslatableContent.md)
- [TranslatableResource](../types/objects/TranslatableResource.md)
- [Translation](../types/objects/Translation.md)

## Example Query

```graphql
query TranslatableResource($resourceId: ID!) {
  translatableResource(resourceId: $resourceId) {
    resourceId
  }
}
```
