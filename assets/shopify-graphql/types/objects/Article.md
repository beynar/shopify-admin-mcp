# Object: `Article`

An article that contains content, author information, and metadata. Articles belong to a [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) and can include HTML-formatted body text, summary text, and an associated image. Merchants publish articles to share content, drive traffic, and engage customers.

Articles can be organized with tags and published immediately or scheduled for future publication using the [`publishedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt) timestamp. The API manages comments on articles when the blog's comment policy enables them.

**Implements:** `HasEvents`, `HasMetafieldDefinitions`, `HasMetafields`, `HasPublishedTranslations`, `Navigable`, `Node`

## Fields

- `author`: `ArticleAuthor` — The name of the author of the article.
- `blog`: `Blog!` — The blog containing the article.
- `body`: `HTML!` — The text of the article's body, complete with HTML markup.
- `comments` `(first, after, last, before, reverse, query)`: `CommentConnection!` — List of the article's comments.
- `commentsCount` `(query, limit)`: `Count` — Count of comments. Limited to a maximum of 10000 by default.
- `createdAt`: `DateTime!` — The date and time (ISO 8601 format) when the article was created.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `events` `(first, after, last, before, reverse, sortKey, query)`: `EventConnection!` — The paginated list of events associated with the host subject.
- `handle`: `String!` — A unique, human-friendly string for the article that's automatically generated from the article's title.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` — The image associated with the article.
- `isPublished`: `Boolean!` — Whether or not the article is visible.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `publishedAt`: `DateTime` — The date and time (ISO 8601 format) when the article became or will become visible.
- `summary`: `HTML` — A summary of the article, which can include HTML markup.
- `tags`: `[String!]!` — A comma-separated list of tags.
- `templateSuffix`: `String` — The name of the template an article is using if it's using an alternate template.
- `title`: `String!` — The title of the article.
- `translations` `(locale, marketId)`: `[Translation!]!` — The published translations associated with the resource.
- `updatedAt`: `DateTime` — The date and time (ISO 8601 format) when the article was last updated.

## Related Types

- [ArticleAuthor](../../types/objects/ArticleAuthor.md)
- [Blog](../../types/objects/Blog.md)
- [Count](../../types/objects/Count.md)
- [EventSortKeys](../../types/enums/EventSortKeys.md)
- [Image](../../types/objects/Image.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [Translation](../../types/objects/Translation.md)
