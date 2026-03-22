# Mutation: `appUninstall`

**Returns:** `AppUninstallPayload`

Uninstalls an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) from a shop. Apps use this mutation to uninstall themselves programmatically, removing their [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) from the merchant's store.

When an app uninstalls, Shopify automatically performs cleanup tasks, such as deleting [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) objects and [admin links](https://shopify.dev/docs/apps/build/admin/admin-links) associated with the app.

Learn more about [app lifecycle management](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/uninstall-app-api-request).

> Caution:
> This action is irreversible. You can't restore an uninstalled app's configuration or data. Before you uninstall an app, make sure that you no longer need to make API calls for the store in which the app has been installed.

## Payload Fields

- `app`: `App` — The uninstalled app.
- `userErrors`: `[AppUninstallAppUninstallError!]!` — The list of errors that occurred from executing the mutation.

## Related Types

- [App](../types/objects/App.md)
- [AppUninstallAppUninstallError](../types/objects/AppUninstallAppUninstallError.md)
- [AppUninstallPayload](../types/objects/AppUninstallPayload.md)

## Example Mutation

```graphql
mutation {
  appUninstall {
    app {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```
