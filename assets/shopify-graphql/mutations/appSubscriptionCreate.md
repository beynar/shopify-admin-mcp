# Mutation: `appSubscriptionCreate`

**Returns:** `AppSubscriptionCreatePayload`

Creates a recurring or usage-based [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) that charges merchants for app features and services. The subscription includes one or more [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem) objects that define the pricing structure, billing intervals, and optional [`AppSubscriptionDiscount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount) values.

Returns a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) where the merchant approves or declines the charges. After approval, the subscription becomes active and billing begins after any trial period expires. You can specify [`AppSubscriptionReplacementBehavior`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior) to control how this subscription interacts with existing active subscriptions.

Learn more about [creating app subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-time-based-subscriptions).

## Arguments

- **`name`**: `String!` — A descriptive name for the app subscription.
- **`lineItems`**: `[AppSubscriptionLineItemInput!]!` — Attaches one or more pricing plans to an app subscription. Only one pricing plan can be defined for each available type.
- **`test`**: `Boolean` = `false` — Whether the app subscription is a test transaction.
- **`trialDays`**: `Int` — The number of days of the free trial period, beginning on the day that the merchant approves the app charges.
- **`returnUrl`**: `URL!` — The URL pointing to the page where the merchant is redirected after approving the app subscription.
- **`replacementBehavior`**: `AppSubscriptionReplacementBehavior` = `STANDARD` — The replacement behavior when creating an app subscription for a merchant with an already existing app subscription.

## Payload Fields

- `appSubscription`: `AppSubscription` — The newly-created app subscription.
- `confirmationUrl`: `URL` — The URL pointing to the page where the merchant approves or declines the charges for an app subscription.
- `userErrors`: `[UserError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [AppSubscription](../types/objects/AppSubscription.md)
- [AppSubscriptionCreatePayload](../types/objects/AppSubscriptionCreatePayload.md)
- [AppSubscriptionLineItemInput](../types/inputs/AppSubscriptionLineItemInput.md)
- [AppSubscriptionReplacementBehavior](../types/enums/AppSubscriptionReplacementBehavior.md)
- [UserError](../types/objects/UserError.md)

## Example Mutation

```graphql
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $test: Boolean, $trialDays: Int, $returnUrl: URL!, $replacementBehavior: AppSubscriptionReplacementBehavior) {
  appSubscriptionCreate(name: $name, lineItems: $lineItems, test: $test, trialDays: $trialDays, returnUrl: $returnUrl, replacementBehavior: $replacementBehavior) {
    appSubscription {
      id
    }
    confirmationUrl
    userErrors {
      field
      message
    }
  }
}
```
