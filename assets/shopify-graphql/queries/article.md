# Query: `article`

**Returns:** `Article`

Returns a `Article` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `Article` to return.

## Return Type Fields

- `author`: `ArticleAuthor` — The name of the author of the article.
- `blog`: `Blog!` — The blog containing the article.
- `body`: `HTML!` — The text of the article's body, complete with HTML markup.
- `comments`: `CommentConnection!` — List of the article's comments.
- `commentsCount`: `Count` — Count of comments. Limited to a maximum of 10000 by default.
- `createdAt`: `DateTime!` — The date and time (ISO 8601 format) when the article was created.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `handle`: `String!` — A unique, human-friendly string for the article that's automatically generated from the article's title.
- `id`: `ID!` — A globally-unique ID.
- `image`: `Image` — The image associated with the article.
- `isPublished`: `Boolean!` — Whether or not the article is visible.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `publishedAt`: `DateTime` — The date and time (ISO 8601 format) when the article became or will become visible.
- `summary`: `HTML` — A summary of the article, which can include HTML markup.
- `tags`: `[String!]!` — A comma-separated list of tags.
- `templateSuffix`: `String` — The name of the template an article is using if it's using an alternate template.
- `title`: `String!` — The title of the article.
- `translations`: `[Translation!]!` — The published translations associated with the resource.
- `updatedAt`: `DateTime` — The date and time (ISO 8601 format) when the article was last updated.

## Related Types

- [Article](../types/objects/Article.md)
- [ArticleAuthor](../types/objects/ArticleAuthor.md)
- [Blog](../types/objects/Blog.md)
- [Count](../types/objects/Count.md)
- [Image](../types/objects/Image.md)
- [Metafield](../types/objects/Metafield.md)
- [Translation](../types/objects/Translation.md)

## Example Query

```graphql
query Article($id: ID!) {
  article(id: $id) {
    body
    createdAt
    defaultCursor
    handle
  }
}
```
