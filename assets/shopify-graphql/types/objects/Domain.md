# Object: `Domain`

A unique string that represents the address of a Shopify store on the Internet.

**Implements:** `Node`

## Fields

- `host`: `String!` — The host name of the domain. For example, `example.com`.
- `id`: `ID!` — A globally-unique ID.
- `localization`: `DomainLocalization` — The localization of the domain, if the domain doesn't redirect.
- `marketWebPresence`: `MarketWebPresence` — The web presence of the domain.
- `sslEnabled`: `Boolean!` — Whether SSL is enabled.
- `url`: `URL!` — The URL of the domain (for example, `https://example.com`).

## Related Types

- [DomainLocalization](../../types/objects/DomainLocalization.md)
- [MarketWebPresence](../../types/objects/MarketWebPresence.md)
