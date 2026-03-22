# Mutation: `productVariantRelationshipBulkUpdate`

**Returns:** `ProductVariantRelationshipBulkUpdatePayload`

Creates new bundles, updates component quantities in existing bundles, and removes bundle components for one or multiple [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

Each bundle variant can contain up to 30 component variants with specified quantities. After an app assigns components to a bundle, only that app can manage those components.

> Note:
> For most use cases, use [`productBundleCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate) instead, which creates product fixed bundles. `productVariantRelationshipBulkUpdate` is for [variant fixed bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-variant-fixed-bundle), where each variant has its own component configuration.

## Arguments

- **`input`**: `[ProductVariantRelationshipUpdateInput!]!` — The input options for the product variant being updated.

## Payload Fields

- `parentProductVariants`: `[ProductVariant!]` — The product variants with successfully updated product variant relationships.
- `userErrors`: `[ProductVariantRelationshipBulkUpdateUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductVariant](../types/objects/ProductVariant.md)
- [ProductVariantRelationshipBulkUpdatePayload](../types/objects/ProductVariantRelationshipBulkUpdatePayload.md)
- [ProductVariantRelationshipBulkUpdateUserError](../types/objects/ProductVariantRelationshipBulkUpdateUserError.md)
- [ProductVariantRelationshipUpdateInput](../types/inputs/ProductVariantRelationshipUpdateInput.md)

## Example Mutation

```graphql
mutation ProductVariantRelationshipBulkUpdate($input: [ProductVariantRelationshipUpdateInput!]!) {
  productVariantRelationshipBulkUpdate(input: $input) {
    parentProductVariants {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
