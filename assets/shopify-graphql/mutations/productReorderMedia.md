# Mutation: `productReorderMedia`

**Returns:** `ProductReorderMediaPayload`

Reorders [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media) attached to a product, changing their sequence in product displays. The operation processes asynchronously to handle [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with large media collections.

Specify the [product ID](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-id) and an array of [moves](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-moves), where each move contains a media ID and its new zero-based position.

> Note:
> Only include media items that need repositioning. Unchanged items maintain their relative order automatically.

The mutation returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to track the reordering progress. Poll the job status to determine when the operation completes and media positions update across all sales channels.

Learn more about [reordering product media](https://shopify.dev/docs/apps/build/online-store/product-media#step-6-reorder-media-objects).

## Arguments

- **`id`**: `ID!` — The ID of the product on which to reorder medias.
- **`moves`**: `[MoveInput!]!` — A list of moves to perform which will be evaluated in order.

## Payload Fields

- `job`: `Job` — The asynchronous job which reorders the media.
- `mediaUserErrors`: `[MediaUserError!]!` — The list of errors that occurred from executing the mutation.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [MediaUserError](../types/objects/MediaUserError.md)
- [MoveInput](../types/inputs/MoveInput.md)
- [ProductReorderMediaPayload](../types/objects/ProductReorderMediaPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductReorderMedia($id: ID!, $moves: [MoveInput!]!) {
  productReorderMedia(id: $id, moves: $moves) {
    job {
      id
    }
    mediaUserErrors {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
