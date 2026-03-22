# Mutation: `subscriptionBillingCycleBulkCharge`

**Returns:** `SubscriptionBillingCycleBulkChargePayload`

Asynchronously queries and charges all subscription billing cycles whose [billingAttemptExpectedDate](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-billingattemptexpecteddate) values fall within a specified date range and meet additional filtering criteria. The results of this action can be retrieved using the [subscriptionBillingCycleBulkResults](https://shopify.dev/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults) query.

## Arguments

- **`billingAttemptExpectedDateRange`**: `SubscriptionBillingCyclesDateRangeSelector!` — Specifies the date range within which the `billingAttemptExpectedDate` values of the billing cycles should fall.
- **`filters`**: `SubscriptionBillingCycleBulkFilters` — Criteria to filter the billing cycles on which the action is executed.
- **`inventoryPolicy`**: `SubscriptionBillingAttemptInventoryPolicy` = `PRODUCT_VARIANT_INVENTORY_POLICY` — The behaviour to use when updating inventory.

## Payload Fields

- `job`: `Job` — The asynchronous job that performs the action on the targeted billing cycles.
- `userErrors`: `[SubscriptionBillingCycleBulkUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [Job](../types/objects/Job.md)
- [SubscriptionBillingAttemptInventoryPolicy](../types/enums/SubscriptionBillingAttemptInventoryPolicy.md)
- [SubscriptionBillingCycleBulkChargePayload](../types/objects/SubscriptionBillingCycleBulkChargePayload.md)
- [SubscriptionBillingCycleBulkFilters](../types/inputs/SubscriptionBillingCycleBulkFilters.md)
- [SubscriptionBillingCycleBulkUserError](../types/objects/SubscriptionBillingCycleBulkUserError.md)
- [SubscriptionBillingCyclesDateRangeSelector](../types/inputs/SubscriptionBillingCyclesDateRangeSelector.md)

## Example Mutation

```graphql
mutation SubscriptionBillingCycleBulkCharge($billingAttemptExpectedDateRange: SubscriptionBillingCyclesDateRangeSelector!, $filters: SubscriptionBillingCycleBulkFilters, $inventoryPolicy: SubscriptionBillingAttemptInventoryPolicy) {
  subscriptionBillingCycleBulkCharge(billingAttemptExpectedDateRange: $billingAttemptExpectedDateRange, filters: $filters, inventoryPolicy: $inventoryPolicy) {
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
