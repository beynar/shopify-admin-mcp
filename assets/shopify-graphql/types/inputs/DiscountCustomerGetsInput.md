# Input Object: `DiscountCustomerGetsInput`

Specifies the items that will be discounted, the quantity of items that will be discounted, and the value of discount.

## Input Fields

- `value`: `DiscountCustomerGetsValueInput` — The quantity of items discounted and the discount value.
- `items`: `DiscountItemsInput` — The IDs of the items that the customer gets. The items can be either collections or products.
- `appliesOnOneTimePurchase`: `Boolean` — Whether the discount applies on regular one-time-purchase items.
- `appliesOnSubscription`: `Boolean` — Whether the discount applies on subscription items.

## Related Types

- [DiscountCustomerGetsValueInput](../../types/inputs/DiscountCustomerGetsValueInput.md)
- [DiscountItemsInput](../../types/inputs/DiscountItemsInput.md)
