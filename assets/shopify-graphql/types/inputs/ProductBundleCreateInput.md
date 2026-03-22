# Input Object: `ProductBundleCreateInput`

The input fields for creating a componentized product.

## Input Fields

- `title`: `String!` — The title of the product to create.
- `consolidatedOptions`: `[ProductBundleConsolidatedOptionInput!]` — The consolidated options of the componentized product to create, if provided.
- `components`: `[ProductBundleComponentInput!]!` — The component products to bundle with the bundle product.

## Related Types

- [ProductBundleComponentInput](../../types/inputs/ProductBundleComponentInput.md)
- [ProductBundleConsolidatedOptionInput](../../types/inputs/ProductBundleConsolidatedOptionInput.md)
