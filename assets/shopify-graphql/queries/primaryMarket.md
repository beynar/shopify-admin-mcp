# Query: `primaryMarket`

**Returns:** `Market!`

The primary market of the shop.

## Return Type Fields

- `assignedCustomization`: `Boolean!` — Whether the market has a customization with the given ID.
- `catalogs`: `MarketCatalogConnection!` — The catalogs that belong to the market.
- `catalogsCount`: `Count` — The number of catalogs that belong to the market.
- `conditions`: `MarketConditions` — The conditions under which a visitor is in the market.
- `currencySettings`: `MarketCurrencySettings` — The market’s currency settings.
- `handle`: `String!` — A short, human-readable unique identifier for the market. This is changeable by the merchant.
- `id`: `ID!` — A globally-unique ID.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `name`: `String!` — The name of the market. Not shown to customers.
- `priceInclusions`: `MarketPriceInclusions` — The inclusive pricing strategy for a market. This determines if prices include duties and / or taxes.
- `status`: `MarketStatus!` — Status of the market. Replaces the enabled field.
- `type`: `MarketType!` — The type of the market.
- `webPresences`: `MarketWebPresenceConnection!` — The market’s web presences, which defines its SEO strategy. This can be a different domain,

## Related Types

- [Count](../types/objects/Count.md)
- [Market](../types/objects/Market.md)
- [MarketConditions](../types/objects/MarketConditions.md)
- [MarketCurrencySettings](../types/objects/MarketCurrencySettings.md)
- [MarketPriceInclusions](../types/objects/MarketPriceInclusions.md)
- [MarketStatus](../types/enums/MarketStatus.md)
- [MarketType](../types/enums/MarketType.md)
- [MarketWebPresence](../types/objects/MarketWebPresence.md)
- [Metafield](../types/objects/Metafield.md)
- [PriceList](../types/objects/PriceList.md)

## Example Query

```graphql
query {
  primaryMarket {
    assignedCustomization
    handle
    name
  }
}
```
