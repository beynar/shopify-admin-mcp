# Input Object: `DraftOrderAvailableDeliveryOptionsInput`

The input fields used to determine available delivery options for a draft order.

## Input Fields

- `appliedDiscount`: `DraftOrderAppliedDiscountInput` — The discount that will be applied to the draft order.
- `discountCodes`: `[String!]` — Discount codes that will be attempted to be applied to the draft order. If the draft isn't eligible for any given discount code it will be skipped during calculation.
- `acceptAutomaticDiscounts`: `Boolean` — Whether or not to accept automatic discounts on the draft order during calculation.
- `lineItems`: `[DraftOrderLineItemInput!]` — Product variant line item or custom line item associated to the draft order.
- `shippingAddress`: `MailingAddressInput` — The mailing address to where the order will be shipped.
- `marketRegionCountryCode`: `CountryCode` — The selected country code that determines the pricing of the draft order.
- `purchasingEntity`: `PurchasingEntityInput` — The purchasing entity for the draft order.

## Related Types

- [CountryCode](../../types/enums/CountryCode.md)
- [DraftOrderAppliedDiscountInput](../../types/inputs/DraftOrderAppliedDiscountInput.md)
- [DraftOrderLineItemInput](../../types/inputs/DraftOrderLineItemInput.md)
- [MailingAddressInput](../../types/inputs/MailingAddressInput.md)
- [PurchasingEntityInput](../../types/inputs/PurchasingEntityInput.md)
