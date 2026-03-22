# Query: `productFeed`

**Returns:** `ProductFeed`

Returns a ProductFeed resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the ProductFeed to return.

## Return Type Fields

- `country`: `CountryCode` — The country of the product feed.
- `id`: `ID!` — A globally-unique ID.
- `language`: `LanguageCode` — The language of the product feed.
- `status`: `ProductFeedStatus!` — The status of the product feed.

## Related Types

- [CountryCode](../types/enums/CountryCode.md)
- [LanguageCode](../types/enums/LanguageCode.md)
- [ProductFeed](../types/objects/ProductFeed.md)
- [ProductFeedStatus](../types/enums/ProductFeedStatus.md)

## Example Query

```graphql
query ProductFeed($id: ID!) {
  productFeed(id: $id) {
  }
}
```
