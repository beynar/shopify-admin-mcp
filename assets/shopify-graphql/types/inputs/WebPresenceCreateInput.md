# Input Object: `WebPresenceCreateInput`

The input fields used to create a web presence.

## Input Fields

- `domainId`: `ID` — The web presence's domain ID. This field must be `null` if the `subfolderSuffix` isn't `null`.
- `defaultLocale`: `String!` — The default locale for the web presence.
- `alternateLocales`: `[String!]` — The alternate locales for the web presence.
- `subfolderSuffix`: `String` — The market-specific suffix of the subfolders defined by the web presence.
