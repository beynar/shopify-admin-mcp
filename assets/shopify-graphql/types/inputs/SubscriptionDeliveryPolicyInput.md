# Input Object: `SubscriptionDeliveryPolicyInput`

The input fields for a Subscription Delivery Policy.

## Input Fields

- `interval`: `SellingPlanInterval!` — The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc).
- `intervalCount`: `Int!` — The number of billing intervals between invoices.
- `anchors`: `[SellingPlanAnchorInput!]` = `[]` — The specific anchor dates upon which the delivery interval calculations should be made.

## Related Types

- [SellingPlanAnchorInput](../../types/inputs/SellingPlanAnchorInput.md)
- [SellingPlanInterval](../../types/enums/SellingPlanInterval.md)
