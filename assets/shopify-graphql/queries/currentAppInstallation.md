# Query: `currentAppInstallation`

**Returns:** `AppInstallation!`

Returns the [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) for the currently authenticated app. Provides access to granted access scopes, active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects, and billing information for your app.

Use this query to check which permissions your app has, monitor subscription status, or retrieve [`AppCredit`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit) objects. Learn more about [managing access scopes](https://shopify.dev/docs/api/usage/access-scopes#checking-granted-access-scopes), [subscription billing](https://shopify.dev/docs/apps/launch/billing/subscription-billing), and [app credits](https://shopify.dev/docs/apps/launch/billing/award-app-credits).

## Return Type Fields

- `accessScopes`: `[AccessScope!]!` — The access scopes granted to the application by a merchant during installation.
- `activeSubscriptions`: `[AppSubscription!]!` — The active application subscriptions billed to the shop on a recurring basis.
- `allSubscriptions`: `AppSubscriptionConnection!` — All subscriptions created for a shop.
- `app`: `App!` — Application which is installed.
- `credits`: `AppCreditConnection!` — Credits that can be used towards future app purchases.
- `id`: `ID!` — A globally-unique ID.
- `launchUrl`: `URL!` — The URL to launch the application.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `oneTimePurchases`: `AppPurchaseOneTimeConnection!` — One-time purchases to a shop.
- `revenueAttributionRecords`: `AppRevenueAttributionRecordConnection!` — The records that track the externally-captured revenue for the app. The records are used for revenue attribution purposes.
- `uninstallUrl`: `URL` — The URL to uninstall the application.

## Related Types

- [AccessScope](../types/objects/AccessScope.md)
- [App](../types/objects/App.md)
- [AppInstallation](../types/objects/AppInstallation.md)
- [AppSubscription](../types/objects/AppSubscription.md)
- [Channel](../types/objects/Channel.md)
- [Metafield](../types/objects/Metafield.md)
- [Publication](../types/objects/Publication.md)

## Example Query

```graphql
query {
  currentAppInstallation {
    launchUrl
    uninstallUrl
  }
}
```
