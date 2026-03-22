# Input Object: `CollectionInput`

The input fields required to create a collection.

## Input Fields

- `descriptionHtml`: `String` — The description of the collection, in HTML format.
- `handle`: `String` — A unique human-friendly string for the collection. Automatically generated from the collection's title.
- `id`: `ID` — Specifies the collection to update or create a new collection if absent. Required for updating a collection.
- `image`: `ImageInput` — The image associated with the collection.
- `products`: `[ID!]` — Initial list of collection products. Only valid with `collectionCreate` and without rules.
- `ruleSet`: `CollectionRuleSetInput` — The rules used to assign products to the collection.
- `templateSuffix`: `String` — The theme template used when viewing the collection in a store.
- `sortOrder`: `CollectionSortOrder` — The order in which the collection's products are sorted.
- `title`: `String` — The title of the collection. Required for creating a new collection.
- `metafields`: `[MetafieldInput!]` — The metafields to associate with the collection.
- `seo`: `SEOInput` — SEO information for the collection.
- `redirectNewHandle`: `Boolean` = `false` — Indicates whether a redirect is required after a new handle has been provided.

## Related Types

- [CollectionRuleSetInput](../../types/inputs/CollectionRuleSetInput.md)
- [CollectionSortOrder](../../types/enums/CollectionSortOrder.md)
- [ImageInput](../../types/inputs/ImageInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
- [SEOInput](../../types/inputs/SEOInput.md)
