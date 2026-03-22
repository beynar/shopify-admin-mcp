# Query: `page`

**Returns:** `Page`

Returns a `Page` resource by ID.

## Arguments

- **`id`**: `ID!` — The ID of the `Page` to return.

## Return Type Fields

- `body`: `HTML!` — The text content of the page, complete with HTML markup.
- `bodySummary`: `String!` — The first 150 characters of the page body. If the page body contains more than 150 characters, additional characters are truncated by ellipses.
- `createdAt`: `DateTime!` — The date and time (ISO 8601 format) of the page creation.
- `defaultCursor`: `String!` — A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.
- `events`: `EventConnection!` — The paginated list of events associated with the host subject.
- `handle`: `String!` — A unique, human-friendly string for the page.
- `id`: `ID!` — A globally-unique ID.
- `isPublished`: `Boolean!` — Whether or not the page is visible.
- `metafield`: `Metafield` — A [custom field](https://shopify.dev/docs/apps/build/custom-data),
- `metafields`: `MetafieldConnection!` — A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data)
- `publishedAt`: `DateTime` — The date and time (ISO 8601 format) when the page became or will become visible.
- `templateSuffix`: `String` — The suffix of the template that's used to render the page.
- `title`: `String!` — Title of the page.
- `translations`: `[Translation!]!` — The published translations associated with the resource.
- `updatedAt`: `DateTime!` — The date and time (ISO 8601 format) of the latest page update.

## Related Types

- [Metafield](../types/objects/Metafield.md)
- [Page](../types/objects/Page.md)
- [Translation](../types/objects/Translation.md)

## Example Query

```graphql
query Page($id: ID!) {
  page(id: $id) {
    id
    body
    bodySummary
    createdAt
    defaultCursor
    handle
  }
}
```
