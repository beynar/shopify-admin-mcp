# Mutation: `productVariantAppendMedia`

**Returns:** `ProductVariantAppendMediaPayload`

Appends existing media from a product to specific variants of that product, creating associations between media files and particular product options. This allows different variants to showcase relevant images or videos.

For example, a t-shirt product might have color variants where each color variant displays only the images showing that specific color, helping customers see exactly what they're purchasing.

Use `ProductVariantAppendMedia` to:
- Associate specific images with product variants for accurate display
- Build variant-specific media management in product interfaces
- Implement automated media assignment based on variant attributes

The operation links existing product media to variants without duplicating files, maintaining efficient media storage while enabling variant-specific displays.

Learn more about [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

## Arguments

- **`productId`**: `ID!` — Specifies the product associated to the media.
- **`variantMedia`**: `[ProductVariantAppendMediaInput!]!` — A list of pairs of variants and media to be attached to the variants.

## Payload Fields

- `product`: `Product` — The product associated with the variants and media.
- `productVariants`: `[ProductVariant!]` — The product variants that were updated.
- `userErrors`: `[MediaUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MediaUserError](../types/objects/MediaUserError.md)
- [Product](../types/objects/Product.md)
- [ProductVariant](../types/objects/ProductVariant.md)
- [ProductVariantAppendMediaInput](../types/inputs/ProductVariantAppendMediaInput.md)
- [ProductVariantAppendMediaPayload](../types/objects/ProductVariantAppendMediaPayload.md)

## Example Mutation

```graphql
mutation ProductVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
  productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
    product {
      id
    }
    productVariants {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
