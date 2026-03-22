# Object: `SellingPlanRecurringBillingPolicy`

Represents a recurring selling plan billing policy.

## Fields

- `anchors`: `[SellingPlanAnchor!]!` — Specific anchor dates upon which the billing interval calculations should be made.
- `createdAt`: `DateTime!` — The date and time when the selling plan billing policy was created.
- `interval`: `SellingPlanInterval!` — The billing frequency, it can be either: day, week, month or year.
- `intervalCount`: `Int!` — The number of intervals between billings.
- `maxCycles`: `Int` — Maximum number of billing iterations.
- `minCycles`: `Int` — Minimum number of billing iterations.

## Related Types

- [SellingPlanAnchor](../../types/objects/SellingPlanAnchor.md)
- [SellingPlanInterval](../../types/enums/SellingPlanInterval.md)
