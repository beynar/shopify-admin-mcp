# Mutation: `tagsRemove`

**Returns:** `TagsRemovePayload`

Removes tags from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), or [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article).

Tags are searchable keywords that help organize and filter these resources.

## Arguments

- **`id`**: `ID!` — The ID of the resource to remove tags from.
- **`tags`**: `[String!]!` — A list of tags to remove from the resource in the form of an array of strings. Example value: `["tag1", "tag2", "tag3"]`.

## Payload Fields

- `node`: `Node` — The object that was updated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Node](../types/interfaces/Node.md)
- [TagsRemovePayload](../types/objects/TagsRemovePayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation TagsRemove($id: ID!, $tags: [String!]!) {
  tagsRemove(id: $id, tags: $tags) {
    node {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
