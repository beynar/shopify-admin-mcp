# Mutation: `blogUpdate`

**Returns:** `BlogUpdatePayload`

Updates an existing blog's configuration and settings. This mutation allows merchants to modify blog properties to keep their content strategy current.

For example, a merchant might update their blog's title from "Company News" to "Sustainability Stories" when shifting their content focus, or modify the handle to improve URL structure.

Use the `blogUpdate` mutation to:
- Change blog titles for rebranding
- Modify blog handles for better URLs
- Adjust comment settings and moderation preferences

The mutation returns the updated blog with any validation errors.

## Arguments

- **`id`**: `ID!` — The ID of the blog to be updated.
- **`blog`**: `BlogUpdateInput!` — The properties of the blog to be updated.

## Payload Fields

- `blog`: `Blog` — The blog that was updated.
- `userErrors`: `[BlogUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Blog](../types/objects/Blog.md)
- [BlogUpdateInput](../types/inputs/BlogUpdateInput.md)
- [BlogUpdatePayload](../types/objects/BlogUpdatePayload.md)
- [BlogUpdateUserError](../types/objects/BlogUpdateUserError.md)

## Example Mutation

```graphql
mutation BlogUpdate($id: ID!, $blog: BlogUpdateInput!) {
  blogUpdate(id: $id, blog: $blog) {
    blog {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
