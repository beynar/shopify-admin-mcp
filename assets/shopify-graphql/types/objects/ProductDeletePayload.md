# Object: `ProductDeletePayload`

Return type for `productDelete` mutation.

## Fields

- `deletedProductId`: `ID` — The ID of the deleted product.
- `productDeleteOperation`: `ProductDeleteOperation` — The product delete operation, returned when run in asynchronous mode.
- `shop`: `Shop!` — The shop associated with the product.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [ProductDeleteOperation](../../types/objects/ProductDeleteOperation.md)
- [Shop](../../types/objects/Shop.md)
- [UserError](../../types/objects/UserError.md)
