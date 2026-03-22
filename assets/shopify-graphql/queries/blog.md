# Query: `blog`

**Returns:** `Blog`

Returns a `Blog` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `Blog` to return.

## Return Type Fields

- `articles`: `ArticleConnection!` — List of the blog's articles.
- `articlesCount`: `Count` — Count of articles. Limited to a maximum of 10000 by default.
- `commentPolicy`: `CommentPolicy!` — Indicates whether readers can post comments to the blog and if comments are moderated or not.
- `createdAt`: `DateTime!` — The date and time when the blog was created.
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `feed`: `BlogFeed` — FeedBurner provider details. Any blogs that aren't already integrated with FeedBurner can't use the service.
- `handle`: `String!` — A unique, human-friendly string for the blog. If no handle is specified, a handle will be generated automatically from the blog title.
- `id`: `ID!` — A globally-unique ID.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `tags`: `[String!]!` — A list of tags associated with the 200 most recent blog articles.
- `templateSuffix`: `String` — The name of the template a blog is using if it's using an alternate template.
- `title`: `String!` — The title of the blog.
- `translations`: `[Translation!]!` — The published translations associated with the resource.
- `updatedAt`: `DateTime` — The date and time when the blog was update.

## Related Types

- [Blog](../types/objects/Blog.md)
- [BlogFeed](../types/objects/BlogFeed.md)
- [CommentPolicy](../types/enums/CommentPolicy.md)
- [Count](../types/objects/Count.md)
- [Metafield](../types/objects/Metafield.md)
- [Translation](../types/objects/Translation.md)

## Example Query

```graphql
query Blog($id: ID!) {
  blog(id: $id) {
    createdAt
    handle
    tags
    templateSuffix
  }
}
```
