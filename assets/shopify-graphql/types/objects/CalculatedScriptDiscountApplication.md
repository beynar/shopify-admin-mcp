# Object: `CalculatedScriptDiscountApplication`

A discount created by a Shopify script for an order that is being edited.

**Implements:** `CalculatedDiscountApplication`

## Fields

- `allocationMethod`: `DiscountApplicationAllocationMethod!` — The method by which the discount's value is allocated to its entitled items.
- `appliedTo`: `DiscountApplicationLevel!` — The level at which the discount was applied.
- `description`: `String` — The description of discount application. Indicates the reason why the discount was applied.
- `id`: `ID!` — A globally-unique ID.
- `targetSelection`: `DiscountApplicationTargetSelection!` — How the discount amount is distributed on the discounted lines.
- `targetType`: `DiscountApplicationTargetType!` — Whether the discount is applied on line items or shipping lines.
- `value`: `PricingValue!` — The value of the discount application.

## Related Types

- [DiscountApplicationAllocationMethod](../../types/enums/DiscountApplicationAllocationMethod.md)
- [DiscountApplicationLevel](../../types/enums/DiscountApplicationLevel.md)
- [DiscountApplicationTargetSelection](../../types/enums/DiscountApplicationTargetSelection.md)
- [DiscountApplicationTargetType](../../types/enums/DiscountApplicationTargetType.md)
- [PricingValue](../../types/unions/PricingValue.md)
