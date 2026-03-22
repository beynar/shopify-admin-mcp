# Mutation: `subscriptionBillingCycleBulkSearch`

**Returns:** `SubscriptionBillingCycleBulkSearchPayload`

Asynchronously queries all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.

## Arguments

- **`billingAttemptExpectedDateRange`**: `SubscriptionBillingCyclesDateRangeSelector!` — Specifies the date range within which the `billingAttemptExpectedDate` values of the billing cycles should fall.
- **`filters`**: `SubscriptionBillingCycleBulkFilters` — Criteria to filter the billing cycles on which the action is executed.

## Payload Fields

- `job`: `Job` — The asynchronous job that performs the action on the targeted billing cycles.
- `userErrors`: `[SubscriptionBillingCycleBulkUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [SubscriptionBillingCycleBulkFilters](../types/inputs/SubscriptionBillingCycleBulkFilters.md)
- [SubscriptionBillingCycleBulkSearchPayload](../types/objects/SubscriptionBillingCycleBulkSearchPayload.md)
- [SubscriptionBillingCycleBulkUserError](../types/objects/SubscriptionBillingCycleBulkUserError.md)
- [SubscriptionBillingCyclesDateRangeSelector](../types/inputs/SubscriptionBillingCyclesDateRangeSelector.md)

## Example Mutation

```graphql
mutation SubscriptionBillingCycleBulkSearch($billingAttemptExpectedDateRange: SubscriptionBillingCyclesDateRangeSelector!, $filters: SubscriptionBillingCycleBulkFilters) {
  subscriptionBillingCycleBulkSearch(billingAttemptExpectedDateRange: $billingAttemptExpectedDateRange, filters: $filters) {
    job {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
