# Query: `availableLocales`

**Returns:** `[Locale!]!`

Returns all locales that Shopify supports. Each [`Locale`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale) includes an ISO code and human-readable name. Use this query to discover which locales you can enable on a shop with the [`shopLocaleEnable`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable) mutation.

## Return Type Fields

- `isoCode`: `String!` — Locale ISO code.
- `name`: `String!` — Human-readable locale name.

## Related Types

- [Locale](../types/objects/Locale.md)

## Example Query

```graphql
query {
  availableLocales {
    isoCode
    name
  }
}
```
