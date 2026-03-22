# Input Object: `SellingPlanFixedDeliveryPolicyInput`

The input fields required to create or update a fixed delivery policy.

## Input Fields

- `anchors`: `[SellingPlanAnchorInput!]` — The specific anchor dates upon which the delivery interval calculations should be made.
- `fulfillmentTrigger`: `SellingPlanFulfillmentTrigger` — What triggers the fulfillment.
- `fulfillmentExactTime`: `DateTime` — The date and time when the fulfillment should trigger.
- `cutoff`: `Int` — A buffer period for orders to be included in a cycle.
- `intent`: `SellingPlanFixedDeliveryPolicyIntent` — Whether the delivery policy is merchant or buyer-centric.
- `preAnchorBehavior`: `SellingPlanFixedDeliveryPolicyPreAnchorBehavior` — The pre-anchor behavior.

## Related Types

- [SellingPlanAnchorInput](../../types/inputs/SellingPlanAnchorInput.md)
- [SellingPlanFixedDeliveryPolicyIntent](../../types/enums/SellingPlanFixedDeliveryPolicyIntent.md)
- [SellingPlanFixedDeliveryPolicyPreAnchorBehavior](../../types/enums/SellingPlanFixedDeliveryPolicyPreAnchorBehavior.md)
- [SellingPlanFulfillmentTrigger](../../types/enums/SellingPlanFulfillmentTrigger.md)
