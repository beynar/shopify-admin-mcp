# Mutation: `articleDelete`

**Returns:** `ArticleDeletePayload`

Permanently deletes a blog article from a shop's blog. This mutation removes the article and all associated metadata.

For example, when outdated product information or seasonal content needs removal, merchants can use this mutation to clean up their blog.

Use the `articleDelete` mutation to:
- Remove outdated or incorrect blog content
- Clean up seasonal or time-sensitive articles
- Maintain blog organization

The deletion is permanent and returns the deleted article's ID for confirmation.

## Arguments

- **`id`**: `ID!` — The ID of the article to be deleted.

## Payload Fields

- `deletedArticleId`: `ID` — The ID of the deleted article.
- `userErrors`: `[ArticleDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ArticleDeletePayload](../types/objects/ArticleDeletePayload.md)
- [ArticleDeleteUserError](../types/objects/ArticleDeleteUserError.md)

## Example Mutation

```graphql
mutation ArticleDelete($id: ID!) {
  articleDelete(id: $id) {
    deletedArticleId
    userErrors {
      field
      message
    }
  }
}
```
