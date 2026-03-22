# Object: `DiscountCustomerGets`

The items in the order that qualify for the discount, their quantities, and the total value of the discount.

## Fields

- `appliesOnOneTimePurchase`: `Boolean!` — Whether the discount applies on regular one-time-purchase items.
- `appliesOnSubscription`: `Boolean!` — Whether the discount applies on subscription items.
- `items`: `DiscountItems!` — The items to which the discount applies.
- `value`: `DiscountCustomerGetsValue!` — Entitled quantity and the discount value.

## Related Types

- [DiscountCustomerGetsValue](../../types/unions/DiscountCustomerGetsValue.md)
- [DiscountItems](../../types/unions/DiscountItems.md)
