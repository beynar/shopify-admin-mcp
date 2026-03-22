# Mutation: `productBundleCreate`

**Returns:** `ProductBundleCreatePayload`

Creates a product bundle that groups multiple [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects together as components. The bundle appears as a single product in the store, with its price determined by the parent product and inventory calculated from the component products.

The mutation runs asynchronously and returns a [`ProductBundleOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation) object to track the creation status. Poll the operation using the [`productOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/productOperation) query to determine when the bundle is ready.

Learn more about [creating product fixed bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle#step-1-create-a-bundle).

## Arguments

- **`input`**: `ProductBundleCreateInput!` — Input for creating a product bundle or componentized product.

## Payload Fields

- `productBundleOperation`: `ProductBundleOperation` — The asynchronous ProductBundleOperation creating the product bundle or componentized product.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductBundleCreateInput](../types/inputs/ProductBundleCreateInput.md)
- [ProductBundleCreatePayload](../types/objects/ProductBundleCreatePayload.md)
- [ProductBundleOperation](../types/objects/ProductBundleOperation.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation ProductBundleCreate($input: ProductBundleCreateInput!) {
  productBundleCreate(input: $input) {
    productBundleOperation {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
