# Markets: Markets, international commerce, localization

## Queries (7)

- **[market](../queries/market.md)** → `Market` `(id)`
  Returns a `Market` resource by ID.
- **[marketByGeography](../queries/marketByGeography.md)** → `Market` `(countryCode)`
  Returns the applicable market for a customer based on where they are in the world.
- **[marketLocalizableResource](../queries/marketLocalizableResource.md)** → `MarketLocalizableResource` `(resourceId)`
  A resource that can have localized values for different markets.
- **[marketLocalizableResources](../queries/marketLocalizableResources.md)** → `MarketLocalizableResourceConnection!` `(resourceType, first, after, last, before, reverse)`
  Resources that can have localized values for different markets.
- **[marketLocalizableResourcesByIds](../queries/marketLocalizableResourcesByIds.md)** → `MarketLocalizableResourceConnection!` `(resourceIds, first, after, last, before, reverse)`
  Resources that can have localized values for different markets.
- **[markets](../queries/markets.md)** → `MarketConnection!` `(type, first, after, last, before, reverse, sortKey, query)`
  Returns a paginated list of [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) objects configured for the shop. Markets matc
- **[marketsResolvedValues](../queries/marketsResolvedValues.md)** → `MarketsResolvedValues!` `(buyerSignal)`
  The resolved values for a buyer signal.

## Mutations (12)

- **[marketCreate](../mutations/marketCreate.md)** → `MarketCreatePayload` `(input)`
  Creates a [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) to deliver customized shopping experiences. Markets define vari
- **[marketCurrencySettingsUpdate](../mutations/marketCurrencySettingsUpdate.md)** → `MarketCurrencySettingsUpdatePayload` `(marketId, input)`
  Updates currency settings of a market.
- **[marketDelete](../mutations/marketDelete.md)** → `MarketDeletePayload` `(id)`
  Deletes a market definition.
- **[marketLocalizationsRegister](../mutations/marketLocalizationsRegister.md)** → `MarketLocalizationsRegisterPayload` `(resourceId, marketLocalizations)`
  Creates or updates market localizations.
- **[marketLocalizationsRemove](../mutations/marketLocalizationsRemove.md)** → `MarketLocalizationsRemovePayload` `(resourceId, marketLocalizationKeys, marketIds)`
  Deletes market localizations.
- **[marketRegionDelete](../mutations/marketRegionDelete.md)** → `MarketRegionDeletePayload` `(id)`
  Deletes a market region.
- **[marketRegionsCreate](../mutations/marketRegionsCreate.md)** → `MarketRegionsCreatePayload` `(marketId, regions)`
  Creates regions that belong to an existing market.
- **[marketRegionsDelete](../mutations/marketRegionsDelete.md)** → `MarketRegionsDeletePayload` `(ids)`
  Deletes a list of market regions.
- **[marketUpdate](../mutations/marketUpdate.md)** → `MarketUpdatePayload` `(id, input)`
  Updates the properties of a market.
- **[marketWebPresenceCreate](../mutations/marketWebPresenceCreate.md)** → `MarketWebPresenceCreatePayload` `(marketId, webPresence)`
  Creates a web presence for a market.
- **[marketWebPresenceDelete](../mutations/marketWebPresenceDelete.md)** → `MarketWebPresenceDeletePayload` `(webPresenceId)`
  Deletes a market web presence.
- **[marketWebPresenceUpdate](../mutations/marketWebPresenceUpdate.md)** → `MarketWebPresenceUpdatePayload` `(webPresenceId, webPresence)`
  Updates a market web presence.
