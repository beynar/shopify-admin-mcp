# Object: `DiscountCustomerBuys`

The prerequisite items and prerequisite value that a customer must have on the order for the discount to be applicable.

## Fields

- `isOneTimePurchase`: `Boolean!` — If the discount is applicable when a customer buys a one-time purchase.
- `isSubscription`: `Boolean!` — If the discount is applicable when a customer buys a subscription purchase.
- `items`: `DiscountItems!` — The items required for the discount to be applicable.
- `value`: `DiscountCustomerBuysValue!` — The prerequisite value.

## Related Types

- [DiscountCustomerBuysValue](../../types/unions/DiscountCustomerBuysValue.md)
- [DiscountItems](../../types/unions/DiscountItems.md)
