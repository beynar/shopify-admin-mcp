# Mutation: `commentDelete`

**Returns:** `CommentDeletePayload`

Permanently removes a comment from a blog article.

For example, when a comment contains spam links or inappropriate language that violates store policies, merchants can delete it entirely.

Use the `commentDelete` mutation to:
- Remove spam or inappropriate comments permanently
- Clean up irrelevant discussions
- Maintain content standards on blog articles

Deletion is permanent and can't be undone.

## Arguments

- **`id`**: `ID!` — The ID of the comment to be deleted.

## Payload Fields

- `deletedCommentId`: `ID` — The ID of the comment that was deleted.
- `userErrors`: `[CommentDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CommentDeletePayload](../types/objects/CommentDeletePayload.md)
- [CommentDeleteUserError](../types/objects/CommentDeleteUserError.md)

## Example Mutation

```graphql
mutation CommentDelete($id: ID!) {
  commentDelete(id: $id) {
    deletedCommentId
    userErrors {
      field
      message
    }
  }
}
```
