# Object: `AutomaticDiscountApplication`

Automatic discount applications capture the intentions of a discount that was automatically applied.

**Implements:** `DiscountApplication`

## Fields

- `allocationMethod`: `DiscountApplicationAllocationMethod!` — The method by which the discount's value is applied to its entitled items.
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
