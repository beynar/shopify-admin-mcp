# Input Object: `MarketWebPresenceCreateInput`

The input fields used to create a web presence for a market.

## Input Fields

- `domainId`: `ID` — The web presence's domain ID. This field must be `null` if the `subfolderSuffix` isn't `null`.
- `defaultLocale`: `String!` — The default locale for the market’s web presence.
- `alternateLocales`: `[String!]` — The alternate locales for the market’s web presence.
- `subfolderSuffix`: `String` — The market-specific suffix of the subfolders defined by the web presence.
