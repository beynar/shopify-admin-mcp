# Query: `collectionsCount`

**Returns:** `Count`

Count of collections. Limited to a maximum of 10000 by default.

## Arguments

- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | collection_type | string | | - `custom`<br/> - `smart` | | handle | string | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | product_id | id | Filter by collections containing a product by its ID. | | product_publication_status | string | Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead. | - `* {channel_app_id}-approved`<br/> - `* {channel_app_id}-rejected`<br/> - `* {channel_app_id}-needs_action`<br/> - `* {channel_app_id}-awaiting_review`<br/> - `* {channel_app_id}-published`<br/> - `* {channel_app_id}-demoted`<br/> - `* {channel_app_id}-scheduled`<br/> - `* {channel_app_id}-provisionally_published` | | - `product_publication_status:189769876-approved` | | publishable_status | string | **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values. | - `* {channel_app_id}-unset`<br/> - `* {channel_app_id}-pending`<br/> - `* {channel_app_id}-approved`<br/> - `* {channel_app_id}-not_approved` | | - `publishable_status:580111-unset`<br/> - `publishable_status:580111-pending` | | published_at | time | Filter by the date and time when the collection was published to the Online Store. | | published_status | string | Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using a channel ID, channel handle, [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`), or app handle with suffixes: - `{id_or_handle}-published`: Returns resources published to the specified channel. - `{id_or_handle}-visible`: Same as `{id_or_handle}-published` (kept for backwards compatibility). - `{id_or_handle}-intended`: Returns resources added to the channel but not yet published. - `{id_or_handle}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel. | - `online_store_channel`<br/> - `published`<br/> - `visible`<br/> - `unpublished`<br/> - `* {channel_id_or_handle}-published`<br/> - `* {channel_id_or_handle}-visible`<br/> - `* {channel_id_or_handle}-intended`<br/> - `* {channel_id_or_handle}-hidden`<br/> - `* {channel_app_id_or_handle}-published`<br/> - `* {channel_app_id_or_handle}-visible`<br/> - `* {channel_app_id_or_handle}-intended`<br/> - `* {channel_app_id_or_handle}-hidden`<br/> - `unavailable` | | - `published_status:online_store_channel`<br/> - `published_status:published`<br/> - `published_status:580111-published`<br/> - `published_status:580111-hidden`<br/> - `published_status:my-channel-handle-published`<br/> - `published_status:unavailable` | | title | string | | updated_at | time | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
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
query CollectionsCount($query: String, $savedSearchId: ID, $limit: Int) {
  collectionsCount(query: $query, savedSearchId: $savedSearchId, limit: $limit) {
    count
  }
}
```
