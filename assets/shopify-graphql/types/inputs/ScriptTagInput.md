# Input Object: `ScriptTagInput`

The input fields for a script tag. This input object is used when creating or updating
a script tag to specify its URL, where it should be included, and how it will be cached.

## Input Fields

- `src`: `URL` — The URL of the remote script. For example: `https://example.com/path/to/script.js`.
- `displayScope`: `ScriptTagDisplayScope` — The page or pages on the online store where the script should be included.
- `cache`: `Boolean` = `false` — Whether the Shopify CDN can cache and serve the script tag.

## Related Types

- [ScriptTagDisplayScope](../../types/enums/ScriptTagDisplayScope.md)
