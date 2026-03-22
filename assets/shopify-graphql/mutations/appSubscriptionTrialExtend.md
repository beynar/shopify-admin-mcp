# Mutation: `appSubscriptionTrialExtend`

**Returns:** `AppSubscriptionTrialExtendPayload`

Extends the trial period for an existing app subscription. Trial extensions give merchants additional time to use the app before committing to paid billing.

Requires the subscription ID and the number of days to extend (between one and 1000). The extension modifies the existing trial end date, allowing continued access to subscription features without immediate billing. Returns the updated [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription).

Learn more about [offering free trials](https://shopify.dev/docs/apps/launch/billing/offer-free-trials).

## Arguments

- **`id`**: `ID!` — The ID of the app subscription to extend the trial for.
- **`days`**: `Int!` — The number of days to extend the trial. The value must be greater than 0 and less than or equal to 1000.

## Payload Fields

- `appSubscription`: `AppSubscription` — The app subscription that had its trial extended.
- `userErrors`: `[AppSubscriptionTrialExtendUserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [AppSubscription](../types/objects/AppSubscription.md)
- [AppSubscriptionTrialExtendPayload](../types/objects/AppSubscriptionTrialExtendPayload.md)
- [AppSubscriptionTrialExtendUserError](../types/objects/AppSubscriptionTrialExtendUserError.md)

## Example Mutation

```graphql
mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) {
  appSubscriptionTrialExtend(id: $id, days: $days) {
    appSubscription {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
