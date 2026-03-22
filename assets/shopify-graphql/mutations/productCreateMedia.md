# Mutation: `productCreateMedia`

**Returns:** `ProductCreateMediaPayload`

Adds media files to a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as images, videos, or 3D models. Media files enhance product listings by providing visual representations that help customers understand the product.

The mutation accepts an array of [`CreateMediaInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput) objects, each specifying the source URL, content type, and optional alt text.

You can add multiple media files in a single request. The mutation adds all valid files and returns errors for any invalid ones.

## Arguments

- **`productId`**: `ID!` — Specifies the product associated with the media.
- **`media`**: `[CreateMediaInput!]!` — List of new media to be added to a product.

## Payload Fields

- `media`: `[Media!]` — The newly created media.
- `mediaUserErrors`: `[MediaUserError!]!` — The list of errors that occurred from executing the mutation.
- `product`: `Product` — The product associated with the media.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CreateMediaInput](../types/inputs/CreateMediaInput.md)
- [Media](../types/interfaces/Media.md)
- [MediaUserError](../types/objects/MediaUserError.md)
- [Product](../types/objects/Product.md)
- [ProductCreateMediaPayload](../types/objects/ProductCreateMediaPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductCreateMedia($productId: ID!, $media: [CreateMediaInput!]!) {
  productCreateMedia(productId: $productId, media: $media) {
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
