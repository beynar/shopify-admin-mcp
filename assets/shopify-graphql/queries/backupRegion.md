# Query: `backupRegion`

**Returns:** `MarketRegion!`

The backup region of the shop.

## Return Type Fields

- `id`: `ID!` — A globally-unique ID.
- `name`: `String!` — The name of the region.

## Related Types

- [MarketRegion](../types/interfaces/MarketRegion.md)

## Example Query

```graphql
query {
  backupRegion {
    name
  }
}
```
