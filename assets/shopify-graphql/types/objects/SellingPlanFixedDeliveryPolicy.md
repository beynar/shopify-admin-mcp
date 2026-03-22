# Object: `SellingPlanFixedDeliveryPolicy`

Represents a fixed selling plan delivery policy.

## Fields

- `anchors`: `[SellingPlanAnchor!]!` — The specific anchor dates upon which the delivery interval calculations should be made.
- `cutoff`: `Int` — A buffer period for orders to be included in next fulfillment anchor.
- `fulfillmentExactTime`: `DateTime` — The date and time when the fulfillment should trigger.
- `fulfillmentTrigger`: `SellingPlanFulfillmentTrigger!` — What triggers the fulfillment. The value must be one of ANCHOR, ASAP, EXACT_TIME, or UNKNOWN.
- `intent`: `SellingPlanFixedDeliveryPolicyIntent!` — Whether the delivery policy is merchant or buyer-centric.
- `preAnchorBehavior`: `SellingPlanFixedDeliveryPolicyPreAnchorBehavior!` — The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`.

## Related Types

- [SellingPlanAnchor](../../types/objects/SellingPlanAnchor.md)
- [SellingPlanFixedDeliveryPolicyIntent](../../types/enums/SellingPlanFixedDeliveryPolicyIntent.md)
- [SellingPlanFixedDeliveryPolicyPreAnchorBehavior](../../types/enums/SellingPlanFixedDeliveryPolicyPreAnchorBehavior.md)
- [SellingPlanFulfillmentTrigger](../../types/enums/SellingPlanFulfillmentTrigger.md)
