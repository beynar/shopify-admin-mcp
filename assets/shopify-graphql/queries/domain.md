# Query: `domain`

**Returns:** `Domain`

Returns a `Domain` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `Domain` to return.

## Return Type Fields

- `host`: `String!` — The host name of the domain. For example, `example.com`.
- `id`: `ID!` — A globally-unique ID.
- `localization`: `DomainLocalization` — The localization of the domain, if the domain doesn't redirect.
- `marketWebPresence`: `MarketWebPresence` — The web presence of the domain.
- `sslEnabled`: `Boolean!` — Whether SSL is enabled.
- `url`: `URL!` — The URL of the domain (for example, `https://example.com`).

## Related Types

- [Domain](../types/objects/Domain.md)
- [DomainLocalization](../types/objects/DomainLocalization.md)
- [MarketWebPresence](../types/objects/MarketWebPresence.md)

## Example Query

```graphql
query Domain($id: ID!) {
  domain(id: $id) {
    host
    sslEnabled
    url
  }
}
```
