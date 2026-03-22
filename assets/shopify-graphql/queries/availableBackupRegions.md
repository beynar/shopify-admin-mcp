# Query: `availableBackupRegions`

**Returns:** `[MarketRegion!]!`

The geographic regions that you can set as the [`Shop`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)'s backup region. The backup region serves as a fallback when the system can't determine a buyer's actual location.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the region.

## Related Types

- [MarketRegion](../types/interfaces/MarketRegion.md)

## Example Query

```graphql
query {
  availableBackupRegions {
    name
  }
}
```
