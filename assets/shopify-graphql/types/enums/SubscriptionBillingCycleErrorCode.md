# Enum: `SubscriptionBillingCycleErrorCode`

Possible error codes that can be returned by `SubscriptionBillingCycleUserError`.

## Values

- `INVALID` — The input value is invalid.
- `CYCLE_NOT_FOUND` — Can't find the billing cycle.
- `NO_CYCLE_EDITS` — There's no contract or schedule edit associated with the targeted billing cycle(s).
- `INVALID_CYCLE_INDEX` — The index selector is invalid.
- `INVALID_DATE` — The date selector is invalid.
- `EMPTY_BILLING_CYCLE_EDIT_SCHEDULE_INPUT` — Billing cycle schedule edit input provided is empty. Must take in parameters to modify schedule.
- `BILLING_DATE_SET_ON_SKIPPED` — Billing date cannot be set on skipped billing cycle.
- `OUT_OF_BOUNDS` — Billing date of a cycle cannot be set to a value outside of its billing date range.
- `UPCOMING_CYCLE_LIMIT_EXCEEDED` — Billing cycle selector cannot select upcoming billing cycle past limit.
- `CYCLE_INDEX_OUT_OF_RANGE` — Billing cycle selector cannot select billing cycle outside of index range.
- `CYCLE_START_DATE_OUT_OF_RANGE` — Billing cycle selector cannot select billing cycle outside of start date range.
- `INCOMPLETE_BILLING_ATTEMPTS` — Billing cycle has incomplete billing attempts in progress.
