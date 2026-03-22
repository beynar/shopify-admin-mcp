# Mutation: `blogCreate`

**Returns:** `BlogCreatePayload`

Creates a new blog within a shop, establishing a container for organizing articles.

For example, a fitness equipment retailer launching a wellness blog would use this mutation to create the blog, enabling them to publish workout guides and nutrition tips.

Use the `blogCreate` mutation to:
- Launch new content marketing initiatives
- Create separate blogs for different content themes
- Establish spaces for article organization

The mutation validates blog settings and establishes the structure for article publishing.

## Arguments

- **`blog`**: `BlogCreateInput!` — The properties of the new blog.

## Payload Fields

- `blog`: `Blog` — The blog that was created.
- `userErrors`: `[BlogCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Blog](../types/objects/Blog.md)
- [BlogCreateInput](../types/inputs/BlogCreateInput.md)
- [BlogCreatePayload](../types/objects/BlogCreatePayload.md)
- [BlogCreateUserError](../types/objects/BlogCreateUserError.md)

## Example Mutation

```graphql
mutation BlogCreate($blog: BlogCreateInput!) {
  blogCreate(blog: $blog) {
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
