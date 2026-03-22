# Mutation: `productVariantsBulkCreate`

**Returns:** `ProductVariantsBulkCreatePayload`

Creates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)
for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation.
You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports)
for large-scale catalog updates.

Use the `productVariantsBulkCreate` mutation to efficiently add new product variants—such as different sizes,
colors, or materials—to an existing product. The mutation is helpful if you need to add product variants in bulk,
such as importing from an external system.

The mutation supports:

- Creating variants with custom option values
- Associating media (for example, images, videos, and 3D models) with the product or its variants
- Handling complex product configurations

> Note:
> By default, stores have a limit of 2048 product variants for each product.

After creating variants, you can make additional changes using one of the following mutations:

- [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate):
Updates multiple product variants for a single product in one operation.
- [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet):
Used to perform multiple operations on products, such as creating or modifying product options and variants.

You can also specifically manage product options through related mutations:

- [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
- [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
- [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
- [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model)
and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

## Arguments

- **`variants`**: `[ProductVariantsBulkInput!]!` — An array of product variants to be created.
- **`productId`**: `ID!` — The ID of the product on which to create the variants.
- **`media`**: `[CreateMediaInput!]` — List of new media to be added to the product.
- **`strategy`**: `ProductVariantsBulkCreateStrategy` = `DEFAULT` — The strategy defines which behavior the mutation should observe, such as whether to keep or delete the standalone variant (when product has only a single or default variant) when creating new variants in bulk.

## Payload Fields

- `product`: `Product` — The updated product object.
- `productVariants`: `[ProductVariant!]` — The newly created variants.
- `userErrors`: `[ProductVariantsBulkCreateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [CreateMediaInput](../types/inputs/CreateMediaInput.md)
- [Product](../types/objects/Product.md)
- [ProductVariant](../types/objects/ProductVariant.md)
- [ProductVariantsBulkCreatePayload](../types/objects/ProductVariantsBulkCreatePayload.md)
- [ProductVariantsBulkCreateStrategy](../types/enums/ProductVariantsBulkCreateStrategy.md)
- [ProductVariantsBulkCreateUserError](../types/objects/ProductVariantsBulkCreateUserError.md)
- [ProductVariantsBulkInput](../types/inputs/ProductVariantsBulkInput.md)

## Example Mutation

```graphql
mutation ProductVariantsBulkCreate($variants: [ProductVariantsBulkInput!]!, $productId: ID!, $media: [CreateMediaInput!], $strategy: ProductVariantsBulkCreateStrategy) {
  productVariantsBulkCreate(variants: $variants, productId: $productId, media: $media, strategy: $strategy) {
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
