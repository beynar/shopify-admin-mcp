# Object: `SubscriptionDeliveryPolicy`

Represents a Subscription Delivery Policy.

## Fields

- `anchors`: `[SellingPlanAnchor!]!` — The specific anchor dates upon which the delivery interval calculations should be made.
- `interval`: `SellingPlanInterval!` — The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc).
- `intervalCount`: `Int!` — The number of delivery intervals between deliveries.

## Related Types

- [SellingPlanAnchor](../../types/objects/SellingPlanAnchor.md)
- [SellingPlanInterval](../../types/enums/SellingPlanInterval.md)
