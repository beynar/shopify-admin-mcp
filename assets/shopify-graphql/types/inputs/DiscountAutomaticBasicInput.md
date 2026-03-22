# Input Object: `DiscountAutomaticBasicInput`

The input fields for creating or updating an
[amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount)
that's automatically applied on a cart and at checkout.

During creation the required fields are:
  - `customerGets`
  - `startsAt`
  - `title`

## Input Fields

- `combinesWith`: `DiscountCombinesWithInput` — The
- `title`: `String` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `startsAt`: `DateTime` — The date and time when the discount becomes active and is available to customers.
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `context`: `DiscountContextInput` — The context defining which buyers can use the discount.
- `minimumRequirement`: `DiscountMinimumRequirementInput` — The minimum subtotal or quantity of items that are required for the discount to be applied.
- `customerGets`: `DiscountCustomerGetsInput` — Information about the qualifying items and their discount.
- `recurringCycleLimit`: `Int` — The number of billing cycles for which the discount can be applied,

## Related Types

- [DiscountCombinesWithInput](../../types/inputs/DiscountCombinesWithInput.md)
- [DiscountContextInput](../../types/inputs/DiscountContextInput.md)
- [DiscountCustomerGetsInput](../../types/inputs/DiscountCustomerGetsInput.md)
- [DiscountMinimumRequirementInput](../../types/inputs/DiscountMinimumRequirementInput.md)
