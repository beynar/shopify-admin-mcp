# Object: `FinancialSummaryDiscountApplication`

Discount applications capture the intentions of a discount source at
the time of application on an order's line items or shipping lines.

## Fields

- `allocationMethod`: `DiscountApplicationAllocationMethod!` — The method by which the discount's value is applied to its entitled items.
- `targetSelection`: `DiscountApplicationTargetSelection!` — How the discount amount is distributed on the discounted lines.
- `targetType`: `DiscountApplicationTargetType!` — Whether the discount is applied on line items or shipping lines.

## Related Types

- [DiscountApplicationAllocationMethod](../../types/enums/DiscountApplicationAllocationMethod.md)
- [DiscountApplicationTargetSelection](../../types/enums/DiscountApplicationTargetSelection.md)
- [DiscountApplicationTargetType](../../types/enums/DiscountApplicationTargetType.md)
