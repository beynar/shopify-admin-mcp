# Input Object: `PageCreateInput`

The input fields to create a page.

## Input Fields

- `handle`: `String` — A unique, human-friendly string for the page. If no handle is specified, a handle will be generated automatically from the page title.
- `body`: `String` — The text content of the page, complete with HTML markup.
- `isPublished`: `Boolean` — Whether or not the page should be visible. Defaults to `true` if no publish date is specified.
- `publishDate`: `DateTime` — The date and time (ISO 8601 format) when the page should become visible.
- `templateSuffix`: `String` — The suffix of the template that's used to render the page.
- `metafields`: `[MetafieldInput!]` — The input fields to create or update a metafield.
- `title`: `String!` — The title of the page.

## Related Types

- [MetafieldInput](../../types/inputs/MetafieldInput.md)
