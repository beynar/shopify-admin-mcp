# Mutation: `subscriptionContractSetNextBillingDate`

**Returns:** `SubscriptionContractSetNextBillingDatePayload`

Sets the next billing date of a Subscription Contract. This field is managed by the apps.
        Alternatively you can utilize our
        [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles),
        which provide auto-computed billing dates and additional functionalities.

## Arguments

- **`contractId`**: `ID!` — The gid of the Subscription Contract to set the next billing date for.
- **`date`**: `DateTime!` — The next billing date.

## Payload Fields

- `contract`: `SubscriptionContract` — The updated Subscription Contract object.
- `userErrors`: `[SubscriptionContractUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [SubscriptionContract](../types/objects/SubscriptionContract.md)
- [SubscriptionContractSetNextBillingDatePayload](../types/objects/SubscriptionContractSetNextBillingDatePayload.md)
- [SubscriptionContractUserError](../types/objects/SubscriptionContractUserError.md)

## Example Mutation

```graphql
mutation SubscriptionContractSetNextBillingDate($contractId: ID!, $date: DateTime!) {
  subscriptionContractSetNextBillingDate(contractId: $contractId, date: $date) {
    contract {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
