# Input Object: `OrderCreateDiscountCodeInput`

The input fields for a discount code to apply to an order. Only one type of discount can be applied to an order.

## Input Fields

- `itemPercentageDiscountCode`: `OrderCreatePercentageDiscountCodeAttributesInput` — A percentage discount code applied to the line items on the order.
- `itemFixedDiscountCode`: `OrderCreateFixedDiscountCodeAttributesInput` — A fixed amount discount code applied to the line items on the order.
- `freeShippingDiscountCode`: `OrderCreateFreeShippingDiscountCodeAttributesInput` — A free shipping discount code applied to the shipping on an order.

## Related Types

- [OrderCreateFixedDiscountCodeAttributesInput](../../types/inputs/OrderCreateFixedDiscountCodeAttributesInput.md)
- [OrderCreateFreeShippingDiscountCodeAttributesInput](../../types/inputs/OrderCreateFreeShippingDiscountCodeAttributesInput.md)
- [OrderCreatePercentageDiscountCodeAttributesInput](../../types/inputs/OrderCreatePercentageDiscountCodeAttributesInput.md)
