# Input Object: `SellingPlanRecurringBillingPolicyInput`

The input fields required to create or update a recurring billing policy.

## Input Fields

- `interval`: `SellingPlanInterval` — The billing frequency, it can be either: day, week, month or year.
- `intervalCount`: `Int` — The number of intervals between billings.
- `anchors`: `[SellingPlanAnchorInput!]` — Specific anchor dates upon which the billing interval calculations should be made.
- `minCycles`: `Int` — Minimum number of billing iterations.
- `maxCycles`: `Int` — Maximum number of billing iterations.

## Related Types

- [SellingPlanAnchorInput](../../types/inputs/SellingPlanAnchorInput.md)
- [SellingPlanInterval](../../types/enums/SellingPlanInterval.md)
