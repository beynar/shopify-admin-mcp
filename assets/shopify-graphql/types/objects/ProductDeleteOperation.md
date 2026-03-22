# Object: `ProductDeleteOperation`

An entity that represents details of an asynchronous
[ProductDelete](https://shopify.dev/api/admin-graphql/current/mutations/productDelete) mutation.

By querying this entity with the
[productOperation](https://shopify.dev/api/admin-graphql/current/queries/productOperation) query
using the ID that was returned when the product was deleted, this can be used to check the status of an operation.

The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

The `deletedProductId` field provides the ID of the deleted product.

The `userErrors` field provides mutation errors that occurred during the operation.

**Implements:** `Node`, `ProductOperation`

## Fields

- `deletedProductId`: `ID` — The ID of the deleted product.
- `id`: `ID!` — A globally-unique ID.
- `product`: `Product` — The product on which the operation is being performed.
- `status`: `ProductOperationStatus!` — The status of this operation.
- `userErrors`: `[UserError!]!` — Returns mutation errors occurred during background mutation processing.

## Related Types

- [Product](../../types/objects/Product.md)
- [ProductOperationStatus](../../types/enums/ProductOperationStatus.md)
- [UserError](../../types/objects/UserError.md)
