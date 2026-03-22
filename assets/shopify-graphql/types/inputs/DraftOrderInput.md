# Input Object: `DraftOrderInput`

The input fields used to create or update a draft order.

## Input Fields

- `appliedDiscount`: `DraftOrderAppliedDiscountInput` — The discount that will be applied to the draft order.
- `discountCodes`: `[String!]` — The list of discount codes that will be attempted to be applied to the draft order.
- `acceptAutomaticDiscounts`: `Boolean` — Whether or not to accept automatic discounts on the draft order during calculation.
- `billingAddress`: `MailingAddressInput` — The mailing address associated with the payment method.
- `customAttributes`: `[AttributeInput!]` — The extra information added to the draft order on behalf of the customer.
- `email`: `String` — The customer's email address.
- `lineItems`: `[DraftOrderLineItemInput!]` — The list of product variant or custom line item.
- `metafields`: `[MetafieldInput!]` — The list of metafields attached to the draft order. An existing metafield can not be used when creating a draft order.
- `localizedFields`: `[LocalizedFieldInput!]` — The localized fields attached to the draft order. For example, Tax IDs.
- `note`: `String` — The text of an optional note that a shop owner can attach to the draft order.
- `shippingAddress`: `MailingAddressInput` — The mailing address to where the order will be shipped.
- `shippingLine`: `ShippingLineInput` — The shipping line object, which details the shipping method used.
- `tags`: `[String!]` — A comma separated list of tags that have been added to the draft order.
- `taxExempt`: `Boolean` — Whether or not taxes are exempt for the draft order.
- `useCustomerDefaultAddress`: `Boolean` — Whether to use the customer's default address.
- `visibleToCustomer`: `Boolean` — Whether the draft order will be visible to the customer on the self-serve portal.
- `reserveInventoryUntil`: `DateTime` — The time after which inventory reservation will expire.
- `presentmentCurrencyCode`: `CurrencyCode` — The payment currency of the customer for this draft order.
- `phone`: `String` — The customer's phone number.
- `paymentTerms`: `PaymentTermsInput` — The fields used to create payment terms.
- `purchasingEntity`: `PurchasingEntityInput` — The purchasing entity for the draft order.
- `sourceName`: `String` — The source of the checkout.
- `allowDiscountCodesInCheckout`: `Boolean` — Whether discount codes are allowed during checkout of this draft order.
- `poNumber`: `String` — The purchase order number.
- `sessionToken`: `String` — The unique token identifying the draft order.
- `transformerFingerprint`: `String` — Fingerprint to guarantee bundles are handled correctly.

## Related Types

- [AttributeInput](../../types/inputs/AttributeInput.md)
- [CurrencyCode](../../types/enums/CurrencyCode.md)
- [DraftOrderAppliedDiscountInput](../../types/inputs/DraftOrderAppliedDiscountInput.md)
- [DraftOrderLineItemInput](../../types/inputs/DraftOrderLineItemInput.md)
- [LocalizedFieldInput](../../types/inputs/LocalizedFieldInput.md)
- [MailingAddressInput](../../types/inputs/MailingAddressInput.md)
- [MetafieldInput](../../types/inputs/MetafieldInput.md)
- [PaymentTermsInput](../../types/inputs/PaymentTermsInput.md)
- [PurchasingEntityInput](../../types/inputs/PurchasingEntityInput.md)
- [ShippingLineInput](../../types/inputs/ShippingLineInput.md)
