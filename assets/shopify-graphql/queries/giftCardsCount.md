# Query: `giftCardsCount`

**Returns:** `Count`

The total number of gift cards issued for the shop. Limited to a maximum of 10000 by default.

## Arguments

- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document, including gift card codes. | | | - `query=a5bh6h64b329j4k7`<br/> - `query=Bob Norman` | | balance_status | string | | - `full`<br/> - `partial`<br/> - `empty`<br/> - `full_or_partial` | | - `balance_status:full` | | created_at | time | | | | - `created_at:>=2020-01-01T12:00:00Z` | | expires_on | date | | | | - `expires_on:>=2020-01-01` | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | initial_value | string | | | | - `initial_value:>=100` | | source | string | | - `manual`<br/> - `purchased`<br/> - `api_client` | | - `source:manual` | | status | string | | - `disabled`<br/> - `enabled`<br/> - `expired`<br/> - `expiring` | | - `status:disabled OR status:expired` | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
- **`savedSearchId`**: `ID` — The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.
- **`limit`**: `Int` = `10000` — The upper bound on count value before returning a result. Use `null` to have no limit.

## Return Type Fields

- `count`: `Int!` — The count of elements.
- `precision`: `CountPrecision!` — The count's precision, or the exactness of the value.

## Related Types

- [Count](../types/objects/Count.md)
- [CountPrecision](../types/enums/CountPrecision.md)

## Example Query

```graphql
query GiftCardsCount($query: String, $savedSearchId: ID, $limit: Int) {
  giftCardsCount(query: $query, savedSearchId: $savedSearchId, limit: $limit) {
    count
  }
}
```
