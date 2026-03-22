# Object: `Blog`

A blog for publishing articles in the online store. Stores can have multiple blogs to organize content by topic or purpose.

Each blog contains articles with their associated comments, tags, and metadata. The comment policy controls whether readers can post comments and whether moderation is required. Blogs use customizable URL handles and can apply alternate templates for specialized layouts.

**Implements:** `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `HasPublishedTranslations`, `Node`

## Fields

- `articles` `(first, after, last, before, reverse)`: `ArticleConnection!` — List of the blog's articles.
- `articlesCount` `(limit)`: `Count` — Count of articles. Limited to a maximum of 10000 by default.
- `commentPolicy`: `CommentPolicy!` — Indicates whether readers can post comments to the blog and if comments are moderated or not.
- `createdAt`: `DateTime!` — The date and time when the blog was created.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `feed`: `BlogFeed` — FeedBurner provider details. Any blogs that aren't already integrated with FeedBurner can't use the service.
- `handle`: `String!` — A unique, human-friendly string for the blog. If no handle is specified, a handle will be generated automatically from the blog title.
- `id`: `ID!` — A globally-unique ID.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `tags`: `[String!]!` — A list of tags associated with the 200 most recent blog articles.
- `templateSuffix`: `String` — The name of the template a blog is using if it's using an alternate template.
- `title`: `String!` — The title of the blog.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `updatedAt`: `DateTime` — The date and time when the blog was update.

## Related Types

- [BlogFeed](../../types/objects/BlogFeed.md)
- [CommentPolicy](../../types/enums/CommentPolicy.md)
- [Count](../../types/objects/Count.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [Translation](../../types/objects/Translation.md)
