# Mutation: `productVariantsBulkReorder`

**Returns:** `ProductVariantsBulkReorderPayload`

Reorders multiple variants in a single product. This mutation can be called directly or via the bulkOperation.

## Arguments

- **`productId`**: `ID!` — The product ID of the variants to be reordered.
- **`positions`**: `[ProductVariantPositionInput!]!` — An array of variant positions.

## Payload Fields

- `product`: `Product` — The updated product.
- `userErrors`: `[ProductVariantsBulkReorderUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Product](../types/objects/Product.md)
- [ProductVariantPositionInput](../types/inputs/ProductVariantPositionInput.md)
- [ProductVariantsBulkReorderPayload](../types/objects/ProductVariantsBulkReorderPayload.md)
- [ProductVariantsBulkReorderUserError](../types/objects/ProductVariantsBulkReorderUserError.md)

## Example Mutation

```graphql
mutation ProductVariantsBulkReorder($productId: ID!, $positions: [ProductVariantPositionInput!]!) {
  productVariantsBulkReorder(productId: $productId, positions: $positions) {
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
