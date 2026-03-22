# Query: `publishedProductsCount`

**Returns:** `Count`

Returns a count of published products by publication ID. Limited to a maximum of 10000 by default.

## Arguments

- **`publicationId`**: `ID!` — The ID of the publication that the products are published to.
- **`limit`**: `Int` = `10000` — The maximum number of products to count.

## Return Type Fields

- `count`: `Int!` — The count of elements.
- `precision`: `CountPrecision!` — The count's precision, or the exactness of the value.

## Related Types

- [Count](../types/objects/Count.md)
- [CountPrecision](../types/enums/CountPrecision.md)

## Example Query

```graphql
query PublishedProductsCount($publicationId: ID!, $limit: Int) {
  publishedProductsCount(publicationId: $publicationId, limit: $limit) {
    count
  }
}
```
