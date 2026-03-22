# Mutation: `subscriptionBillingCycleCharge`

**Returns:** `SubscriptionBillingCycleChargePayload`

Creates a new subscription billing attempt for a specified billing cycle. This is the alternative mutation for [subscriptionBillingAttemptCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate). For more information, refer to [Create a subscription contract](https://shopify.dev/docs/apps/selling-strategies/subscriptions/contracts/create#step-4-create-a-billing-attempt).

## Arguments

- **`subscriptionContractId`**: `ID!` — The ID of the subscription contract.
- **`billingCycleSelector`**: `SubscriptionBillingCycleSelector!` — Select the specific billing cycle to be billed. If the selected billing cycle's [billingAttemptExpectedDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-subscriptionbillingcycle-billingattemptexpecteddate) is in the past, the [originTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-subscriptionbillingattempt-origintime) of the billing attempt will be set to this date. However, if the [billingAttemptExpectedDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-subscriptionbillingcycle-billingattemptexpecteddate) is in the future, the originTime will be the current time.
- **`inventoryPolicy`**: `SubscriptionBillingAttemptInventoryPolicy` = `PRODUCT_VARIANT_INVENTORY_POLICY` — The behaviour to use when updating inventory.

## Payload Fields

- `subscriptionBillingAttempt`: `SubscriptionBillingAttempt` — The subscription billing attempt.
- `userErrors`: `[BillingAttemptUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [BillingAttemptUserError](../types/objects/BillingAttemptUserError.md)
- [SubscriptionBillingAttempt](../types/objects/SubscriptionBillingAttempt.md)
- [SubscriptionBillingAttemptInventoryPolicy](../types/enums/SubscriptionBillingAttemptInventoryPolicy.md)
- [SubscriptionBillingCycleChargePayload](../types/objects/SubscriptionBillingCycleChargePayload.md)
- [SubscriptionBillingCycleSelector](../types/inputs/SubscriptionBillingCycleSelector.md)

## Example Mutation

```graphql
mutation SubscriptionBillingCycleCharge($subscriptionContractId: ID!, $billingCycleSelector: SubscriptionBillingCycleSelector!, $inventoryPolicy: SubscriptionBillingAttemptInventoryPolicy) {
  subscriptionBillingCycleCharge(subscriptionContractId: $subscriptionContractId, billingCycleSelector: $billingCycleSelector, inventoryPolicy: $inventoryPolicy) {
    subscriptionBillingAttempt {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
