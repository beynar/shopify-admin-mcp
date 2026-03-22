# Query: `shopLocales`

**Returns:** `[ShopLocale!]!`

Returns the locales enabled on a shop. Each locale represents a language for translations and determines how content displays to customers in different markets.

Use the optional `published` argument to filter for only the locales that are visible to customers. The response includes the ISO locale code, whether it's the shop's primary locale, and which [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) objects use each locale.

## Arguments

- **`published`**: `Boolean` = `false` — Return only published locales.

## Return Type Fields

- `locale`: `String!` — The locale ISO code.
- `marketWebPresences`: `[MarketWebPresence!]!` — The market web presences that use the locale.
- `name`: `String!` — The human-readable locale name.
- `primary`: `Boolean!` — Whether the locale is the default locale for the shop.
- `published`: `Boolean!` — Whether the locale is visible to buyers.

## Related Types

- [MarketWebPresence](../types/objects/MarketWebPresence.md)
- [ShopLocale](../types/objects/ShopLocale.md)

## Example Query

```graphql
query ShopLocales($published: Boolean) {
  shopLocales(published: $published) {
    locale
    name
    primary
    published
  }
}
```
