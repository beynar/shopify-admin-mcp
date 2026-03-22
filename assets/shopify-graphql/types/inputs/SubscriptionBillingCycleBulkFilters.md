# Input Object: `SubscriptionBillingCycleBulkFilters`

The input fields for filtering subscription billing cycles in bulk actions.

## Input Fields

- `billingCycleStatus`: `[SubscriptionBillingCycleBillingCycleStatus!]` — Filters the billing cycles based on their status.
- `contractStatus`: `[SubscriptionContractSubscriptionStatus!]` — Filters the billing cycles based on the status of their associated subscription contracts.
- `billingAttemptStatus`: `SubscriptionBillingCycleBillingAttemptStatus` = `ANY` — Filters the billing cycles based on the presence of billing attempts.

## Related Types

- [SubscriptionBillingCycleBillingAttemptStatus](../../types/enums/SubscriptionBillingCycleBillingAttemptStatus.md)
- [SubscriptionBillingCycleBillingCycleStatus](../../types/enums/SubscriptionBillingCycleBillingCycleStatus.md)
- [SubscriptionContractSubscriptionStatus](../../types/enums/SubscriptionContractSubscriptionStatus.md)
