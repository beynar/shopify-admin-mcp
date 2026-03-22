# Input Object: `SellingPlanAnchorInput`

The input fields required to create or update a selling plan anchor.

## Input Fields

- `type`: `SellingPlanAnchorType` — Represents the anchor type, must be one of WEEKDAY, MONTHDAY, YEARDAY.
- `day`: `Int` — The day of the anchor.
- `month`: `Int` — The month of the anchor. If type is different than YEARDAY, then the value must
- `cutoffDay`: `Int` — The cutoff day of the anchor.

## Related Types

- [SellingPlanAnchorType](../../types/enums/SellingPlanAnchorType.md)
