# Object: `AppInstallation`

An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

**Implements:** `HasMetafields`, `Node`

## Fields

- `accessScopes`: `[AccessScope!]!` — The access scopes granted to the application by a merchant during installation.
- `activeSubscriptions`: `[AppSubscription!]!` — The active application subscriptions billed to the shop on a recurring basis.
- `allSubscriptions` `(first, after, last, before, reverse, sortKey)`: `AppSubscriptionConnection!` — All subscriptions created for a shop.
- `app`: `App!` — Application which is installed.
- `channel`: `Channel` *(deprecated)* — Channel associated with the installed application.
- `credits` `(first, after, last, before, reverse, sortKey)`: `AppCreditConnection!` — Credits that can be used towards future app purchases.
- `id`: `ID!` — A globally-unique ID.
- `launchUrl`: `URL!` — The URL to launch the application.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `oneTimePurchases` `(first, after, last, before, reverse, sortKey)`: `AppPurchaseOneTimeConnection!` — One-time purchases to a shop.
- `publication`: `Publication` *(deprecated)* — The publication associated with the installed application.
- `revenueAttributionRecords` `(first, after, last, before, reverse, sortKey)`: `AppRevenueAttributionRecordConnection!` — The records that track the externally-captured revenue for the app. The records are used for revenue attribution purposes.
- `subscriptions`: `[AppSubscription!]!` *(deprecated)* — Subscriptions charge to a shop on a recurring basis.
- `uninstallUrl`: `URL` — The URL to uninstall the application.

## Related Types

- [AccessScope](../../types/objects/AccessScope.md)
- [App](../../types/objects/App.md)
- [AppRevenueAttributionRecordSortKeys](../../types/enums/AppRevenueAttributionRecordSortKeys.md)
- [AppSubscription](../../types/objects/AppSubscription.md)
- [AppSubscriptionSortKeys](../../types/enums/AppSubscriptionSortKeys.md)
- [AppTransactionSortKeys](../../types/enums/AppTransactionSortKeys.md)
- [Channel](../../types/objects/Channel.md)
- [Metafield](../../types/objects/Metafield.md)
- [Publication](../../types/objects/Publication.md)
