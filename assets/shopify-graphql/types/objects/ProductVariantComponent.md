# Object: `ProductVariantComponent`

A product variant component that is included within a bundle.

These are the individual product variants that make up a bundle product,
where each component has a specific required quantity.

**Implements:** `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `productVariant`: `ProductVariant!` — The product variant associated with the component.
- `quantity`: `Int!` — The required quantity of the component.

## Related Types

- [ProductVariant](../../types/objects/ProductVariant.md)
