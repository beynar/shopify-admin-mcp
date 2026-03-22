# Interface: `DiscountApplication`

Discount applications capture the intentions of a discount source at
the time of application on an order's line items or shipping lines.

Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

## Fields

- `allocationMethod`: `DiscountApplicationAllocationMethod!` — The method by which the discount's value is applied to its entitled items.
- `index`: `Int!` — An ordered index that can be used to identify the discount application and indicate the precedence
- `targetSelection`: `DiscountApplicationTargetSelection!` — How the discount amount is distributed on the discounted lines.
- `targetType`: `DiscountApplicationTargetType!` — Whether the discount is applied on line items or shipping lines.
- `value`: `PricingValue!` — The value of the discount application.

## Possible Types

- [AutomaticDiscountApplication](../../types/objects/AutomaticDiscountApplication.md)
- [DiscountCodeApplication](../../types/objects/DiscountCodeApplication.md)
- [ManualDiscountApplication](../../types/objects/ManualDiscountApplication.md)
- [ScriptDiscountApplication](../../types/objects/ScriptDiscountApplication.md)

## Related Types

- [DiscountApplicationAllocationMethod](../../types/enums/DiscountApplicationAllocationMethod.md)
- [DiscountApplicationTargetSelection](../../types/enums/DiscountApplicationTargetSelection.md)
- [DiscountApplicationTargetType](../../types/enums/DiscountApplicationTargetType.md)
- [PricingValue](../../types/unions/PricingValue.md)
