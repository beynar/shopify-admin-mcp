# Mutation: `productDeleteMedia`

**Returns:** `ProductDeleteMediaPayload`

Deletes media from a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as images, videos, and 3D models.

When you delete media images, the mutation also removes any corresponding product images. The mutation returns the IDs of both the deleted media and any product images that the deletion removed.

> Caution:
> This action is irreversible. You can't recover deleted media.

## Arguments

- **`productId`**: `ID!` — Specifies the product ID from which the media will be deleted.
- **`mediaIds`**: `[ID!]!` — The media IDs to be deleted.

## Payload Fields

- `deletedMediaIds`: `[ID!]` — List of media IDs which were deleted.
- `deletedProductImageIds`: `[ID!]` — List of product image IDs which were deleted.
- `mediaUserErrors`: `[MediaUserError!]!` — The list of errors that occurred from executing the mutation.
- `product`: `Product` — The product associated with the deleted media.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MediaUserError](../types/objects/MediaUserError.md)
- [Product](../types/objects/Product.md)
- [ProductDeleteMediaPayload](../types/objects/ProductDeleteMediaPayload.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductDeleteMedia($productId: ID!, $mediaIds: [ID!]!) {
  productDeleteMedia(productId: $productId, mediaIds: $mediaIds) {
    deletedMediaIds
    deletedProductImageIds
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
