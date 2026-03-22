# Input Object: `DiscountAutomaticBxgyInput`

The input fields for creating or updating a
[buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)
that's automatically applied on a cart and at checkout.

When creating, required fields are:
  - `customerBuys`
  - `customerGets`
  - `startsAt`
  - `title`

## Input Fields

- `combinesWith`: `DiscountCombinesWithInput` — The
- `title`: `String` — The discount's name that displays to merchants in the Shopify admin and to customers.
- `startsAt`: `DateTime` — The date and time when the discount becomes active and is available to customers.
- `endsAt`: `DateTime` — The date and time when the discount expires and is no longer available to customers.
- `context`: `DiscountContextInput` — The context defining which buyers can use the discount.
- `usesPerOrderLimit`: `UnsignedInt64` — The maximum number of times that the discount can be applied to an order.
- `customerBuys`: `DiscountCustomerBuysInput` — The items eligible for the discount and the required quantity of each to receive the discount.
- `customerGets`: `DiscountCustomerGetsInput` — The items in the order that qualify for the discount, their quantities, and the total value of the discount.

## Related Types

- [DiscountCombinesWithInput](../../types/inputs/DiscountCombinesWithInput.md)
- [DiscountContextInput](../../types/inputs/DiscountContextInput.md)
- [DiscountCustomerBuysInput](../../types/inputs/DiscountCustomerBuysInput.md)
- [DiscountCustomerGetsInput](../../types/inputs/DiscountCustomerGetsInput.md)
