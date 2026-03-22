# Object: `SellingPlanRecurringDeliveryPolicy`

Represents a recurring selling plan delivery policy.

## Fields

- `anchors`: `[SellingPlanAnchor!]!` — The specific anchor dates upon which the delivery interval calculations should be made.
- `createdAt`: `DateTime!` — The date and time when the selling plan delivery policy was created.
- `cutoff`: `Int` — Number of days which represent a buffer period for orders to be included in a cycle.
- `intent`: `SellingPlanRecurringDeliveryPolicyIntent!` — Whether the delivery policy is merchant or buyer-centric.
- `interval`: `SellingPlanInterval!` — The delivery frequency, it can be either: day, week, month or year.
- `intervalCount`: `Int!` — The number of intervals between deliveries.
- `preAnchorBehavior`: `SellingPlanRecurringDeliveryPolicyPreAnchorBehavior!` — The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`.

## Related Types

- [SellingPlanAnchor](../../types/objects/SellingPlanAnchor.md)
- [SellingPlanInterval](../../types/enums/SellingPlanInterval.md)
- [SellingPlanRecurringDeliveryPolicyIntent](../../types/enums/SellingPlanRecurringDeliveryPolicyIntent.md)
- [SellingPlanRecurringDeliveryPolicyPreAnchorBehavior](../../types/enums/SellingPlanRecurringDeliveryPolicyPreAnchorBehavior.md)
