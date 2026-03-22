# Input Object: `ProductBundleUpdateInput`

The input fields for updating a componentized product.

## Input Fields

- `productId`: `ID!` — The ID of the componentized product to update.
- `title`: `String` — The title to rename the componentized product to, if provided.
- `consolidatedOptions`: `[ProductBundleConsolidatedOptionInput!]` — The consolidated options of the componentized product to update, if provided.
- `components`: `[ProductBundleComponentInput!]` — The components to update existing ones. If none provided, no changes occur. Note: This replaces, not adds to, current components.

## Related Types

- [ProductBundleComponentInput](../../types/inputs/ProductBundleComponentInput.md)
- [ProductBundleConsolidatedOptionInput](../../types/inputs/ProductBundleConsolidatedOptionInput.md)
