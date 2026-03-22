# Object: `ProductDuplicatePayload`

Return type for `productDuplicate` mutation.

## Fields

- `imageJob`: `Job` — The asynchronous job that duplicates the product images.
- `newProduct`: `Product` — The duplicated product.
- `productDuplicateOperation`: `ProductDuplicateOperation` — The product duplicate operation, returned when run in asynchronous mode.
- `shop`: `Shop!` — The user's shop.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../../types/objects/Job.md)
- [Product](../../types/objects/Product.md)
- [ProductDuplicateOperation](../../types/objects/ProductDuplicateOperation.md)
- [Shop](../../types/objects/Shop.md)
- [UserError](../../types/objects/UserError.md)
