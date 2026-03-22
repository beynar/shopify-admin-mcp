# Mutation: `productVariantsBulkUpdate`

**Returns:** `ProductVariantsBulkUpdatePayload`

Updates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation.
You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports)
for large-scale catalog updates.

Use the `productVariantsBulkUpdate` mutation to efficiently modify product variants—such as different sizes,
colors, or materials—associated with an existing product. The mutation is helpful if you need to update a
product's variants in bulk, such as importing from an external system.

The mutation supports:

- Updating variants with custom option values
- Associating media (for example, images, videos, and 3D models) with the product or its variants
- Handling complex product configurations

> Note:
> By default, stores have a limit of 2048 product variants for each product.

After creating variants, you can make additional changes using the
[`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet) mutation,
which is used to perform multiple operations on products, such as creating or modifying product options and variants.

You can also specifically manage product options through related mutations:

- [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
- [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
- [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
- [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model)
and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

## Arguments

- **`variants`**: `[ProductVariantsBulkInput!]!` — An array of product variants to update.
- **`productId`**: `ID!` — The ID of the product associated with the variants to update.
- **`media`**: `[CreateMediaInput!]` — List of new media to be added to the product.
- **`allowPartialUpdates`**: `Boolean` = `false` — When partial updates are allowed, valid variant changes may be persisted even if some of the variants updated have invalid data and cannot be persisted. When partial updates are not allowed, any error will prevent all variants from updating.

## Payload Fields

- `product`: `Product` — The updated product object.
- `productVariants`: `[ProductVariant!]` — The updated variants.
- `userErrors`: `[ProductVariantsBulkUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CreateMediaInput](../types/inputs/CreateMediaInput.md)
- [Product](../types/objects/Product.md)
- [ProductVariant](../types/objects/ProductVariant.md)
- [ProductVariantsBulkInput](../types/inputs/ProductVariantsBulkInput.md)
- [ProductVariantsBulkUpdatePayload](../types/objects/ProductVariantsBulkUpdatePayload.md)
- [ProductVariantsBulkUpdateUserError](../types/objects/ProductVariantsBulkUpdateUserError.md)

## Example Mutation

```graphql
mutation ProductVariantsBulkUpdate($variants: [ProductVariantsBulkInput!]!, $productId: ID!, $media: [CreateMediaInput!], $allowPartialUpdates: Boolean) {
  productVariantsBulkUpdate(variants: $variants, productId: $productId, media: $media, allowPartialUpdates: $allowPartialUpdates) {
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
