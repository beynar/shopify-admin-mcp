# Graphql Utils: Node lookups, utility queries, saved searches

## Queries (19)

- **[assignedFulfillmentOrders](../queries/assignedFulfillmentOrders.md)** → `FulfillmentOrderConnection!` `(assignmentStatus, locationIds, first, after, last, before, reverse, sortKey)`
  The paginated list of fulfillment orders assigned to the shop locations owned by the app.
- **[availableBackupRegions](../queries/availableBackupRegions.md)** → `[MarketRegion!]!`
  The geographic regions that you can set as the [`Shop`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)'s backup region. The backup re
- **[availableCarrierServices](../queries/availableCarrierServices.md)** → `[DeliveryCarrierServiceAndLocations!]!`
  Returns a list of activated carrier services and associated shop locations that support them.
- **[availableLocales](../queries/availableLocales.md)** → `[Locale!]!`
  Returns all locales that Shopify supports. Each [`Locale`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale) includes an ISO code and 
- **[backupRegion](../queries/backupRegion.md)** → `MarketRegion!`
  The backup region of the shop.
- **[channel](../queries/channel.md)** → `Channel` `(id)`
  Returns a `Channel` resource by ID.
- **[channels](../queries/channels.md)** → `ChannelConnection!` `(first, after, last, before, reverse)`
  The channels established on the target shop by the calling application.
- **[currentAppInstallation](../queries/currentAppInstallation.md)** → `AppInstallation!`
  Returns the [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) for the currently authenticated app. Provid
- **[currentBulkOperation](../queries/currentBulkOperation.md)** → `BulkOperation` `(type)`
  Returns the current app's most recent [`BulkOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation). Apps can run one bul
- **[currentStaffMember](../queries/currentStaffMember.md)** → `StaffMember`
  The staff member making the API request.
- **[deletionEvents](../queries/deletionEvents.md)** → `DeletionEventConnection!` `(subjectTypes, first, after, last, before, reverse, sortKey, query)`
  The paginated list of deletion events.
- **[job](../queries/job.md)** → `Job` `(id)`
  Returns a Job resource by ID. Used to check the status of internal jobs and any applicable changes.
- **[manualHoldsFulfillmentOrders](../queries/manualHoldsFulfillmentOrders.md)** → `FulfillmentOrderConnection!` `(query, first, after, last, before, reverse)`
  Returns a list of fulfillment orders that are on hold.
- **[node](../queries/node.md)** → `Node` `(id)`
  Returns a specific node (any object that implements the
- **[nodes](../queries/nodes.md)** → `[Node]!` `(ids)`
  Returns the list of nodes (any objects that implement the
- **[pendingOrdersCount](../queries/pendingOrdersCount.md)** → `Count`
  The number of pendings orders. Limited to a maximum of 10000.
- **[pointOfSaleDevice](../queries/pointOfSaleDevice.md)** → `PointOfSaleDevice` `(id)`
  Returns a `PointOfSaleDevice` resource by ID.
- **[publicApiVersions](../queries/publicApiVersions.md)** → `[ApiVersion!]!`
  The list of publicly-accessible Admin API versions, including supported versions, the release candidate, and unstable versions.
- **[publishedProductsCount](../queries/publishedProductsCount.md)** → `Count` `(publicationId, limit)`
  Returns a count of published products by publication ID. Limited to a maximum of 10000 by default.

## Mutations (9)

- **[backupRegionUpdate](../mutations/backupRegionUpdate.md)** → `BackupRegionUpdatePayload` `(region)`
  Update the backup region that is used when we have no better signal of what region a buyer is in.
- **[bulkProductResourceFeedbackCreate](../mutations/bulkProductResourceFeedbackCreate.md)** → `BulkProductResourceFeedbackCreatePayload` `(feedbackInput)`
  Creates product feedback for multiple products.
- **[delegateAccessTokenCreate](../mutations/delegateAccessTokenCreate.md)** → `DelegateAccessTokenCreatePayload` `(input)`
  Creates a [`DelegateAccessToken`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken) with a subset of the parent token's p
- **[delegateAccessTokenDestroy](../mutations/delegateAccessTokenDestroy.md)** → `DelegateAccessTokenDestroyPayload` `(accessToken)`
  Destroys a delegate access token.
- **[removeFromReturn](../mutations/removeFromReturn.md)** → `RemoveFromReturnPayload` `(returnId, returnLineItems, exchangeLineItems)`
  Removes return and/or exchange lines from a return.
- **[savedSearchCreate](../mutations/savedSearchCreate.md)** → `SavedSearchCreatePayload` `(input)`
  Creates a saved search.
- **[savedSearchDelete](../mutations/savedSearchDelete.md)** → `SavedSearchDeletePayload` `(input)`
  Delete a saved search.
- **[savedSearchUpdate](../mutations/savedSearchUpdate.md)** → `SavedSearchUpdatePayload` `(input)`
  Updates a saved search.
- **[standardMetaobjectDefinitionEnable](../mutations/standardMetaobjectDefinitionEnable.md)** → `StandardMetaobjectDefinitionEnablePayload` `(type)`
  Enables the specified standard metaobject definition from its template.
