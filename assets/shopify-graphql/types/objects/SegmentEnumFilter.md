# Object: `SegmentEnumFilter`

Categorical filter options for building customer segments using predefined value sets like countries, subscription statuses, or order frequencies.

For example, a "Customer Location" enum filter provides options like "United States," "Canada," and "United Kingdom."

Use this object to:
- Access available categorical filter options
- Understand filter capabilities and constraints
- Build user interfaces for segment creation

Includes localized display names, indicates whether multiple values can be selected, and provides technical query names for API operations.

**Implements:** `SegmentFilter`

## Fields

- `localizedName`: `String!` — The localized name of the filter.
- `multiValue`: `Boolean!` — Whether a file can have multiple values for a single customer.
- `queryName`: `String!` — The query name of the filter.
