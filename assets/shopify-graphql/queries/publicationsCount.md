# Query: `publicationsCount`

**Returns:** `Count`

Count of publications. Limited to a maximum of 10000 by default.

## Arguments

- **`catalogType`**: `CatalogType` — Filter publications by catalog type.
- **`limit`**: `Int` = `10000` — The upper bound on count value before returning a result. Use `null` to have no limit.

## Return Type Fields

- `count`: `Int!` — The count of elements.
- `precision`: `CountPrecision!` — The count's precision, or the exactness of the value.

## Related Types

- [CatalogType](../types/enums/CatalogType.md)
- [Count](../types/objects/Count.md)
- [CountPrecision](../types/enums/CountPrecision.md)

## Example Query

```graphql
query PublicationsCount($catalogType: CatalogType, $limit: Int) {
  publicationsCount(catalogType: $catalogType, limit: $limit) {
    count
  }
}
```
