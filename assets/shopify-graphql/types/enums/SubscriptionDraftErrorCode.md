# Enum: `SubscriptionDraftErrorCode`

Possible error codes that can be returned by `SubscriptionDraftUserError`.

## Values

- `ALREADY_REMOVED` — This line has already been removed.
- `PRESENCE` — Input value is not present.
- `COMMITTED` — Subscription draft has been already committed.
- `NOT_IN_RANGE` — Value is not in range.
- `NOT_AN_INTEGER` — The value is not an integer.
- `SELLING_PLAN_MAX_CYCLES_MUST_BE_GREATER_THAN_MIN_CYCLES` — The maximum number of cycles must be greater than the minimum.
- `DELIVERY_MUST_BE_MULTIPLE_OF_BILLING` — The delivery policy interval must be a multiple of the billing policy interval.
- `INVALID_BILLING_DATE` — Next billing date is invalid.
- `INVALID_NOTE_LENGTH` — Note length is too long.
- `INVALID_LINES` — Must have at least one line.
- `NO_ENTITLED_LINES` — Discount must have at least one entitled line.
- `CUSTOMER_DOES_NOT_EXIST` — The customer doesn't exist.
- `CUSTOMER_MISMATCH` — The payment method customer must be the same as the contract customer.
- `DELIVERY_METHOD_REQUIRED` — The delivery method can't be blank if any lines require shipping.
- `MISSING_LOCAL_DELIVERY_OPTIONS` — The local delivery options must be set for local delivery.
- `CYCLE_DISCOUNTS_UNIQUE_AFTER_CYCLE` — The after cycle attribute must be unique between cycle discounts.
- `INVALID_ADJUSTMENT_TYPE` — The adjustment value must the same type as the adjustment type.
- `INVALID_ADJUSTMENT_VALUE` — The adjustment value must be either fixed_value or percentage.
- `STALE_CONTRACT` — Another operation updated the contract concurrently as the commit was in progress.
- `CURRENCY_NOT_ENABLED` — Currency is not enabled.
- `HAS_FUTURE_EDITS` — Cannot update a subscription contract with a current or upcoming billing cycle contract edit.
- `BILLING_CYCLE_PRESENT` — Cannot commit a billing cycle contract draft with this mutation. Please use SubscriptionBillingCycleContractDraftCommit.
- `BILLING_CYCLE_ABSENT` — Cannot commit a contract draft with this mutation. Please use SubscriptionDraftCommit.
- `BILLING_CYCLE_CONTRACT_DRAFT_DELIVERY_POLICY_INVALID` — Delivery policy cannot be updated for billing cycle contract drafts.
- `BILLING_CYCLE_CONTRACT_DRAFT_BILLING_POLICY_INVALID` — Billing policy cannot be updated for billing cycle contract drafts.
- `CONCATENATION_BILLING_CYCLE_CONTRACT_DRAFT_REQUIRED` — Contract draft must be a billing cycle contract draft for contract concatenation.
- `CONCATENATION_UNCOMMITTED_CONTRACT_DRAFT` — Cannot concatenate a contract draft from subscriptionContractCreate mutation.
- `DUPLICATE_CONCATENATED_CONTRACTS` — Concatenated contracts cannot contain duplicate subscription contracts.
- `UPCOMING_CYCLE_LIMIT_EXCEEDED` — Billing cycle selector cannot select upcoming billing cycle past limit.
- `CYCLE_INDEX_OUT_OF_RANGE` — Billing cycle selector cannot select billing cycle outside of index range.
- `CYCLE_START_DATE_OUT_OF_RANGE` — Billing cycle selector cannot select billing cycle outside of start date range.
- `CYCLE_SELECTOR_VALIDATE_ONE_OF` — Billing cycle selector requires exactly one of index or date to be provided.
- `EXCEEDED_MAX_CONCATENATED_CONTRACTS` — Maximum number of concatenated contracts on a billing cycle contract draft exceeded.
- `CUSTOMER_REDACTED` — Customer is scheduled for redaction or has been redacted.
- `MISSING_CUSTOMER_PAYMENT_METHOD` — Customer payment method is required.
- `INVALID` — The input value is invalid.
- `BLANK` — The input value is blank.
- `GREATER_THAN` — The input value should be greater than the minimum allowed value.
- `GREATER_THAN_OR_EQUAL_TO` — The input value should be greater than or equal to the minimum value allowed.
- `LESS_THAN` — The input value should be less than the maximum value allowed.
- `LESS_THAN_OR_EQUAL_TO` — The input value should be less than or equal to the maximum value allowed.
- `TOO_LONG` — The input value is too long.
- `TOO_SHORT` — The input value is too short.
