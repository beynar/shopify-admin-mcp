# Apps: App installations, webhooks, pixels, script tags, Flow, extensions

## Queries (21)

- **[app](../queries/app.md)** → `App` `(id)`
  Retrieves an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) by its ID. If no ID is provided, returns details about the current
- **[appByHandle](../queries/appByHandle.md)** → `App` `(handle)`
  Retrieves an app by its unique handle. The handle is a URL-friendly identifier for the app.
- **[appByKey](../queries/appByKey.md)** → `App` `(apiKey)`
  Retrieves an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) by its client ID (API key). Returns the app's configuration, insta
- **[appDiscountType](../queries/appDiscountType.md)** → `AppDiscountType` `(functionId)`
  An app discount type.
- **[appDiscountTypes](../queries/appDiscountTypes.md)** → `[AppDiscountType!]!`
  A list of app discount types installed by apps.
- **[appDiscountTypesNodes](../queries/appDiscountTypesNodes.md)** → `AppDiscountTypeConnection!` `(first, after, last, before, reverse)`
  A list of app discount types installed by apps.
- **[appInstallation](../queries/appInstallation.md)** → `AppInstallation` `(id)`
  Retrieves an [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) by ID. If no ID is provided, returns the i
- **[appInstallations](../queries/appInstallations.md)** → `AppInstallationConnection!` `(first, after, last, before, reverse, sortKey, category, privacy)`
  A paginated list of [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) objects across multiple stores wher
- **[cartTransforms](../queries/cartTransforms.md)** → `CartTransformConnection!` `(first, after, last, before, reverse)`
  Retrieves all cart transform functions currently deployed by your app within the merchant's store. This query provides comprehensive access to your ac
- **[mobilePlatformApplication](../queries/mobilePlatformApplication.md)** → `MobilePlatformApplication` `(id)`
  Return a mobile platform application by its ID.
- **[mobilePlatformApplications](../queries/mobilePlatformApplications.md)** → `MobilePlatformApplicationConnection!` `(first, after, last, before, reverse)`
  List the mobile platform applications.
- **[scriptTag](../queries/scriptTag.md)** → `ScriptTag` `(id)`
  <div class="note"><h4>Theme app extensions</h4>
- **[scriptTags](../queries/scriptTags.md)** → `ScriptTagConnection!` `(first, after, last, before, reverse, query, src)`
  <div class="note"><h4>Theme app extensions</h4>
- **[serverPixel](../queries/serverPixel.md)** → `ServerPixel`
  The server pixel configured by the app.
- **[validation](../queries/validation.md)** → `Validation` `(id)`
  Validation available on the shop.
- **[validations](../queries/validations.md)** → `ValidationConnection!` `(first, after, last, before, reverse, sortKey)`
  Validations available on the shop.
- **[webPixel](../queries/webPixel.md)** → `WebPixel` `(id)`
  Returns a
- **[webPresences](../queries/webPresences.md)** → `MarketWebPresenceConnection` `(first, after, last, before, reverse)`
  The web presences for the shop.
- **[webhookSubscription](../queries/webhookSubscription.md)** → `WebhookSubscription` `(id)`
  Returns a webhook subscription by ID.
- **[webhookSubscriptions](../queries/webhookSubscriptions.md)** → `WebhookSubscriptionConnection!` `(first, after, last, before, reverse, sortKey, query, uri, format, topics)`
  Retrieves a paginated list of webhook subscriptions created using the API for the current app and shop.
- **[webhookSubscriptionsCount](../queries/webhookSubscriptionsCount.md)** → `Count` `(query, limit)`
  The count of webhook subscriptions.

## Mutations (32)

- **[appPurchaseOneTimeCreate](../mutations/appPurchaseOneTimeCreate.md)** → `AppPurchaseOneTimeCreatePayload` `(name, price, returnUrl, test)`
  Creates a one-time charge for app features or services that don't require recurring billing. This mutation is ideal for apps that sell individual feat
- **[appRevokeAccessScopes](../mutations/appRevokeAccessScopes.md)** → `AppRevokeAccessScopesPayload` `(scopes)`
  Revokes previously granted access scopes from an app installation, allowing merchants to reduce an app's permissions without completely uninstalling i
- **[appSubscriptionCancel](../mutations/appSubscriptionCancel.md)** → `AppSubscriptionCancelPayload` `(id, prorate)`
  Cancels an active app subscription, stopping future billing cycles. The cancellation behavior depends on the `replacementBehavior` setting - it can ei
- **[appSubscriptionCreate](../mutations/appSubscriptionCreate.md)** → `AppSubscriptionCreatePayload` `(name, lineItems, test, trialDays, returnUrl, replacementBehavior)`
  Creates a recurring or usage-based [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) that charges merchan
- **[appSubscriptionLineItemUpdate](../mutations/appSubscriptionLineItemUpdate.md)** → `AppSubscriptionLineItemUpdatePayload` `(id, cappedAmount)`
  Updates the capped amount on usage-based billing for an [`AppSubscriptionLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubsc
- **[appSubscriptionTrialExtend](../mutations/appSubscriptionTrialExtend.md)** → `AppSubscriptionTrialExtendPayload` `(id, days)`
  Extends the trial period for an existing app subscription. Trial extensions give merchants additional time to use the app before committing to paid bi
- **[appUninstall](../mutations/appUninstall.md)** → `AppUninstallPayload`
  Uninstalls an [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) from a shop. Apps use this mutation to uninstall themselves progr
- **[appUsageRecordCreate](../mutations/appUsageRecordCreate.md)** → `AppUsageRecordCreatePayload` `(subscriptionLineItemId, price, description, idempotencyKey)`
  Creates a usage charge for an app subscription with usage-based pricing. The charge counts toward the capped amount limit set when creating the subscr
- **[cartTransformCreate](../mutations/cartTransformCreate.md)** → `CartTransformCreatePayload` `(functionHandle, blockOnFailure, metafields)`
  Creates a cart transform function that lets merchants customize how products are bundled and presented during checkout. This gives merchants powerful 
- **[cartTransformDelete](../mutations/cartTransformDelete.md)** → `CartTransformDeletePayload` `(id)`
  Removes an existing cart transform function from the merchant's store, disabling any customized bundle or cart modification logic it provided. This mu
- **[flowGenerateSignature](../mutations/flowGenerateSignature.md)** → `FlowGenerateSignaturePayload` `(id, payload)`
  Generates a signature for a Flow action payload.
- **[flowTriggerReceive](../mutations/flowTriggerReceive.md)** → `FlowTriggerReceivePayload` `(handle, payload)`
  Triggers any workflows that begin with the trigger specified in the request body. To learn more, refer to [_Create Shopify Flow triggers_](https://sho
- **[mobilePlatformApplicationCreate](../mutations/mobilePlatformApplicationCreate.md)** → `MobilePlatformApplicationCreatePayload` `(input)`
  Create a mobile platform application.
- **[mobilePlatformApplicationDelete](../mutations/mobilePlatformApplicationDelete.md)** → `MobilePlatformApplicationDeletePayload` `(id)`
  Delete a mobile platform application.
- **[mobilePlatformApplicationUpdate](../mutations/mobilePlatformApplicationUpdate.md)** → `MobilePlatformApplicationUpdatePayload` `(id, input)`
  Update a mobile platform application.
- **[scriptTagCreate](../mutations/scriptTagCreate.md)** → `ScriptTagCreatePayload` `(input)`
  <div class="note"><h4>Theme app extensions</h4>
- **[scriptTagDelete](../mutations/scriptTagDelete.md)** → `ScriptTagDeletePayload` `(id)`
  <div class="note"><h4>Theme app extensions</h4>
- **[scriptTagUpdate](../mutations/scriptTagUpdate.md)** → `ScriptTagUpdatePayload` `(id, input)`
  <div class="note"><h4>Theme app extensions</h4>
- **[serverPixelCreate](../mutations/serverPixelCreate.md)** → `ServerPixelCreatePayload`
  Creates a new unconfigured server pixel. A single server pixel can exist for an app and shop combination. If you call this mutation when a server pixe
- **[serverPixelDelete](../mutations/serverPixelDelete.md)** → `ServerPixelDeletePayload`
  Deletes the Server Pixel associated with the current app & shop.
- **[validationCreate](../mutations/validationCreate.md)** → `ValidationCreatePayload` `(validation)`
  Creates a validation.
- **[validationDelete](../mutations/validationDelete.md)** → `ValidationDeletePayload` `(id)`
  Deletes a validation.
- **[validationUpdate](../mutations/validationUpdate.md)** → `ValidationUpdatePayload` `(validation, id)`
  Update a validation.
- **[webPixelCreate](../mutations/webPixelCreate.md)** → `WebPixelCreatePayload` `(webPixel)`
  Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels)
- **[webPixelDelete](../mutations/webPixelDelete.md)** → `WebPixelDeletePayload` `(id)`
  Deletes the web pixel shop settings.
- **[webPixelUpdate](../mutations/webPixelUpdate.md)** → `WebPixelUpdatePayload` `(id, webPixel)`
  Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels)
- **[webPresenceCreate](../mutations/webPresenceCreate.md)** → `WebPresenceCreatePayload` `(input)`
  Creates a web presence.
- **[webPresenceDelete](../mutations/webPresenceDelete.md)** → `WebPresenceDeletePayload` `(id)`
  Deletes a web presence.
- **[webPresenceUpdate](../mutations/webPresenceUpdate.md)** → `WebPresenceUpdatePayload` `(id, input)`
  Updates a web presence.
- **[webhookSubscriptionCreate](../mutations/webhookSubscriptionCreate.md)** → `WebhookSubscriptionCreatePayload` `(topic, webhookSubscription)`
  Creates a webhook subscription that notifies your [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) when specific events occur in
- **[webhookSubscriptionDelete](../mutations/webhookSubscriptionDelete.md)** → `WebhookSubscriptionDeletePayload` `(id)`
  Deletes a [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) and stops all future webhooks to its 
- **[webhookSubscriptionUpdate](../mutations/webhookSubscriptionUpdate.md)** → `WebhookSubscriptionUpdatePayload` `(id, webhookSubscription)`
  Updates a webhook subscription's configuration. Modify the endpoint URL, event filters, included fields, or metafield namespaces without recreating th
