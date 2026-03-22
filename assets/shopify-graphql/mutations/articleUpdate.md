# Mutation: `articleUpdate`

**Returns:** `ArticleUpdatePayload`

Updates an existing [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). You can modify the article's content, metadata, publication status, and associated properties like author information and tags.

If you update the [`handle`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate#arguments-article.fields.handle), then you can optionally create a redirect from the old URL to the new one by setting [`redirectNewHandle`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate#arguments-article.fields.redirectNewHandle) to `true`.

## Arguments

- **`id`**: `ID!` — The ID of the article to be updated.
- **`article`**: `ArticleUpdateInput!` — The properties of the article to be updated.
- **`blog`**: `ArticleBlogInput` — The properties of the blog to be created.

## Payload Fields

- `article`: `Article` — The article that was updated.
- `userErrors`: `[ArticleUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Article](../types/objects/Article.md)
- [ArticleBlogInput](../types/inputs/ArticleBlogInput.md)
- [ArticleUpdateInput](../types/inputs/ArticleUpdateInput.md)
- [ArticleUpdatePayload](../types/objects/ArticleUpdatePayload.md)
- [ArticleUpdateUserError](../types/objects/ArticleUpdateUserError.md)

## Example Mutation

```graphql
mutation ArticleUpdate($id: ID!, $article: ArticleUpdateInput!, $blog: ArticleBlogInput) {
  articleUpdate(id: $id, article: $article, blog: $blog) {
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
