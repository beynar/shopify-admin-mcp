# Object: `CustomerVisit`

A customer's session on the online store. Tracks how the [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) arrived at the store, including the landing page, referral source, and any associated marketing campaigns.

The visit captures attribution data such as [`UTMParameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/UTMParameters), referral codes, and the [`MarketingEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent) that drove the session. This information helps merchants understand which marketing efforts successfully bring customers to their store.

**Implements:** `CustomerMoment`, `Node`

## Fields

- `id`: `ID!` — A globally-unique ID.
- `landingPage`: `URL` — URL of the first page the customer landed on for the session.
- `landingPageHtml`: `HTML` — Landing page information with URL linked in HTML. For example, the first page the customer visited was store.myshopify.com/products/1.
- `marketingEvent`: `MarketingEvent` — Represent actions taken by an app, on behalf of a merchant,
- `occurredAt`: `DateTime!` — The date and time when the customer's session occurred.
- `referralCode`: `String` — Marketing referral code from the link that the customer clicked to visit the store.
- `referralInfoHtml`: `FormattedString!` — Referral information with URLs linked in HTML.
- `referrerUrl`: `URL` — Webpage where the customer clicked a link that sent them to the online store.
- `source`: `String!` — Source from which the customer visited the store, such as a platform (Facebook, Google), email, direct,
- `sourceDescription`: `String` — Describes the source explicitly for first or last session.
- `sourceType`: `MarketingTactic` — Type of marketing tactic.
- `utmParameters`: `UTMParameters` — A set of UTM parameters gathered from the URL parameters of the referrer.

## Related Types

- [MarketingEvent](../../types/objects/MarketingEvent.md)
- [MarketingTactic](../../types/enums/MarketingTactic.md)
- [UTMParameters](../../types/objects/UTMParameters.md)
