# Object: `Page`

A standalone content page in the online store. Pages display HTML-formatted content for informational pages like "About Us", contact information, or shipping policies.

Each page has a unique handle for URL routing and supports custom template suffixes for specialized layouts. Pages can be published or hidden, and include creation and update timestamps.

**Implements:** `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `HasPublishedTranslations`, `Navigable`, `Node`

## Fields

- `body`: `HTML!` — The text content of the page, complete with HTML markup.
- `bodySummary`: `String!` — The first 150 characters of the page body. If the page body contains more than 150 characters, additional characters are truncated by ellipses.
- `createdAt`: `DateTime!` — The date and time (ISO 8601 format) of the page creation.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `handle`: `String!` — A unique, human-friendly string for the page.
- `id`: `ID!` — A globally-unique ID.
- `isPublished`: `Boolean!` — Whether or not the page is visible.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `publishedAt`: `DateTime` — The date and time (ISO 8601 format) when the page became or will become visible.
- `templateSuffix`: `String` — The suffix of the template that's used to render the page.
- `title`: `String!` — Title of the page.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `updatedAt`: `DateTime!` — The date and time (ISO 8601 format) of the latest page update.

## Related Types

- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [Translation](../../types/objects/Translation.md)
