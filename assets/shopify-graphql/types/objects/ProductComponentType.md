# Object: `ProductComponentType`

The product component information.

## Fields

- `componentVariants` `(first, after, last, before, reverse)`: `ProductVariantConnection!` — The list of products' variants that are components.
- `componentVariantsCount`: `Count` — The number of component variants for the product component.
- `nonComponentVariants` `(first, after, last, before, reverse)`: `ProductVariantConnection!` — The list of products' variants that are not components.
- `nonComponentVariantsCount`: `Count` — The number of non_components variants for the product component.
- `product`: `Product!` — The product that's a component.

## Related Types

- [Count](../../types/objects/Count.md)
- [Product](../../types/objects/Product.md)
