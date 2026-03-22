# Input Object: `DiscountAutomaticFreeShippingInput`

The input fields for creating or updating a
[free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping)
that's automatically applied on a cart and at checkout.

When creating, required fields are:
- `startsAt`
- `title`

## Input Fields

- `title`: `String` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `startsAt`: `DateTime` — The date and time when the discount becomes active and is available to customers.
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `context`: `DiscountContextInput` — The context defining which buyers can use the discount.
- `combinesWith`: `DiscountCombinesWithInput` — The
- `minimumRequirement`: `DiscountMinimumRequirementInput` — The minimum subtotal or quantity of items that are required for the discount to be applied.
- `destination`: `DiscountShippingDestinationSelectionInput` — A list of destinations where the discount will apply.
- `maximumShippingPrice`: `Decimal` — The maximum shipping price that qualifies for the discount.
- `appliesOnOneTimePurchase`: `Boolean` — Whether the discount applies on regular one-time-purchase items.
- `appliesOnSubscription`: `Boolean` — Whether the discount applies on subscription items.
- `recurringCycleLimit`: `Int` — The number of billing cycles for which the discount can be applied,

## Related Types

- [DiscountCombinesWithInput](../../types/inputs/DiscountCombinesWithInput.md)
- [DiscountContextInput](../../types/inputs/DiscountContextInput.md)
- [DiscountMinimumRequirementInput](../../types/inputs/DiscountMinimumRequirementInput.md)
- [DiscountShippingDestinationSelectionInput](../../types/inputs/DiscountShippingDestinationSelectionInput.md)
