# Query: `segmentsCount`

**Returns:** `Count`

The number of segments for a shop. Limited to a maximum of 10000 by default.

## Arguments

- **`limit`**: `Int` = `10000` — The upper bound on count value before returning a result. Use `null` to have no limit.

## Return Type Fields

- `count`: `Int!` — The count of elements.
- `precision`: `CountPrecision!` — The count's precision, or the exactness of the value.

## Related Types

- [Count](../types/objects/Count.md)
- [CountPrecision](../types/enums/CountPrecision.md)

## Example Query

```graphql
query SegmentsCount($limit: Int) {
  segmentsCount(limit: $limit) {
    count
  }
}
```
