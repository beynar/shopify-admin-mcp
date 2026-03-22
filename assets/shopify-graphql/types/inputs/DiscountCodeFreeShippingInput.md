# Input Object: `DiscountCodeFreeShippingInput`

The input fields for creating or updating a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

When creating, required fields are:
  - `code`
  - `context` (or deprecated `customerSelection`)
  - `startsAt`
  - `title`

## Input Fields

- `combinesWith`: `DiscountCombinesWithInput` — The
- `title`: `String` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `startsAt`: `DateTime` — The date and time when the discount becomes active and is available to customers.
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `appliesOncePerCustomer`: `Boolean` — Whether a customer can only use the discount once.
- `code`: `String` — The code that customers use to apply the discount.
- `usageLimit`: `Int` — The maximum number of times the discount can be redeemed.
- `context`: `DiscountContextInput` — The context defining which buyers can use the discount.
- `minimumRequirement`: `DiscountMinimumRequirementInput` — The minimum subtotal or quantity of items that are required for the discount to be applied.
- `destination`: `DiscountShippingDestinationSelectionInput` — The shipping destinations where the free shipping discount can be applied. You can specify whether the discount applies to all countries, or specify individual countries.
- `maximumShippingPrice`: `Decimal` — The maximum shipping price, in the shop's currency, that qualifies for free shipping.
- `recurringCycleLimit`: `Int` — The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts.
- `appliesOnOneTimePurchase`: `Boolean` — Whether the discount applies on one-time purchases. A one-time purchase is a transaction where you pay a single time for a product, without any ongoing commitments or recurring charges.
- `appliesOnSubscription`: `Boolean` — Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

## Related Types

- [DiscountCombinesWithInput](../../types/inputs/DiscountCombinesWithInput.md)
- [DiscountContextInput](../../types/inputs/DiscountContextInput.md)
- [DiscountMinimumRequirementInput](../../types/inputs/DiscountMinimumRequirementInput.md)
- [DiscountShippingDestinationSelectionInput](../../types/inputs/DiscountShippingDestinationSelectionInput.md)
