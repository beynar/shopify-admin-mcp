# Query: `eventsCount`

**Returns:** `Count`

Count of events. Limited to a maximum of 10000.

## Arguments

- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | action | string | The action that occured. | | | - `action:create` | | comments | boolean | Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events. | | | - `false`<br/> - `true` | | created_at | time | Filter by the date and time when the event occurred. Event data is retained for 1 year. | | | - `created_at:>2025-10-21`<br/> - `created_at:<now` | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | subject_type | string | The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values. | | | - `PRODUCT_VARIANT`<br/> - `PRODUCT`<br/> - `COLLECTION` | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

## Return Type Fields

- `count`: `Int!` — The count of elements.
- `precision`: `CountPrecision!` — The count's precision, or the exactness of the value.

## Related Types

- [Count](../types/objects/Count.md)
- [CountPrecision](../types/enums/CountPrecision.md)

## Example Query

```graphql
query EventsCount($query: String) {
  eventsCount(query: $query) {
    count
  }
}
```
