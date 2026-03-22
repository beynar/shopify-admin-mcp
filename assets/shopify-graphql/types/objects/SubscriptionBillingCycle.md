# Object: `SubscriptionBillingCycle`

A subscription billing cycle.

## Fields

- `billingAttemptExpectedDate`: `DateTime!` — The date on which the billing attempt is expected to be made.
- `billingAttempts` `(first, after, last, before, reverse)`: `SubscriptionBillingAttemptConnection!` — The list of billing attempts associated with the billing cycle.
- `cycleEndAt`: `DateTime!` — The end date of the billing cycle.
- `cycleIndex`: `Int!` — The index of the billing cycle.
- `cycleStartAt`: `DateTime!` — The start date of the billing cycle.
- `edited`: `Boolean!` — Whether this billing cycle was edited.
- `editedContract`: `SubscriptionBillingCycleEditedContract` — The active edited contract for the billing cycle.
- `skipped`: `Boolean!` — Whether this billing cycle was skipped.
- `sourceContract`: `SubscriptionContract!` — The subscription contract that the billing cycle belongs to.
- `status`: `SubscriptionBillingCycleBillingCycleStatus!` — The status of the billing cycle.

## Related Types

- [SubscriptionBillingCycleBillingCycleStatus](../../types/enums/SubscriptionBillingCycleBillingCycleStatus.md)
- [SubscriptionBillingCycleEditedContract](../../types/objects/SubscriptionBillingCycleEditedContract.md)
- [SubscriptionContract](../../types/objects/SubscriptionContract.md)
