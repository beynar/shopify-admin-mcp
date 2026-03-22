# Query: `appInstallation`

**Returns:** `AppInstallation`

Retrieves an [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) by ID. If no ID is provided, returns the installation for the currently authenticated [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App). The query provides essential data for validating installation state and managing app functionality within a store.

Use this query to access installation details including granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects, [`AppCredit`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit) objects, [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) objects, and app-specific metadata.

Learn more about [app installation](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation).

## Arguments

- **`id`**: `ID` — ID used to lookup AppInstallation.

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
query AppInstallation($id: ID) {
  appInstallation(id: $id) {
    launchUrl
    uninstallUrl
  }
}
```
