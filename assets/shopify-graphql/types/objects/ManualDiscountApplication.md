# Object: `ManualDiscountApplication`

Manual discount applications capture the intentions of a discount that was manually created for an order.

Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

**Implements:** `DiscountApplication`

## Fields

- `allocationMethod`: `DiscountApplicationAllocationMethod!` — The method by which the discount's value is applied to its entitled items.
- `description`: `String` — The description of the discount application.
- `index`: `Int!` — An ordered index that can be used to identify the discount application and indicate the precedence
- `targetSelection`: `DiscountApplicationTargetSelection!` — How the discount amount is distributed on the discounted lines.
- `targetType`: `DiscountApplicationTargetType!` — Whether the discount is applied on line items or shipping lines.
- `title`: `String!` — The title of the discount application.
- `value`: `PricingValue!` — The value of the discount application.

## Related Types

- [DiscountApplicationAllocationMethod](../../types/enums/DiscountApplicationAllocationMethod.md)
- [DiscountApplicationTargetSelection](../../types/enums/DiscountApplicationTargetSelection.md)
- [DiscountApplicationTargetType](../../types/enums/DiscountApplicationTargetType.md)
- [PricingValue](../../types/unions/PricingValue.md)
