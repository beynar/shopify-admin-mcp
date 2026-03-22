# Input Object: `SubscriptionPricingPolicyCycleDiscountsInput`

The input fields for an array containing all pricing changes for each billing cycle.

## Input Fields

- `afterCycle`: `Int!` — The cycle after which the pricing policy applies.
- `adjustmentType`: `SellingPlanPricingPolicyAdjustmentType!` — The price adjustment type.
- `adjustmentValue`: `SellingPlanPricingPolicyValueInput!` — The price adjustment value.
- `computedPrice`: `Decimal!` — The computed price after the adjustments are applied.

## Related Types

- [SellingPlanPricingPolicyAdjustmentType](../../types/enums/SellingPlanPricingPolicyAdjustmentType.md)
- [SellingPlanPricingPolicyValueInput](../../types/inputs/SellingPlanPricingPolicyValueInput.md)
