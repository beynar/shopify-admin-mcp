# Object: `AppSubscription`

A recurring billing agreement that associates an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) with a merchant's shop. Each subscription contains one or more [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem) objects that define the pricing structure. The pricing structure can include recurring charges, usage-based pricing, or both.

The subscription tracks billing details including the current period end date, trial days, and [`AppSubscriptionStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionStatus). 

Merchants must approve subscriptions through a [confirmation URL](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#returns-confirmationUrl) before billing begins. Test subscriptions allow developers to verify billing flows without actual charges.

Learn more about [subscription billing](https://shopify.dev/docs/apps/launch/billing/subscription-billing) and [testing charges](https://shopify.dev/docs/apps/launch/billing/managed-pricing#test-charges).

**Implements:** `Node`

## Fields

- `createdAt`: `DateTime!` — The date and time when the app subscription was created.
- `currentPeriodEnd`: `DateTime` — The date and time when the current app subscription period ends. Returns `null` if the subscription isn't active.
- `id`: `ID!` — A globally-unique ID.
- `lineItems`: `[AppSubscriptionLineItem!]!` — The plans attached to the app subscription.
- `name`: `String!` — The name of the app subscription.
- `returnUrl`: `URL!` — The URL that the merchant is redirected to after approving the app subscription.
- `status`: `AppSubscriptionStatus!` — The status of the app subscription.
- `test`: `Boolean!` — Specifies whether the app subscription is a test transaction.
- `trialDays`: `Int!` — The number of free trial days, starting at the subscription's creation date, by which billing is delayed.

## Related Types

- [AppSubscriptionLineItem](../../types/objects/AppSubscriptionLineItem.md)
- [AppSubscriptionStatus](../../types/enums/AppSubscriptionStatus.md)
