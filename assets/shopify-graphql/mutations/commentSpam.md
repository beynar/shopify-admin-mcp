# Mutation: `commentSpam`

**Returns:** `CommentSpamPayload`

Marks a comment as spam, removing it from public view. This mutation enables merchants to quickly handle unwanted promotional content, malicious links, or other spam that appears in blog discussions.

For example, when a comment contains suspicious links to unrelated products or services, merchants can mark it as spam to immediately hide it from customers.

Use the `commentSpam` mutation to:
- Hide promotional or malicious comments from public view
- Protect customers from potentially harmful links
- Maintain professional discussion quality on blog articles

Spam-marked comments can be reviewed later and potentially restored using the `commentNotSpam` mutation if they were incorrectly classified.

## Arguments

- **`id`**: `ID!` — The ID of the comment to be marked as spam.

## Payload Fields

- `comment`: `Comment` — The comment that was marked as spam.
- `userErrors`: `[CommentSpamUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Comment](../types/objects/Comment.md)
- [CommentSpamPayload](../types/objects/CommentSpamPayload.md)
- [CommentSpamUserError](../types/objects/CommentSpamUserError.md)

## Example Mutation

```graphql
mutation CommentSpam($id: ID!) {
  commentSpam(id: $id) {
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
