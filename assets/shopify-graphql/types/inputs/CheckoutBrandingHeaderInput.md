# Input Object: `CheckoutBrandingHeaderInput`

The input fields used to update the header customizations.

## Input Fields

- `alignment`: `CheckoutBrandingHeaderAlignment` — The header alignment.
- `position`: `CheckoutBrandingHeaderPosition` — The header position.
- `logo`: `CheckoutBrandingLogoInput` — The store logo.
- `banner`: `CheckoutBrandingImageInput` — The background image of the header (must not be of SVG format).
- `divided`: `Boolean` — The divided setting.
- `cartLink`: `CheckoutBrandingHeaderCartLinkInput` — The input for cart link customizations for 1-page checkout. This field allows to customize the cart icon that renders by default on 1-page checkout.
- `colorScheme`: `CheckoutBrandingColorSchemeSelection` — The selected color scheme of the header container.
- `padding`: `CheckoutBrandingSpacingKeyword` — The padding of the header container.

## Related Types

- [CheckoutBrandingColorSchemeSelection](../../types/enums/CheckoutBrandingColorSchemeSelection.md)
- [CheckoutBrandingHeaderAlignment](../../types/enums/CheckoutBrandingHeaderAlignment.md)
- [CheckoutBrandingHeaderCartLinkInput](../../types/inputs/CheckoutBrandingHeaderCartLinkInput.md)
- [CheckoutBrandingHeaderPosition](../../types/enums/CheckoutBrandingHeaderPosition.md)
- [CheckoutBrandingImageInput](../../types/inputs/CheckoutBrandingImageInput.md)
- [CheckoutBrandingLogoInput](../../types/inputs/CheckoutBrandingLogoInput.md)
- [CheckoutBrandingSpacingKeyword](../../types/enums/CheckoutBrandingSpacingKeyword.md)
