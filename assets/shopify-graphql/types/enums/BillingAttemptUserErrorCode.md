# Enum: `BillingAttemptUserErrorCode`

Possible error codes that can be returned by `BillingAttemptUserError`.

## Values

- `INVALID` — The input value is invalid.
- `BLANK` — The input value is blank.
- `CONTRACT_NOT_FOUND` — Subscription contract does not exist.
- `ORIGIN_TIME_BEFORE_CONTRACT_CREATION` — Origin time cannot be before the contract creation time.
- `UPCOMING_CYCLE_LIMIT_EXCEEDED` — Billing cycle selector cannot select upcoming billing cycle past limit.
- `CYCLE_INDEX_OUT_OF_RANGE` — Billing cycle selector cannot select billing cycle outside of index range.
- `CYCLE_START_DATE_OUT_OF_RANGE` — Billing cycle selector cannot select billing cycle outside of start date range.
- `ORIGIN_TIME_OUT_OF_RANGE` — Origin time needs to be within the selected billing cycle's start and end at date.
- `BILLING_CYCLE_CHARGE_BEFORE_EXPECTED_DATE` — Billing cycle charge attempt made more than 24 hours before the billing cycle `billingAttemptExpectedDate`.
- `BILLING_CYCLE_SKIPPED` — Billing cycle must not be skipped.
- `CONTRACT_UNDER_REVIEW` — Subscription contract is under review, origin order is high risk and unfulfilled.
- `CONTRACT_TERMINATED` — Subscription contract cannot be billed once terminated.
- `CONTRACT_PAUSED` — Subscription contract cannot be billed if paused.
- `THROTTLED` — Billing attempt rate limit exceeded - try later.
