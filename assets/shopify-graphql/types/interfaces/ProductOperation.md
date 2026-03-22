# Interface: `ProductOperation`

An interface representing asynchronous operations on products. Tracks the status and details of background product mutations like `productSet`, `productDelete`, `productDuplicate`, and `productBundle` operations. Provides status field (CREATED, ACTIVE, COMPLETE) and product field to monitor long-running product operations.

## Fields

- `product`: `Product` — The product on which the operation is being performed.
- `status`: `ProductOperationStatus!` — The status of this operation.

## Possible Types

- [ProductBundleOperation](../../types/objects/ProductBundleOperation.md)
- [ProductDeleteOperation](../../types/objects/ProductDeleteOperation.md)
- [ProductDuplicateOperation](../../types/objects/ProductDuplicateOperation.md)
- [ProductSetOperation](../../types/objects/ProductSetOperation.md)

## Related Types

- [Product](../../types/objects/Product.md)
- [ProductOperationStatus](../../types/enums/ProductOperationStatus.md)
