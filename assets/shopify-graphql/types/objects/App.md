# Object: `App`

A Shopify application that extends store functionality. Apps integrate with Shopify through APIs to add features, automate workflows, or connect external services.

Provides metadata about the app including its developer information and listing details in the Shopify App Store. Use the [`installation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.installation) field to determine if the app is currently installed on the shop and access installation-specific details like granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects. Check [`failedRequirements`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.failedRequirements) before installation to identify any prerequisites that must be met.

**Implements:** `Node`

## Fields

- `apiKey`: `String!` — A unique application API identifier.
- `appStoreAppUrl`: `URL` — App store page URL of the app.
- `appStoreDeveloperUrl`: `URL` — App store page URL of the developer who created the app.
- `availableAccessScopes`: `[AccessScope!]!` — All requestable access scopes available to the app.
- `banner`: `Image!` — Banner image for the app.
- `description`: `String` — Description of the app.
- `developerName`: `String` — The name of the app developer.
- `developerType`: `AppDeveloperType!` — The type of app developer.
- `developerUrl`: `URL!` *(deprecated)* — Website of the developer who created the app.
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
- `launchUrl`: `URL!` *(deprecated)* — Webpage that the app starts in.
- `navigationItems`: `[NavigationItem!]!` *(deprecated)* — Menu items for the app, which also appear as submenu items in left navigation sidebar in the Shopify admin.
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
- `uninstallUrl`: `URL` *(deprecated)* — Webpage where you can uninstall the app.
- `webhookApiVersion`: `String!` — The webhook API version for the app.

## Related Types

- [AccessScope](../../types/objects/AccessScope.md)
- [AppDeveloperType](../../types/enums/AppDeveloperType.md)
- [AppFeedback](../../types/objects/AppFeedback.md)
- [AppInstallation](../../types/objects/AppInstallation.md)
- [AppPublicCategory](../../types/enums/AppPublicCategory.md)
- [FailedRequirement](../../types/objects/FailedRequirement.md)
- [Image](../../types/objects/Image.md)
- [NavigationItem](../../types/objects/NavigationItem.md)
