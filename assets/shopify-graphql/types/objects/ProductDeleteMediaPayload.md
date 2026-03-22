# Object: `ProductDeleteMediaPayload`

Return type for `productDeleteMedia` mutation.

## Fields

- `deletedMediaIds`: `[ID!]` — List of media IDs which were deleted.
- `deletedProductImageIds`: `[ID!]` — List of product image IDs which were deleted.
- `mediaUserErrors`: `[MediaUserError!]!` — The list of errors that occurred from executing the mutation.
- `product`: `Product` — The product associated with the deleted media.
- `userErrors`: `[UserError!]!` *(deprecated)* — The list of errors that occurred from executing the mutation.

## Related Types

- [MediaUserError](../../types/objects/MediaUserError.md)
- [Product](../../types/objects/Product.md)
- [UserError](../../types/objects/UserError.md)
