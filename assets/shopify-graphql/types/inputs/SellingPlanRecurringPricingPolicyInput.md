# Input Object: `SellingPlanRecurringPricingPolicyInput`

The input fields required to create or update a recurring selling plan pricing policy.

## Input Fields

- `id`: `ID` — ID of the pricing policy.
- `adjustmentType`: `SellingPlanPricingPolicyAdjustmentType` — Price adjustment type defined by the policy.
- `adjustmentValue`: `SellingPlanPricingPolicyValueInput` — Price adjustment value defined by the policy.
- `afterCycle`: `Int!` — Cycle after which the pricing policy applies.

## Related Types

- [SellingPlanPricingPolicyAdjustmentType](../../types/enums/SellingPlanPricingPolicyAdjustmentType.md)
- [SellingPlanPricingPolicyValueInput](../../types/inputs/SellingPlanPricingPolicyValueInput.md)
