# Input Object: `DiscountCodeBasicInput`

The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

When creating, required fields are:
  - `code`
  - `context` (or deprecated `customerSelection`)
  - `customerGets`
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
- `customerGets`: `DiscountCustomerGetsInput` — The items in the order that qualify for the discount, their quantities, and the total value of the discount.
- `recurringCycleLimit`: `Int` — The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

## Related Types

- [DiscountCombinesWithInput](../../types/inputs/DiscountCombinesWithInput.md)
- [DiscountContextInput](../../types/inputs/DiscountContextInput.md)
- [DiscountCustomerGetsInput](../../types/inputs/DiscountCustomerGetsInput.md)
- [DiscountMinimumRequirementInput](../../types/inputs/DiscountMinimumRequirementInput.md)
