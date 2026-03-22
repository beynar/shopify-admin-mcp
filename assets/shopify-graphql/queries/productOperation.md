# Query: `productOperation`

**Returns:** `ProductOperation`

Returns a ProductOperation resource by ID.

This can be used to query the
[ProductSetOperation](https://shopify.dev/api/admin-graphql/current/objects/ProductSetOperation), using
the ID that was returned
[when the product was created or updated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously)
by the
[ProductSet](https://shopify.dev/api/admin-graphql/current/mutations/productSet) mutation.

The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

The `product` field provides the details of the created or updated product.

For the
[ProductSetOperation](https://shopify.dev/api/admin-graphql/current/objects/ProductSetOperation), the
`userErrors` field provides mutation errors that occurred during the operation.

## Arguments

- **`id`**: `ID!` — The ID of the `ProductOperation` to return.

## Return Type Fields

- `product`: `Product` — The product on which the operation is being performed.
- `status`: `ProductOperationStatus!` — The status of this operation.

## Related Types

- [Product](../types/objects/Product.md)
- [ProductOperation](../types/interfaces/ProductOperation.md)
- [ProductOperationStatus](../types/enums/ProductOperationStatus.md)

## Example Query

```graphql
query ProductOperation($id: ID!) {
  productOperation(id: $id) {
  }
}
```
