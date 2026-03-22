# Input Object: `InventoryAdjustmentInput`

The input fields required to adjust the available quantity of a product variant at a location.

## Input Fields

- `locationId`: `ID!` — The ID of the location where the available quantity should be adjusted.
- `adjustment`: `Int` — The adjustment of the available quantity at the location. If the value is `null`, then the product variant is no longer stocked at the location.
- `changeFromQuantity`: `Int` — The quantity to compare against before applying the delta.
