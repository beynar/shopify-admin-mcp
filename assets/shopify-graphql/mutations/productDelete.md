# Mutation: `productDelete`

**Returns:** `ProductDeletePayload`

Permanently deletes a product and all its associated data, including variants, media, publications, and inventory items.

Use the `productDelete` mutation to programmatically remove products from your store when they need to be
permanently deleted from your catalog, such as when removing discontinued items, cleaning up test data, or
synchronizing with external inventory management systems.

The `productDelete` mutation removes the product from all associated collections,
and removes all associated data for the product, including:

- All product variants and their inventory items
- Product media (images, videos) that are not referenced by other products
- [Product options](https://shopify.dev/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/api/admin-graphql/latest/objects/ProductOptionValue)
- Product publications across all sales channels
- Product tags and metadata associations

The `productDelete` mutation also has the following effects on existing orders and transactions:

- **Draft orders**: Existing draft orders that reference this product will retain the product information as stored data, but the product reference will be removed. Draft orders can still be completed with the stored product details.
- **Completed orders and refunds**: Previously completed orders that included this product aren't affected. The product information in completed orders is preserved for record-keeping, and existing refunds for this product remain valid and processable.

> Caution:
> Product deletion is irreversible. After a product is deleted, it can't be recovered. Consider archiving
> or unpublishing products instead if you might need to restore them later.

If you need to delete a large product, such as one that has many
[variants](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant)
that are active at several
[locations](https://shopify.dev/api/admin-graphql/latest/objects/Location),
you might encounter timeout errors. To avoid these timeout errors, you can set the
[`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete#arguments-synchronous)
parameter to `false` to run the deletion asynchronously, which returns a
[`ProductDeleteOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation)
that you can monitor for completion status.

If you need more granular control over product cleanup, consider using these alternative mutations:

- [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate):
Update the product status to archived or unpublished instead of deleting.
- [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete):
Delete specific variants while keeping the product.
- [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete):
Delete the choices available for a product, such as size, color, or material.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model).

## Arguments

- **`input`**: `ProductDeleteInput!` — Specifies the product to delete by its ID.
- **`synchronous`**: `Boolean` = `true` — Specifies whether or not to run the mutation synchronously.

## Payload Fields

- `deletedProductId`: `ID` — The ID of the deleted product.
- `productDeleteOperation`: `ProductDeleteOperation` — The product delete operation, returned when run in asynchronous mode.
- `shop`: `Shop!` — The shop associated with the product.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductDeleteInput](../types/inputs/ProductDeleteInput.md)
- [ProductDeleteOperation](../types/objects/ProductDeleteOperation.md)
- [ProductDeletePayload](../types/objects/ProductDeletePayload.md)
- [Shop](../types/objects/Shop.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductDelete($input: ProductDeleteInput!, $synchronous: Boolean) {
  productDelete(input: $input, synchronous: $synchronous) {
    deletedProductId
    productDeleteOperation {
      id
    }
    shop {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
