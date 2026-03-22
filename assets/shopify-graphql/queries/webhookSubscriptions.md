# Query: `webhookSubscriptions`

**Returns:** `WebhookSubscriptionConnection!`

Retrieves a paginated list of webhook subscriptions created using the API for the current app and shop.

> Note: Returns only shop-scoped subscriptions, not app-scoped subscriptions configured in TOML files.

Subscription details include event topics, endpoint URIs, filtering rules, field inclusion settings, and metafield namespace permissions. Results support cursor-based pagination that you can filter by topic, format, or custom search criteria.


Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `WebhookSubscriptionSortKeys` = `CREATED_AT` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | created_at | time | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | updated_at | time | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
- **`uri`**: `String` — URI to filter by. Supports an HTTPS URL, a Google Pub/Sub URI (pubsub://{project-id}:{topic-id}) or an Amazon EventBridge event source ARN.
- **`format`**: `WebhookSubscriptionFormat` — Response format to filter by.
- **`topics`**: `[WebhookSubscriptionTopic!]` — List of webhook subscription topics to filter by.

## Return Type Fields

- `edges`: `[WebhookSubscriptionEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[WebhookSubscription!]!` — A list of nodes that are contained in WebhookSubscriptionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [PageInfo](../types/objects/PageInfo.md)
- [WebhookSubscription](../types/objects/WebhookSubscription.md)
- [WebhookSubscriptionFormat](../types/enums/WebhookSubscriptionFormat.md)
- [WebhookSubscriptionSortKeys](../types/enums/WebhookSubscriptionSortKeys.md)
- [WebhookSubscriptionTopic](../types/enums/WebhookSubscriptionTopic.md)

## Example Query

```graphql
query WebhookSubscriptions($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: WebhookSubscriptionSortKeys, $query: String, $uri: String, $format: WebhookSubscriptionFormat, $topics: [WebhookSubscriptionTopic!]) {
  webhookSubscriptions(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query, uri: $uri, format: $format, topics: $topics) {
    nodes {
      id
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```
