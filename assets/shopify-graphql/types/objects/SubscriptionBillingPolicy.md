# Object: `SubscriptionBillingPolicy`

Represents a Subscription Billing Policy.

## Fields

- `anchors`: `[SellingPlanAnchor!]!` — Specific anchor dates upon which the billing interval calculations should be made.
- `interval`: `SellingPlanInterval!` — The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc).
- `intervalCount`: `Int!` — The number of billing intervals between invoices.
- `maxCycles`: `Int` — Maximum amount of cycles after which the subscription ends.
- `minCycles`: `Int` — Minimum amount of cycles required in the subscription.

## Related Types

- [SellingPlanAnchor](../../types/objects/SellingPlanAnchor.md)
- [SellingPlanInterval](../../types/enums/SellingPlanInterval.md)
