# Mutation: `commentApprove`

**Returns:** `CommentApprovePayload`

Approves a pending comment, making it visible to store visitors on the associated blog article.

For example, when a customer submits a question about a product in a blog post, merchants can approve the comment to make it publicly visible.

Use the `commentApprove` mutation to:
- Publish pending comments after review
- Enable customer discussions on blog articles
- Maintain quality control over comments

Once approved, the comment becomes visible to all store visitors.

## Arguments

- **`id`**: `ID!` — The ID of the comment to be approved.

## Payload Fields

- `comment`: `Comment` — The comment that was approved.
- `userErrors`: `[CommentApproveUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Comment](../types/objects/Comment.md)
- [CommentApprovePayload](../types/objects/CommentApprovePayload.md)
- [CommentApproveUserError](../types/objects/CommentApproveUserError.md)

## Example Mutation

```graphql
mutation CommentApprove($id: ID!) {
  commentApprove(id: $id) {
    comment {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
