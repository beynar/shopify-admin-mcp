# Mutation: `articleCreate`

**Returns:** `ArticleCreatePayload`

Creates an [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). Articles are content pieces that include a title, body text, and author information.

You can publish the article immediately or schedule it with a specific publish date. You can customize the article's URL handle, apply custom templates for rendering, and add optional fields like [tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.tags), an [image](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.image), and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

The mutation validates article content and ensures proper blog association. Error handling provides specific feedback for content requirements.

## Arguments

- **`article`**: `ArticleCreateInput!` — The properties of the new article.
- **`blog`**: `ArticleBlogInput` — The properties of the new blog.

## Payload Fields

- `article`: `Article` — The article that was created.
- `userErrors`: `[ArticleCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Article](../types/objects/Article.md)
- [ArticleBlogInput](../types/inputs/ArticleBlogInput.md)
- [ArticleCreateInput](../types/inputs/ArticleCreateInput.md)
- [ArticleCreatePayload](../types/objects/ArticleCreatePayload.md)
- [ArticleCreateUserError](../types/objects/ArticleCreateUserError.md)

## Example Mutation

```graphql
mutation ArticleCreate($article: ArticleCreateInput!, $blog: ArticleBlogInput) {
  articleCreate(article: $article, blog: $blog) {
    article {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
