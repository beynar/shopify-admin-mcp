# Query: `checkoutBranding`

**Returns:** `CheckoutBranding`

Returns the visual customizations for checkout for a given [checkout profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile).

To update checkout branding settings, use the [`checkoutBrandingUpsert`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert) mutation. Learn more about [customizing checkout's appearance](https://shopify.dev/docs/apps/build/checkout/styling).

## Arguments

- **`checkoutProfileId`**: `ID!` — A globally-unique identifier.

## Return Type Fields

- `customizations`: `CheckoutBrandingCustomizations` — The customizations that apply to specific components or areas of the user interface.
- `designSystem`: `CheckoutBrandingDesignSystem` — The design system allows you to set values that represent specific attributes

## Related Types

- [CheckoutBranding](../types/objects/CheckoutBranding.md)
- [CheckoutBrandingCustomizations](../types/objects/CheckoutBrandingCustomizations.md)
- [CheckoutBrandingDesignSystem](../types/objects/CheckoutBrandingDesignSystem.md)

## Example Query

```graphql
query CheckoutBranding($checkoutProfileId: ID!) {
  checkoutBranding(checkoutProfileId: $checkoutProfileId) {
  }
}
```
