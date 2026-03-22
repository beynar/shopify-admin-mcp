# Object: `MarketWebPresence`

The market’s web presence, which defines its SEO strategy. This can be a different domain
(e.g. `example.ca`), subdomain (e.g. `ca.example.com`), or subfolders of the primary
domain (e.g. `example.com/en-ca`). Each web presence comprises one or more language
variants. If a market does not have its own web presence, it is accessible on the shop’s
primary domain via [country
selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).

Note: while the domain/subfolders defined by a market’s web presence are not applicable to
custom storefronts, which must manage their own domains and routing, the languages chosen
here do govern [the languages available on the Storefront
API](https://shopify.dev/custom-storefronts/internationalization/multiple-languages) for the countries in
this market.

**Implements:** `Node`

## Fields

- `alternateLocales`: `[ShopLocale!]!` — The ShopLocale object for the alternate locales. When a domain is used, these locales will be
- `defaultLocale`: `ShopLocale!` — The ShopLocale object for the default locale. When a domain is used, this is the locale that will
- `domain`: `Domain` — The web presence’s domain.
- `id`: `ID!` — A globally-unique ID.
- `market`: `Market` *(deprecated)* — The associated market. This can be null for a web presence that isn't associated with a market.
- `markets` `(first, after, last, before, reverse)`: `MarketConnection` — The associated markets for this web presence.
- `rootUrls`: `[MarketWebPresenceRootUrl!]!` — The list of root URLs for each of the web presence’s locales. As of version `2024-04` this value will no longer have a trailing slash.
- `subfolderSuffix`: `String` — The market-specific suffix of the subfolders defined by the web presence. Example: in `/en-us` the subfolder suffix is `us`. This field will be null if `domain` isn't null.

## Related Types

- [Domain](../../types/objects/Domain.md)
- [Market](../../types/objects/Market.md)
- [MarketWebPresenceRootUrl](../../types/objects/MarketWebPresenceRootUrl.md)
- [ShopLocale](../../types/objects/ShopLocale.md)
