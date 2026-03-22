# Query: `articleTags`

**Returns:** `[String!]!`

List of all article tags.

## Arguments

- **`sort`**: `ArticleTagSort` = `ALPHABETICAL` — Type of sort order.
- **`limit`**: `Int!` — The maximum number of tags to return.

## Related Types

- [ArticleTagSort](../types/enums/ArticleTagSort.md)

## Example Query

```graphql
query ArticleTags($sort: ArticleTagSort, $limit: Int!) {
  articleTags(sort: $sort, limit: $limit) {
  }
}
```
