# Mutation: `commentNotSpam`

**Returns:** `CommentNotSpamPayload`

Reverses a spam classification on a comment, restoring it to normal moderation status. This mutation allows merchants to change their decision when a comment has been manually marked as spam.

For example, when a merchant reviews comments marked as spam and finds a legitimate customer question, they can use this mutation to restore the comment's normal status and make it eligible for approval.

Use the `commentNotSpam` mutation to:
- Unmark comments that were marked as spam
- Restore comments to normal moderation status
- Move comments back to the approval queue

This action changes the comment's status from spam back to pending, where it can then be approved or managed according to standard moderation practices.

## Arguments

- **`id`**: `ID!` — The ID of the comment to be marked as not spam.

## Payload Fields

- `comment`: `Comment` — The comment that was marked as not spam.
- `userErrors`: `[CommentNotSpamUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Comment](../types/objects/Comment.md)
- [CommentNotSpamPayload](../types/objects/CommentNotSpamPayload.md)
- [CommentNotSpamUserError](../types/objects/CommentNotSpamUserError.md)

## Example Mutation

```graphql
mutation CommentNotSpam($id: ID!) {
  commentNotSpam(id: $id) {
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
