# Object: `ProductBundleOperation`

An entity that represents details of an asynchronous
[ProductBundleCreate](https://shopify.dev/api/admin-graphql/current/mutations/productBundleCreate) or
[ProductBundleUpdate](https://shopify.dev/api/admin-graphql/current/mutations/productBundleUpdate) mutation.

By querying this entity with the
[productOperation](https://shopify.dev/api/admin-graphql/current/queries/productOperation) query
using the ID that was returned when the bundle was created or updated, this can be used to check the status of an operation.

The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

The `product` field provides the details of the created or updated product.

The `userErrors` field provides mutation errors that occurred during the operation.

**Implements:** `Node`, `ProductOperation`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `product`: `Product` — The product on which the operation is being performed.
- `status`: `ProductOperationStatus!` — The status of this operation.
- `userErrors`: `[ProductBundleMutationUserError!]!` — Returns mutation errors occurred during background mutation processing.

## Related Types

- [Product](../../types/objects/Product.md)
- [ProductBundleMutationUserError](../../types/objects/ProductBundleMutationUserError.md)
- [ProductOperationStatus](../../types/enums/ProductOperationStatus.md)
