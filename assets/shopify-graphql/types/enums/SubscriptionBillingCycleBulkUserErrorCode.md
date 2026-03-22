# Enum: `SubscriptionBillingCycleBulkUserErrorCode`

Possible error codes that can be returned by `SubscriptionBillingCycleBulkUserError`.

## Values

- `INVALID` — The input value is invalid.
- `BLANK` — The input value is blank.
- `END_DATE_IN_THE_FUTURE` — End date can't be more than 24 hours in the future.
- `INVALID_DATE_RANGE` — The range between start date and end date shouldn't be more than 1 week.
- `START_DATE_BEFORE_END_DATE` — Start date should be before end date.
