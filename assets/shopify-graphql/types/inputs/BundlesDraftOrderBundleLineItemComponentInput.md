# Input Object: `BundlesDraftOrderBundleLineItemComponentInput`

The input fields representing the components of a bundle line item.

## Input Fields

- `variantId`: `ID` — The ID of the product variant corresponding to the bundle component.
- `quantity`: `Int!` — The quantity of the bundle component.
- `uuid`: `String` — The UUID of the bundle component. Must be unique and consistent across requests.
