# Query: `articles`

**Returns:** `ArticleConnection!`

Returns a paginated list of articles from the shop's blogs. [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article) objects are blog posts that contain content like text, images, and tags.

Supports [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to control the number of articles returned and their order. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-query) argument to filter results by specific criteria.

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `ArticleSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=handle:summer-collection-announcement` | | author | string | Filter by the author of the article. | | blog_id | string | Filter by the ID of the blog the article belongs to. | | | - `blog_id:1234`<br/> - `blog_id:>=1234`<br/> - `blog_id:<=1234` | | blog_title | string | | created_at | time | Filter by the date and time when the article was created. | | | - `created_at:>'2020-10-21T23:39:20Z'`<br/> - `created_at:<now`<br/> - `created_at:<=2024` | | handle | string | Filter by the article's handle. | | | - `handle:summer-collection-announcement`<br/> - `handle:how-to-guide` | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | published_at | time | Filter by the date and time when the article was published. | | | - `published_at:>'2020-10-21T23:39:20Z'`<br/> - `published_at:<now`<br/> - `published_at:<=2024` | | published_status | string | Filter by published status | | tag | string | Filter objects by the `tag` field. | | | - `tag:my_tag` | | tag_not | string | Filter by objects that don’t have the specified tag. | | | - `tag_not:my_tag` | | title | string | Filter by the title of the article. | | | - `title:summer-collection`<br/> - `title:green hoodie` | | updated_at | time | Filter by the date and time when the article was last updated. | | | - `updated_at:>'2020-10-21T23:39:20Z'`<br/> - `updated_at:<now`<br/> - `updated_at:<=2024` | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

## Return Type Fields

- `edges`: `[ArticleEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[Article!]!` — A list of nodes that are contained in ArticleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [Article](../types/objects/Article.md)
- [ArticleSortKeys](../types/enums/ArticleSortKeys.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query Articles($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: ArticleSortKeys, $query: String) {
  articles(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query) {
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
