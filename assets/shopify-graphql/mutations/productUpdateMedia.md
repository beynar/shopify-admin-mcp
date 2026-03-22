# Mutation: `productUpdateMedia`

**Returns:** `ProductUpdateMediaPayload`

Updates properties of media attached to a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). You can modify alt text for accessibility or change preview images for existing media items.

Provide the product ID and an array of [`UpdateMediaInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UpdateMediaInput) objects. Each update specifies the media's ID and the properties to change. Updates apply only to media already attached to the product and don't affect their position in the product gallery.

## Arguments

- **`productId`**: `ID!` — Specifies the product on which media will be updated.
- **`media`**: `[UpdateMediaInput!]!` — A list of media updates.

## Payload Fields

- `media`: `[Media!]` — The updated media object.
- `mediaUserErrors`: `[MediaUserError!]!` — The list of errors that occurred from executing the mutation.
- `product`: `Product` — The product on which media was updated.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Media](../types/interfaces/Media.md)
- [MediaUserError](../types/objects/MediaUserError.md)
- [Product](../types/objects/Product.md)
- [ProductUpdateMediaPayload](../types/objects/ProductUpdateMediaPayload.md)
- [UpdateMediaInput](../types/inputs/UpdateMediaInput.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductUpdateMedia($productId: ID!, $media: [UpdateMediaInput!]!) {
  productUpdateMedia(productId: $productId, media: $media) {
    media {
      id
    }
    mediaUserErrors {
      id
    }
    product {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
