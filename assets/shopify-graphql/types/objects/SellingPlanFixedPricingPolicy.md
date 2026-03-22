# Object: `SellingPlanFixedPricingPolicy`

Represents the pricing policy of a subscription or deferred purchase option selling plan.
The selling plan fixed pricing policy works with the billing and delivery policy
to determine the final price. Discounts are divided among fulfillments.
For example, a subscription with a $10 discount and two deliveries will have a $5
discount applied to each delivery.

**Implements:** `SellingPlanPricingPolicyBase`

## Fields

- `adjustmentType`: `SellingPlanPricingPolicyAdjustmentType!` — The price adjustment type.
- `adjustmentValue`: `SellingPlanPricingPolicyAdjustmentValue!` — The price adjustment value.
- `createdAt`: `DateTime!` — The date and time when the fixed selling plan pricing policy was created.

## Related Types

- [SellingPlanPricingPolicyAdjustmentType](../../types/enums/SellingPlanPricingPolicyAdjustmentType.md)
- [SellingPlanPricingPolicyAdjustmentValue](../../types/unions/SellingPlanPricingPolicyAdjustmentValue.md)
