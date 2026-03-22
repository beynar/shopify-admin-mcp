# Input Object: `SubscriptionBillingPolicyInput`

The input fields for a Subscription Billing Policy.

## Input Fields

- `interval`: `SellingPlanInterval!` — The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc).
- `intervalCount`: `Int!` — The number of billing intervals between invoices.
- `minCycles`: `Int` — Minimum amount of cycles required in the subscription.
- `maxCycles`: `Int` — Maximum amount of cycles required in the subscription.
- `anchors`: `[SellingPlanAnchorInput!]` = `[]` — Specific anchor dates upon which the billing interval calculations should be made.

## Related Types

- [SellingPlanAnchorInput](../../types/inputs/SellingPlanAnchorInput.md)
- [SellingPlanInterval](../../types/enums/SellingPlanInterval.md)
