# Mutation: `productSet`

**Returns:** `ProductSetPayload`

Performs multiple operations to create or update products in a single request.

Use the `productSet` mutation to sync information from an external data source into Shopify, manage large
product catalogs, and perform batch updates. The mutation is helpful for bulk product management, including price
adjustments, inventory updates, and product lifecycle management.

The behavior of `productSet` depends on the type of field it's modifying:

- **For list fields**: Creates new entries, updates existing entries, and deletes existing entries
that aren't included in the mutation's input. Common examples of list fields include
[`collections`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.collections),
[`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.metafields),
and [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.variants).

- **For all other field types**: Updates only the included fields. Any omitted fields will remain unchanged.

> Note:
> By default, stores have a limit of 2048 product variants for each product.

You can run `productSet` in one of the following modes:

- **Synchronously**: Returns the updated product in the response.
- **Asynchronously**: Returns a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object.
Use the [`productOperation`](https://shopify.dev/api/admin-graphql/latest/queries/productOperation) query to check the status of the operation and
retrieve details of the updated product and its product variants.

If you need to only manage product variants, then use one of the following mutations:

- [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
- [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
- [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

If you need to only manage product options, then use one of the following mutations:

- [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
- [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
- [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
- [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about [syncing product data from an external source](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/sync-data).

## Arguments

- **`input`**: `ProductSetInput!` — The properties of the newly created or updated product.
- **`synchronous`**: `Boolean` = `true` — Whether the mutation should be run synchronously or asynchronously.  If `true`, the mutation will return the updated `product`.  If `false`, the mutation will return a `productSetOperation`.  Defaults to `true`.  Setting `synchronous: false` may be desirable depending on the input complexity/size, and should be used if you are experiencing timeouts.  **Note**: When run in the context of a [bulk operation](https://shopify.dev/api/usage/bulk-operations/imports), the mutation will always run synchronously and this argument will be ignored.
- **`identifier`**: `ProductSetIdentifiers` — Specifies the identifier that will be used to lookup the resource.

## Payload Fields

- `product`: `Product` — The product object.
- `productSetOperation`: `ProductSetOperation` — The product set operation, returned when run in asynchronous mode.
- `userErrors`: `[ProductSetUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Product](../types/objects/Product.md)
- [ProductSetIdentifiers](../types/inputs/ProductSetIdentifiers.md)
- [ProductSetInput](../types/inputs/ProductSetInput.md)
- [ProductSetOperation](../types/objects/ProductSetOperation.md)
- [ProductSetPayload](../types/objects/ProductSetPayload.md)
- [ProductSetUserError](../types/objects/ProductSetUserError.md)

## Example Mutation

```graphql
mutation ProductSet($input: ProductSetInput!, $synchronous: Boolean, $identifier: ProductSetIdentifiers) {
  productSet(input: $input, synchronous: $synchronous, identifier: $identifier) {
    product {
      id
    }
    productSetOperation {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
