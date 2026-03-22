# Input Object: `CheckoutBrandingColorSchemeInput`

The input fields for a base set of color customizations that's applied to an area of Checkout, from which
every component pulls its colors.

## Input Fields

- `base`: `CheckoutBrandingColorRolesInput` — The main colors of a scheme. Used for the surface background, text, links, and more.
- `control`: `CheckoutBrandingControlColorRolesInput` — The colors of form controls, such as the [`TextField`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/forms/textfield) and [`ChoiceList`](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/forms/choicelist) components.
- `primaryButton`: `CheckoutBrandingButtonColorRolesInput` — The colors of the primary button. For example, the main payment, or **Pay now** button.
- `secondaryButton`: `CheckoutBrandingButtonColorRolesInput` — The colors of the secondary button, which is used for secondary actions. For example, **Buy again**.

## Related Types

- [CheckoutBrandingButtonColorRolesInput](../../types/inputs/CheckoutBrandingButtonColorRolesInput.md)
- [CheckoutBrandingColorRolesInput](../../types/inputs/CheckoutBrandingColorRolesInput.md)
- [CheckoutBrandingControlColorRolesInput](../../types/inputs/CheckoutBrandingControlColorRolesInput.md)
