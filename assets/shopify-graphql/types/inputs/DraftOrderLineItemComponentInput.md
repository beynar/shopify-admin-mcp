# Input Object: `DraftOrderLineItemComponentInput`

The input fields representing the components of a line item.

## Input Fields

- `variantId`: `ID` — The ID of the product variant corresponding to the component.
- `quantity`: `Int!` — The quantity of the component.
- `uuid`: `String` — The UUID of the component. Must be unique and consistent across requests.
