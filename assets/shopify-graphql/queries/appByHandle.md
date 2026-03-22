# Query: `appByHandle`

**Returns:** `App`

Retrieves an app by its unique handle. The handle is a URL-friendly identifier for the app.

Returns the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) if found, or `null` if no app exists with the specified handle.

## Arguments

- **`handle`**: `String!` — Handle of the App.

## Return Type Fields

- `apiKey`: `String!` — A unique application API identifier.
- `appStoreAppUrl`: `URL` — App store page URL of the app.
- `appStoreDeveloperUrl`: `URL` — App store page URL of the developer who created the app.
- `availableAccessScopes`: `[AccessScope!]!` — All requestable access scopes available to the app.
- `banner`: `Image!` — Banner image for the app.
- `description`: `String` — Description of the app.
- `developerName`: `String` — The name of the app developer.
- `developerType`: `AppDeveloperType!` — The type of app developer.
- `embedded`: `Boolean!` — Whether the app uses the Embedded App SDK.
- `failedRequirements`: `[FailedRequirement!]!` — Requirements that must be met before the app can be installed.
- `features`: `[String!]!` — A list of app features that are shown in the Shopify App Store listing.
- `feedback`: `AppFeedback` — Feedback from this app about the store.
- `handle`: `String` — Handle of the app.
- `icon`: `Image!` — Icon that represents the app.
- `id`: `ID!` — A globally-unique ID.
- `installUrl`: `URL` — Webpage where you can install the app, if app requires explicit user permission.
- `installation`: `AppInstallation` — Corresponding AppInstallation for this shop and App.
- `isPostPurchaseAppInUse`: `Boolean!` — Whether the app is the [post purchase](https://shopify.dev/apps/checkout/post-purchase) app in use.
- `optionalAccessScopes`: `[AccessScope!]!` — The optional scopes requested by the app. Lists the optional access scopes the app has declared in its configuration. These scopes are optionally requested by the app after installation.
- `previouslyInstalled`: `Boolean!` — Whether the app was previously installed on the current shop.
- `pricingDetails`: `String` — Detailed information about the app pricing.
- `pricingDetailsSummary`: `String!` — Summary of the app pricing details.
- `privacyPolicyUrl`: `URL` — Link to app privacy policy.
- `publicCategory`: `AppPublicCategory!` — The public category for the app.
- `published`: `Boolean!` — Whether the app is published to the Shopify App Store.
- `requestedAccessScopes`: `[AccessScope!]!` — The access scopes requested by the app. Lists the access scopes the app has declared in its configuration. Merchant must grant approval to these scopes for the app to be installed.
- `screenshots`: `[Image!]!` — Screenshots of the app.
- `shopifyDeveloped`: `Boolean!` — Whether the app was developed by Shopify.
- `title`: `String!` — Name of the app.
- `uninstallMessage`: `String!` — Message that appears when the app is uninstalled. For example:
- `webhookApiVersion`: `String!` — The webhook API version for the app.

## Related Types

- [AccessScope](../types/objects/AccessScope.md)
- [App](../types/objects/App.md)
- [AppDeveloperType](../types/enums/AppDeveloperType.md)
- [AppFeedback](../types/objects/AppFeedback.md)
- [AppInstallation](../types/objects/AppInstallation.md)
- [AppPublicCategory](../types/enums/AppPublicCategory.md)
- [FailedRequirement](../types/objects/FailedRequirement.md)
- [Image](../types/objects/Image.md)
- [NavigationItem](../types/objects/NavigationItem.md)

## Example Query

```graphql
query AppByHandle($handle: String!) {
  appByHandle(handle: $handle) {
    id
    apiKey
    appStoreAppUrl
    appStoreDeveloperUrl
    description
    developerName
  }
}
```
