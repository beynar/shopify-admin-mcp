# Object: `CustomerVisitProductInfo`

This type returns the information about the product and product variant from a customer visit.

## Fields

- `product`: `Product` — The product information. If `null`, then the product was deleted from the store.
- `quantity`: `Int!` — The quantity of the product that the customer requested.
- `variant`: `ProductVariant` — The product variant information, if the product variant exists.

## Related Types

- [Product](../../types/objects/Product.md)
- [ProductVariant](../../types/objects/ProductVariant.md)
