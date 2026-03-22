# Object: `SellingPlanRecurringPricingPolicy`

Represents a recurring selling plan pricing policy. It applies after the fixed pricing policy. By using the afterCycle parameter, you can specify the cycle when the recurring pricing policy comes into effect. Recurring pricing policies are not available for deferred purchase options.

**Implements:** `SellingPlanPricingPolicyBase`

## Fields

- `adjustmentType`: `SellingPlanPricingPolicyAdjustmentType!` — The price adjustment type.
- `adjustmentValue`: `SellingPlanPricingPolicyAdjustmentValue!` — The price adjustment value.
- `afterCycle`: `Int` — Cycle after which this pricing policy applies.
- `createdAt`: `DateTime!` — The date and time when the recurring selling plan pricing policy was created.

## Related Types

- [SellingPlanPricingPolicyAdjustmentType](../../types/enums/SellingPlanPricingPolicyAdjustmentType.md)
- [SellingPlanPricingPolicyAdjustmentValue](../../types/unions/SellingPlanPricingPolicyAdjustmentValue.md)
