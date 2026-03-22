# Input Object: `DraftOrderLineItemInput`

The input fields for a line item included in a draft order.

## Input Fields

- `appliedDiscount`: `DraftOrderAppliedDiscountInput` — The custom discount to be applied.
- `customAttributes`: `[AttributeInput!]` — A generic custom attribute using a key value pair.
- `originalUnitPriceWithCurrency`: `MoneyInput` — The price in presentment currency, without any discounts applied, for a custom line item.
- `quantity`: `Int!` — The line item quantity.
- `requiresShipping`: `Boolean` — Whether physical shipping is required for a custom line item. This field is ignored when `variantId` is provided.
- `sku`: `String` — The SKU number for custom line items only. This field is ignored when `variantId` is provided.
- `taxable`: `Boolean` — Whether the custom line item is taxable. This field is ignored when `variantId` is provided.
- `title`: `String` — Title of the line item. This field is ignored when `variantId` is provided.
- `variantId`: `ID` — The ID of the product variant corresponding to the line item.
- `weight`: `WeightInput` — The weight unit and value inputs for custom line items only.
- `uuid`: `String` — The UUID of the draft order line item. Must be unique and consistent across requests.
- `components`: `[DraftOrderLineItemComponentInput!]` — The components of the draft order line item.
- `generatePriceOverride`: `Boolean` — If the line item doesn't already have a price override input, setting `generatePriceOverride` to `true` will
- `priceOverride`: `MoneyInput` — The price override for the line item. Should be set in presentment currency.

## Related Types

- [AttributeInput](../../types/inputs/AttributeInput.md)
- [DraftOrderAppliedDiscountInput](../../types/inputs/DraftOrderAppliedDiscountInput.md)
- [DraftOrderLineItemComponentInput](../../types/inputs/DraftOrderLineItemComponentInput.md)
- [MoneyInput](../../types/inputs/MoneyInput.md)
- [WeightInput](../../types/inputs/WeightInput.md)
