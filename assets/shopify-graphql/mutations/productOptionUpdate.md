# Mutation: `productOptionUpdate`

**Returns:** `ProductOptionUpdatePayload`

Updates an [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption)
on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product),
such as size, color, or material. Each option includes a name, position, and a list of values. The combination
of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

Use the `productOptionUpdate` mutation for the following use cases:

- **Update product choices**: Modify an existing option, like "Size" (Small, Medium, Large) or
"Color" (Red, Blue, Green), so customers can select their preferred variant.
- **Enable personalization features**: Update an option (for example, "Engraving text") to let customers customize their purchase.
- **Offer seasonal or limited edition products**: Update a value
(for example, "Holiday red") on an existing option to support limited-time or seasonal variants.
- **Integrate with apps that manage product configuration**: Allow third-party apps to update options, like
"Bundle size", when customers select or customize
[product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
- **Link options to metafields**: Associate a product option with a custom
[metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for
richer integrations with other systems or apps.

> Note:
> The `productOptionUpdate` mutation enforces strict data integrity for product options and variants.
All option positions must be sequential, and every option should be used by at least one variant.

After you update a product option, you can further manage a product's configuration using related mutations:

- [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
- [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
- [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
- [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
- [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
- [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model)
and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

## Arguments

- **`option`**: `OptionUpdateInput!` — Option to update.
- **`productId`**: `ID!` — The ID of the Product the Option belongs to.
- **`optionValuesToAdd`**: `[OptionValueCreateInput!]` — New option values to create.
- **`optionValuesToUpdate`**: `[OptionValueUpdateInput!]` — Existing option values to update.
- **`optionValuesToDelete`**: `[ID!]` — IDs of the existing option values to delete.
- **`variantStrategy`**: `ProductOptionUpdateVariantStrategy` — The strategy defines which behavior the mutation should observe regarding variants, such as creating variants or deleting them in response to option values to add or to delete. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

## Payload Fields

- `product`: `Product` — The product with which the option being updated is associated.
- `userErrors`: `[ProductOptionUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [OptionUpdateInput](../types/inputs/OptionUpdateInput.md)
- [OptionValueCreateInput](../types/inputs/OptionValueCreateInput.md)
- [OptionValueUpdateInput](../types/inputs/OptionValueUpdateInput.md)
- [Product](../types/objects/Product.md)
- [ProductOptionUpdatePayload](../types/objects/ProductOptionUpdatePayload.md)
- [ProductOptionUpdateUserError](../types/objects/ProductOptionUpdateUserError.md)
- [ProductOptionUpdateVariantStrategy](../types/enums/ProductOptionUpdateVariantStrategy.md)

## Example Mutation

```graphql
mutation ProductOptionUpdate($option: OptionUpdateInput!, $productId: ID!, $optionValuesToAdd: [OptionValueCreateInput!], $optionValuesToUpdate: [OptionValueUpdateInput!], $optionValuesToDelete: [ID!], $variantStrategy: ProductOptionUpdateVariantStrategy) {
  productOptionUpdate(option: $option, productId: $productId, optionValuesToAdd: $optionValuesToAdd, optionValuesToUpdate: $optionValuesToUpdate, optionValuesToDelete: $optionValuesToDelete, variantStrategy: $variantStrategy) {
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
