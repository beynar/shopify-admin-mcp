# Input Object: `DiscountCustomerBuysInput`

The input fields for prerequisite items and quantity for the discount.

## Input Fields

- `value`: `DiscountCustomerBuysValueInput` — The quantity of prerequisite items.
- `items`: `DiscountItemsInput` — The IDs of items that the customer buys. The items can be either collections or products.
- `isOneTimePurchase`: `Boolean` = `true` — If the discount is applicable when a customer buys a one-time purchase.
- `isSubscription`: `Boolean` = `false` — If the discount is applicable when a customer buys a subscription purchase.

## Related Types

- [DiscountCustomerBuysValueInput](../../types/inputs/DiscountCustomerBuysValueInput.md)
- [DiscountItemsInput](../../types/inputs/DiscountItemsInput.md)
