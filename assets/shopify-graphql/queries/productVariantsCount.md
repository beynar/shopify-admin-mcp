# Query: `productVariantsCount`

**Returns:** `Count`

Count of product variants. Limited to a maximum of 10000 by default.

## Arguments

- **`query`**: `String` — No supported search fields.
- **`limit`**: `Int` = `10000` — The upper bound on count value before returning a result. Use `null` to have no limit.

## Return Type Fields

- `count`: `Int!` — The count of elements.
- `precision`: `CountPrecision!` — The count's precision, or the exactness of the value.

## Related Types

- [Count](../types/objects/Count.md)
- [CountPrecision](../types/enums/CountPrecision.md)

## Example Query

```graphql
query ProductVariantsCount($query: String, $limit: Int) {
  productVariantsCount(query: $query, limit: $limit) {
    count
  }
}
```
