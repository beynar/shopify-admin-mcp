# Query: `pendingOrdersCount`

**Returns:** `Count`

The number of pendings orders. Limited to a maximum of 10000.

## Return Type Fields

- `count`: `Int!` — The count of elements.
- `precision`: `CountPrecision!` — The count's precision, or the exactness of the value.

## Related Types

- [Count](../types/objects/Count.md)
- [CountPrecision](../types/enums/CountPrecision.md)

## Example Query

```graphql
query {
  pendingOrdersCount {
    count
  }
}
```
