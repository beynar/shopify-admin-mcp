# Object: `ProductPublishPayload`

Return type for `productPublish` mutation.

## Fields

- `product`: `Product` — The product that has been published.
- `productPublications`: `[ProductPublication!]` *(deprecated)* — The channels where the product is published.
- `shop`: `Shop!` — The user's shop.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Product](../../types/objects/Product.md)
- [ProductPublication](../../types/objects/ProductPublication.md)
- [Shop](../../types/objects/Shop.md)
- [UserError](../../types/objects/UserError.md)
