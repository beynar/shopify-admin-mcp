# Object: `SegmentEventFilter`

A filter that's used to segment customers based on the date that an event occured. For example, the `product_bought` event filter allows you to segment customers based on what products they've bought.

**Implements:** `SegmentFilter`

## Fields

- `localizedName`: `String!` — The localized name of the filter.
- `multiValue`: `Boolean!` — Whether a file can have multiple values for a single customer.
- `parameters`: `[SegmentEventFilterParameter!]!` — The parameters for an event segment filter.
- `queryName`: `String!` — The query name of the filter.
- `returnValueType`: `String!` — The return value type for an event segment filter.

## Related Types

- [SegmentEventFilterParameter](../../types/objects/SegmentEventFilterParameter.md)
