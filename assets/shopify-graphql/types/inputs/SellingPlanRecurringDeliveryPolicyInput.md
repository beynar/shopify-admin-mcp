# Input Object: `SellingPlanRecurringDeliveryPolicyInput`

The input fields to create or update a recurring delivery policy.

## Input Fields

- `interval`: `SellingPlanInterval` — The delivery frequency, it can be either: day, week, month or year.
- `intervalCount`: `Int` — The number of intervals between deliveries.
- `anchors`: `[SellingPlanAnchorInput!]` — The specific anchor dates upon which the delivery interval calculations should be made.
- `cutoff`: `Int` — A buffer period for orders to be included in a cycle.
- `intent`: `SellingPlanRecurringDeliveryPolicyIntent` — Intention of this delivery policy, it can be either: delivery or fulfillment.
- `preAnchorBehavior`: `SellingPlanRecurringDeliveryPolicyPreAnchorBehavior` — The pre-anchor behavior. It can be either: asap or next.

## Related Types

- [SellingPlanAnchorInput](../../types/inputs/SellingPlanAnchorInput.md)
- [SellingPlanInterval](../../types/enums/SellingPlanInterval.md)
- [SellingPlanRecurringDeliveryPolicyIntent](../../types/enums/SellingPlanRecurringDeliveryPolicyIntent.md)
- [SellingPlanRecurringDeliveryPolicyPreAnchorBehavior](../../types/enums/SellingPlanRecurringDeliveryPolicyPreAnchorBehavior.md)
