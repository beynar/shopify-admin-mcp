# Mutation: `productVariantsBulkDelete`

**Returns:** `ProductVariantsBulkDeletePayload`

Deletes multiple variants in a single [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Specify the product ID and an array of variant IDs to remove variants in bulk. You can call this mutation directly or through the [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) mutation. Returns the updated product and any [`UserError`](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError) objects.

## Arguments

- **`variantsIds`**: `[ID!]!` — An array of product variants IDs to delete.
- **`productId`**: `ID!` — The ID of the product with the variants to update.

## Payload Fields

- `product`: `Product` — The updated product object.
- `userErrors`: `[ProductVariantsBulkDeleteUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Product](../types/objects/Product.md)
- [ProductVariantsBulkDeletePayload](../types/objects/ProductVariantsBulkDeletePayload.md)
- [ProductVariantsBulkDeleteUserError](../types/objects/ProductVariantsBulkDeleteUserError.md)

## Example Mutation

```graphql
mutation ProductVariantsBulkDelete($variantsIds: [ID!]!, $productId: ID!) {
  productVariantsBulkDelete(variantsIds: $variantsIds, productId: $productId) {
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
