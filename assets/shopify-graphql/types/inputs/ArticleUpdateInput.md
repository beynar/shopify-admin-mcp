# Input Object: `ArticleUpdateInput`

The input fields to update an article.

## Input Fields

- `blogId`: `ID` — The ID of the blog containing the article.
- `handle`: `String` — A unique, human-friendly string for the article that's automatically generated from the article's title.
- `body`: `HTML` — The text of the article's body, complete with HTML markup.
- `summary`: `HTML` — A summary of the article, which can include HTML markup.
- `isPublished`: `Boolean` — Whether or not the article should be visible.
- `publishDate`: `DateTime` — The date and time (ISO 8601 format) when the article should become visible.
- `templateSuffix`: `String` — The suffix of the template that's used to render the page.
- `metafields`: `[MetafieldInput!]` — The input fields to create or update a metafield.
- `tags`: `[String!]` — A comma-separated list of tags.
- `image`: `ArticleImageInput` — The image associated with the article.
- `title`: `String` — The title of the article.
- `author`: `AuthorInput` — The name of the author of the article.
- `redirectNewHandle`: `Boolean` = `false` — Whether a redirect is required after a new handle has been provided.

## Related Types

- [ArticleImageInput](../../types/inputs/ArticleImageInput.md)
- [AuthorInput](../../types/inputs/AuthorInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
