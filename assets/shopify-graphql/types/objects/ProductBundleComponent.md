# Object: `ProductBundleComponent`

The product's component information.

## Fields

- `componentProduct`: `Product!` — The product that's related as a component.
- `componentVariants` `(first, after, last, before, reverse)`: `ProductVariantConnection!` — The list of products' variants that are components.
- `componentVariantsCount`: `Count` — The number of component variants for the product component.
- `optionSelections`: `[ProductBundleComponentOptionSelection!]!` — The options in the parent and the component options they're connected to, along with the chosen option values
- `quantity`: `Int` — The quantity of the component product set for this bundle line.
- `quantityOption`: `ProductBundleComponentQuantityOption` — The quantity as option of the component product. It will be null if there's a quantity set.

## Related Types

- [Count](../../types/objects/Count.md)
- [Product](../../types/objects/Product.md)
- [ProductBundleComponentOptionSelection](../../types/objects/ProductBundleComponentOptionSelection.md)
- [ProductBundleComponentQuantityOption](../../types/objects/ProductBundleComponentQuantityOption.md)
