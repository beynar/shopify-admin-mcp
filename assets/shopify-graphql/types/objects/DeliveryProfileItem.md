# Object: `DeliveryProfileItem`

A product and the subset of associated variants that are part of this delivery profile.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `product`: `Product!` — A product associated with this profile.
- `variants` `(first, after, last, before, reverse)`: `ProductVariantConnection!` — The product variants associated with this delivery profile.

## Related Types

- [Product](../../types/objects/Product.md)
