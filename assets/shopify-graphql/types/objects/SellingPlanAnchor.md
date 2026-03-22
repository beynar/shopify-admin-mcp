# Object: `SellingPlanAnchor`

Specifies the date when delivery or fulfillment is completed by a merchant for a given time cycle. You can also
define a cutoff for which customers are eligible to enter this cycle and the desired behavior for customers who
start their subscription inside the cutoff period.

Some example scenarios where anchors can be useful to implement advanced delivery behavior:
- A merchant starts fulfillment on a specific date every month.
- A merchant wants to bill the 1st of every quarter.
- A customer expects their delivery every Tuesday.

For more details, see [About Selling Plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans#anchors).

## Fields

- `cutoffDay`: `Int` — The cutoff day for the anchor. Specifies a buffer period before the anchor date for orders to be included in a
- `day`: `Int!` — The day of the anchor.
- `month`: `Int` — The month of the anchor. If type is different than YEARDAY, then the value must
- `type`: `SellingPlanAnchorType!` — Represents the anchor type, it can be one one of WEEKDAY, MONTHDAY, YEARDAY.

## Related Types

- [SellingPlanAnchorType](../../types/enums/SellingPlanAnchorType.md)
