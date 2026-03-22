# Input Object: `ProductBundleComponentInput`

The input fields for a single component related to a componentized product.

## Input Fields

- `quantity`: `Int` — The quantity of the component product to add to the bundle product. This field can't exceed 2000.
- `productId`: `ID!` — The ID of the component product to add to the bundle product.
- `optionSelections`: `[ProductBundleComponentOptionSelectionInput!]!` — The options to use in the component product, and the values for the option.
- `quantityOption`: `ProductBundleComponentQuantityOptionInput` — New option to be created on the bundle parent that enables the buyer to select different quantities for

## Related Types

- [ProductBundleComponentOptionSelectionInput](../../types/inputs/ProductBundleComponentOptionSelectionInput.md)
- [ProductBundleComponentQuantityOptionInput](../../types/inputs/ProductBundleComponentQuantityOptionInput.md)
