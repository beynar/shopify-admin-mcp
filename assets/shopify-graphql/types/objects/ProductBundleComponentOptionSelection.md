# Object: `ProductBundleComponentOptionSelection`

A relationship between a component option and a parent option.

## Fields

- `componentOption`: `ProductOption!` — The option that existed on the component product prior to the fixed bundle creation.
- `parentOption`: `ProductOption` — The option that was created on the parent product.
- `values`: `[ProductBundleComponentOptionSelectionValue!]!` — The component option values that are actively selected for this relationship.

## Related Types

- [ProductBundleComponentOptionSelectionValue](../../types/objects/ProductBundleComponentOptionSelectionValue.md)
- [ProductOption](../../types/objects/ProductOption.md)
