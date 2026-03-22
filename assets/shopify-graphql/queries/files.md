# Query: `files`

**Returns:** `FileConnection!`

Retrieves a paginated list of files that have been uploaded to a Shopify store. Files represent digital assets
that merchants can upload to their store for various purposes including product images, marketing materials,
documents, and brand assets.

Use the `files` query to retrieve information associated with the following workflows:

- [Managing product media and images](https://shopify.dev/docs/apps/build/online-store/product-media)
- [Theme development and asset management](https://shopify.dev/docs/storefronts/themes/store/success/brand-assets)
- Brand asset management and [checkout branding](https://shopify.dev/docs/apps/build/checkout/styling/add-favicon)

Files can include multiple [content types](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileContentType),
such as images, videos, 3D models, and generic files. Each file has
properties like dimensions, file size, alt text for accessibility, and upload status. Files can be filtered
by [media type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType) and can be associated with
[products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product),
[themes](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme),
and other store resources.

## Arguments

- **`first`**: `Int` — The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`after`**: `String` — The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`last`**: `Int` — The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).
- **`before`**: `String` — The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).
- **`reverse`**: `Boolean` = `false` — Reverse the order of the underlying list.
- **`sortKey`**: `FileSortKeys` = `ID` — Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).
- **`query`**: `String` — A filter made up of terms, connectives, modifiers, and comparators. | name | type | description | acceptable_values | default_value | example_use | | ---- | ---- | ---- | ---- | ---- | ---- | | default | string | Filter by a case-insensitive search of multiple fields in a document. | | | - `query=Bob Norman`<br/> - `query=title:green hoodie` | | created_at | time | | filename | string | | id | id | Filter by `id` range. | | | - `id:1234`<br/> - `id:>=1234`<br/> - `id:<=1234` | | ids | string | | media_type | string | | original_upload_size | float | | product_id | string | | status | string | | updated_at | time | | used_in | string | You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).
- **`savedSearchId`**: `ID` — The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

## Return Type Fields

- `edges`: `[FileEdge!]!` — The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.
- `nodes`: `[File!]!` — A list of nodes that are contained in FileEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.
- `pageInfo`: `PageInfo!` — An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

## Related Types

- [File](../types/interfaces/File.md)
- [FileSortKeys](../types/enums/FileSortKeys.md)
- [PageInfo](../types/objects/PageInfo.md)

## Example Query

```graphql
query Files($first: Int, $after: String, $last: Int, $before: String, $reverse: Boolean, $sortKey: FileSortKeys, $query: String, $savedSearchId: ID) {
  files(first: $first, after: $after, last: $last, before: $before, reverse: $reverse, sortKey: $sortKey, query: $query, savedSearchId: $savedSearchId) {
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
