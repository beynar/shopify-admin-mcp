# Input Object: `ProductBundleComponentQuantityOptionInput`

Input for the quantity option related to a component product. This will become a new option on the parent bundle product that doesn't have a corresponding option on the component.

## Input Fields

- `name`: `String!` — The option name to create on the parent product.
- `values`: `[ProductBundleComponentQuantityOptionValueInput!]!` — Array of option values.

## Related Types

- [ProductBundleComponentQuantityOptionValueInput](../../types/inputs/ProductBundleComponentQuantityOptionValueInput.md)
