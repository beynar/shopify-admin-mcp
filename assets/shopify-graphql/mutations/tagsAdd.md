# Mutation: `tagsAdd`

**Returns:** `TagsAddPayload`

Adds tags to a resource in the store. Supported resources include [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), and [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article).

Tags help merchants organize and filter resources. See the [`tags`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsAdd#arguments-tags) argument for supported input formats.

Learn more about [using tags to organize subscription orders](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/fulfillments/sync-orders-subscriptions#order-tagging).

## Arguments

- **`id`**: `ID!` — The ID of a resource to add tags to.
- **`tags`**: `[String!]!` — A list of tags to add to the resource. Can be an array of strings or a single string composed of a comma-separated list of values. Example values: `["tag1", "tag2", "tag3"]`, `"tag1, tag2, tag3"`.

## Payload Fields

- `node`: `Node` — The object that was updated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Node](../types/interfaces/Node.md)
- [TagsAddPayload](../types/objects/TagsAddPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation TagsAdd($id: ID!, $tags: [String!]!) {
  tagsAdd(id: $id, tags: $tags) {
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
