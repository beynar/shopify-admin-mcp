# Object: `SubscriptionCyclePriceAdjustment`

Represents a Subscription Line Pricing Cycle Adjustment.

## Fields

- `adjustmentType`: `SellingPlanPricingPolicyAdjustmentType!` — Price adjustment type.
- `adjustmentValue`: `SellingPlanPricingPolicyAdjustmentValue!` — Price adjustment value.
- `afterCycle`: `Int!` — The number of cycles required before this pricing policy applies.
- `computedPrice`: `MoneyV2!` — The computed price after the adjustments applied.

## Related Types

- [MoneyV2](../../types/objects/MoneyV2.md)
- [SellingPlanPricingPolicyAdjustmentType](../../types/enums/SellingPlanPricingPolicyAdjustmentType.md)
- [SellingPlanPricingPolicyAdjustmentValue](../../types/unions/SellingPlanPricingPolicyAdjustmentValue.md)
