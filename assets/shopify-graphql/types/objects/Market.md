# Object: `Market`

A market is a group of one or more regions that you want to target for international sales.
By creating a market, you can configure a distinct, localized shopping experience for
customers from a specific area of the world. For example, you can
[change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate),
[configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists),
or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

**Implements:** `HasMetafieldDefinitions`, `HasMetafields`, `Node`

## Fields

- `assignedCustomization` `(customizationId)`: `Boolean!` — Whether the market has a customization with the given ID.
- `catalogs` `(first, after, last, before, reverse)`: `MarketCatalogConnection!` — The catalogs that belong to the market.
- `catalogsCount`: `Count` — The number of catalogs that belong to the market.
- `conditions`: `MarketConditions` — The conditions under which a visitor is in the market.
- `currencySettings`: `MarketCurrencySettings` — The market’s currency settings.
- `enabled`: `Boolean!` *(deprecated)* — Whether the market is enabled to receive visitors and sales. **Note**: Regions in inactive
- `handle`: `String!` — A short, human-readable unique identifier for the market. This is changeable by the merchant.
- `id`: `ID!` — A globally-unique ID.
- `metafield` `(namespace, key)`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafieldDefinitions` `(namespace, pinnedStatus, first, after, last, before, reverse, sortKey, query)`: `MetafieldDefinitionConnection!` *(deprecated)* — List of metafield definitions.
- `metafields` `(namespace, keys, first, after, last, before, reverse)`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The name of the market. Not shown to customers.
- `priceInclusions`: `MarketPriceInclusions` — The inclusive pricing strategy for a market. This determines if prices include duties and / or taxes.
- `priceList`: `PriceList` *(deprecated)* — The market’s price list, which specifies a percentage-based price adjustment as well as
- `primary`: `Boolean!` *(deprecated)* — Whether the market is the shop’s primary market.
- `regions` `(first, after, last, before, reverse)`: `MarketRegionConnection!` *(deprecated)* — The regions that comprise the market.
- `status`: `MarketStatus!` — Status of the market. Replaces the enabled field.
- `type`: `MarketType!` — The type of the market.
- `webPresence`: `MarketWebPresence` *(deprecated)* — The market’s web presence, which defines its SEO strategy. This can be a different domain,
- `webPresences` `(first, after, last, before, reverse)`: `MarketWebPresenceConnection!` — The market’s web presences, which defines its SEO strategy. This can be a different domain,

## Related Types

- [Count](../../types/objects/Count.md)
- [MarketConditions](../../types/objects/MarketConditions.md)
- [MarketCurrencySettings](../../types/objects/MarketCurrencySettings.md)
- [MarketPriceInclusions](../../types/objects/MarketPriceInclusions.md)
- [MarketStatus](../../types/enums/MarketStatus.md)
- [MarketType](../../types/enums/MarketType.md)
- [MarketWebPresence](../../types/objects/MarketWebPresence.md)
- [Metafield](../../types/objects/Metafield.md)
- [MetafieldDefinitionPinnedStatus](../../types/enums/MetafieldDefinitionPinnedStatus.md)
- [MetafieldDefinitionSortKeys](../../types/enums/MetafieldDefinitionSortKeys.md)
- [PriceList](../../types/objects/PriceList.md)
