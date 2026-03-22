# Mutation: `blogDelete`

**Returns:** `BlogDeletePayload`

Permanently deletes a blog from a shop. This mutation removes the blog container and its organizational structure.

For example, when consolidating multiple seasonal blogs into a single year-round content strategy, merchants can use this mutation to remove unused blogs.

Use the `blogDelete` mutation to:
- Remove unused or outdated blogs
- Consolidate content organization
- Clean up blog structure

The deletion is permanent and returns the deleted blog's ID for confirmation.

## Arguments

- **`id`**: `ID!` — The ID of the blog to be deleted.

## Payload Fields

- `deletedBlogId`: `ID` — The ID of the deleted blog.
- `userErrors`: `[BlogDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BlogDeletePayload](../types/objects/BlogDeletePayload.md)
- [BlogDeleteUserError](../types/objects/BlogDeleteUserError.md)

## Example Mutation

```graphql
mutation BlogDelete($id: ID!) {
  blogDelete(id: $id) {
    deletedBlogId
    userErrors {
      field
      message
    }
  }
}
```
