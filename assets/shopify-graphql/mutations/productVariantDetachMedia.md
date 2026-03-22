# Mutation: `productVariantDetachMedia`

**Returns:** `ProductVariantDetachMediaPayload`

Detaches media from product variants.

## Arguments

- **`productId`**: `ID!` — Specifies the product to which the variants and media are associated.
- **`variantMedia`**: `[ProductVariantDetachMediaInput!]!` — A list of pairs of variants and media to be deleted from the variants.

## Payload Fields

- `product`: `Product` — The product associated with the variants and media.
- `productVariants`: `[ProductVariant!]` — The product variants that were updated.
- `userErrors`: `[MediaUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [MediaUserError](../types/objects/MediaUserError.md)
- [Product](../types/objects/Product.md)
- [ProductVariant](../types/objects/ProductVariant.md)
- [ProductVariantDetachMediaInput](../types/inputs/ProductVariantDetachMediaInput.md)
- [ProductVariantDetachMediaPayload](../types/objects/ProductVariantDetachMediaPayload.md)

## Example Mutation

```graphql
mutation ProductVariantDetachMedia($productId: ID!, $variantMedia: [ProductVariantDetachMediaInput!]!) {
  productVariantDetachMedia(productId: $productId, variantMedia: $variantMedia) {
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
