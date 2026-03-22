# Object: `ProductVariantDetachMediaPayload`

Return type for `productVariantDetachMedia` mutation.

## Fields

- `product`: `Product` — The product associated with the variants and media.
- `productVariants`: `[ProductVariant!]` — The product variants that were updated.
- `userErrors`: `[MediaUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MediaUserError](../../types/objects/MediaUserError.md)
- [Product](../../types/objects/Product.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
